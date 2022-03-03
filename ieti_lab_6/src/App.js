import React from 'react';
import Login from './components/Login';
import Task from './components/Task';

import './App.css';
import {
  BrowserRouter as Router, 
  Routes,
  Route, 
  Link
} from 'react-router-dom'; 


function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path = "/login" element= {<Login />}>
          </Route>
          <Route path = "/" element = {<h>INICIO</h>}>
          </Route>
          <Route path = "/task" element= {<Task />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
