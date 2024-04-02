// Importing necessary dependencies from React library
import React from 'react';

// Importing custom CSS file for styling
import './LoginForm.css';

// Defining a functional component named LoginForm
const LoginForm = () => {
  return (
    // JSX code representing the structure of LoginForm component
    <div className="login-form">
      {/* Heading with text 'Log In' */}
      <h3>Log In</h3>
      {/* Username input field */}
      <div className="input-field">
        <input type="text" placeholder="Username" />
      </div>
      {/* Password input field */}
      <div className="input-field">
        <input type="password" placeholder="Password" />
      </div>
    </div>
  );
};

// Exporting the LoginForm component to be used elsewhere in the application
export default LoginForm;

