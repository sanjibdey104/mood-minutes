import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["12", "13", "14", "15", "16", "17"],
  datasets: [
    {
      label: "mood swing",
      data: [0, 2, 1, 4, 5, 3],
      fill: false,
      backgroundColor: "#023e8a",
      borderColor: "#90e0ef",
    },
  ],
};

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
          }
        },
        color: "#023e8a",
      },
    },
  },
};

const MoodChart = () => {
  return <Line data={data} options={options} />;
};

export default MoodChart;
