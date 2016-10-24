package org.iotlabs.dashboard.blueprints;

import org.iotlabs.storage.models.general.User;
import org.iotlabs.storage.util.StringUtils;
import org.iotlabs.dashboard.httpexceptions.Http4xx;
import org.iotlabs.dashboard.literals.ContentType;
import org.iotlabs.dashboard.utils.Checker;
import org.iotlabs.dashboard.utils.ResponseSetter;
import spark.ModelAndView;
import spark.template.mustache.MustacheTemplateEngine;

import java.util.HashMap;
import java.util.Map;

import static org.iotlabs.dashboard.blueprints.Complex.complex;

public class AuthBluePrint extends AbstractBluePrint {


    public AuthBluePrint() {
        super("auth");
    }

    @Override
    public void register() {
        complex(getEndPoint("login"))
                .get(
                        (req, res) -> {
                            Map<String, Object> scopes = new HashMap<>();
                            scopes.put("title", "IotLabs");
                            scopes.put("admin_mail", "toori67@gmail.com");
                            return new ModelAndView(scopes,"login.html");
                        }, new MustacheTemplateEngine(getTemplatePath())
                )
                .post((req, res) -> {
                    String username = req.queryParams("username");
                    String passwd = StringUtils.sha256(req.queryParams("password"));
                    User user = Checker.authenticate(username, passwd);
                    if (user == null) {
                        req.session().removeAttribute("auth");
                        ResponseSetter.setErrorResponse(res, new Http4xx(404, "not authorized"));
                        return res.body();
                    } else {
                        if (Checker.isRequestingHtml(req)) {
                            res.redirect("/");
                        }
                        req.session().attribute("auth", true);
                        res.type(ContentType.JSON);
                        res.body(user.toJsonString());
                        res.status(200);
                        return res.body();
                    }
                });
    }
}
