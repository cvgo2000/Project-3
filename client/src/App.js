import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from './components/Navbar'
import Header from './components/Header'
import LogIn from './components/LogIn'

function App() {
  return (
    <>
    <Navbar />
    <Header />
    <LogIn />
    </>
    )
}


export default App;
