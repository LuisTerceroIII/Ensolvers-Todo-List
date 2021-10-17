# To do list App

## Entry exam for "Trainee Engineer (Remote)"" - Ensolvers

To do list is an application that allows you to organize tasks in folders. It allows you to create folders, delete them, create tasks and edit them.

## Development stack

- Spring Boot 2.5.5
- Postgresql SQL hosted on a heroku server
- Java SDK 11.0.8
- React 17.0.2
- Konsole 18.04.0 (to execute scripts)

 ## Launch the application

To run the application, execute the script "launchApp.sh".
If there are any problems with it you can also run it separately with the scripts "launchApi.sh" and "launchView.sh", if you still have problems, it can be done manually by going to the root folder of the project and do:
- cd target
 - cd ensolvers-0.0.1-SNAPSHOT.jar
 - java -jar ensolvers-0.0.1-SNAPSHOT.jar

With this the api will be running.
 Then to run the view in React, again, we go to the root of the project and do:
- cd ensolver_exam_view
- npm start

With this, both parts of the project will be running.
The api runs on port 8080 and the view on port 3000.

 ✨By Luis Espinoza ✨