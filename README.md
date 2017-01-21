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
   <li>$ mvn package</li>
   <li>$ java -jar target/radiograph-service-0.0.1-SNAPSHOT.jar</li>
</lo>

<strong>I have moved the UI implementation to another repo. Clone the new UI repo</strong>
<lu>
   <li>$ git clone https://github.com/jferrater/UI.git</li>
   <li> $ cd UI</li>
   <li>$ npm install</li>
   <li>$ npm start</li>
</lu>
</div>

<h4>AVAILABLE ENDPOINTS</h4>
<p>Install Postman Chrome plugin or other REST client app to verify the endpoints. All
endpoints required Content-type application/json header.</p><br>
<lu>
<li>Root Service</li><br>
<strong>GET   http://localhost:8888</strong><br>
<strong>Header: Content-Type: application/json</strong><br>
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

