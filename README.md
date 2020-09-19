# React with webpack and babel 
> Goal 2 - This branch shows how to set-up webpack to the javascript application

## Steps
  - Creating the entry point(public) folder
  - Create a index.html using the following command in the public directory
  - Link JavaScript to your HTML file using script tag
  - Generating the bundle.js file
  - Install webpack dev server and CLI from  root of the project
  - Modify the start script in package.json


### 1. Creating the entry point(public) folder

All the javascript source code will be bundled as a single source and be ready for production in this public folder.

From root folder,

```sh
$ mkdir public
$ cd public
```
### 2. Create a index.html using the following command in the public directory
```sh
$ touch index.html
```
Place the below script that has code to print “Hello world” in the browser

index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Chat Application</title>
</head>
<body>
   <h1>Hello world</h1>
</body>
</html>
```

### 3. Link JavaScript to your HTML file using script tag

index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Chat Application</title>
</head>
<body>
   <h1>Hello world</h1>
   <script src="./bundle.js"></script>
</body>
</html>

```

### 4. Generating the bundle.js file

Create a webpack.config.js from root using the following command


```sh
$ touch webpack.config.js
```

And place the below code

```
module.exports = {
   // Bundles all the js files imported in index.js
   entry: './src/index.js',
   // Bundles all the js files as bundle.js
   output: {
     path: __dirname + '/public',
     publicPath: '/',
     filename: 'bundle.js'
   },
   // Serve our application to browser
   devServer: {
     contentBase: './public'
   }
 };

```

### 5.Install webpack dev server and CLI from  root of the project

```
npm install --save-dev webpack webpack-dev-server webpack-cli 
```

Now node_modules folder to manage 3rd party dependency will be created.

### 6.Modify the start script in package.json 
package.json
```
"scripts": {
    "start": "webpack-dev-server --config ./webpack.config.js --mode development",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
Now execute npm start we get our output in localhost:8080 (generally but if the port is already taken by any other process it varies)


You can find Hello world being displayed in browser and console as well.
