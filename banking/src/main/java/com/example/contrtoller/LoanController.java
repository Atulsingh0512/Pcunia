package com.example.contrtoller;

import java.util.List;

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

import org.springframework.web.bind.annotation.RestController;

import com.example.model.Account;
import com.example.model.Loan;
import com.example.model.TransactionModel;
import com.example.model.User;
import com.example.service.LoanService;
import com.example.service.UserService;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/users/loan")
public class LoanController {

  @Autowired
  private LoanService loanService;
  
  @Autowired
  private UserService userService;

  @PostMapping("/loanrequest")
  public ResponseEntity<Loan> registerLoan(@RequestBody Loan loan) {

   System.out.println("Loan Request called");

    try {

      return new ResponseEntity<>(loanService.createLoan(loan),HttpStatus.CREATED);

    } catch (RuntimeException e) {

      return new ResponseEntity(e.getMessage(),HttpStatus.NOT_FOUND);

    }

  }
  @GetMapping("loan/{username}")
	 public ResponseEntity<List<Loan>> getTransDetail(@PathVariable String username)
	 {
	    System.out.println("get user-home"+username);
	    User u=userService.findByUsername(username);
	    
	    if(u!=null)
	    {
	    	Account acc=u.getAccount();
	    	System.out.println(acc.getAccId());
	    	List<Loan> li=acc.getLoan();
	    	return ResponseEntity.ok(li);
	    }
	    else
	    	return ResponseEntity.notFound().build();
	 }

}
