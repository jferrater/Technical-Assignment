# Technical-Assignment
Technical assignment

1) Root service:
 GET http://localhost:8888
 Header: Content-Type: application/json
 
 Response:
 {
  "_links": {
    "radiographs": {
      "href": "http://localhost:8888/radiographs"
    },
    "patients": {
      "href": "http://localhost:8888/patients"
    },
    "doctors": {
      "href": "http://localhost:8888/doctors"
    },
    "profile": {
      "href": "http://localhost:8888/profile"
    }
  }
}

2) Getting patients list:
GET http://localhost:8888/patients
Header: Content-Type: application/json

Response:
{
  "_embedded": {
    "patients": [
      {
        "Id": 1,
        "SocialSecurityNumber": "19850127",
        "FirstName": "Joffry",
        "LastName": "Ferrater",
        "Age": 31,
        "Doctor": "James",
        "_links": {
          "self": {
            "href": "http://localhost:8888/patients/1"
          },
          "patient": {
            "href": "http://localhost:8888/patients/1"
          },
          "radiographs": {
            "href": "http://localhost:8888/patients/1/radiographs"
          }
        }
      },
      {
        "Id": 2,
        "SocialSecurityNumber": "19830317",
        "FirstName": "Mirtunjay",
        "LastName": "Kumar",
        "Age": 33,
        "Doctor": "Bond",
        "_links": {
          "self": {
            "href": "http://localhost:8888/patients/2"
          },
          "patient": {
            "href": "http://localhost:8888/patients/2"
          },
          "radiographs": {
            "href": "http://localhost:8888/patients/2/radiographs"
          }
        }
      }
    ]
  },
  "_links": {
    "self": {
      "href": "http://localhost:8888/patients"
    },
    "profile": {
      "href": "http://localhost:8888/profile/patients"
    },
    "search": {
      "href": "http://localhost:8888/patients/search"
    }
  }
}

3) Add new patient:
POST http://localhost:8888/patients
Header: Content-Type: application/json

Request:
       {
        "SocialSecurityNumber": "19800912",
        "FirstName": "Jolly Jae",
        "LastName": "Ompod",
        "Age": 36,
        "Doctor": "Bond"
		}

Response: 
		{
		  "Id": 4,
		  "SocialSecurityNumber": "19800912",
		  "FirstName": "Jolly Jae",
		  "LastName": "Ompod",
		  "Age": 36,
		  "Doctor": "Bond",
		  "_links": {
			"self": {
			  "href": "http://localhost:8888/patients/4"
			},
			"patient": {
			  "href": "http://localhost:8888/patients/4"
			},
			"radiographs": {
			  "href": "http://localhost:8888/patients/4/radiographs"
			}
		  }
		}
4) Get patient details by id:
GET http://localhost:8888/patients/1
Header: Content-Type: application/json

Response:
	{
	  "Id": 1,
	  "SocialSecurityNumber": "19850127",
	  "FirstName": "Joffry",
	  "LastName": "Ferrater",
	  "Age": 31,
	  "Doctor": "James",
	  "_links": {
		"self": {
		  "href": "http://localhost:8888/patients/1"
		},
		"patient": {
		  "href": "http://localhost:8888/patients/1"
		},
		"radiographs": {
		  "href": "http://localhost:8888/patients/1/radiographs"
		}
	  }
	}
5) Search user by Social Security Number:
GET http://localhost:8888/patients/search/patient?socialSecurityNumber=19850127 
Header: Content-Type: application/json

Response:
	{
	  "Id": 1,
	  "SocialSecurityNumber": "19850127",
	  "FirstName": "Joffry",
	  "LastName": "Ferrater",
	  "Age": 31,
	  "Doctor": "James",
	  "_links": {
		"self": {
		  "href": "http://localhost:8888/patients/1"
		},
		"patient": {
		  "href": "http://localhost:8888/patients/1"
		},
		"radiographs": {
		  "href": "http://localhost:8888/patients/1/radiographs"
		}
	  }
	}
	
6) Search patients by Doctor
GET http://localhost:8888/patients/search/patients?doctor=James
Header: Content-Type: application/json

Response: 
	{
	  "_embedded": {
		"patients": [
		  {
			"Id": 1,
			"SocialSecurityNumber": "19850127",
			"FirstName": "Joffry",
			"LastName": "Ferrater",
			"Age": 31,
			"Doctor": "James",
			"_links": {
			  "self": {
				"href": "http://localhost:8888/patients/1"
			  },
			  "patient": {
				"href": "http://localhost:8888/patients/1"
			  },
			  "radiographs": {
				"href": "http://localhost:8888/patients/1/radiographs"
			  }
			}
		  }
		]
	  },
	  "_links": {
		"self": {
		  "href": "http://localhost:8888/patients/search/patients?doctor=James"
		}
	  }
	}

7) Get Radiograph data history by patient:
GET http://localhost:8888/patients/1/radiographs
Header: Content-Type: application/json

Response:
	{
	  "_embedded": {
		"radiographs": [
		  {
			"Reason": "Not feeling well",
			"Description": "Radiograph of Joffry",
			"DateOfTest": "2017-01-17"
		  }
		]
	  },
	  "_links": {
		"radiograph": {
		  "href": "http://localhost:8888/radiographs/1"
		}
	  }
	}

8) Add new Radiograph data to patient
POST http://localhost:8888/patients/1/radiographs
Header: Content-Type: application/json

Request:
      {
        "Reason": "Back ache",
        "Description": "Another test"
      }
	  
Response:
	{
	  "Reason": "Back ache",
	  "Description": "Another test",
	  "DateOfTest": "2017-01-17",
	  "_links": {
		"radiograph": {
		  "href": "http://localhost:8888/radiographs/4"
		},
		"patient": {
		  "href": "http://localhost:8888/patients/1"
		}
	  }
	}

9) Get all radiograph
GET http://localhost:8888/radiographs
Header: Content-Type: application/json

Response:
	{
	  "_embedded": {
		"radiographs": [
		  {
			"Reason": "Not feeling well",
			"Description": "Radiograph of Joffry",
			"DateOfTest": "2017-01-17",
			"_links": {
			  "self": {
				"href": "http://localhost:8888/radiographs/1"
			  },
			  "radiograph": {
				"href": "http://localhost:8888/radiographs/1"
			  },
			  "patient": {
				"href": "http://localhost:8888/radiographs/1/patient"
			  }
			}
		  },
		  {
			"Reason": "Cough",
			"Description": "Radiograph of Kumar",
			"DateOfTest": "2017-01-17",
			"_links": {
			  "self": {
				"href": "http://localhost:8888/radiographs/2"
			  },
			  "radiograph": {
				"href": "http://localhost:8888/radiographs/2"
			  },
			  "patient": {
				"href": "http://localhost:8888/radiographs/2/patient"
			  }
			}
		  },
		  {
			"Reason": "Difficult to breath",
			"Description": "Jolly Jae first checkup",
			"DateOfTest": "2017-01-17",
			"_links": {
			  "self": {
				"href": "http://localhost:8888/radiographs/3"
			  },
			  "radiograph": {
				"href": "http://localhost:8888/radiographs/3"
			  },
			  "patient": {
				"href": "http://localhost:8888/radiographs/3/patient"
			  }
			}
		  },
		  {
			"Reason": "Back ache",
			"Description": "Another test",
			"DateOfTest": "2017-01-17",
			"_links": {
			  "self": {
				"href": "http://localhost:8888/radiographs/4"
			  },
			  "radiograph": {
				"href": "http://localhost:8888/radiographs/4"
			  },
			  "patient": {
				"href": "http://localhost:8888/radiographs/4/patient"
			  }
			}
		  }
		]
	  },
	  "_links": {
		"self": {
		  "href": "http://localhost:8888/radiographs"
		},
		"profile": {
		  "href": "http://localhost:8888/profile/radiographs"
		}
	  }
	}
	
10) Get radiograph by id
GET http://localhost:8888/radiographs/1
Header: Content-Type: application/json

Response: 
	{
	  "Reason": "Not feeling well",
	  "Description": "Radiograph of Joffry",
	  "DateOfTest": "2017-01-17",
	  "_links": {
		"self": {
		  "href": "http://localhost:8888/radiographs/1"
		},
		"radiograph": {
		  "href": "http://localhost:8888/radiographs/1"
		},
		"patient": {
		  "href": "http://localhost:8888/radiographs/1/patient"
		}
	  }
	}
