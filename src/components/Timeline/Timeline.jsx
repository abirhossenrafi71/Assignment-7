import React, { useContext, useState, useMemo } from "react";
import { TimelineContext } from "../Root/Root";
import { LuPhone, LuMessageSquare, LuVideo, LuFilter } from "react-icons/lu";

const Timeline = () => {
  const { timelineData } = useContext(TimelineContext);

  const [filter, setFilter] = useState("All");

  const filteredData = useMemo(() => {
    if (filter === "All") return timelineData;
    return timelineData.filter((item) => item.type === filter);
  }, [timelineData, filter]);

  const filterButtons = [
    { label: "All", icon: <LuFilter />, color: "gray" },
    { label: "Call", icon: <LuPhone />, color: "emerald" },
    { label: "Text", icon: <LuMessageSquare />, color: "blue" },
    { label: "Video", icon: <LuVideo />, color: "purple" },
  ];

  return (
    <div className="p-8 container mx-auto max-w-2xl bg-white min-h-screen">
      <h1 className="text-5xl font-bold mb-8 text-[#111827]">Timeline</h1>

      <div className="grid grid-cols-4 gap-3 mb-10">
        {filterButtons.map((btn) => (
          <button
            key={btn.label}
            onClick={() => setFilter(btn.label)}
            className={`flex flex-col items-center gap-2 p-3 rounded-2xl border transition-all active:scale-95 ${filter === btn.label
              ? "bg-gray-900 text-white border-gray-900 shadow-md"
              : "bg-gray-50 text-gray-600 border-gray-100 hover:border-gray-300"
              }`}
          >
            <span className="text-xl">{btn.icon}</span>
            <span className="text-xs font-bold">{btn.label}</span>
          </button>
        ))}
      </div>
      <div className="space-y-8">
        {filteredData.length === 0 ? (
          <div className="pl-8 text-gray-400 italic">
            {filter !== "All"
              ? `No ${filter} logs found.`
              : "No activities logged yet."}
          </div>
        ) :
          (
            filteredData.map((item) => (
              <div key={item.id} className="relative pl-8 group">
                <div className="absolute -left-3.25 top-4 bg-white p-1">

                </div>

                <div className="flex items-center gap-5 p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div
                    className={`p-3 rounded-xl text-2xl ${item.type === "Call"
                      ? "bg-emerald-50 text-emerald-600"
                      : item.type === "Text"
                        ? "bg-blue-50 text-blue-600"
                        : "bg-amber-50 text-amber-600"
                      }`}
                  >
                    {item.type === "Call" && <LuPhone />}
                    {item.type === "Text" && <LuMessageSquare />}
                    {item.type === "Video" && <LuVideo />}
                  </div>

                  <div className="flex-1">
                    <div className="text-lg">
                      <span className="font-bold text-gray-800">{item.type}</span>
                      <span className="text-gray-500 ml-2 italic text-sm text-opacity-70">
                        with {item.userName}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mt-1 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                      <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded italic">
                        {item.timestamp}
                      </span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
      </div>
    </div>
  );
};

export default Timeline;
