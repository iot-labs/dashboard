package org.iotlabs.dashboard.httpexceptions;

public class Http5xx extends BaseHttpException {

    public Http5xx(int code, String body) {
        super(code, body);
    }

}
