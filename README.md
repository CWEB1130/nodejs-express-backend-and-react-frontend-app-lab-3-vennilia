#  Nodejs Express(Backend) and React(Frontend) App - Create and Retrieve Users (Lab 3)
You are going to build a simple web application that allows end-users to create user profiles and view all profiles created.  This lab focuses on using Nodejs as the back-end server language and implementing core modules (File System core module), third-party modules (Express Framework), user-defined modules (User Object).  

## Requirements

### Step 1 - Create a web project and implement version control
1.  Create a folder titled **[cweb1130_lab3]**
2.  Make sure you are in the newly created directory and install git by running command **[git init]**
3.  Run the command [git pull origin lab3] to pull down the README.md file that contain instructions



### Step 2 - Configure and install Express
1.  Run command **[npx express-generator backend]**
	1.  This command scaffolds the application into a folder called backend.

       2.  Change directories into backend folder
       3. Install dependencies listed in package.json by running command [npm install]
       5.  Fix any dependencies by running command [npm audit fix]
2.  Run command **[npm start]** and view application in browser by navigating to localhost:3000.  
3.  After viewing application in browser stop application by running **[Control + C]**
	
### Step 3 - Alter Route and Data source
This step is going to include a route that responds back with offers 
1.  **Data Source** - Navigate to [lab3_resources repository](https://github.com/instructorc/CWEB1130_Lab_Resources/tree/master/lab3_resources) and add the offers.json file into the backend folder.

2.  Navigate to the route folder and rename the users.js file to offers.js and complete the following steps below
     1.  Include the statement below that makes the offers.json file available within the the offers.js file. 
      ```javascript
        var offers = require('../offers.json');
      ```

     1. Within the router.get(), alter the res.send() method to the statement below.
     ```javascript
        res.json(offers)
     ```
3.  Navigate to the apps.js file locate the following statement **var usersRouter = require('./routes/users');** and change to what is listed below.
     ```javascript
        var offersRouter = require('./routes/offers');
     ```
4.  Navigate to the apps.js file locate the following statement **app.use('/users', usersRouter);** and change to what is listed below.
     ```javascript
        app.use('/offers', offersRouter);
     ```
5.  Within the terminal, run the command below to change the PORT and start the server.  After running the command below, enter the url to 
     ```linux
        PORT=8080 npm start
     ```
6.  Once the server is started, navigate to **URL path** that will trigger the users.js route to display the offers json data.  If you can see the offers.json data once you go to the route, your route is properly configured to send json data.  

7.  After viewing the route that displays the offer json data, stop application by running **[Control + C]**
### Step 4 - Create a React Front-end Framework
1.  Change directories back into the **[cweb1130_lab3]** root folder.

2.  **Install React** - Run the two commands below 
     ```linux
        npm install -g create-react-app
        create-react-app frontend
     ```
3. Change directories into the frontend folder and open the package.json file and include the following line after the scripts object **(DO NOT PUT WITHIN THE SCRIPTS OBJECT)**.  The line below adds a proxy key that tells react app to proxy api request to express server.
     ```json
    "proxy": "http://localhost:8080",
     ```		
### Step 5 - Alter the App Component to receive JSON data  
1.  Within the frontend folder, Navigate to the src folder and  create a new file titled **[Offers.js]** and paste the following code below:
	```js
	import React, { Component } from 'react';


	class Offers extends Component {

	  state = { offers: [] }
	  

	  componentDidMount(){
		fetch('/offers')
		  .then(res => res.json())
		  .then(offers => this.setState( { offers }));
	  }

	  render(){
		return (
		  <div>
			{this.state.offers.map(aoffer =>
			<section className="aoffer" key={aoffer.id} >
			  <h5>{aoffer.property}</h5>
			  <h5>{aoffer.offer_exp}</h5>
			  <h6>Offer Details</h6>
			  <p>{aoffer.offer_details}</p>
			</section>
			)}
		  </div>
		);
	  }
	}

	export default Offers;

	```
	
2.  Navigate to the **[index.js]** file within the src folder and include the Offers.js component by placing the statement below at the top of the document:
	```js
	import Offers from './Offers';
	```
3.  Staying within the **[index.js]** file replace the contents of the ReactDOM.render() with the following:
	```react
	  <React.StrictMode>
          <Offers />
        </React.StrictMode>,
        document.getElementById('offers')
	```

### Step 6 - Adding the default HTML/CSS and static resources
1.  Within the frontend folder, replace the contents of the public folder with the public folder found at [lab3_resources repository](https://github.com/instructorc/CWEB1130_Lab_Resources/tree/master/lab3_resources)


### Step 7 - End-user Interaction
1.  Change directories to the backend folder and start the server by running command **[PORT=8080 npm start]**.  Your server should start up with no problems
2.  While the server for you backend is started, create a new bash terminal within visual studio code by clicking the plus sign. [Please email instructor or watch lecture if you are unable to find]
3.  With the new bash terminal open, change directories into the frontend folder and start the server by running command **[npm start]**
4.  If all the steps were properly completed, your app should render and display in the browser.  The offers component should display offers data from the offers.json file that is in your backend folder.


### STEP 8 - Extra Credit (3 Points) 
1.  Create new functionality that would populate suggested properties component.  You will need to alter the the route within the backend folder, add a new data source and create a new component within the frontend src folder.

### STEP 9 - Github Repository
1.  Add Instructor as a contributor to repository by searching for **[instructorc]**
2.  Adjust README.md file at the end to include date of completion and course information.

### STEP 10 - Submission
1.  Comment your name to the app.js file within the backend folder.
2.  Make sure your master branch is clean and push up your final changes.
3.  In Canvas, submit the URL to your repository
	

#### Github Classroom Invitation URL: https://classroom.github.com/a/4Al7g-6s
