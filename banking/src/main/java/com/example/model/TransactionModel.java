package com.example.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class TransactionModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int transId;
	private int accountId;
	private String username;
	private String dateTime;
	private long   transferAmount;
	private String receiverAccount;
	private String remarks;
	private int    pin;
    private long phone;
    
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="account_accId")
    private Account account;
    
}
