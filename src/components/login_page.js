import React from 'react';

const LoginPage = (props) => {
  return (
    <div className="login-page-container">
    <div className="header">
      <div className="logo-container">LOGO</div>
      <div className="text-container">REACT APP</div>
    </div>
    <div className="container">
      <form className="form-signin">
        <div className="login-title">
          <label><h5>Login Form</h5></label>
        </div>
        <input
          type= "email"
          value={props.login.username}
          placeholder="Username"
          onChange={(e) => props.username(e.target.value)}
          required
        />
        <input
          type='password'
          value={props.login.password}
          placeholder="Password"
          onChange={(e) => props.password(e.target.value)}
          required
        />
        <button className="btn btn-primary btn-md" type="button" onClick={() => props.login(props.username1, props.password1)}>Login</button>
      </form>
    </div>
    </div>
);
}

export default LoginPage;
