import React from "react";
import { Link } from "react-router-dom";

export default function recipeData({ recipeData }) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full px-3 sm:px-20 ">
        {recipeData.map((item, index) => (
          <Link
            to={`/recipeInformation/${item?.id}`}
            className="max-w-sm rounded overflow-hidden shadow-lg relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 cursor-pointer"
            key={item?.id}
          >
            <img
              className="w-full"
              src={item?.image}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-2">
              <div className="font-bold text-xl mb-2 line-clamp-1">
                {item?.title}
              </div>
            </div>
            <div className="px-6 pt-2 pb-2 flex justify-center">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                View More
              </span>
            </div>
          </Link>
        ))}
      </div>

      {recipeData?.length > 0 ? null : (
        <div className="flex flex-col items-center justify-center">
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 59 59"
            style={{ enableBackground: "new 0 0 59 59", width: "100px" }}
            xmlSpace="preserve"
          >
            <g>
              <g>
                <path
                  style={{ fill: "#556080" }}
                  d="M54.392,19H3.608C1.616,19,0,17.384,0,15.392V3.608C0,1.616,1.616,0,3.608,0h50.783
C56.384,0,58,1.616,58,3.608v11.783C58,17.384,56.384,19,54.392,19z"
                />
                <path
                  style={{ fill: "#38454F" }}
                  d="M54.392,38H3.608C1.616,38,0,36.384,0,34.392V22.608C0,20.616,1.616,19,3.608,19h50.783
C56.384,19,58,20.616,58,22.608v11.783C58,36.384,56.384,38,54.392,38z"
                />
                <path
                  style={{ fill: "#556080" }}
                  d="M54.392,57H3.608C1.616,57,0,55.384,0,53.392V41.608C0,39.616,1.616,38,3.608,38h50.783
C56.384,38,58,39.616,58,41.608v11.783C58,55.384,56.384,57,54.392,57z"
                />
                <circle style={{ fill: "#8697CB" }} cx="9.5" cy="9.5" r="3.5" />
                <circle style={{ fill: "#8697CB" }} cx="49" cy="8" r="1" />
                <circle style={{ fill: "#8697CB" }} cx="45" cy="8" r="1" />
                <circle style={{ fill: "#8697CB" }} cx="51" cy="11" r="1" />
                <circle style={{ fill: "#8697CB" }} cx="47" cy="11" r="1" />
                <circle style={{ fill: "#8697CB" }} cx="41" cy="8" r="1" />
                <circle style={{ fill: "#8697CB" }} cx="43" cy="11" r="1" />
                <circle style={{ fill: "#8697CB" }} cx="37" cy="8" r="1" />
                <circle style={{ fill: "#8697CB" }} cx="39" cy="11" r="1" />
                <circle style={{ fill: "#8697CB" }} cx="33" cy="8" r="1" />
                <circle style={{ fill: "#8697CB" }} cx="35" cy="11" r="1" />
                <circle
                  style={{ fill: "#8697CB" }}
                  cx="9.5"
                  cy="28.5"
                  r="3.5"
                />
                <circle style={{ fill: "#8697CB" }} cx="49" cy="27" r="1" />
                <circle style={{ fill: "#8697CB" }} cx="45" cy="27" r="1" />
                <circle style={{ fill: "#8697CB" }} cx="51" cy="30" r="1" />
                <circle style={{ fill: "#8697CB" }} cx="47" cy="30" r="1" />
                <circle style={{ fill: "#8697CB" }} cx="41" cy="27" r="1" />
                <circle style={{ fill: "#8697CB" }} cx="43" cy="30" r="1" />
                <circle style={{ fill: "#8697CB" }} cx="37" cy="27" r="1" />
                <circle style={{ fill: "#8697CB" }} cx="39" cy="30" r="1" />
                <circle style={{ fill: "#8697CB" }} cx="33" cy="27" r="1" />
                <circle style={{ fill: "#8697CB" }} cx="35" cy="30" r="1" />
                <circle
                  style={{ fill: "#8697CB" }}
                  cx="9.5"
                  cy="47.5"
                  r="3.5"
                />
                <circle style={{ fill: "#8697CB" }} cx="49" cy="46" r="1" />
                <circle style={{ fill: "#8697CB" }} cx="45" cy="46" r="1" />
                <circle style={{ fill: "#8697CB" }} cx="51" cy="49" r="1" />
                <circle style={{ fill: "#8697CB" }} cx="47" cy="49" r="1" />
                <circle style={{ fill: "#8697CB" }} cx="41" cy="46" r="1" />
                <circle style={{ fill: "#8697CB" }} cx="43" cy="49" r="1" />
                <circle style={{ fill: "#8697CB" }} cx="37" cy="46" r="1" />
                <circle style={{ fill: "#8697CB" }} cx="39" cy="49" r="1" />
                <circle style={{ fill: "#8697CB" }} cx="33" cy="46" r="1" />
                <circle style={{ fill: "#8697CB" }} cx="35" cy="49" r="1" />
              </g>
              <g>
                <circle style={{ fill: "#ED7161" }} cx="47" cy="47" r="12" />
                <path
                  style={{ fill: "#FFFFFF" }}
                  d="M48.414,47l3.536-3.536c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0L47,45.586
l-3.536-3.536c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L45.586,47l-3.536,3.536c-0.391,0.391-0.391,1.023,0,1.414
c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293L47,48.414l3.536,3.536c0.195,0.195,0.451,0.293,0.707,0.293
s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L48.414,47z"
                />
              </g>
            </g>
          </svg>
          <p className="text-xl text-gray-500">No record found.</p>
        </div>
      )}
    </>
  );
}
