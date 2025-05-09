import { useState, useEffect, useRef } from "react";

const TypingAnimation = () => {
  const phrases = ["code", "option 1", "option 2"];
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenPhrases = 1000;
  const cursorRef = useRef(null);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    let timeout;

    if (!isDeleting && charIndex < currentPhrase.length) {
      timeout = setTimeout(() => {
        setText((prev) => prev + currentPhrase[charIndex]);
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        setCharIndex(charIndex - 1);
      }, deletingSpeed);
    } else if (!isDeleting && charIndex === currentPhrase.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenPhrases);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phrases, currentPhraseIndex]);

  return (
    <h1 className="text-6xl text-center">
      Hey, I'm Biswash <br /> I Like To{" "}
      <span className="text-blue-800">
        {text}
        <span ref={cursorRef} className="animate-blink">
          |
        </span>
      </span>
    </h1>
  );
};

export default TypingAnimation;
