package com.github.robsimm45.EventManager.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.github.robsimm45.EventManager.models.Users;

public interface UserRepo extends JpaRepository<Users, Integer>{
	
	public List<Users> findAll();
	
	public Users findById(int id);
}