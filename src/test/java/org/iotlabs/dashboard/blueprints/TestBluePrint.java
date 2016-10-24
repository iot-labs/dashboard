package org.iotlabs.dashboard.blueprints;

import com.google.gson.annotations.SerializedName;
import org.iotlabs.dashboard.transformer.JsonTransformer;

import static spark.Spark.get;

public class TestBluePrint extends AbstractBluePrint  {

    public TestBluePrint() {
        super("test");
    }

    @Override
    public void register() {
        get(getEndPoint("/"), (req, res)  -> "test");
        get(getEndPoint("json"), (req, res)-> {
            TestModel testModel = new TestModel();
            testModel.id = 1;
            testModel.user = "test";
            return testModel;
        }, new JsonTransformer());
    }

    private static class TestModel {
        @SerializedName("id")
        private int id;
        @SerializedName("user")
        private String user;
    }
}