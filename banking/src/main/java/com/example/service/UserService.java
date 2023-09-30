package com.example.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.dao.AccountRepository;
import com.example.dao.UserRepository;
import com.example.exception.UserAlreadyException;
import com.example.model.Account;
import com.example.model.User;
import com.example.response.LoginMessage;

@Service
public class UserService {
    
	@Autowired
    private UserRepository userRepository;
	
	@Autowired
	private AccountRepository accountRepository;
	
//	 @Autowired
//	    private PasswordEncoder passwordEncoder;

    public User createUser(User user) throws UserAlreadyException {
    	System.out.println("create user called in service...............");
        // Implement registration logic
    	if (userRepository.findByUsername(user.getUsername()) != null) {
            throw new UserAlreadyException("Username already exists");
        }

        // Encode the password before saving
       // user.setPassword(passwordEncoder.encode(user.getPassword()));

        return userRepository.save(user);
    }

    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }
    

}