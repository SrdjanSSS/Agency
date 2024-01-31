import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const TypingEffect = () => {
  const [text] = useTypewriter({
    words: [
      "IZRADU WEB SAJTOVA.",
      "IZRADU WEB APLIKACIJA.",
      "KREIRANJE WEB DIZAJNA.",
    ],
    loop: {},
  });
  return (
    <div style={{ color: "#ffaa17" }}>
      <span>
        {text} <Cursor />
      </span>
    </div>
  );
};

export default TypingEffect;
