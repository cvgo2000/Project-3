import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from './pages/Home'
import UserSignIn from "./pages/UserSignIn";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={UserSignIn} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/favorites" component={Favorites} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
