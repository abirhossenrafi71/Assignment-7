import React from "react";
import { Link } from "react-router";

const Card = ({ data }) => {
  const { days_since_contact, name, id, picture, status, tags } = data;

  const statusStyles = {
    "almost due": "bg-[#EFAD44]",
    "On-track": "bg-[#244D3F]",
    overdue: "bg-red-600",
  };

  return (
    <div className="w-full max-w-sm mx-auto p-5 space-y-4 shadow-lg rounded-2xl border-gray-400 flex flex-col items-center justify-between transition-transform hover:scale-105 bg-white">
      <img
        className="h-28 w-28 border-4 border-gray-700 rounded-full object-cover"
        src={picture}
        alt={name}
      />

      <div className="text-center space-y-1">
        <h1 className="font-bold text-2xl text-gray-800">{name}</h1>
        <p className="text-gray-500 font-medium">
          {days_since_contact} days ago
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-[#D1FAE5] px-4 py-1.5 rounded-full text-xs font-semibold text-[#064E3B] uppercase tracking-wide"
          >
            {tag}
          </span>
        ))}
      </div>

      <p
        className={`${statusStyles[status] || "bg-gray-500"} px-4 py-2 text-white capitalize rounded-lg font-medium`}
      >
        {status}
      </p>

      <div className="w-full pt-2">
        <Link
          to={`/userDetails/${id}`}
          className="btn w-full text-white font-bold py-3 bg-linear-to-r from-indigo-500 from-10%  to-emerald-500 to-90%  rounded-xl transition-colors"
        >
          Show Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
