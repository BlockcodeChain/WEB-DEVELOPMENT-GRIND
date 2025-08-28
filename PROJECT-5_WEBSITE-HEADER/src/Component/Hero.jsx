import { useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import Body from "./Body";

const Hero = () => {
  const [dark, setdark] = useState(false);

  const handle = () => {
    setdark(!dark);
  };

  return (
    <div
      className={`min-h-screen  ${
        dark ? "bg-gray-800 text-white" : "bg-transparent text-gray-900"
      } relative transition-colors duration-300`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(rgba(0,0,0,0.08) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      {/* Toggle Button */}
      <button
        className={`rounded-full fixed top-2 sm:top-3 lg:top-4 right-2 sm:right-3 lg:right-4 w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 flex justify-center items-center cursor-pointer shadow-md z-10 transition-colors duration-200
          ${
            !dark
              ? "bg-amber-400 hover:bg-amber-500 shadow-amber-600"
              : "bg-blue-400 hover:bg-blue-300 shadow-blue-600"
          }`}
        onClick={handle}
      >
        {dark ? (
          <FiSun className="text-base sm:text-lg lg:text-xl text-gray-700" />
        ) : (
          <FaRegMoon className="text-base sm:text-lg lg:text-xl text-gray-700" />
        )}
      </button>

      {/* Neon Circle */}
      <div className="absolute inset-0 -z-0">
        <div
          className={`absolute w-1/2 sm:w-1/3 h-1/2 sm:h-1/3 top-5 sm:top-10 -left-1/4 sm:-left-1/5 rounded-full blur-2xl sm:blur-3xl transition-all duration-500 mix-blend-overlay
          ${dark ? "bg-blue-400 opacity-50" : "bg-amber-500 opacity-40"}`}
        ></div>
      </div>

      <Body dark={dark} />
    </div>
  );
};

export default Hero;
