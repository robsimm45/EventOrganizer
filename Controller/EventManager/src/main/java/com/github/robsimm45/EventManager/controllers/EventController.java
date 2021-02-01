package com.github.robsimm45.EventManager.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.github.robsimm45.EventManager.models.Event;
import com.github.robsimm45.EventManager.services.EventServiceImpl;

@RestController
@RequestMapping(value = "event")
public class EventController{
	@Autowired
	private EventServiceImpl eventService;
	
	@GetMapping
	public List<Event> getAllEvents(){
		return eventService.findAllEvents();
	}
	
	@GetMapping("{id}")
	public Event findUserById(@PathVariable int id) {
		return eventService.findEvent(id);
	}
	
	@PostMapping(path="add", consumes = "application/json", produces = "application/json")
	public void addEvent(@RequestBody Event newEvent){
		eventService.createEvent(newEvent);
		
	}
	
	@PatchMapping(path="update", consumes = "application/json", produces = "application/json")
	public void updateEvent(@RequestBody Event selectedEvent){
		eventService.updateEvent(selectedEvent);
	}
}