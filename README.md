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
   <li>$ mvn package </li>
   <li>$ java -jar target\radiograph-service-0.0.1-SNAPSHOT.jar
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
<h3>AVAILABLE ENDPOINTS</h3>
<p>Install Postman Chrome plugin or other REST client app to verify the endpoints. All
endpoints required Content-type application/json header.</p>
<br>
<h4>1) Root Service</h4><br>
<p>GET   http://localhost:8888</p>
<p>Header: Content-Type: application/json</p>
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
<h4>2) Getting patients list</h4><br>
<br>
<p>GET   http://localhost:8888/patients</p>
<p>Header: Content-Type: application/json</p>
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
<h4>3) Adding new patient</h4><br>
<p>POST   http://localhost:8888/patients</p>
<p>Header: Content-Type: application/json</p>
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
<h4>4) Getting patient details by id</h4><br>
<p>GET  http://localhost:8888/patients/1</p>
<p>Header: Content-Type: application/json</p>
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
<h4>5) Deleting patient by id</h4><br>
<p>DELETE  http://localhost:8888/patients/1</p>
<p>Header: Content-Type: application/json</p>
<strong>Response:</strong><br>
```javascript
     200 OK
```
<br>
<h4>6) Searching patient by Social Security Number</h4><br>
<p>GET  http://localhost:8888/patients/search/patient?socialSecurityNumber=19850127</p>
<p>Header: Content-Type: application/json</p>
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
<h4>7) Searching patient by doctor's username</h4><br>
<p>GET  http://localhost:8888/patients/search/patients?doctor=James</p>
<p>Header: Content-Type: application/json</p>
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
<h4>8) Getting patient's radiograph history </h4><br>
<p>GET http://localhost:8888/patients/1/radiographs</p>
<p>Header: Content-Type: application/json<p>
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
<h4>9) Adding new patient's radiograph </h4><br>
<p>POST http://localhost:8888/patients/1/radiographs</p>
<p>Header: Content-Type: application/json</p>
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
<h4>10) Getting all radiographs</h4><br>
<p>GET http://localhost:8888/radiographs</p>
<p>Header: Content-Type: application/json</p>
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
<h4>11) Getting radiograph details by id </h4><br>
<p>GET http://localhost:8888/radiographs/1</p>
<p>Header: Content-Type: application/json</p>
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
<h4>12) Creating new doctor</h4><br>
<p>POST http://localhost:8888/doctors</p>
<p>Header: Content-Type: application/json</p>
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
<h4>13) Getting doctor's info</h4><br>
<p>GET http://localhost:8888/doctors/4</p>
<p>Header: Content-Type: application/json</p>
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
<h4>14) Deleting doctor</h4><br>
<p>DELETE http://localhost:8888/doctors/4</p>
<p>Header: Content-Type: application/json</p>
<strong>Response:</strong><br>
```javascript
    200 OK
```
<br>
<h4>15) Getting ALL doctors</h4><br>
<p>GET http://localhost:8888/doctors</p>
<p>Header: Content-Type: application/json</p>
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
