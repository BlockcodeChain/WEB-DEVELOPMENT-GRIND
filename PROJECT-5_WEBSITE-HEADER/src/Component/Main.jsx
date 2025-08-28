import { FaCode } from "react-icons/fa6";
import { HiDocument } from "react-icons/hi2";
import Image from "./Image";

const Main = ({ dark }) => {
  return (
    <div className="container mx-auto px-4 mt-6">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        
        {/* LEFT SIDE CONTENT */}
        <div className="flex flex-col gap-6 max-w-2xl text-center lg:text-center">
          
          {/* Heading */}
          <div>
            <h1
              className={`${
                !dark
                  ? "text-amber-900 drop-shadow-[3px_3px_6px_rgba(0,0,0,0.5)]"
                  : "text-white drop-shadow-[3px_3px_6px_rgba(255,255,255,0.5)]"
              } 
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
              font-extrabold`}
            >
              Design
            </h1>
            <span
              className={`${
                !dark ? "text-amber-600" : "text-blue-500"
              } text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
              font-extrabold lg:mt-3 block lg:ml-39`}
            >
              Without Limits
            </span>
          </div>

          {/* Paragraph */}
          <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:mt-1 lg:ml-39 leading-relaxed">
            Elevate your web projects with our streamlined design system powered
            by the latest Tailwind CSS V4. Create stunning user experiences with
            state-of-the-art theme switching.
          </p>

          {/* Transition Line + Text */}
          <div className="flex items-center justify-center lg:justify-center gap-4">
            <div
              className={`h-[2px] w-12 ${
                !dark ? "bg-amber-500" : "bg-blue-500"
              }`}
            ></div>
            <p className={`${!dark ? "text-black" : "text-white"} text-base md:text-lg`}>
              TRANSITION SEAMLESSLY
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-center z-10 gap-5">
            <button
              className={`border shadow-md hover:scale-105  transition-transform duration-300 cursor-pointer py-2 px-4 gap-2 rounded flex items-center text-base sm:text-lg 
              ${
                !dark
                  ? "bg-amber-500 text-white shadow-amber-300 border-amber-600 hover:bg-amber-600"
                  : "border-blue-600 bg-blue-400 text-white shadow-blue-300 hover:bg-blue-500"
              }
                  `}
            >
              <FaCode /> Start Coding
            </button>

            <button
              className={`border border-gray-100 shadow-md shadow-gray-400 hover:scale-105 cursor-pointer py-2 px-4 gap-2 rounded flex items-center text-base sm:text-lg bg-gray-500 opacity-80`}
            >
              <HiDocument className="text-white opacity-100" />
              Documentation
            </button>
          </div>
             <div className="h-[2px] min-w-11/12 opacity-40 bg-gray-500"></div>
         
          <Image dark={dark}/>
        </div>
      </div>
    </div>
  );
};

export default Main;
