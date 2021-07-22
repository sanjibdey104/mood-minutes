import { Chart } from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";
import { weeklyMoodData } from "../data/WeeklyMoodData";

Chart.defaults.font.family = "'Playfair Display', serif";
Chart.defaults.font.size = 15;

const options = {
  responsive: true,
  scales: {
    x: {
      ticks: {
        color: "#023e8a",
      },
    },
    y: {
      ticks: {
        callback: function (label, index, labels) {
          switch (label) {
            case 0:
              return "sad";
            case 1:
              return "nervous";
            case 2:
              return "angry";
            case 3:
              return "confused";
            case 4:
              return "neutral";
            case 5:
              return "happy";
            case 6:
              return "cool";
            default:
              return null;
          }
        },
        color: "#023e8a",
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
  },
};

const MoodChart = ({ moodLogs }) => {
  const { filteredMoodData, lastSevenDays } = weeklyMoodData(moodLogs);

  const data = {
    labels: lastSevenDays,
    showLines: true,
    datasets: [
      {
        data: filteredMoodData,
        fill: false,
        borderColor: "#c4baff",
        pointBackgroundColor: "#7b2cbf",
        pointRadius: 6,
        spanGaps: true,
        showLine: true,
        tension: 0,
      },
    ],
  };
  return <Line data={data} options={options} />;
};

export default MoodChart;
