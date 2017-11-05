import React from 'react';

const LoginPage = (props) => {
  return (
    <div className="container">

    <form>
    <label><h1>Member Login</h1></label>

    <label><b>Username</b></label>
    <input
      type= "email"
      value={props.login.username}
      placeholder="abc@xyz.com"
      onChange={(e) => props.username(e.target.value)}
      required
      />

    <label><b>Password</b></label>
    <input
      type='password'
      value={props.login.password}
      placeholder="Enter Password"
      onChange={(e) => props.password(e.target.value)}
      required
      />
      </form>
    <button type="button" onClick={() => props.login(props.username1, props.password1)}>Login</button>
    </div>
);
}

export default LoginPage;
