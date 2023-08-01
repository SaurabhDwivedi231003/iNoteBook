import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
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
      if(json.success){
        //Save the auth token and redirect
        localStorage.setItem('token' , json.authtoken);
        history.push("/");
      }
      else{
          alert("Invalid Credentials");
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
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={credentials.email}
            onChange={onChange}
            aria-describedby="emailHelp"
            placeholder="Enter email"
            required
          />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'} // Toggle between 'text' and 'password' based on showPassword state
              className="form-control"
              id="password"
              name="password"
              onChange={onChange}
              required
              minLength={5}
            />
            <span className="password-toggle" onClick={togglePasswordVisibility}>
              {showPassword ? 'Hide' : 'Show'}
            </span>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Login;
