import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarGraph = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Amount of Flour',
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 6) + 1), // Random data
        backgroundColor: 'rgba(189, 216, 176, 1)',
        borderColor: ' rgb(12, 147, 102)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 6,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarGraph;