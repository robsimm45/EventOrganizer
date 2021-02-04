package com.github.robsimm45.EventManager.repos;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.github.robsimm45.EventManager.models.Event;

public interface EventRepo extends JpaRepository<Event, Integer>{
	// need all, update, find, create, delete
	
	public List<Event> findAll();
	
	public Event findByEventId(int id);
	
	@Modifying
	@Query(value = "INSERT INTO eventorganizer.Events (eventId, eventName, startTime, endTime, location, organizer ) VALUES (:eventId, :eventName, :startTime, "
			+ ":endTime, :location, :organizer)", nativeQuery = true)
	@Transactional
	public void createEvent (@Param("eventId") int id, @Param("eventName") String name, @Param("startTime") Date startDate, @Param("endTime") Date endDate, @Param("location") String location, @Param("organizer") int organizerId);
	
	/*@Modifying
	@Query(value = "UPDATE eventorganizer.user_group SET (eventName = :eventName, startTime = :startTime, endTime = :endTime, location = : location, organizer = :organizer )" 
			+ "WHERE eventId = :eventId", nativeQuery = true)
	@Transactional
	public void updateEvent (@Param("eventId") int id, @Param("eventName") String name, @Param("startTime") Date startDate, @Param("endDate") Date endDate, @Param("location") String location, @Param("organizer") int organizerId);
	*/
}