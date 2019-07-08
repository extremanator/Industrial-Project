# Cyber-Trainer

A Web application for teaching safe coding through code puzzles.
An Industrial Project Course Project. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You'll first need to install [NodeJS](https://nodejs.org/en/). Install the recommended version (left big button), we are currently using version 10.15.3.

Next install a mongoDB server from [here](https://www.mongodb.com/download-center/community). Have MSI selected as the package. We are currently using version 4.0.9 and the community edition. **Remember the destination folder of the installation.**

Also, you need to install Docker from their [website](https://www.docker.com/products/docker-desktop). Their latest version works with the newest versions of Mac and Windows 10 (Enterprise, Pro, and Education).  
If you don't have these versions they also offer previous versions of Docker [here](https://docs.docker.com/toolbox/overview/).  
In both installers the defaults are fine.  
Follow their tutorials and make sure you can run the docker commands from a cmd in the project folder.  

### Running

Copy the repository to a project folder in your system (unzip the zip). 

To run the mongoDB server you first need to create a folder for the data.
Create two nested folders "data" and inside it "db" anywhere you wish (make sure the full path is in english) so that you get:
```
\data\db
```
Now you'll start the server by using the command:
```
"<mongodb installation dir>\bin\mongod.exe" --dbpath="c:\data\db"
```
**Replace the "c:\data\db" with the full path to the folders you created**
(Usually the installation directory is in Program Files)

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
Then run the command `mongo`. This should allow you to give mongoDB commands.
Running the command: `show dbs` will print the mongoDB dbs on your system. `meanauth` is the db the app created.
Type `use meanauth` to give commands regarding the app's db.
You can use commands like:
* `db.users.find().pretty()` to view all the users in the db
* `db.users.count()` will display the number of users
* `db.users.deleteMany({})` will clear the db of all users
* and many more you can find on [their site](https://docs.mongodb.com/manual/mongo/)

Now we create the Docker image that we use for the project (defined by Dockerfile). In a cmd in the project folder enter:  
```
docker build -t ubuntu:project .
```
You can check that you created the image by entering:  
```
docker images
````
You should see an entry from repository 'ubuntu' and with tag 'project'. This image has gcc, g++ and python3.7 installed.  
Docker also define several useful commands in their docs.  
For example the command ```docker ps -all``` will show all the active/exited images on your system.

You'll also need to change the variable absolutePath in routes/problems.js to be the path to the project folder on your computer in unix format (with slash, not backslash) - just copy the format of the current placeholder.  
Note that currently when we run docker (only two commands in routes/problems.js) we don't limit cpu or memory used by the docker, you can change this yourself by adding flags to the commands. For example, you can find the limitation flags [here](https://docs.docker.com/config/containers/resource_constraints/).

If you downloaded the older version of Docker you'll also need to run the Docker Quickstart Terminal (icon added to desktop in default installation) everytime you start the backend. Wait for the terminal to wait for commands. This will allow the backend to create images while running.

## Deployment

**Important Security Note:** In config/database.js you must change the value of field secret to a secret string. This secret is used for token generation and shouldn't be public knowledge.

## Built With

* [NodeJS](https://nodejs.org/en/docs/) - The runtime environement for the backend
* [ExpressJS](https://expressjs.com/) - Used for communication between the frontend & backend
* [MongoDB](https://www.mongodb.com/) - The database used
* [Angular](https://angular.io/docs/) - The language used for the frontend

## Authors

* Emil Barel
* Dan Aaronson


