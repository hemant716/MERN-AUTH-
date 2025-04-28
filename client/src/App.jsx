import React from 'react'
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';  
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/sign-in" element={<h1>SignIn</h1>} />
        <Route path="/sign-up" element={<h1>SignUp</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
      </Routes>
    </Router>
  );
}

