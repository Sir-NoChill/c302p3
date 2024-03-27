'use client'

import React from 'react';
import styles from './page.module.css';
import Chart from "chart.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register ChartJS components using ChartJS.register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip
);
const BarChart = () => {
  const labels = ["January", "February", "March", "April", "May", "June"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

const GraphPage = () => {
  const data = [
    { factor: "Factor 1", significance: 0.8, tooltip: "Explanation of Factor 1" },
    { factor: "Factor 2", significance: 0.6, tooltip: "Explanation of Factor 2" },
    { factor: "Factor 3", significance: 0.9, tooltip: "Explanation of Factor 3" },
    // Add more data as needed
  ];

  return (
    <div className={styles.graphPage}>
      <h1>Graph Page</h1>
      <div className={styles.graphContainer}>
        <h2>Significance vs. Factors</h2>
        <BarChart />
      </div>
    </div>
  );
};

export default GraphPage;
