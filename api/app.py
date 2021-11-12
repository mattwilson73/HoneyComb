##dummy1@zug.edu
##password1
import User
import firebase_admin
import pyrebase
import json
from firebase_admin import credentials, auth
from flask import Flask, request, render_template, redirect, url_for
#App configuration
app = Flask(__name__)
#Connect to firebase
cred = credentials.Certificate('honey_combAdmin.json')
firebase = firebase_admin.initialize_app(cred)
pb = pyrebase.initialize_app(json.load(open('config.json')))
User_OBJ= None

if __name__ == '__main__':
      app.run(debug=True);

firebaseConfig={ 'apiKey': "AIzaSyCU6PbIuZrZR8jJ1YKzHpPglPoWS1uCGjA",
  'authDomain': "honeycomb-12277.firebaseapp.com",
  'databaseURL': "https://honeycomb-12277-default-rtdb.firebaseio.com/",
  'projectId': "honeycomb-12277",
  'storageBucket': "honeycomb-12277.appspot.com",
  'messagingSenderId': "877287593105",
  'appId': "1:877287593105:web:7de8392f26aab66d20db30",
  'measurementId': "G-6Y9BPCC05X"}

firebase=pyrebase.initialize_app(firebaseConfig)
auth=firebase.auth()
storage=firebase.storage() ##file storage, quiz
db= firebase.database() ##json User


@app.route('/',methods= ['GET'])
def index():
      return {"status": "404"}


@app.route('/', methods = ['POST'])
def login():
    if request.method == 'POST':
        data = request.get_json()
        username = data['username']
        password = data['password']
        ##print(username + '\n' + password)
        try:
          auth.sign_in_with_email_and_password(username, password)
          
         ## User_obj= db.child("Users").get()
         ## for x in User_obj.each():
           ##     if x.email == username:
             ##          User = User(x.Status, x.Name, x.Email)
          
          print("Succesfully logged in!")
        ## print(user)
          return {"status": "200"}
        except:
          print("Invalid email or password. Try Again. ")
    return {"status": "404"}
  
@app.route('/Home', methods= ['GET'])
def Home():
      return {"status": "200"}
    
@app.route('/Home', methods =['POST'])
def Homepage():
      return {"status": "200"}





























##def check_token(f):
    ##@wraps(f)
  ##  def wrap(*args,**kwargs):
    ##    if not request.headers.get('authorization'):
      ##      return {'message': 'No token provided'},400
       ## try:
         ##   user = auth.verify_id_token(request.headers['authorization'])
          ##  request.user = user
        ##except:
         ##   return {'message':'Invalid token provided.'},400
       ## return f(*args, **kwargs)












##    return wrap
#Api route to get users
##@app.route('/api/userinfo')
##def userinfo():
  ##  return {'data': users}, 200
#Api route to sign up a new user
##@app.route('/api/signup')
##def signup():
  ##  email = request.form.get('email')
    ##password = request.form.get('password')
    ##if email is None or password is None:
      ##  return {'message': 'Error missing email or password'},400
    ##try:
      ##  user = auth.create_user(
        ##       email=email,
          ##     password=password
        ##)
        ##return {'message': f'Successfully created user {user.uid}'},200
    ##except:
      ##  return {'message': 'Error creating user'},400
#Api route to get a new token for a valid user
##@app.route('/api/token')
##def token():
  ##  email = request.form.get('email')
    ##password = request.form.get('password')
    ##try:
      ##  user = pb.auth().sign_in_with_email_and_password(email, password)
        #3#jwt = user['idToken']
        ##return {'token': jwt}, 200
    ##except:
      ##  return {'message': 'There was an error logging in'},400
if __name__ == '__main__':
  app.run(debug=True)