package com.github.robsimm45.EventManager.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.robsimm45.EventManager.models.User;
import com.github.robsimm45.EventManager.repos.UserRepo;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	public UserRepo userRepo;
	
	@Override
	public List<User> findAll() {
		return userRepo.findAll();
	}

	@Override
	public User findById(int id) {
		return userRepo.findById(id);
	}
	
}