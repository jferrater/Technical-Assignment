# Technical-Assignment
Technical assignment

<div>
<h4>Required dependencies</h4>
<lu>
   <li>java 8</li>
   <li>nodejs</li>
   <li>npm</li>
</lu>
</div>

<div>
<h4>Running the project</h4>
<lo>
   <li>$ git clone https://github.com/jferrater/Technical-Assignment.git</li>
   <li>$ cd radiograph-service</li>
   <li>$ java -jar radiograph-service-0.0.1-SNAPSHOT.jar
</li>
</lo>
<br>
<strong>UI is implemented on a separate repo.</strong>
<lu>
   <li>$ git clone https://github.com/jferrater/UI.git</li>
   <li> $ cd UI</li>
   <li>$ npm install</li>
   <li>$ npm start</li>
</lu>
</div>
<h4>AVAILABLE ENDPOINTS</h4>
<p>Install Postman Chrome plugin or other REST client app to verify the endpoints. All
endpoints required Content-type application/json header.</p>
<br>
<strong>Root Service</strong>
<br>
<strong>GET   http://localhost:8888</strong><br>
    <strong>Header: Content-Type: application/json</strong><br>
    <br>
    <strong>Response:</strong><br>
    ```javascript
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
    ```
    <br>
    <strong>Getting patients list</strong><br>
    <strong>GET   http://localhost:8888/patients</strong><br>
    <strong>Header: Content-Type: application/json</strong><br>
    <br>
    <strong>Response:</strong><br>
    ```javascript
    {
        "_embedded": {
            "patients": [{
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
            }, {
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
            }, {
                "Id": 3,
                "SocialSecurityNumber": "19800912",
                "FirstName": "Jolly Jae",
                "LastName": "Ompod",
                "Age": 36,
                "Doctor": "Bond",
                "_links": {
                    "self": {
                        "href": "http://localhost:8888/patients/3"
                    },
                    "patient": {
                        "href": "http://localhost:8888/patients/3"
                    },
                    "radiographs": {
                        "href": "http://localhost:8888/patients/3/radiographs"
                    }
                }
            }]
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
    ```
    <br>
    <strong>Adding new patient</strong><br>
    <strong>POST   http://localhost:8888/patients</strong><br>
    <strong>Header: Content-Type: application/json</strong><br>
    <br>
    <strong>Request:</strong><br>
    ```javascript
    {
	    "SocialSecurityNumber": "19800912",
	    "FirstName": "Jolly Jae",
	    "LastName": "Ompod",
	    "Age": 36,
	    "Doctor": "Bond"
    }
    ```
    <br>
    <strong>Response:</strong><br>
    ```javascript
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
    ```
    <br>
    <strong>Getting patient details by id</strong><br>
    <strong>GET  http://localhost:8888/patients/1</strong><br>
    <strong>Header: Content-Type: application/json</strong><br>
    <br>
    <strong>Response:</strong><br>
    ```javascript
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
    ```
    <br>
    <strong>Deleting patient by id</strong><br>
    <strong>DELETE  http://localhost:8888/patients/1</strong><br>
    <strong>Header: Content-Type: application/json</strong><br>
    <br>
    <strong>Response:</strong><br>
    ```javascript
        200 OK
    ```
    <br>
    <strong>Searching patient by Social Security Number</strong><br>
    <strong>GET  http://localhost:8888/patients/search/patient?socialSecurityNumber=19850127</strong><br>
    <strong>Header: Content-Type: application/json</strong><br>
    <br>
    <strong>Response:</strong><br>
    ```javascript
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
    ```
    <br>
    <strong>Searching patient by doctor's username</strong><br>
    <strong>GET  http://localhost:8888/patients/search/patients?doctor=James</strong><br>
    <strong>Header: Content-Type: application/json</strong><br>
    <br>
    <strong>Response:</strong><br>
    ```javascript
    {
        "_embedded": {
            "patients": [{
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
            }]
        },
        "_links": {
            "self": {
                "href": "http://localhost:8888/patients/search/patients?doctor=James"
            }
        }
    }
    ```
    <br>
    <strong>Getting patient's radiograph history </strong><br>
    <strong>GET http://localhost:8888/patients/1/radiographs</strong><br>
    <strong>Header: Content-Type: application/json</strong><br>
    <br>
    <strong>Response:</strong><br>
    ```javascript
    {
        "_embedded": {
            "radiographs": [{
                "Reason": "Not feeling well",
                "Description": "Radiograph of Joffry",
                "DateOfTest": "2017-01-17"
            }]
        },
        "_links": {
            "radiograph": {
                "href": "http://localhost:8888/radiographs/1"
            }
        }
    }
    ```
    <br>
    <strong>Adding new patient's radiograph </strong><br>
    <strong>POST http://localhost:8888/patients/1/radiographs</strong><br>
    <strong>Header: Content-Type: application/json</strong><br>
    <br>
    <strong>Request:</strong><br>
    ```javascript
    {
        "Reason": "Back ache",
       "Description": "Another test"
    }
    ```
    <br>
    <strong>Response:</strong><br>
    ```javascript
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
    ```
    <br>
    <strong>Getting all radiographs</strong><br>
    <strong>GET http://localhost:8888/radiographs</strong><br>
    <strong>Header: Content-Type: application/json</strong><br>
    <br>
    <strong>Response:</strong><br>
    ```javascript
    {
    "_embedded" : {
        "radiographs" : [ {
        "Reason" : "Not feeling well",
        "Description" : "Radiograph of Joffry",
        "DateOfTest" : "2017-01-20",
        "_links" : {
            "self" : {
            "href" : "http://localhost:8888/radiographs/1"
            },
            "radiograph" : {
            "href" : "http://localhost:8888/radiographs/1"
            },
            "patient" : {
            "href" : "http://localhost:8888/radiographs/1/patient"
            }
        }
        }, {
        "Reason" : "Cough",
        "Description" : "Radiograph of Kumar",
        "DateOfTest" : "2017-01-20",
        "_links" : {
            "self" : {
            "href" : "http://localhost:8888/radiographs/2"
            },
            "radiograph" : {
            "href" : "http://localhost:8888/radiographs/2"
            },
            "patient" : {
            "href" : "http://localhost:8888/radiographs/2/patient"
            }
        }
        }, {
        "Reason" : "Difficult to breath",
        "Description" : "Jolly Jae first checkup",
        "DateOfTest" : "2017-01-20",
        "_links" : {
            "self" : {
            "href" : "http://localhost:8888/radiographs/3"
            },
            "radiograph" : {
            "href" : "http://localhost:8888/radiographs/3"
            },
            "patient" : {
            "href" : "http://localhost:8888/radiographs/3/patient"
            }
           }
        } ]
    },
    "_links" : {
        "self" : {
        "href" : "http://localhost:8888/radiographs"
        },
        "profile" : {
        "href" : "http://localhost:8888/profile/radiographs"
        }
      }
    }
    ```
    <br>
    <strong>Getting radiograph details by id </strong><br>
    <strong>GET http://localhost:8888/radiographs/1</strong><br>
    <strong>Header: Content-Type: application/json</strong><br>
    <br>
    <strong>Response:</strong><br>
    ```javascript
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
    ```
    <br>
    <strong>Creating new doctor</strong><br>
    <strong>POST http://localhost:8888/doctors</strong><br>
    <strong>Header: Content-Type: application/json</strong><br>
    <br>
    <strong>Request:</strong><br>
    ```javascript
    {
        "Username": "Joffry"
    }
    ```
    <br>
    <strong>Response:</strong><br>
    ```javascript
    {
        "Username": "Joffry",
        "_links": {
            "self": {
                "href": "http://localhost:8888/doctors/4"
            },
            "doctor": {
                "href": "http://localhost:8888/doctors/4"
            }
        }
    }
    ```
    <br>
    <strong>Getting doctor's info</strong><br>
    <strong>GET http://localhost:8888/doctors/4</strong><br>
    <strong>Header: Content-Type: application/json</strong><br>
    <br>
    <strong>Response:</strong><br>
    ```javascript
    {
        "Username": "Joffry",
        "_links": {
            "self": {
                "href": "http://localhost:8888/doctors/4"
            },
            "doctor": {
                "href": "http://localhost:8888/doctors/4"
            }
        }
    }
    ```
    <br>
    <strong>Deleting doctor</strong><br>
    <strong>DELETE http://localhost:8888/doctors/4</strong><br>
    <strong>Header: Content-Type: application/json</strong><br>
    <br>
    <strong>Response:</strong><br>
    ```javascript
    200 OK
    ```
    <br>
    <li><strong>Getting ALL doctors</strong></li><br>
    <strong>GET http://localhost:8888/doctors</strong><br>
    <strong>Header: Content-Type: application/json</strong><br>
    <br>
    <strong>Response:</strong><br>
    ```javascript
    {
        "_embedded": {
            "doctors": [{
                "Username": "James",
                "_links": {
                    "self": {
                        "href": "http://localhost:8888/doctors/1"
                    },
                    "doctor": {
                        "href": "http://localhost:8888/doctors/1"
                    }
                }
            }, {
                "Username": "Bond",
                "_links": {
                    "self": {
                        "href": "http://localhost:8888/doctors/2"
                    },
                    "doctor": {
                        "href": "http://localhost:8888/doctors/2"
                    }
                }
            }, {
                "Username": "Joffry",
                "_links": {
                    "self": {
                        "href": "http://localhost:8888/doctors/4"
                    },
                    "doctor": {
                        "href": "http://localhost:8888/doctors/4"
                    }
                }
            }]
        },
        "_links": {
            "self": {
                "href": "http://localhost:8888/doctors"
            },
            "profile": {
                "href": "http://localhost:8888/profile/doctors"
            }
        }
    }
    ```
