#!/bin/bash

java -jar radiograph-service/radiograph-service-0.0.1-SNAPSHOT.jar &
cd UI
npm install &
npm start &
