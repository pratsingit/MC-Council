import { auth } from './config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import logoImage from './logo1.png';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Authsignin = () => {
  const [email, setEmail] = useState("");
  const [passwd, setPassword] = useState("");
  const [name, setName] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, passwd);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div className="login-container">
      <img src={logoImage} alt="MC Council Logo" className="login-image" />
      <div className="login-form">
        <input
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="name"
          className="login-input"
        />
        <input
          placeholder="Set Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="login-input"
        />
      </div>
      <input
        placeholder="Set Password"
        onChange={(e) => setPassword(e.target.value)}
        value={passwd}
        type="password"
        className="login-input"
      />
      <button onClick={signIn} className="login-button">
        Sign Up
      </button>

      <button className="nav-button">
        <Link to="/LoginForm">
          <button className="nav-button">Existing User? Log In</button>
        </Link>
      </button>
    </div>
  );
};

export default Authsignin;
