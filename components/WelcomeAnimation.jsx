"use client"
import React, { useState, useEffect, useRef } from 'react';
import './WelcomeAnimation.css';

const WelcomeAnimation = ({ onAnimationComplete }) => {
  const [animationStage, setAnimationStage] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (animationStage < 4) {
        setAnimationStage(animationStage + 1);
      } else {
        onAnimationComplete();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [animationStage, onAnimationComplete]);

  useEffect(() => {
    const container = containerRef.current;
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animation = `floatParticle ${5 + Math.random() * 5}s ease-in-out infinite`;
      container.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 10000);
    };

    const intervalId = setInterval(createParticle, 200);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="welcome-animation" ref={containerRef}>
      <div className="content-wrapper">
        <div className={`element welcome-text ${animationStage >= 1 ? 'animate' : ''}`}>Welcome</div>
        <div className={`element to-text ${animationStage >= 2 ? 'animate' : ''}`}>to</div>
        <div className={`element app-name ${animationStage >= 3 ? 'animate' : ''}`}>My Portfolio</div>
        <button 
          className={`element interactive-element ${animationStage >= 4 ? 'animate' : ''}`} 
          onClick={onAnimationComplete}
        >
          Be Inspired!
        </button>
      </div>
    </div>
  );
};

export default WelcomeAnimation;