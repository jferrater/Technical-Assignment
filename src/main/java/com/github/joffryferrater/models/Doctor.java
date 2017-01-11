package com.github.joffryferrater.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * User (Doctor) model object.
 * 
 * @author Joffry Ferrater
 *
 */
@Entity
@Table(name="doctors")
public class Doctor {

	@Id @GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	@JsonProperty("Username")
	private final String username;
	
	public Doctor(String username) {
		super();
		this.username = username;
	}
	
	public String getUsername() {
		return username;
	}
}
