import { useState, useEffect } from "react";

export default function Typewriter({ text, delay = 75, pause = 0 }) {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (text.length === 0) return;

    function type(index) {
      setTypedText(text.substring(0, index + 1));
      if (index === text.length - 1) return;
      setTimeout(() => type(index + 1), delay);
    }
    setTimeout(() => type(0), pause);
  }, [text, delay, pause]);

  return <span>{typedText}</span>;
}
