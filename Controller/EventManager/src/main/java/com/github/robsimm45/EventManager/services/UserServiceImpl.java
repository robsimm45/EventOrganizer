package com.github.robsimm45.EventManager.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.robsimm45.EventManager.models.Users;
import com.github.robsimm45.EventManager.repos.UserRepo;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	public UserRepo userRepo;
	
	@Override
	public List<Users> findAll() {
		return userRepo.findAll();
	}

	@Override
	public Users findById(int id) {
		return userRepo.findById(id);
	}
	
}