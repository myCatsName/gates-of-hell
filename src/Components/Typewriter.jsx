import { useState, useEffect } from "react";

// Define a functional component called Typewriter
export default function Typewriter({ text, delay, cursor = false }) {
  // with a state variable to track what text has been displayed
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (text.length === 0) return;

    function type(index) {
      // add a character to the typedText state variable using setTypedText
      setTypedText(text.substring(0, index + 1));

      // If it's the last index, stop typing
      if (index === text.length - 1) return;

      // Otherwise, increment the index and call the type function again
      setTimeout(() => type(index + 1), delay);
    }

    // Call the type function with an initial index of zero
    type(0);
  }, [text, delay]); // Pass text prop as a dependency to the useEffect hook

  // Return a span element that displays the typedText state variable with an optional blinking cursor
  return (
    <span>
      {typedText}
      {cursor && <span className="blinking-cursor">|</span>}
    </span>
  );
}
