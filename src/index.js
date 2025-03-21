import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Form() {
  return (
    <div className="container">
      <form className="form">
        {/* #1 : Username */}
        <div className="form-input">
          <label>Username</label>
          <input type="text" />
          <small>Please enter your username at least 8 characters</small>
        </div>
        {/* #2 : Email */}
        <div className="form-input">
          <label>Email</label>
          <input type="email" />
          <small>Email's format is incorrect.</small>
        </div>
        {/* #3 : Password */}
        <div className="form-input">
          <label>Password</label>
          <input type="passsword" />
          <small>Please enter your password at least 8 characters</small>
        </div>
        {/* #4 : Confirm Password */}
        <div className="form-input">
          <label>Confirm Password</label>
          <input type="password" />
          <small>Confirm password doesn't match with your password</small>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Form />);
