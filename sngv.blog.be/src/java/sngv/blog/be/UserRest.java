package sngv.blog.be;

import org.springframework.stereotype.Component;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

@Component
@Path("/user")
public class UserRest {

    @GET
    public String getUserCreditntion() {
        return "HELLO AHMED";
    }
}
