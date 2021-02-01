package com.github.robsimm45.EventManager.services;

import java.util.List;

import com.github.robsimm45.EventManager.models.Event;

public interface EventService {
	
	public List<Event> findAllEvents();
	
	public Event findEvent(int id);
	
	public void createEvent(Event newEvent);
	
	public void updateEvent(Event selectedEvent);
}