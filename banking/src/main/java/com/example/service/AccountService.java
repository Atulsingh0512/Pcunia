package com.example.service;

import org.hibernate.internal.build.AllowSysOut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dao.AccountRepository;
import com.example.dao.UserRepository;
import com.example.exception.AccountNotFoundException;
import com.example.exception.UserNotFoundException;
import com.example.model.Account;
import com.example.model.User;

@Service
public class AccountService {

	@Autowired
	private AccountRepository accountRepository;
	@Autowired
	private UserRepository userRepository;

	public Account createAccount(Account account,User u) {
		System.out.println("create account in service........");

		if (accountRepository.findByEmail(account.getEmail()) != null) {
			throw new RuntimeException(" already exists");
		}
		else {
         account.setUser(u);
		return accountRepository.save(account);
		}
	}
	public Account updateAccount(Account account,Account acc) {
		System.out.println("update account in service........");

		if (accountRepository.findByEmail(account.getEmail()) != null) {
			throw new RuntimeException(" already exists");
		}
		else {
         acc.setAddress(account.getAddress());
         acc.setPhone(account.getPhone());
         acc.setName(account.getName());
		return accountRepository.save(acc);
		}
	}

	public Account findByEmail(String Email) {
		return accountRepository.findByEmail(Email);
	}

	public Account findUser(User u) {
		
		return accountRepository.findByUser(u);
	}
	public void deleteAccount(String uname) throws AccountNotFoundException, UserNotFoundException {
		// TODO Auto-generated method stub
        User u=userRepository.findByUsername(uname);
        
        if (u!=null) {
            
            Account account = u.getAccount();
            
            if (account != null) {
                // Remove the association between user and account
                u.setAccount(null);
                userRepository.save(u);
                
                // Delete the account
                accountRepository.delete(account);
            }
            else
            	throw new AccountNotFoundException("Account not found");
        }
        else
        {
        	throw new UserNotFoundException("User Not found");
        }
	}

}
