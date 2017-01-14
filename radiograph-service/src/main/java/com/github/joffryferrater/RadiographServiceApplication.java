package com.github.joffryferrater;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.github.joffryferrater.models.Doctor;
import com.github.joffryferrater.models.Patient;
import com.github.joffryferrater.models.Radiograph;
import com.github.joffryferrater.repositories.DoctorRepository;
import com.github.joffryferrater.repositories.PatientRepository;

/**
 * 
 * @author Joffry Ferrater
 *
 */
@SpringBootApplication
public class RadiographServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(RadiographServiceApplication.class, args);
	}
	
	@Autowired
	DoctorRepository doctorRepo;
	@Autowired
	PatientRepository patientRepo;
	
	@PostConstruct
	public void init() {
		List<Doctor> doctors = new ArrayList<Doctor>();
		doctors.add(new Doctor("James"));
		doctors.add(new Doctor("Bond"));
		doctors.forEach(doctor -> doctorRepo.save(doctor));
		
		List<Radiograph> radiographs = new ArrayList<Radiograph>();
		Radiograph result1 = new Radiograph("Not feeling well", "Radiograph of Joffry", new Date());
		radiographs.add(result1);
		Patient patient1 = new Patient("19850127", "Joffry", "Ferrater", 31, radiographs);
		patientRepo.save(patient1);
	}
}
