package my.site.blog;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class Main {
	@RequestMapping(value = "/" , method = RequestMethod.GET)
	public String main(ModelMap model) {
		return "index.html";
	}
}