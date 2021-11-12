import urllib
import pyrebase
from flask import Flask, render_template
import requests

firebaseConfig={ 'apiKey': "AIzaSyCU6PbIuZrZR8jJ1YKzHpPglPoWS1uCGjA",
  'authDomain': "honeycomb-12277.firebaseapp.com",
  'databaseURL': "https://honeycomb-12277-default-rtdb.firebaseio.com/",
  'projectId': "honeycomb-12277",
  'storageBucket': "honeycomb-12277.appspot.com",
  'messagingSenderId': "877287593105",
  'appId': "1:877287593105:web:7de8392f26aab66d20db30",
  'measurementId': "G-6Y9BPCC05X"}



firebase=pyrebase.initialize_app(firebaseConfig)


db= firebase.database()
auth=firebase.auth()
storage=firebase.storage()


app = Flask(__name__)

##@app.route('/',methods= ['GET'])
##//def index():
  ##    return render_template('index.html')

##if __name__ == '__main__':
  ##    app.run(debug=True);


##@app.route('/send_data', methods = ['POST'])
##def get_data_from_html():
  ##      email = requests.form['email']
    ##    password= requests.form['password']
      ##  try:
        ##  auth.sign_in_with_email_and_password(email, password)
         ## print("Succesfully logged in!")
        ##except:
         ## print("Invalid email or password. Try Again. ")
    
##@app.route("/forward/", methods=['POST'])
##def move_forward():
   
  ##   email = requests.form['email']
    ## password= requests.form['password']
    ## try:
      ##    ##auth.sign_in_with_email_and_password(email, password)
       ##   auth.create_user_with_email_and_password(email, password)
        ##  print("Succesfully logged in!")
     ##except:
       ##   print("Invalid email or password. Try Again. ")
##Logging in

##email= input("Enter you email")
##password=input("Enter your Password.")
##try:
  ##  auth.sign_in_with_email_and_password(email, password)
   ## print("Succesfully logged in!")
##except:
  ##  print("Invalid email or password. Try Again. ")
    
    


###
###email= input("Enter you email")
##password=input("Enter your Password.")
##confirmpass= input("Confirm password")

##if password==confirmpass:
  ##  auth.create_user_with_email_and_password(email, password)
    ##try:
     ##   auth.create_user_with_email_and_password(email, password)
       ## print("Succesful!")
    ##except:
      ##  print("Email already exists")


###storage

##filename=input("Enter the name of the file")
##cloudfilename=input("Enter the new name of the file on the cloud")
##storage.child(cloudfilename).put(filename)
   
   
   
   
###download
##cloudfilename= input("Get Download")

##storage.child(cloudfilename).download("", "download.txt") 
## string = "main/" + User.name + filename


##reading file

##cloudfilename= input("Enter the view")
##url=storage.child(cloudfilename).get_url(None)
##file= urllib.request.urlopen(url).read()
##quiz(file)



##DataBase
##data={"age": 40, 'address' : '123', "name": 'john' }
##db.push(data)
##db.child("teacher").push(data)
##db.child("teacher").child("myownid").set(data)


## update DB
##db.child("teacher").update({'name': 'james'})


##people= db.get() ##folder
##for person in people.each():
  ##  print(person.val())
    ##print(person.key())
    
##delete
##db.child("person").remove()


##import firebase_admin
##from firebase_admin import credentials

##cred = credentials.Certificate("path/to/serviceAccountKey.json")
##firebase_admin.initialize_app(cred)
##