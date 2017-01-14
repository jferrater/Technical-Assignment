package com.github.joffryferrater.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Patient model object.
 * Stores patient information.
 * 
 * @author Joffry Ferrater
 *
 */
@Entity
@Table(name="patients")
public class Patient {

	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	@JsonProperty("Id")
	@Column(name="PATIENT_ID")
	private Long id;
	@JsonProperty("Social Security No.")
	private String socialSecurityNumber;
	@JsonProperty("First Name")
	private String firstName;
	@JsonProperty("Last Name")
	private String familyName;
	@JsonProperty("Age")
	private int age;
	@JsonProperty("Radiograph Results")
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="RAD_ID")
	private List<Radiograph> radiographs;
	
	public Patient() {
		super();
	}
	
	public Patient(String socialSecurityNumber, String firstName, String familyName, int age, List<Radiograph> radiographs) {
		this();
		this.socialSecurityNumber = socialSecurityNumber;
		this.firstName = firstName;
		this.familyName = familyName;
		this.age = age;
		this.radiographs = radiographs;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSocialSecurityNumber() {
		return socialSecurityNumber;
	}

	public void setSocialSecurityNumber(String socialSecurityNumber) {
		this.socialSecurityNumber = socialSecurityNumber;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getFamilyName() {
		return familyName;
	}

	public void setFamilyName(String familyName) {
		this.familyName = familyName;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public List<Radiograph> getRadiographs() {
		return radiographs;
	}

	public void setRadiographs(List<Radiograph> radiographs) {
		this.radiographs = radiographs;
	}
	
	
	
}
