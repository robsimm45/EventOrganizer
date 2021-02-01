package com.github.robsimm45.EventManager.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.github.robsimm45.EventManager.models.User;
import com.github.robsimm45.EventManager.services.UserService;

@RestController
@RequestMapping(value = "user")
public class UserController{
	@Autowired
	private UserService userService;
	
	@GetMapping
	public List<User> getAllUsers(){
		return userService.findAll();
	}
	
	@GetMapping("{id}")
	public User findUserById(@PathVariable int id) {
		return userService.findById(id);
	}
}