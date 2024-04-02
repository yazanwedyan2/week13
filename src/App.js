import logo from './logo.svg';
import './App.css';
// Importing necessary dependencies from React library
import React from 'react';

// Importing custom components and CSS files
import LoginForm from './LoginForm';
import Navigation from './Navigation';

// Defining a functional component named App
function App() {
  return (
    // JSX code representing the structure of the App component
    <div className="App">
      {/* Navigation component */}
      <Navigation />
      {/* Content section containing LoginForm component */}
      <div className="content">
        <LoginForm />
      </div>
    </div>
  );
}

// Exporting the App component to be used as the main component of the application
export default App;


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


