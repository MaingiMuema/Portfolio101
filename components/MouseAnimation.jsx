"use client"
import { useEffect, useState, useCallback } from 'react';

const MouseAnimation = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [trail, setTrail] = useState([]);
    const [isClicking, setIsClicking] = useState(false);

    const handleMouseMove = useCallback((e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    }, []);

    const handleMouseDown = useCallback(() => setIsClicking(true), []);
    const handleMouseUp = useCallback(() => setIsClicking(false), []);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [handleMouseMove, handleMouseDown, handleMouseUp]);

    useEffect(() => {
        setTrail((prevTrail) => [...prevTrail, mousePosition].slice(-30));
    }, [mousePosition]);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            pointerEvents: 'none',
            zIndex: 9999,
            cursor: 'none',
            width: '100vw',
            height: '100vh',
        }}>
            {/* Custom cursor */}
            <div
                style={{
                    position: 'absolute',
                    left: mousePosition.x - 15,
                    top: mousePosition.y - 15,
                    width: isClicking ? 25 : 30,
                    height: isClicking ? 25 : 30,
                    backgroundColor: 'transparent',
                    border: '2px solid white',
                    borderRadius: '50%',
                    transition: 'all 0.1s ease-out',
                    pointerEvents: 'none',
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    left: mousePosition.x - 5,
                    top: mousePosition.y - 5,
                    width: 10,
                    height: 10,
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
                        width: 8 - index * 0.25,
                        height: 8 - index * 0.25,
                        backgroundColor: `rgba(239, 179, 7, ${1 - index * 0.03})`,
                        borderRadius: '50%',
                        transition: 'all 0.05s ease-out',
                    }}
                />
            ))}
        </div>
    );
};

export default MouseAnimation;