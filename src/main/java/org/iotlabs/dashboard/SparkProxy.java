package org.iotlabs.dashboard;

import org.iotlabs.dashboard.blueprints.AbstractBluePrint;
import org.iotlabs.dashboard.blueprints.AuthBluePrint;
import org.iotlabs.dashboard.blueprints.RootBluePrint;

public class SparkProxy {
    private static class Holder {
        private static final SparkProxy SPARK_PROXY = new SparkProxy();
    }

    public static SparkProxy getInstance() {
        return Holder.SPARK_PROXY;
    }

    private SparkProxy() {
        new SparkInit();
    }

    public void run() {
        registerRouters();
    }

    /**
     * register default setted routers.
     */
    private void registerRouters() {
        new AuthBluePrint().register();
        new RootBluePrint().register();
    }

    /**
     * register blueprint implementations
     * @param bluePrint router blueprint
     */
    public void register(AbstractBluePrint bluePrint) {
        bluePrint.register();
    }
}
