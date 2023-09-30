package com.example.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.model.CreditModel;

public interface CreditRepository extends JpaRepository<CreditModel,Integer>{

}
