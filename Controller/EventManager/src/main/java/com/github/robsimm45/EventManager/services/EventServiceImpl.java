package com.github.robsimm45.EventManager.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.github.robsimm45.EventManager.models.Event;
import com.github.robsimm45.EventManager.repos.EventRepo;

@Service
public class EventServiceImpl implements EventService {

	EventRepo eventRepo;
	
	@Override
	public void createEvent(Event newEvent) {
		eventRepo.createEvent(newEvent.getEventId(), newEvent.getName(), newEvent.getStartDate(), newEvent.getEndDate(), newEvent.getLocation(), newEvent.getOrganizer().getUserId());
	}

	@Override
	public List<Event> findAllEvents() {
		return eventRepo.findAll();
	}

	@Override
	public Event findEvent(int id) {
		return eventRepo.findEventById(id);
	}

	@Override
	public void updateEvent(Event selectedEvent) {
		eventRepo.save(selectedEvent);
		
	}
	
}