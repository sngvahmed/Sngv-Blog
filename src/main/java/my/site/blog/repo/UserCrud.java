package my.site.blog.repo;

import my.site.blog.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Controller
public interface UserCrud extends CrudRepository<User, String> {
    public List<User> findByName(String name);
}
