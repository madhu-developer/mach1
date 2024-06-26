import React from 'react'
import "./App.css";
import { Login } from './Login';
import { Header } from './Header';
import { Sidenav } from './Sidenav';
import { Routes, Route } from 'react-router-dom';
import { Projects } from './Projects';
import { EachProject } from './EachProject';

const App = () => {
  return (
    <div className="main-container">
     <Header/>
      <div className="body">
      <Sidenav/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/projects/:project" element={<EachProject/>}/>
      </Routes>
    </div>
    </div>
  )
}

export default App;