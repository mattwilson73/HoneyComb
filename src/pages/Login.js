import React, { useEffect, useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import "../Honeycomb Login/Honeycomb Login/assets/css/style.css";
import logo from "../Honeycomb Login/Honeycomb Login/assets/img/logo.png";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const history = useHistory();

  const handleUsername = (evt) => {
    setUsername(evt.target.value);
  };

  const handlePassword = (evt) => {
    setPassword(evt.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({ username: username, password: password }),
    };
    fetch("/", requestOptions)
      .then((response) => response.json())
      .then((data) => setStatus(data));
  };

  useEffect(() => {
    if (status.status === "200") {
        history.push('/home');
    }
  }, [status]);
  return (
    <><head>

      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&family=Open+Sans&family=Raleway&display=swap" rel="stylesheet"></link>
    </head><form onSubmit={handleSubmit}>

    <div class="login-div">
                <div class="logo">
                    <img src={logo} alt="Logo" /> </div>
                   
        <label  htmlFor="login">Username:</label>
        <input
        class = "username"
          type="text"
          value={username}
          onChange={handleUsername}
          name="login-username"
          id="login-username" />


<label className="tab" htmlFor="login-password">
    <br></br>
    <br></br>
          Password: 
        </label>
       
        <input
         class = "password"
          type="password"
          value={password}
          onChange={handlePassword}
          name="login-password"
          id="login-password"
          />
            <br></br>
           
           <button class="signin-btn">LOGIN</button>
      
        {status.status === "404" && <span style={{ color: 'red' }}>Invalid username or password</span>}
        </div> </form> </>
   
  );
}

export default withRouter(Login);
