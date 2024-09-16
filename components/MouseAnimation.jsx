"use client"
import { useEffect, useState } from 'react';

const MouseAnimation = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [trail, setTrail] = useState([]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        setTrail((prevTrail) => [...prevTrail, mousePosition].slice(-20));
    }, [mousePosition]);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            pointerEvents: 'none',
            zIndex: 9999,
            cursor: 'none', // Add this line to hide the default cursor
            width: '100vw',  // Add this to cover the entire viewport
            height: '100vh', // Add this to cover the entire viewport
        }}>
            {/* Custom cursor */}
            <div
                style={{
                    position: 'absolute',
                    left: mousePosition.x - 10, // Center the custom cursor
                    top: mousePosition.y - 10,  // Center the custom cursor
                    width: 20,
                    height: 20,
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                }}
            />
            {trail.map((point, index) => (
                <div
                    key={index}
                    style={{
                        position: 'absolute',
                        left: point.x,
                        top: point.y,
                        width: 10 - index * 0.5,
                        height: 10 - index * 0.5,
                        backgroundColor: `rgba(255, 255, 255, ${1 - index * 0.05})`,
                        borderRadius: '50%',
                        transition: 'all 0.1s ease-out',
                    }}
                />
            ))}
        </div>
    );
};

export default MouseAnimation;