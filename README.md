# Technical-Assignment
Technical assignment
REQUIRED REQUIREMENTS:
Java 8
Maven 3.0
node.js 
npm

TESTING THE APP:
Unzip the project
Run script $ ./run.sh
Verify UI running at localhost:3000
Verify radiograph-service running at localhost:8888

LIMITATIONS:
The app does not have security feature. The filter is setup at the backend for security implementation but not yet fully implemented. The UI does not have an authentication mechanism. Any doctor users can use the app.
HTTP get and post request URLs from the UI are hardcoded to http://localhost:8888 which is the port of the radiograph-service.
Front end URL is hardcoded to http://localhost:3000
When adding new patient, a Doctor field is added. My objective should be that this field doesn’t need to be there and let the front end automatically fill this field of the current user of the app.

PROJECT INFORMATION

There are two project directories in Technical-Assignment folder. First is the “radiograph-service” folder which is the backend implementation and the second one is “UI” folder which is the frontend implementation.
