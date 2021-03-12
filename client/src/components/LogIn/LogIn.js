import React from "react";
import "../LogIn/style.css"

const LogIn = () => {
  
  
  //handleChange & handleSubmit????
  
  
  //For redirecting to Favorites page???
  //under handleSubmit function --> put <Redirect to="/ticket-list"/>;?
  
  
  
  return (
    <div className="container">
      <div className="login">
        <form>
          <h3>Log In</h3>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
          <p className="forgot-link">
            Forgot <a href="#">password?</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
