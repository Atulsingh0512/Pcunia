package com.example.contrtoller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.exception.AccountNotFoundException;
import com.example.exception.IncorrectPinException;
import com.example.exception.InsufficientFundsException;
import com.example.exception.ReceiverNotFoundException;
import com.example.exception.WrongInputException;
import com.example.model.Account;
import com.example.model.CreditModel;
import com.example.model.TransactionModel;
import com.example.model.User;
import com.example.service.AccountService;
import com.example.service.TransactionService;
import com.example.service.UserService;


@RestController
@CrossOrigin("http://localhost:4200")

@RequestMapping("/api/users")
public class TransactionController {
	
	@Autowired
	private TransactionService transService;
	
	@Autowired
	private UserService userService;
	
	 @PostMapping("/transaction/debit/{username}")
	 public ResponseEntity<TransactionModel> createTransaction(@RequestBody TransactionModel t,@PathVariable("username") String uname) throws Exception {
   	   System.out.println("Create account called");
       User u=userService.findByUsername(uname);
       System.out.println("chk"+u);
       try {
       	System.out.println(t.getAccountId());
       	
           return new ResponseEntity<>(transService.debitTrans(t), HttpStatus.OK);
       } catch (AccountNotFoundException | InsufficientFundsException |ReceiverNotFoundException|WrongInputException e) {
    	   return new ResponseEntity(e.getMessage(),HttpStatus.NOT_FOUND);
       }
        
     }
	 @PostMapping("/transaction/credit/{username}")
	 public ResponseEntity<CreditModel> createTransaction(@RequestBody CreditModel t,@PathVariable("username") String uname) throws Exception {
   	   System.out.println("Create account called");
       User u=userService.findByUsername(uname);
       System.out.println("chk"+u);
       try {
       	System.out.println(t.getAccountId());
       	
           return new ResponseEntity<>(transService.creditTrans(t), HttpStatus.OK);
       } catch (AccountNotFoundException | InsufficientFundsException |ReceiverNotFoundException|WrongInputException|
    		   IncorrectPinException e) {
    	   return new ResponseEntity(e.getMessage(),HttpStatus.NOT_FOUND);
       }
        
     }
	 @GetMapping("transaction/debit/{username}")
	 public ResponseEntity<List<TransactionModel>> getTransDetail(@PathVariable String username)
	 {
	    System.out.println("get user-home"+username);
	    User u=userService.findByUsername(username);
	    
	    if(u!=null)
	    {
	    	Account acc=u.getAccount();
	    	System.out.println(acc.getAccId());
	    	List<TransactionModel> li=acc.getTransaction();
	    	return ResponseEntity.ok(li);
	    }
	    else
	    	return ResponseEntity.notFound().build();
	 }
	 @GetMapping("transaction/credit/{username}")
	 public ResponseEntity<List<CreditModel>> getCreditDetail(@PathVariable String username)
	 {
	    System.out.println("get user-home"+username);
	    User u=userService.findByUsername(username);
	    
	    if(u!=null)
	    {
	    	Account acc=u.getAccount();
	    	System.out.println(acc.getAccId());
	    	List<CreditModel> li=acc.getTrans();
	    	return ResponseEntity.ok(li);
	    }
	    else
	    	return ResponseEntity.notFound().build();
	 }
}
	