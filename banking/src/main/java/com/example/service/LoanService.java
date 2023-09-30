package com.example.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

//import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.stereotype.Service;

import com.example.dao.LoanRepository;

import com.example.model.Loan;

import com.example.response.LoginMessage;

@Service

public class LoanService {

 @Autowired

  private LoanRepository loanRepository;

// @Autowired

// private PasswordEncoder passwordEncoder;

  public Loan createLoan(Loan loan) {

   System.out.println("Loan is called in service...............");

    // Implement registration logic

   if (loanRepository.findByloanId(loan.getLoanId()) != null) {

      throw new RuntimeException("loan already exists");

    }

    // Encode the password before saving

    // user.setPassword(passwordEncoder.encode(user.getPassword()));

    return loanRepository.save(loan);

  }

  public Loan findByloanId(int loanId) {

    return loanRepository.findByloanId(loanId);

  }

}
