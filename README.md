# Rafael-Project

A Web application for teaching safe coding through code puzzles.
An Industrial Project Course Project. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You'll first need to install [NodeJS](https://nodejs.org/en/). Install the recommended version (left big button), we are currently using version 10.15.3.

Next install a mongoDB server from [here](https://www.mongodb.com/download-center/community). Have MSI selected as the package. We are currently using version 4.0.9 and the community edition. **Remember the destination folder of the installation.**

### Running

Copy the repository to a project folder in your system (unzip the zip). 

To run the mongoDB server you first need to create a folder for the data.
Create two nested folders "data" and inside it "db" anywhere you wish (make sure the full path is in english) so that you get:
```
\data\db
```
Now you'll start the server by using the command:
```
"C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe" --dbpath="c:\data\db"
```
**Replace the "c:\data\db" with the full path to the folders you created**

The console should say somewhere "\[initandlisten\] waiting for connections" meaning the mongoDB server is running.

Next go to the project folder you created and open a cmd in the "Rafael-Project-master" folder.
Now run from the console:
```
npm install
```
This will install the npm libraries the project is using. Next run:
```
node app.js
```
and it should display:
```
Server started on port 3000
Connected to database mongodb://localhost:27017/meanauth
```
Now you can navigate to [localhost:3000](http://localhost:3000) and you'll see the application running.

You can add new users to your database through the register route and login with their credentials.
If you wish to view your database getting updated open a cmd in:
```
<mongodb installation dir>/bin
```
(Usually it's in Program Files) and run the command `mongo`. This should allow you to give mongoDB commands.
Running the command: `show dbs` will print the mongoDB dbs on your system. `meanauth` is the db the app created.
Type `use meanauth` to give commands regarding the app's db.
You can use commands like:
* `db.users.find().pretty()` to view all the users in the db
* `db.users.count()` will display the number of users
* `db.users.deleteMany({})` will clear the db of all users
* and many more you can find on [their site](https://docs.mongodb.com/manual/mongo/)

## Running the tests

**TODO**
Explain how to run the automated tests for this system

### Break down into end to end tests

**TODO**
Explain what are these tests test and why

```
Give an example
```

## Deployment

**TODO**
Add additional notes about how to deploy this on a live system

## Built With

* [NodeJS](https://nodejs.org/en/docs/) - The runtime environement for the backend
* [ExpressJS](https://expressjs.com/) - Used for communication between the frontend & backend
* [MongoDB](https://www.mongodb.com/) - The database used
* [Angular](https://angular.io/docs/) - The language used for the frontend

## Authors

**TODO**

## Acknowledgments

Thanks to all the help from:
* TBD

