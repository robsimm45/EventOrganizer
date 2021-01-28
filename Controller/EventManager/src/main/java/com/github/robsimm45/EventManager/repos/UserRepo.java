package com.github.robsimm45.EventManager.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.github.robsimm45.EventManager.models.User;

public interface UserRepo extends JpaRepository<User, Integer>{
	
	public List<User> findAll();
	
	public User findById(int id);
	
	public User findByFirstNameAndLastName(String firstName, String lastName);
}