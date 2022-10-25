# u-develop-it

## Description
This backend application allows users to cast votes for the next president of a small tech community. Using SQL to create a relational database, users can perform CRUD operations to participants, their party, and personal information such as their email address.  This application performs these CRUD operations using RESTful API requests to a backend server.

<img width="709" alt="image" src="https://user-images.githubusercontent.com/86696492/197659706-a09f0041-eb75-4b1f-b09c-215d258016d7.png">   

## Installation/Requirements
To properly run this app,  Node.js and mySQL must be installed. 
The database can be queried and updated using the mySQL shell or through an additional service like [Postman](https://www.postman.com/downloads/) or [Insomnia Core](https://insomnia.rest/download). This is the recommended approach. 

# Technology
* Node.js
* Express.js
* mysql2
* jest

## Usage
Initiate the application by running the  `npm run start` command. Once that's done, open an API platform (see links above) to test the routes and perform API requests. 
Information should be returned to the user in JSON format, as follows:  

<img width="1096" alt="image" src="https://user-images.githubusercontent.com/86696492/197660617-5a4f4208-a2ed-46f6-abdf-660630eb5620.png">  

If a user decides to use the mySQL shell to perform CRUD operations, information will be returned in a formatted table as follows:  
<img width="704" alt="image" src="https://user-images.githubusercontent.com/86696492/197661940-93b0fd27-f8d6-4d71-968f-5d11dd1c27bb.png">  

## Test
This application was tested using the jest framework. The purpose of these tests are to validate that the `inputCheck()` function accurately checks that all of the necessary information is entered for a candidate or voter. To run the tests, run the `npm run test` command. 

<img width="568" alt="image" src="https://user-images.githubusercontent.com/86696492/197663011-99646541-ae08-4d05-8901-761bf2e2ad7b.png">

## Questions
[Repository](https://github.com/nicolalenee/u-develop-it)  
