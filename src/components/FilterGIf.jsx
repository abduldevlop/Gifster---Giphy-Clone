import React from "react";
import { GifState } from "../context/Context";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";

const filters = [
  {
    title: "GIFs",
    value: "gifs",
    background:
      "bg-gradient-to-tr from-purple-500 via-purple-600 to-purple-500",
  },
  {
    title: "Stickers",
    value: "stickers",
    background: "bg-gradient-to-tr from-teal-500 via-teal-600 to-teal-500",
  },
  {
    title: "Text",
    value: "text",
    background: "bg-gradient-to-tr from-blue-500 via-blue-600 to-blue-500",
  },
];
const FilterGIf = ({ aligentLeft = true, showTrending = true }) => {
  const { filter, setFilter } = GifState();
  return (
    <div
      className={`flex my-3 gap-3 ${aligentLeft ? "" : "justify-end"} ${
        showTrending
          ? "justify-between flex-col sm:flex-row sm:items-center"
          : ""
      }`}
    >
      {showTrending && (
        <span className="flex gap-2">
          <HiMiniArrowTrendingUp size={30} className="text-teal-400" />
          <span className="font-semibold"> Trending </span>
        </span>
      )}

      <div className="flex min-w-80 rounded-full bg-gray-800">
        {filters.map((f) => (
          <span
            onClick={() => setFilter(f.value)}
            className={` ${
              filter === f.value ? f.background : ""
            } font-semibol py-2 w-1/3 text-center rounded-full cursor-pointer text-gray-400`}
            key={f.title}
          >
            {f.title}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FilterGIf;
