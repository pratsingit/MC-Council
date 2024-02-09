// LoginForm.jsx
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import logoImage from './logo1.png';
import { Link } from 'react-router-dom';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const verifyUser = async () => {
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User logged in:', user);
      navigate('/');
    } catch (error) {
      console.error('Error signing in:', error);
      setError(error.message);
    }
  };

  return (
    <div className="login-container">
      <img src={logoImage} alt="MC Council Logo" className="login-image" />
      <div className="login-form">
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button onClick={verifyUser} className="login-button">
          Log In
        </button>
        
        <button className="nav-button">
        
          <Link to="/Cuser">
          <button className="nav-button">New User? Sign Up</button>
          </Link>
        </button>

        {error && <p className="login-error">{error}</p>}
      </div>
    </div>
  );
};

export default Auth;
