import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

import { TimelineContext } from "../Root/Root";
import {
  LuAlarmClock,
  LuArchive,
  LuTrash2,
  LuPhone,
  LuMessageSquare,
  LuVideo,
} from "react-icons/lu";

const Userdetails = () => {
  const userDetails = useLoaderData();
  const navigate = useNavigate();

  const { handleCheckIN: updateTimeline } = useContext(TimelineContext);

  const onActionClick = (type) => {
    updateTimeline(type, userDetails.name);

    let SelectedIcon;
    if (type === "Call")
      SelectedIcon = <LuPhone className="text-emerald-600" />;
    else if (type === "Text")
      SelectedIcon = <LuMessageSquare className="text-blue-600" />;
    else SelectedIcon = <LuVideo className="text-purple-600" />;

    toast.success(`${type} with ${userDetails.name}`, {
      icon: SelectedIcon,
      position: "top-right",
      autoClose: 3000,
    });
  };

  const handleNavigatePrevious = () => navigate(-1);

  return (
    <div className="max-w-6xl mx-auto bg-white p-6 mt-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/3 space-y-4">
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handleNavigatePrevious}
            className="flex btn items-center gap-3"
          >
            <FaLongArrowAltLeft /> Previous
          </button>
          <button className="btn flex items-center gap-3">
            Next <FaLongArrowAltRight />
          </button>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm">
          <img
            src={userDetails.picture}
            className="w-24 h-24 rounded-full border-4 border-slate-700 object-cover mb-4"
            alt={userDetails.name}
          />
          <h2 className="text-2xl font-bold text-gray-800">
            {userDetails.name}
          </h2>
          <div className="flex flex-col gap-2 mt-2">
            <span className="bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
              {userDetails.status}
            </span>
            <span className="bg-[#D1FAE5] text-[#064E3B] text-[10px] font-bold px-3 py-1 rounded-full uppercase">
              {userDetails.tags?.[0] || "Member"}
            </span>
          </div>
          <p className="italic text-gray-500 mt-4 text-sm leading-relaxed">
            {userDetails.bio}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Preferred: {userDetails.email}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <button className="flex items-center justify-center gap-2 w-full py-3 border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition active:scale-95">
            <LuAlarmClock className="text-lg" /> Snooze 2 Weeks
          </button>
          <button className="flex items-center justify-center gap-2 w-full py-3 border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition active:scale-95">
            <LuArchive className="text-lg" /> Archive
          </button>
          <button className="flex items-center justify-center gap-2 w-full py-3 border border-gray-200 rounded-xl font-medium text-red-500 hover:bg-red-50 transition active:scale-95">
            <LuTrash2 className="text-lg" /> Delete
          </button>
        </div>
      </div>

      <div className="w-full md:w-2/3 space-y-6">
        <div className="grid grid-cols-3 gap-4">
          <StatCard
            value={userDetails.days_since_contact}
            label="Days Since Contact"
          />
          <StatCard value={userDetails.goal} label="Goal (Days)" />
          <StatCard
            value={userDetails.next_due_date}
            label="Next Due"
            isSmall
          />
        </div>

        <div className="bg-white border border-gray-100 p-6 rounded-2xl flex items-center justify-between shadow-sm">
          <div>
            <h4 className="text-lg font-bold text-emerald-900">
              Relationship Goal
            </h4>
            <p className="text-gray-600 font-medium">
              Connect every {userDetails.days_since_contact} days
            </p>
          </div>
          <button className="px-5 py-2 border border-gray-300 rounded-lg text-sm font-bold hover:bg-gray-50 transition">
            Edit
          </button>
        </div>

        <div className="bg-slate-50/80 p-6 rounded-2xl border border-gray-100">
          <h4 className="text-lg font-bold text-emerald-950 mb-4">
            Quick Check-In
          </h4>
          <div className="grid grid-cols-3 gap-4">
            <ActionButton
              icon={<LuPhone />}
              label="Call"
              color="emerald"
              onClick={() => onActionClick("Call")}
            />
            <ActionButton
              icon={<LuMessageSquare />}
              label="Text"
              color="blue"
              onClick={() => onActionClick("Text")}
            />
            <ActionButton
              icon={<LuVideo />}
              label="Video"
              color="purple"
              onClick={() => onActionClick("Video")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ value, label, isSmall }) => (
  <div className="bg-white border border-gray-100 p-6 rounded-2xl text-center shadow-sm">
    <h3
      className={`${isSmall ? "text-lg" : "text-4xl"} font-extrabold text-gray-900`}
    >
      {value}
    </h3>
    <p className="text-xs text-gray-500 mt-1 font-medium">{label}</p>
  </div>
);

const ActionButton = ({ icon, label, onClick, color }) => (
  <button
    onClick={onClick}
    className="bg-white border border-gray-100 p-6 rounded-2xl flex flex-col items-center gap-2 hover:shadow-md hover:border-emerald-200 transition group"
  >
    <div className={`text-2xl text-gray-700 group-hover:text-${color}-600`}>
      {icon}
    </div>
    <span className="text-sm font-bold text-gray-800">{label}</span>
  </button>
);

export default Userdetails;
