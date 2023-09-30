package com.example.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Account;
import com.example.model.User;



	@Repository
	public interface AccountRepository extends JpaRepository<Account,Integer> {
		
		  Account findByEmail(String email);

		  Account findByUser(User user);

	



}
