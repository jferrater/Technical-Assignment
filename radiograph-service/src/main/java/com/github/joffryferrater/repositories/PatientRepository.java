package com.github.joffryferrater.repositories;


import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.github.joffryferrater.models.Patient;

/**
 * 
 * @author Joffry Ferrater
 *
 */
@RestResource(path="patients", rel="patients")
public interface PatientRepository  extends CrudRepository<Patient, Long>{

 	@RequestMapping(method=RequestMethod.GET, path="/{socialSecurityNumber}")
	Patient findBySocialSecurityNumber(@Param("socialSecurityNumber")String socialSecurityNumber);

}
