import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Form() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [userNameColor, setUserNameColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate username
    if (username.length >= 8) {
      setErrorUserName("");
      setUserNameColor("green");
    } else {
      setErrorUserName("Please enter your username for at least 8 characters");
      setUserNameColor("red");
    }
    // Validate email
    if (email.includes("@")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setErrorEmail("Email's format is incorrect.");
      setEmailColor("red");
    }
    // Validate Password
    if (password.length >= 8) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword("Please enter your password at least 8 characters");
      setPasswordColor("red");
    }
    // Validate Confirm Password
    if (confirmPassword === password) {
      setErrorConfirmPassword("");
      setConfirmPasswordColor("green");
    } else {
      setErrorConfirmPassword(
        "Confirm password does not match with your password"
      );
      setConfirmPasswordColor("red");
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        {/* #1 : Username */}
        <div className="form-input">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            style={{ borderColor: userNameColor }}
          />
          <small style={{ color: userNameColor }}>{errorUserName}</small>
        </div>
        {/* #2 : Email */}
        <div className="form-input">
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ borderColor: emailColor }}
          />
          <small style={{ color: emailColor }}>{errorEmail}</small>
        </div>
        {/* #3 : Password */}
        <div className="form-input">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ borderColor: passwordColor }}
          />
          <small style={{ color: passwordColor }}>{errorPassword}</small>
        </div>
        {/* #4 : Confirm Password */}
        <div className="form-input">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{ borderColor: confirmPasswordColor }}
          />
          <small style={{ color: confirmPasswordColor }}>
            {errorConfirmPassword}
          </small>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Form />);
