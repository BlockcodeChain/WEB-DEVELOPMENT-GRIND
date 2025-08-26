import { useState } from "react"

const Counting = () => {
  const [value, setValue] = useState(0)

  const Increment = () => {
    setValue(value + 1)
  }

  const Decrement = () => {
    setValue(value - 1)
  }

  return (
    <div className="flex items-center justify-center w-[90%] sm:w-96 h-auto min-h-[300px] bg-white rounded shadow-lg p-6">
      <div className="flex flex-col justify-center items-center gap-8 w-full">
        
        {/* Value */}
        <h1 className="text-teal-600 text-5xl sm:text-7xl font-extrabold text-center">
          {value}
        </h1>
        
        {/* Buttons side by side */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <button
            className="border-2 bg-green-400 px-3 sm:px-6 py-2 text-white hover:bg-green-500 cursor-pointer rounded text-sm sm:text-base"
            onClick={Increment}
          >
            INCREMENT
          </button>

          <button
            className="border-2 bg-red-400 px-3 sm:px-6 py-2 hover:bg-red-500 text-white cursor-pointer rounded text-sm sm:text-base"
            onClick={Decrement}
          >
            DECREMENT
          </button>
        </div>
      </div>
    </div>
  )
}

export default Counting
