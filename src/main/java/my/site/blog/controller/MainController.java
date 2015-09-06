package my.site.blog.controller;

import my.site.blog.model.User;
import my.site.blog.repo.UserCrud;
import org.springframework.core.env.Environment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

//@PropertySource("WEB-INF/properties/user.properties")
@Controller
public class MainController {
    @Autowired
    UserCrud userCrud;

    @Autowired
    private Environment env;

	@RequestMapping(value = "/" , method = RequestMethod.GET)
	public String home(ModelMap model) {
//		if(userCrud.findOne("nasser") == null){
//            User usr = new User(env.getProperty("name") ,
//                    env.getProperty("password"),
//                    env.getProperty("email"),
//                    Integer.parseInt(env.getProperty("age")));
//            userCrud.save(usr);
//        }
        return "index.html";
	}

	@RequestMapping(value = "/login" , method = RequestMethod.GET)
	public String login(ModelMap model) {
		return "app/login/login.html";
	}
}