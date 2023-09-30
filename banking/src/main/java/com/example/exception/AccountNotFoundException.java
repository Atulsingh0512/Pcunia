package com.example.exception;

public class AccountNotFoundException extends Exception{
	public AccountNotFoundException(String m)
	{
		super(m);
	}
}
