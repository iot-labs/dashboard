package org.iotlabs.dashboard.utils;

import org.iotlabs.dashboard.httpexceptions.BaseHttpException;
import org.iotlabs.dashboard.literals.ContentType;
import spark.Response;

public class ResponseSetter {
    public static void setErrorResponse(Response errorResponse, BaseHttpException e) {
        errorResponse.type(ContentType.HTML);
        errorResponse.status(e.getCode());
        errorResponse.body(e.getBody());
    }
}