package com.github.robsimm45.EventManager.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.github.robsimm45.EventManager.models.Event;

public interface EventRepo extends JpaRepository<Event, Integer>{
	// need all, update, find, create, delete
	
	public List<Event> findAllEvents();
	
	public Event findEventById(int id);
	
	
}