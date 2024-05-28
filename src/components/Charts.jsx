import React, { useState, useEffect } from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import { FaChartBar } from "react-icons/fa";
import { HiMinus, HiPlus } from "react-icons/hi";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { FaUser } from "react-icons/fa";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const areaPoostsData = (label) => ({
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: label,
      data: [0, 0, 18, 14, 15, 5, 41, 13, 22, 31, 14, 35, 16],
      fill: true,
      backgroundColor: "#4F98C3",
      borderColor: "#4F98C3",
      borderWidth: 1,
      tension: 0.4,
    },
  ],
});

const barUsersData = (label) => ({
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: label,
      data: [6, 5, 8, 1, 5, 5, 4, 1, 2, 3, 4, 5, 6],
      fill: false,
      backgroundColor: "#00A65A",
      borderColor: "rgba(75,192,192,1)",
      borderWidth: 1,
    },
  ],
});

const areaReelsData = (label) => ({
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: label,
      data: [0, 0, 18, 14, 15, 5, 41, 13, 22, 31, 14, 35, 16],
      fill: true,
      backgroundColor: "#4F98C3",
      borderColor: "#4F98C3",
      borderWidth: 1,
      tension: 0.4,
    },
  ],
});

const pieData = {
  labels: ["paid for ads", "paid for video", "paid for gift"],
  datasets: [
    {
      data: [25, 50, 40],
      backgroundColor: ["#00A65A", "#007BFF", "#FF0000"],
      hoverBackgroundColor: ["#00A65A", "#007BFF", "#FF0000"],
    },
  ],
};

const coinData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Coin Exchanged",
      data: [
        4000, 9000, 3500, 5000, 7000, 3000, 6500, 5500, 4000, 7000, 6500, 7500,
      ],
      backgroundColor: "red",
    },
    {
      label: "Coin Purchased",
      data: [
        3200, 11000, 6000, 4000, 6500, 3000, 6200, 5500, 4000, 7000, 6500, 7500,
      ],
      backgroundColor: "green",
    },
    {
      label: "Coin Transferred",
      data: [
        2800, 3600, 3000, 4200, 4500, 2800, 3500, 4000, 3000, 4500, 4000, 5000,
      ],
      backgroundColor: "yellow",
    },
  ],
};

const chartsStyle = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    bar: {
      barThickness: 5,
      maxBarThickness: 5,
    },
  },
};

const chartOptions = {
  plugins: {
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          const data = tooltipItem.dataset.data;
          const total = data.reduce((acc, value) => acc + value, 0);
          const currentValue = data[tooltipItem.dataIndex];
          const percentage = ((currentValue / total) * 100).toFixed(2);
          return `${percentage}%`;
        },
      },
    },
    datalabels: {
      formatter: (value, ctx) => {
        const datasets = ctx.chart.data.datasets;
        if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
          const sum = datasets[0].data.reduce((a, b) => a + b, 0);
          const percentage = ((value / sum) * 100).toFixed(2) + "%";
          return percentage;
        } else {
          return "";
        }
      },
      color: "#fff",
    },
  },
  maintainAspectRatio: false,
};

const Charts = () => {
  const [openChart, setIsOpenChart] = useState(true);

  const toggleChart = () => {
    setIsOpenChart(!openChart);
  };

  // Use useEffect to ensure the charts are rendered immediately
  useEffect(() => {
    // Trigger a re-render to ensure charts are displayed immediately
    setIsOpenChart(true);
  }, []);

  return (
    <div className="md:pl-6">
      <div className="flex items-center justify-between mt-4 mb-6">
        <div className="flex items-center gap-2">
          <FaChartBar />
          <h3>Annual report</h3>
        </div>
        <div className="mr-2 cursor-pointer">
          {openChart ? (
            <HiMinus onClick={toggleChart} />
          ) : (
            <HiPlus onClick={toggleChart} />
          )}
        </div>
      </div>
      {openChart ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 sm:gap-x-20 md:gap-x-8">
          <div className="w-full h-60">
            <h2 className="mb-2">Posts</h2>
            <Line data={areaPoostsData("Posts")} options={chartsStyle} />
          </div>
          <div className="w-full h-64">
            <h2 className="mb-2">Users</h2>
            <Bar data={barUsersData("Users")} options={chartsStyle} />
          </div>
          <div className="w-full h-60">
            <h2 className="mb-2">Reels</h2>
            <Line data={areaReelsData("Reels")} options={chartsStyle} />
          </div>
          <div className="w-full h-60">
            <h2 className="mb-2">Payments</h2>
            <Pie data={pieData} options={chartOptions} />
          </div>
          <div className="w-full h-80 md:h-60">
            <h2 className="mb-2">Coins</h2>
            <Bar data={coinData} options={chartsStyle} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Charts;