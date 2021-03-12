import React from "react";
import LogIn from "../components/LogIn/LogIn";
import SignIn from "../components/SignUp/SignUp";

const UserSignIn = () => {
  return (
    <div className="container">
      <div className="row" id="sign">
        <h1>Please log in or sign up</h1>
      </div>
      <div className="row">
        <hr></hr>
        <div className="col-lg-6">
          <LogIn />
        </div>
        <hr></hr>
        <div className="col-lg-6">
          <SignIn />
        </div>
      </div>
    </div>
  );
};

export default UserSignIn;
