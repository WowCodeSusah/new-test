import React, { useEffect, useState } from 'react';
import './CircularProgressBar.css';

const CircularProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [showCheckmark, setShowCheckmark] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100);
    }, 100); // Start the animation immediately on mount

    const checkmarkTimer = setTimeout(() => {
      setShowCheckmark(true);
    }, 600); // Show the checkmark after the progress bar is full

    return () => {
      clearTimeout(timer);
      clearTimeout(checkmarkTimer);
    };
  }, []);

  const radius = 93; // Increased radius for a bigger circle
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="progress-container">
      <svg className="progress-ring" width="200" height="200">
        <g className="progress-ring__group">
          <circle
            className="progress-ring__circle"
            stroke="#bdd8b0"
            strokeWidth="7"
            fill="transparent"
            r={radius}
            cx="100"
            cy="100"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: offset,
              transition: 'stroke-dashoffset 0.5s ease',
            }}
          />
        </g>
        <path
          className={`checkmark ${showCheckmark ? 'visible' : ''}`}
          fill="none"
          stroke="#bdd8b0"
          strokeWidth="12"
          strokeLinecap="round"
          d="M50 100 L85 135 L150 70"
        />
      </svg>
    </div>
  );
};

export default CircularProgressBar;
