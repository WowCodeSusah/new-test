import React, { useRef, useEffect, useState } from "react";
import "./Donutchart.scss";

// eslint-disable-next-line react/prop-types
const DonutChart = ({ percentage }) => {
  const [radius, setRadius] = useState(0);
  const strokeWidth = 10;

  // Reference to the SVG container
  const svgRef = useRef(null);

  useEffect(() => {
    // Calculate the radius based on the size of the SVG container
    const svgElement = svgRef.current;
    if (svgElement) {
      const width = svgElement.clientWidth;
      const height = svgElement.clientHeight;
      const smallerDimension = Math.min(width, height);
      const newRadius = (smallerDimension - strokeWidth) / 2;
      setRadius(newRadius);
    }
  }, [percentage]);

  const circumference = 2 * Math.PI * radius;
  const progress = percentage / 100;
  const dashoffset = circumference * (1 - progress);

  return (
    <svg
      ref={svgRef}
      className="donut-chart-manager"
      width="85%"
      height="100%"
      viewBox={`0 0 ${radius * 2} ${radius * 2}`}
    >
      <circle
        className="donut-circle-manager"
        r={radius}
        cx={radius}
        cy={radius}
        strokeWidth={strokeWidth}
        transform={`rotate(-90 ${radius} ${radius})`}
      />
      <circle
        className="donut-segment-manager"
        r={radius}
        cx={radius}
        cy={radius}
        strokeWidth={strokeWidth}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={dashoffset}
        transform={`rotate(-90 ${radius} ${radius})`}
      />
      <text className="donut-text-manager" x={radius} y={radius + 6}>
        {percentage}%
      </text>
    </svg>
  );
};

export default DonutChart;