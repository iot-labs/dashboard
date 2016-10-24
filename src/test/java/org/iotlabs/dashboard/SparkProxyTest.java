package org.iotlabs.dashboard;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.iotlabs.dashboard.blueprints.TestBluePrint;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import spark.Spark;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import static org.junit.Assert.assertEquals;

public class SparkProxyTest {
    private static Logger logger = LogManager.getLogger(SparkProxyTest.class);


    @BeforeClass
    public static void beforeClass() {
        SparkProxy.getInstance().run();
        SparkProxy.getInstance().register(new TestBluePrint());
    }

    @AfterClass
    public static void afterClass() {
        Spark.stop();
    }

    @Test
    public void requestTest() throws Exception {
        waitForInit();
        URL ok200Url = new URL("http://127.0.0.1:4567/test/");
        URL notFound404Url = new URL("http://127.0.0.1:4567/notfound/");
        httpExec(ok200Url, 200, "test");
        httpExec(notFound404Url, 404, null);
    }

    private void waitForInit() {
        Spark.awaitInitialization();
    }

    private void httpExec(URL targetUrl, int expectedHttpCode, String expectedResponse) throws Exception {
        HttpURLConnection httpURLConnection = (HttpURLConnection) targetUrl.openConnection();
        httpURLConnection.setRequestMethod("GET");
        int respCode = httpURLConnection.getResponseCode();
        assertEquals(expectedHttpCode, respCode);

        // does not check response body with http code 4xx
        if ((expectedHttpCode/100) == 4) {
            return;
        }

        // check response body
        BufferedReader in = new BufferedReader(new InputStreamReader(httpURLConnection.getInputStream()));
        String responseBodyText;
        StringBuffer buffer = new StringBuffer();
        while ((responseBodyText = in.readLine()) != null) {
            buffer.append(responseBodyText);
        }
        in.close();
        assertEquals(expectedResponse, buffer.toString());
    }
}