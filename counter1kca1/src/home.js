// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <h1>Welcome to the Counter App</h1>
        <p>This app connects to a smart contract to manage a number and message on the blockchain.</p>
        <Link to="/app">
          <button>Enter App</button>
        </Link>
      </header>
    </div>
  );
}

export default Home;
