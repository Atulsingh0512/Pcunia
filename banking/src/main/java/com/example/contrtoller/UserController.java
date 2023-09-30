package com.example.contrtoller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.exception.UserAlreadyException;
import com.example.model.User;
import com.example.service.UserService;

@RestController
@CrossOrigin("http://localhost:4200")

@RequestMapping("/api/users")
public class UserController {
	
	@RequestMapping("/hi")
	public String hi() {
		return "hello";
	}
	
	 
	@Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user) {
    	System.out.println("register called");
        try {
            //User createdUser = userService.createUser(user);
//            return new ResponseEntity<>.status(HttpStatus.CREATED).body("User registered successfully");
            return new ResponseEntity<>(userService.createUser(user),HttpStatus.CREATED);
        } catch (UserAlreadyException e) {
            return new ResponseEntity(e.getMessage(),HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody User u) throws Exception {
       
            // You can implement the authentication logic here
            // For demonstration purposes, we'll assume successful login.
    	     String uname=u.getUsername();
    	    System.out.println(uname+" "+u.getPassword());
    	    User user=userService.findByUsername(uname);
        	if(user!=null)
        	{
        		if(user.getPassword().equals(u.getPassword()))
                return ResponseEntity.ok().body("{\"status\":\"success\",\"message\":\"Login Successful\"}");
        		else
        		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("{\"status\":\"error\",\"message\":\"Wrong password\"}");
        			
        	}
            else
            {
            	 return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("{\"status\":\"error\",\"message\":\"Username not found\"}");
            }
    }
    @GetMapping("/{username}")
    public ResponseEntity<User> getUserByUsername(@PathVariable String username)
    {
    	System.out.println("get user-home"+username);
    	User u=userService.findByUsername(username);
    	if(u!=null)
    	{
    		return ResponseEntity.ok(u);
    	}
    	else
    		return ResponseEntity.notFound().build();
    }
    
}
