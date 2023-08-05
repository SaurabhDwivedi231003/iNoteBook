import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false); // New state variable for password visibility

  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: credentials.email, password: credentials.password })
      });
      const json = await response.json();
      console.log(json);
      if (json.success) {
        // Save the auth token and redirect
        localStorage.setItem('token', json.authtoken);
        history.push("/");
        props.showAlert("LoggedIn Successfully!", "success")
      } else {
        props.showAlert("Invalid details", "danger")
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div className='container'>
      <div className="main">
        <p className="sign" align="center">Sign in</p>
        <form onSubmit={handleSubmit} className="form1">
          <input
            type="text"
            className="un"
            align="center"
            placeholder="Username"
            name="email"
            value={credentials.email}
            onChange={onChange}
          />
          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              className="pass"
              align="center"
              placeholder="Password"
              name="password"
              value={credentials.password}
              onChange={onChange}
              minLength={5}
              required
            />
            <span className="password-toggle" onClick={togglePasswordVisibility}>
              {showPassword ? 'Hide' : 'Show'}
            </span>
          </div>
          <button type="submit" className="submit" align="center">Sign in</button>
          <p className="forgot" align="center"><a href="#">Forgot Password?</a></p>
        </form>
      </div>
    </div>
  );
}

export default Login;
