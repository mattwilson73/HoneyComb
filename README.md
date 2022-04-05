
# SYSTEM OVERVIEW

### System Application

This section provides a brief description of the system, including its purpose and uses.

### System Organization


![systemoganization](https://user-images.githubusercontent.com/60556608/161856394-5f48491e-d405-4a42-9cce-b6b0b05b125f.PNG)

Login Page:

![loginpage](https://user-images.githubusercontent.com/60556608/161857210-59d73a34-2f17-429f-a8e6-a3b772de626a.PNG)


1. The first two fields are for username/email and password. 

2. The button below the fields is to submit the fields and for the user to login.



Sign-Up Page:

![signuppage](https://user-images.githubusercontent.com/60556608/161857286-81499a30-c3e7-4367-9306-8c04fb468029.PNG)


1. First Name, Last Name, Username, Email Address, Password, and Password Confirmation Fields

2. Sign Up button to submit the form 


Main Page:

![mainpage](https://user-images.githubusercontent.com/60556608/161857315-70ce1f2e-a03c-476e-9741-9b91ec0c1294.PNG)

1. This top banner is on every page once they are logged in. The first selection takes the user to this landing page. 

2. The second selection takes the user to the Honeycomb.

3. The third selection takes the user to the Classlist.

4. The fourth selection takes the user to the Calendar page. 



The Hex:

![honeycombpage](https://user-images.githubusercontent.com/60556608/161857564-5ac442d0-0db4-4790-90f8-860846e0b4d2.PNG)

1. The top navigation banner, which appears in every page once signed in.

2. This is a prototype version of the main Honeycomb and its functionality. 



The Classlist ‘The Hive’:

![classlist](https://user-images.githubusercontent.com/60556608/161857703-b55a4d68-3698-48bc-bbfa-be642ab963bf.PNG)

1. The top navigation banner, which appears in every page once signed in.  

2. This is ‘The Hive’ which is the classlist for the current user’s Honeycomb. 


The Calendar: 

1. These bottom buttons also function as navigation below the calendar. 

2. The top navigation banner, which appears in every page once signed in. 





### Resource Inventory

The administrator will need a working honeycomb API key and configuration keys.
 
Once the API key is acquired the administrator will need to set up certain objects that correspond to functional components of the database. 

To create a firebase object use the command:

`firebase= pyrebase.initialize_app(firebaseConfig)` where firebaseConfig is the configuration key.

To create an authentication object for user logins:

`Auth = firebase.auth()`

To create a storage accessing object:

`storage= firebase.storage()`

To create a database accessing object:

`db = firebase.database()`




# SYSTEMS ADMINISTRATION

HoneyComb's system administrators will need to keep user authentication up to date along with the user data associated with the specific client. User data will be used to populate the client’s U.I when accessing the webapp. Administrator’s also have the task of structuring the database with specific courses and their corresponding sections, in order for client’s to receive the appropriate data. 

### User and Group Accounts

End user’s will consist of Parent’s, Students, and Teachers.

End User data will be stored under and with the following. 

Teachers will be associated with the courses they teach, as well as the classlist of students attached with the teachers specific section.

Student’s will be associated with the courses they are in, as well as a potential “parent” account, that will give a parent access to their student’s data.

Parent’s will be associated with their student’s user data. Only being able to access what the student is allowed and also, will have access to contact their student’s teachers. 


 
### Adding/Deleting Users

To add a user the Administrator will need to access Firebase from a browser.

Once on the FireBase console, go to the “Authentication” tab.

Hit “Add User” and enter the email and password.

After the user authentication data is entered the administrator can either enter the user data through the command line or through the FireBase database GUI.

 If the command line option is chosen, the administrator will create a data object of the form “data = {‘Email’:  , “Name”: , “Courses”: []}” 
Followed by the command “db.child(x).child(username).set(data)”

**where x is the desired user type(Teacher, Student, Parent)

If the FireBase web page GUI option is chosen follow the interface and create the directory as the example shows. 

![example1](https://user-images.githubusercontent.com/60556608/161859166-4177fa94-1b43-43db-a5e4-ed8189a8fd95.PNG)


To Delete a User the Administrator must remove the desired account from the authentication list. Furthermore, if the user data is to be deleted the administrator must manually delete the user’s data from the database.  


### Setting User Permissions

User permissions pertaining to navigable options and pages will be handled by the user data object itself.

Controlling the viewing of individual grades, assignment submissions, etc. is controlled by the userdata object populating the paths at runtime for the specific user. 


# Database Maintenance

### Database User/Group Access

The Administrator will have access to the full paths of the database.  As of right now, the two “sub” databases that must be maintained are the user data database which holds all of the user data and the Courses database that will contain data pertaining to the given course.  
The administrator will control the addition/deletion of user accounts and also the addition/deletion of Courses and their corresponding course section.
 
### Setting User Permissions for Database

The permissions will be controlled by the backend through populating the database query with paths generated by a successful login. If a successful login did not occur, queries cannot be sent.  

### Adding/Deleting Groups for Database

Through the command line the administrator may enter the command
“ db.child(x).push(data)”
Where  x is the name of the new group to be added and the “child” method acts as a subdirectory route. 
Where data is the json object to be pushed to the db

### Re-indexing Database

Indexing of the database is done by using the before mentioned “.child” method of the database object. 
Updates to paths and data members can be done by using the “.update” method of the database object. Update can be used to create new paths, edit paths, or to update individual data entirely. 

# Application Maintenance

### Application User/Group Access

FireBase authentication will handle user login.  From there the User object will be returned. Within the user object will be the specific paths of courses, classlists, etc. that will be displayed dynamically through the applications front end using Javascript React.

### Setting User Application Permissions

Permissions pertaining to file uploads and downloads can be set and accessed by the administrator , however, Teachers, for example, will have the ability to add permissions to their submission/ content folders through the front-end of the app. These options will trigger FireBase storage authentication read/write privileges for each specific folder and file. 

### Procedures to Start and Stop the Application

For Administrators:

To start the application, clone the Github repository and run “npm install”.
Open one terminal, change directory into the “api” folder and run the command
 “ py -m app” which will launch the flask server. After that run the command, 
“Npm start” which will launch the development server. Note that this must be done in Chrome or else the hex-grid functionality will be non-existent. 

For Users: 

Login by entering username and password. 

Enjoy!

### Description of Major Program or Sub-program Modules and Application Flow-Chart

Logging in will trigger a query to the database. This query will contain the “username” stripped from the email and is the key to the user data in the database. Once the User-data has been pulled the clients Flask will communicate with the React front-end, relaying course information(honeycomb to show) and any other notifications for the user. 

The user data object will contain the user's name, and most importantly a link to the courses the student is a part of in order to properly display their pages as well as their spot in the navigation. 

In the future, we plan that the database will be able to hold quizzes, which would allow a teacher to both A. make a quiz on honeycomb, and B. limit the amount of space used by a specific course in the Database. 	
