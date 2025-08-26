import { useState, useEffect } from "react";

const Body = () => {
  const [value, setvalue] = useState("");

  // 🔥 LocalStorage se initialize
  const [dark, setdark] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode !== null ? JSON.parse(savedMode) : false;
  });

  const [todo, settodo] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // 🌗 Dark mode toggle
  const click = () => {
    setdark((prev) => !prev);
  };

  // ➕ Add todo
  const add = () => {
    if (value.trim() === "") return;
    settodo((prev) => [...prev, value]);
    setvalue("");
  };

  // ❌ Delete single todo
  const deleted = (i) => {
    const newtodo = todo.filter((_, index) => index !== i);
    settodo(newtodo);
  };

  // 🗑 Delete all todos
  const deleteall = () => {
    settodo([]);
  };

  // 💾 Save todos jab bhi todo change ho
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  // 💾 Save dark mode jab bhi dark change ho
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(dark));
  }, [dark]);

  return (
    <div
      className={`h-screen w-screen flex justify-center items-center flex-col gap-6 sm:gap-10 transition-all duration-500
      ${dark ? "bg-black text-white" : "bg-gray-200 text-black"}`}
    >
      {/* Title */}
      <h1 className="text-center text-3xl sm:text-5xl md:text-6xl font-extrabold">
        TO-DO APP
      </h1>

      {/* Main Box */}
      <div className="flex flex-col items-center justify-start border-3 w-[99%] sm:w-[80%] md:w-[60%] h-[70%] sm:h-[65%] rounded-lg gap-5 bg-blue-100 relative p-4 sm:p-6 overflow-y-auto shadow-lg">
        {/* 🌗 Dark mode button */}
        <div className="top-1 right-3 absolute">
          <button
            className="text-2xl sm:text-3xl cursor-pointer px-1 py-1 rounded-full bg-gray-300 text-center border-2"
            onClick={click}
          >
            {dark ? "🌙" : "☀️"}
          </button>
        </div>

        {/* Input + Buttons */}
        <div className="flex flex-col sm:flex-row w-full justify-center items-center gap-3 sm:gap-5">
          <input
            type="text"
            value={value}
            onChange={(e) => setvalue(e.target.value)}
            placeholder="Enter task..."
            className="border-2 w-full sm:w-[70%] md:w-[60%] text-center text-black text-base sm:text-lg md:text-2xl font-bold h-[45px] sm:h-[55px] rounded p-2"
          />
          <button
            onClick={add}
            className="bg-green-700 border-2 px-3 sm:px-4 py-1 text-base sm:text-lg md:text-xl shadow-lg hover:bg-green-500 cursor-pointer rounded"
          >
            ADD
          </button>
          <button
            onClick={deleteall}
            className="bg-red-800 border-2 px-3 sm:px-4 py-1 text-base sm:text-lg md:text-xl shadow-lg hover:bg-red-500 cursor-pointer rounded"
          >
            DELETE ALL
          </button>
        </div>

        {/* Todo List */}
        <ul className="w-full mt-3 sm:mt-5">
          {todo.map((item, i) => (
            <li
              key={i}
              className="flex justify-between items-center text-black text-sm sm:text-lg md:text-xl bg-white rounded p-2 my-2 shadow"
            >
              {item}
              <button
                onClick={() => deleted(i)}
                className="bg-red-500 text-white px-2 sm:px-3 py-1 rounded text-sm sm:text-base"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Body;
