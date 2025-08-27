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
      className={`min-h-screen ${
        dark ? "bg-gray-800 text-white" : "bg-transparent text-gray-900"
      } relative transition-colors duration-300`}
    >
     
       
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 opacity-35"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0,0,0,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          ></div>

          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(rgba(0,0,0,0.1) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>
  

      {/* Toggle Button */}
      <button
        className={`rounded-full fixed top-3 lg:top-4 right-3 lg:right-4 w-9 h-9 ${!dark?'( bg-amber-400 hover:bg-amber-600  shadow-amber-600)':'( bg-blue-400 hover:bg-blue-300 shadow-blue-600 shadow-xl)'} lg:w-10 lg:h-10 flex justify-center items-center cursor-pointer shadow-md shadow-amber-600 z-10 transition-colors duration-100`}
        onClick={handle}
      >
        {dark ? (
          <FiSun className="size-6 text-gray-700 hover:text-white text-lg lg:text-xl" />
        ) : (
          <FaRegMoon className="size-6 text-gray-700 hover:text-white text-lg lg:text-xl" />
        )}
      </button>

      {/* Neon Circle */}
       <div className="absolute inset-0 -z-0">
        <div 
          className={`absolute w-1/2 h-1/2 top-2 -left-1/3 rounded-full blur-3xl  transition-all duration-500
          ${dark 
            ? "bg-blue-400 opacity-60 mix-blend-screen " 
            : "bg-amber-400 opacity-30 mix-blend-overlay"}`
          }
        ></div>
      </div>
         <Body dark={dark}/>
    </div>
 
  );
};

export default Hero;
