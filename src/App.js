import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Chat from './Chat';
import Regisration from './Registration';
import Login from './Login';

function App() { 
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/chat" element={<Chat/>} />
          <Route path="/registration" element={<Regisration/>} />
        </Routes>
      </Router>
    );
  }
  
  export default App;