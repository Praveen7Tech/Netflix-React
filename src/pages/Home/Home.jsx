import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
//import hero from "../../assets/hero.jpg"

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <div className="hero-overlay">
          <h1>Unlimited movies, TV shows and more</h1>
          <h4>Starts at ₹149. Cancel at any time.</h4>
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="getStarted">
            <input type="text" placeholder='Email Address'/>
            <button>Get Started</button>
          </div>
        </div>
        <div className="hero-bottom-desighn"></div>
      </div>
    </div>
  );
};


export default Home
