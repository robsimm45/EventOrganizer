package com.github.robsimm45.EventManager.services;

import java.util.List;

import com.github.robsimm45.EventManager.models.Users;

public interface UserService {
	
	List<Users> findAll();
	
	Users findById(int id);
}