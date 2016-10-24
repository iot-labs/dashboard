package org.iotlabs.dashboard.blueprints;

import static spark.Spark.get;

public class RootBluePrint extends AbstractBluePrint {

    public RootBluePrint() {
        super("");
    }

    @Override
    public void register() {
        get("/", (req, res) -> "Welcome :)");
    }
}
