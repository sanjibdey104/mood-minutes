import { Chart } from "chart.js";
import React, { useContext } from "react";
import { Bar } from "react-chartjs-2";
import { MoodDataContext } from "../context/MoodContext";
import { moodFrequencyData } from "../data/MoodFrequencyData";

Chart.defaults.font.family = "'Playfair Display', serif";
Chart.defaults.font.size = 15;

const options = {
  scales: {
    y: {
      ticks: {
        stepSize: 1,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const MoodFrequencyChart = () => {
  const { moodLogs, moodMojis } = useContext(MoodDataContext);
  const { moodLabels, moodFrequency } = moodFrequencyData(moodLogs, moodMojis);

  const data = {
    labels: moodLabels,
    datasets: [
      {
        label: "frequency",
        data: moodFrequency,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 200, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 200, 64, 0.2)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Bar data={data} options={options} />;
};

export default MoodFrequencyChart;
