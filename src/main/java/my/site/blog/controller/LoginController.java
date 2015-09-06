package my.site.blog.controller;

import my.site.blog.model.User;
import my.site.blog.object.LoginObject;
import my.site.blog.repo.UserCrud;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class LoginController {

    @Autowired
    private UserCrud userCrud;

    @RequestMapping(value = "/login" , method = RequestMethod.POST)
    public ResponseEntity<String> login(@RequestBody LoginObject user){

        String username = user.getUsername() , password = user.getPassword();

        System.out.println(username + " " + password);
        User usr = userCrud.findOne(username);

        if(usr == null)
            return new ResponseEntity<String>("ACCEPTED" , HttpStatus.ACCEPTED);

        if(usr.getPassword().equals(password))
            return new ResponseEntity<String>("password is wrong" , HttpStatus.NO_CONTENT);

        return new ResponseEntity<String>("user is not found" , HttpStatus.NOT_FOUND);
    }

}
