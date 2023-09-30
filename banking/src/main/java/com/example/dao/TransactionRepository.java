package com.example.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Account;
import com.example.model.TransactionModel;
import com.example.model.User;

@Repository
public interface TransactionRepository extends JpaRepository<TransactionModel,Integer>{
	TransactionModel findById(int id);

	
}
