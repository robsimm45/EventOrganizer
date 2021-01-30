package com.github.robsimm45.services;

import java.util.List;

import com.github.robsimm45.EventManager.models.User;

public interface UserService {
	
	List<User> findAll();
	
	User findById(int id);
}