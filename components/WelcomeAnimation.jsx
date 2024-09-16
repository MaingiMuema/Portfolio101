"use client"
import React, { useState, useEffect } from 'react';
import './WelcomeAnimation.css';

const WelcomeAnimation = ({ onAnimationComplete }) => {
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (animationStage < 4) {
        setAnimationStage(animationStage + 1);
      } else {
        onAnimationComplete();
      }
    }, 600);

    return () => clearTimeout(timer);
  }, [animationStage, onAnimationComplete]);

  return (
    <div className="welcome-animation">
      <div className={`welcome-text ${animationStage >= 1 ? 'animate' : ''}`}>Welcome</div>
      <div className={`to-text ${animationStage >= 2 ? 'animate' : ''}`}>to</div>
      <div className={`app-name ${animationStage >= 3 ? 'animate' : ''}`}>My Portfolio</div>
      <button 
        className={`interactive-element ${animationStage >= 4 ? 'animate' : ''}`} 
        onClick={onAnimationComplete}
      >
        Be Inspired!
      </button>
      <div className="floating-shape shape1" style={{animation: 'float 6s ease-in-out infinite, pulse 4s ease-in-out infinite'}}></div>
      <div className="floating-shape shape2" style={{animation: 'float 8s ease-in-out infinite, pulse 6s ease-in-out infinite'}}></div>
      <div className="floating-shape shape3" style={{animation: 'float 7s ease-in-out infinite, pulse 5s ease-in-out infinite'}}></div>
    </div>
  );
};

export default WelcomeAnimation;