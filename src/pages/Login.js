import React, { useEffect, useState } from "react";
import { useHistory, withRouter } from "react-router-dom";

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="login">Username:</label>
      <input
        type="text"
        value={username}
        onChange={handleUsername}
        name="login-username"
        id="login-username"
      />
      <label className="tab" htmlFor="login-password">
        Password:
      </label>
      <input
        type="password"
        value={password}
        onChange={handlePassword}
        name="login-password"
        id="login-password"
      />
      <input
        className="tab"
        type="submit"
        value="Login"
        disabled={username.length === 0 || password.length === 0}
      />
      {status.status === "404" && <span style={{ color: 'red' }}>Invalid username or password</span>}
    </form>
  );
}

export default withRouter(Login);
