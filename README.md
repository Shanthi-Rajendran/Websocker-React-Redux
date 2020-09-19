# React with webpack and babel 
> Goal 1 - This branch shows how to set-up a basic Javascript application from scratch.

## Steps
  - Creating a new project directory (Linux)
  - Initialize the project as npm
  - Creating your first hello world using js and execute as npm


### 1. Creating a new project directory (Linux)
Create a new project folder and navigate into the folder
1.  Open a new terminal.
2.  Use the following command to create a new project
Eg. mkdir <project_name>
```sh
$ mkdir Websocket-REACT-SPRINGBOOT
```
3.  Navigate into the project using
```sh
$ cd Websocket-REACT-SPRINGBOOT
```
Now the project folder is created successfully.

### 2. Initialize the project as npm
```sh
$  npm init -y
```
  y flag to indicate creation of package.json with default configuration.
           
  Now your folder structure has package.json file.\
	It is mainly for 2 reasons,\
    - You can add any other node packages from npm (like npm i antd)\
    - For adding scripts for lifecycle methods like start,test,deploy,pre-deploy etc for your production phases 

### 3. Creating your first hello world using js and execute as npm
  1.  Create a new folder src and navigate into the folder
```sh
$  mkdir src
$  cd src
```
  2.  Create a new file index.js
```sh
$  touch index.js
```
- touch <filename> is a linux command to create a new empty file.

Write a console statement console.log(‘hello world’) and save it.

   3. To execute as npm we should make modification in package.json in the lifecycle script.
 
 Open your package.json and add start script so your files looks like,
 ```sh
{
  ...
  "scripts": {
    "start": "node src/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  ...
}
```
   4.  Now from your root folder use the following command to start the application. 
```sh
$  npm start
```

### Terminal Output : 

> Websocket-REACT-SPRINGBOOT@1.0.0 start XXXX/Websocket-REACT-SPRINGBOOT\
> node src/index.js\
> Hello world






