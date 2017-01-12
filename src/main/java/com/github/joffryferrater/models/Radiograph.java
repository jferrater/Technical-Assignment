package com.github.joffryferrater.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Radiograph model object. 
 * Stores radiograph test results information.
 * 
 * @author Joffry Ferrater
 *
 */
@Entity
@Table(name="radiographs")
public class Radiograph {

	@Id 
	@Column(name="RAD_ID")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	@JsonProperty("Reason")
	private String reason;
	@JsonProperty("Description")
	private String description;
	@JsonProperty("Date of Test")
	private Date dateOfTest;
	
	public Radiograph() {
		super();
	}
	
	public Radiograph(String reason, String description, Date dateOfTest) {
		this();
		this.reason = reason;
		this.description = description;
		this.dateOfTest = dateOfTest;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getReason() {
		return reason;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getDateOfTest() {
		return dateOfTest;
	}

	public void setDateOfTest(Date dateOfTest) {
		this.dateOfTest = dateOfTest;
	}


}
