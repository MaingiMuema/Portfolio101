"use client"
import Navbar from '../components/Navbar';
import PortfolioGrid from './PortfolioGrid';
import ContactSection from './ContactSection';
import WelcomeAnimation from './WelcomeAnimation';
import { useState } from 'react';

export default function LandingPage() {
    const [showMainContent, setShowMainContent] = useState(false);

    const handleAnimationComplete = () => {
        setShowMainContent(true);
      };

  return (
    <div>
        {!showMainContent && <WelcomeAnimation onAnimationComplete={handleAnimationComplete} />}
        {showMainContent && (
            <>
                <Navbar />
                <PortfolioGrid />
                <ContactSection />
            </>
        )}
        
    </div>
  );
}