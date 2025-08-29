import lightimage from './Assets/code-light.png';
import darkimage from './Assets/code-dark.png';
import Footer from './Footer';

const Image = ({ dark }) => {
  return (
    <div
      className={`
        relative lg:absolute lg:right-4 lg:top-1/2 lg:-translate-y-1/2 
        w-full sm:w-11/12 md:w-4/5 lg:w-[620px] xl:w-[700px] 
        h-auto rounded-2xl bg-black overflow-hidden 
        transition-all duration-700 ease-in-out 
        ${!dark
          ? "shadow-[-18px_0_30px_-10px_rgba(251,191,36,0.8)]"
          : "shadow-[-18px_0_30px_-10px_rgba(59,130,246,0.5)]"}
        animate-slideInSlow
      `}
    >
      <div className="flex flex-col gap-6 w-full h-full">
        <div className="h-full w-full bg-black rounded-3xl flex flex-col">
          
          {/* Top bar with dots + badges */}
          <div className="flex justify-between items-center px-6 py-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            <div className="flex gap-10 py-1">
              <div
                className={`text-xs sm:text-sm md:text-base lg:text-md rounded-full px-2 py-0.5 font-bold
                ${!dark
                    ? "bg-amber-500 text-amber-800 shadow-md shadow-orange-500"
                    : "bg-blue-300 text-blue-700 shadow-md shadow-blue-200"
                } animate-bounce transition-all duration-1000`}
              >
                React
              </div>

              <div
                className={`text-xs sm:text-sm md:text-base lg:text-md rounded-full px-2 py-0.5 font-bold
                ${!dark
                    ? "bg-amber-500 text-amber-800 shadow-md shadow-orange-500"
                    : "bg-blue-300 text-blue-700 shadow-md shadow-blue-200"
                } animate-bounce transition-all duration-1000`}
              >
                Tailwind CSS
              </div>
            </div>
          </div>

          {/* Image area */}
          <div className="flex-1 mb-6 flex justify-center items-center">
            <img
              src={!dark ? lightimage : darkimage}
              alt="code-theme"
              className={`max-w-full max-h-full object-contain rounded transition-transform duration-700 hover:scale-[1.02] ${
                !dark
                  ? "shadow-[-18px_0_30px_5px_rgba(107,114,128,0.4)]"
                  : "shadow-[-18px_0_30px_-10px_rgba(255,255,255,0.4)]"
              }`}
            />
          </div>
          
        </div>
       
      </div>
      
    </div>
   
  );
};

export default Image;
