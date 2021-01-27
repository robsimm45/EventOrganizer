package com.github.robsimm45.EventManager.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table()
public class User{
	@Id
	@Column()
	private int userId;
	
	@NotNull
	private String firstName;
	
	@NotNull
	private String lastName;
	
	
	
}