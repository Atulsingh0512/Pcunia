package com.example.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dao.AccountRepository;
import com.example.dao.CreditRepository;
import com.example.dao.TransactionRepository;
import com.example.dao.UserRepository;
import com.example.exception.AccountNotFoundException;
import com.example.exception.IncorrectPinException;
import com.example.exception.InsufficientFundsException;
import com.example.exception.ReceiverNotFoundException;
import com.example.exception.WrongInputException;
import com.example.model.Account;
import com.example.model.CreditModel;
import com.example.model.TransactionModel;
import com.example.model.User;

@Service
public class TransactionService {
	@Autowired
	private TransactionRepository transRepository;
	@Autowired
	private CreditRepository creditRepository;
	
	@Autowired
	private AccountRepository accountRepository;
	
	@Autowired
	private AccountService accountService;
	
	@Autowired
	private UserRepository userRepository;

	public TransactionModel debitTrans(TransactionModel t) throws Exception {
		System.out.println("create transaction in service........");
		
		Account acc=accountRepository.findById(t.getAccountId()).orElse(null);
	    User u=userRepository.findByUsername(t.getReceiverAccount());
	    Account receiver=accountService.findUser(u);
	    System.out.println("service:"+u);
	    System.out.println("acc:"+acc);
	    if(u!=null)
		{
	       if(acc!=null)
	       {
	    	   System.out.println(acc.getPin()+" "+t.getPin());
	    	   if(acc.getPin()==(t.getPin()))
	    	   {
	    	   if (t.getTransferAmount() <= 0) {
	    		      // Handle invalid withdrawal amount
	    		      throw new WrongInputException("Invalid withdrawal amount");
	    		    }
	    		    //Account account = t.getAccount();

	    		    if (acc.getBalance() < t.getTransferAmount()) {
	    		      // Handle insufficient balance
	    		      throw new InsufficientFundsException("Insufficient balance");
	    		    }

	    		    // Update account balance
	    		    long newBalance = acc.getBalance() - t.getTransferAmount();

	    		    acc.setBalance(newBalance);
	    		    acc.getTransaction().add(t);
	    		    long nb=receiver.getBalance()+t.getTransferAmount();
	    		    receiver.setBalance(nb);

	    		    accountRepository.save(acc);
	    		    accountRepository.save(receiver);
	    		    // Save the transaction

	    		    return transRepository.save(t);
	    	   }
	    	   else
	    	   {
	    		   throw new IncorrectPinException("Wrong Pin Entered");
	    	   }
	       }
	       else
	       {
	    	   throw new AccountNotFoundException("account must be created first");
	       }
		}
	    else 
	    {
	    	throw new ReceiverNotFoundException("Receiver doesn't exist");
	    }
	}
	public CreditModel creditTrans(CreditModel t) throws Exception {
		System.out.println("create credit in service........");
		
		Account acc=accountRepository.findById(t.getAccountId()).orElse(null);
	       if(acc!=null)
	       {
	    	   if (t.getAmount() <= 0) {
	    		      // Handle invalid withdrawal amount
	    		      throw new WrongInputException("Invalid deposit amount");
	    		    }
	    		    //Account account = t.getAccount();


	    		    // Update account balance
	    		    long newBalance = acc.getBalance() + t.getAmount();

	    		    acc.setBalance(newBalance);
	    		    acc.getTrans().add(t);
	    		    accountRepository.save(acc);
	    		   
	    		    // Save the transaction

	    		    return creditRepository.save(t);
	       }
	       else
	       {
	    	   throw new AccountNotFoundException("account must be created first");
	       }
		}
	   
	
}
