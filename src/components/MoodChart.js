import React from "react";
import { Line } from "react-chartjs-2";

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
};

const MoodChart = ({ moodData, sevenDaysLabel }) => {
  const data = {
    labels: sevenDaysLabel,
    datasets: [
      {
        label: "mood swing",
        data: moodData,
        fill: false,
        backgroundColor: "#023e8a",
        borderColor: "#90e0ef",
      },
    ],
  };

  return <Line data={data} options={options} />;
};

export default MoodChart;
