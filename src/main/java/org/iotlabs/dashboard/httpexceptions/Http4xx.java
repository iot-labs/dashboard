package org.iotlabs.dashboard.httpexceptions;

public class Http4xx extends BaseHttpException {

    public Http4xx(int code, String body) {
        super(code, body);
    }

}
