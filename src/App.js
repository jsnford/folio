import React from 'react';
import logo from './logo.svg';
import {Router, Route} from "react-router-dom";
import './App.css';


import Header from './Header';
import Projects from './Projects';


function App() {
  return (
    
      <div className="App">
        <Header />
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Ello Jason
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

function Projects() {
  return (
    <Router>
      <Route path={"projects"} />
      <Projects />

    </Router>
  
   
  );
}
export default App;


