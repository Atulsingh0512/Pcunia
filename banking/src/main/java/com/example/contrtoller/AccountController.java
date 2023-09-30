package com.example.contrtoller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.model.Account;
import com.example.model.User;
import com.example.service.AccountService;
import com.example.service.UserService;
import com.example.util.FileUploadUtil;

@RestController
@CrossOrigin("http://localhost:4200")

@RequestMapping("/api/users")
public class AccountController {
	
	@Autowired
	private AccountService accountService;
	
	@Autowired
	private UserService userService;
	
	
	// Replace with your desired upload folder path
    private static final String UPLOAD_FOLDER = "";
    
	@PostMapping("/accounts/createaccount/{username}")
	 public ResponseEntity<Account> createAccount(@RequestBody Account account,@PathVariable("username") String uname) throws IOException {
    	System.out.println("Create account called");
        User u=userService.findByUsername(uname);
        System.out.println("chk"+u);
        try {
//        	
        	System.out.println(account);
            return new ResponseEntity<>(accountService.createAccount(account,u),HttpStatus.CREATED);
        } catch (RuntimeException e) {
            return new ResponseEntity(e.getMessage(),HttpStatus.NOT_FOUND);
        }
    }
	private void saveFile(MultipartFile file,String directory) throws IOException
	{
		Path filePath=Paths.get(directory,file.getOriginalFilename().toString());
		Files.copy(file.getInputStream(),filePath);
	}
	
    @GetMapping("/accounts/{username}")
	public ResponseEntity<Account> getAccData(@PathVariable("username") String username) throws Exception
	{
		System.out.println("username:"+username);
		User u=userService.findByUsername(username);
		System.out.println("get called"+u.getId());
		if(u==null)
			throw new Exception("User not found");
		else
		{
		Account acc=u.getAccount();
		return ResponseEntity.ok(acc);
		}
	}
    @PutMapping("/accounts/update/{username}")
	public ResponseEntity<Account> updateData(@RequestBody Account account,@PathVariable("username") String uname) throws Exception
	{
    	System.out.println("update account called");
        User u=userService.findByUsername(uname);
        Account acc=u.getAccount();
        System.out.println("chk"+u);
        try {
//        	
        	System.out.println(account);
            return new ResponseEntity<>(accountService.updateAccount(account,acc),HttpStatus.CREATED);
        } catch (RuntimeException e) {
            return new ResponseEntity(e.getMessage(),HttpStatus.NOT_FOUND);
        }
	}
    @DeleteMapping("/accounts/delete/{username}")
	public ResponseEntity<String> updateData(@PathVariable("username") String uname) throws Exception
	{
    	try {
            accountService.deleteAccount(uname);
            return ResponseEntity.ok("deleted");
    	}catch(Exception e)
    	{
    		return new ResponseEntity(e.getMessage(),HttpStatus.NOT_FOUND);
    	}
       
	}
	

}
