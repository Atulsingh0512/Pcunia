package com.example.exception;

public class UserNotFoundException extends Exception{
	public UserNotFoundException(String m)
	{
		super(m);
	}
}
