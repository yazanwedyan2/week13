// Importing necessary dependencies from React library
import React from 'react';

// Importing custom CSS file for styling
import './Navigation.css';

// Defining a functional component named Navigation
const Navigation = () => {
  return (
    // JSX code representing the structure of Navigation component
    <nav className="navbar">
      {/* Navigation links */}
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
  );
};

// Exporting the Navigation component to be used elsewhere in the application
export default Navigation;
