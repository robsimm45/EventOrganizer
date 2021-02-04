package com.github.robsimm45.EventManager.models;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.Arrays;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "Events")
public class Event{
	
	@Id
	@Column(name = "eventid", unique = true)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int eventId;
	
	@NotNull
	@Column(name="eventname")
	private String name;
	
	@NotNull
	@Column(name="starttime")
	private Timestamp startDate;
	
	@NotNull
	@Column(name="endtime")
	private Timestamp endDate;
	
	private String location;
	
	@ManyToOne
	@JoinColumn(name = "organizer")
	private Users organizer;
	
	@ManyToMany
	@JoinTable(name = "RSVP", joinColumns = { @JoinColumn(name = "eventid") }, inverseJoinColumns = {
	@JoinColumn(name = "userid") })
	@JsonIgnore
	@OrderColumn
	private Users[] rsvp;
	
	public int getEventId() {
		return eventId;
	}

	public void setEventId(int eventId) {
		this.eventId = eventId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public  Timestamp getStartDate() {
		return startDate;
	}

	public void setStartDate(Timestamp startDate) {
		this.startDate = startDate;
	}

	public Timestamp getEndDate() {
		return endDate;
	}

	public void setEndDate(Timestamp endDate) {
		this.endDate = endDate;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public Users getOrganizer() {
		return organizer;
	}

	public void setOrganizer(Users organizer) {
		this.organizer = organizer;
	}

	public Users[] getRsvp() {
		return rsvp;
	}

	public void setRsvp(Users[] rsvp) {
		this.rsvp = rsvp;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + eventId;
		result = prime * result + ((endDate == null) ? 0 : endDate.hashCode());
		result = prime * result + ((location == null) ? 0 : location.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((organizer == null) ? 0 : organizer.hashCode());
		result = prime * result + Arrays.hashCode(rsvp);
		result = prime * result + ((startDate == null) ? 0 : startDate.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Event other = (Event) obj;
		if (eventId != other.eventId)
			return false;
		if (endDate == null) {
			if (other.endDate != null)
				return false;
		} else if (!endDate.equals(other.endDate))
			return false;
		if (location == null) {
			if (other.location != null)
				return false;
		} else if (!location.equals(other.location))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (organizer == null) {
			if (other.organizer != null)
				return false;
		} else if (!organizer.equals(other.organizer))
			return false;
		if (!Arrays.equals(rsvp, other.rsvp))
			return false;
		if (startDate == null) {
			if (other.startDate != null)
				return false;
		} else if (!startDate.equals(other.startDate))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Event [EventId=" + eventId + ", name=" + name + ", startDate=" + startDate + ", endDate=" + endDate
				+ ", location=" + location + ", organizer=" + organizer + ", rsvp=" + Arrays.toString(rsvp) + "]";
	}

	
	
}