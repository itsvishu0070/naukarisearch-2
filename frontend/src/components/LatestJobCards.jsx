

import React from "react";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const LatestJobCards = ({ job }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/description/${job._id}`)}
      className="p-6 rounded-3xl shadow-xl bg-white/30 backdrop-blur-lg border border-white/20 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 z-0 rounded-3xl bg-gradient-to-br from-purple-100/30 via-white/10 to-blue-100/20 blur-2xl opacity-30"></div>

      <div className="relative z-10">
        {/* Company Info */}
        <div className="mb-3">
          <h1 className="text-gray-900 font-bold text-xl group-hover:text-[#5b21b6] transition">
            {job?.company?.name}
          </h1>
          <p className="text-sm text-gray-500">India</p>
        </div>

        {/* Job Title & Description */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-indigo-600 transition">
            {job?.title}
          </h2>
          <p className="text-sm text-gray-600 line-clamp-2">
            {job?.description}
          </p>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2 mt-5">
          <Badge className="bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded-full shadow-sm">
            {job?.position} Positions
          </Badge>
          <Badge className="bg-rose-100 text-rose-700 font-semibold px-3 py-1 rounded-full shadow-sm">
            {job?.jobType}
          </Badge>
          <Badge className="bg-purple-100 text-purple-700 font-semibold px-3 py-1 rounded-full shadow-sm">
            {job?.salary} LPA
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default LatestJobCards;
