#!/bin/bash

cd radiograph-service
mvn package
java -jar target/radiograph-service-0.0.1-SNAPSHOT.jar
