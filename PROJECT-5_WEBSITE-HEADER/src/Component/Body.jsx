import { HiTrendingUp } from "react-icons/hi";
import Main from './Main'
const Body = ({ dark }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:py-12 lg:py-24 xl:py-32">
      <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 md:gap-10 lg:gap-12 xl:gap-16">
        
        {/* Badge Container */}
        <div className="flex justify-center lg:justify-start w-full">
          <div className="flex items-center mx-4 sm:mx-8 md:mx-16 lg:mx-28 xl:mx-36  mt-4 sm:mt-5 lg:mt-6 justify-center gap-2 sm:gap-3 md:gap-4 flex-wrap text-center">
            
            {/* NEW Badge */}
            <span
              className={`text-xs sm:text-sm md:text-base lg:text-md rounded-full px-2 py-0.5 font-bold
              ${!dark
                ? "bg-amber-500 text-amber-800 shadow-md shadow-orange-500"
                : "bg-blue-300 text-blue-700 shadow-md shadow-blue-200"}
              animate-pulse transition-all duration-1000`}
            >
              NEW
            </span>

            {/* Text Badge */}
            <span
              className={`bg-black flex items-center text-xs sm:text-sm md:text-lg lg:text-xl px-2 md:px-3 py-1 font-medium justify-center gap-1 sm:gap-2 md:gap-3 shadow-sm rounded-3xl
              ${!dark
                ? "text-amber-700 shadow-amber-700"
                : "text-blue-400 shadow-blue-800"}`}
            >
              <HiTrendingUp
                className={`text-sm sm:text-base md:text-lg ${!dark ? "text-amber-700" : "text-blue-700"}`}
              />
              Next Generation Design System
            </span>
          </div>
        </div>

      </div>
      <Main dark={dark}/>
    </div>
  );
};

export default Body;
