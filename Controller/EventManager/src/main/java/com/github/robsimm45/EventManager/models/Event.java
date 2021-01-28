package com.github.robsimm45.EventManager.models;

import java.sql.Date;
import java.util.Arrays;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "Events")
public class Event{
	
	@Id
	@Column(name = "eventId", unique = true)
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int EventId;
	
	@NotNull
	private String name;
	
	@NotNull
	private Date startDate;
	
	@NotNull
	private Date endDate;
	
	private String location;
	
	@OneToMany
	private User organizer;
	
	@ManyToMany
	private User[] rsvp;
	
	public int getEventId() {
		return EventId;
	}

	public void setEventId(int eventId) {
		EventId = eventId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public User getOrganizer() {
		return organizer;
	}

	public void setOrganizer(User organizer) {
		this.organizer = organizer;
	}

	public User[] getRsvp() {
		return rsvp;
	}

	public void setRsvp(User[] rsvp) {
		this.rsvp = rsvp;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + EventId;
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
		if (EventId != other.EventId)
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
		return "Event [EventId=" + EventId + ", name=" + name + ", startDate=" + startDate + ", endDate=" + endDate
				+ ", location=" + location + ", organizer=" + organizer + ", rsvp=" + Arrays.toString(rsvp) + "]";
	}

	
	
}