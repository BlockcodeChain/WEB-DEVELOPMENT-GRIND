import { useState, useEffect } from "react";

function Example() {
  const [text, setText] = useState(
    localStorage.getItem("myText") || "" // reload ke liye initial value
  );

  // Ye effect tab chalega jab text change ho
  useEffect(() => {
    localStorage.setItem("myText", text); // save to localStorage
  }, [text]);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>You typed: {text}</p>
    </div>
  );
}

export default Example;
