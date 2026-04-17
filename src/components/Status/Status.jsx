import React, { useContext } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { TimelineContext } from "../Root/Root";
ChartJS.register(ArcElement, Tooltip, Legend);

const Status = () => {
  const { timelineData } = useContext(TimelineContext);
  const callCount = timelineData.filter((item) => item.type === "Call").length;
  const textCount = timelineData.filter((item) => item.type === "Text").length;
  const videoCount = timelineData.filter(
    (item) => item.type === "Video",
  ).length;

  const data = {
    labels: ["Call", "Text", "Video"],
    datasets: [
      {
        data: [callCount, textCount, videoCount],

        backgroundColor: ["#10B981", "#3B82F6", "#8B5CF6"],
        hoverBackgroundColor: ["#059669", "#2563EB", "#7C3AED"],
        borderWidth: 0,
        cutout: "70%",
        spacing: 10,
        borderRadius: 8,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          padding: 20,
          usePointStyle: true,
          font: { size: 14, weight: "bold" },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => ` ${context.label}: ${context.raw} interactions`,
        },
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-6 bg-gray-50 rounded-3xl">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          Fridends Analytics
        </h2>
        <p className="text-gray-500 mt-2 font-medium">By Interaction Type</p>
      </div>

      <div className="relative h-100 w-full max-w-125 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        {timelineData.length === 0 ? (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 italic">
            No data available to visualize
          </div>
        ) : (
          <Doughnut data={data} options={options} />
        )}

        {timelineData.length > 0 && (
          <div className="absolute top-[46%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <span className="text-4xl font-black text-gray-800">
              {timelineData.length}
            </span>
            <p className="text-[10px] uppercase font-bold text-gray-400">
              Total
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Status;
