package com.github.robsimm45.EventManager.models;

import javax.persistence.*;

@Entity
@Table()
public class Event{
	
	@Id
	private int EventId;
	
	private String name;
	
	private String location;
	
	private String date;
	
	private String time;
	
}