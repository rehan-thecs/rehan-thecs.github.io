import { useState, useEffect } from "react";

const TypewriterEffect = () => {
  const texts = [
    { text: "Web & App Developer", color: "#10b981" }, // Green
    { text: "Software Engineer", color: "#e63946" }, // Red
    { text: "Full Stack Developer", color: "#1d4ed8" }, // Blue
    { text: "Cybersecurity Analyst", color: "#9333ea" }, // Purple
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentColor, setCurrentColor] = useState(texts[0].color);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const delayBetweenTexts = 1500;

    const handleTyping = () => {
      if (!isDeleting && charIndex < texts[index].text.length) {
        setText((prev) => prev + texts[index].text[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === texts[index].text.length) {
        setTimeout(() => setIsDeleting(true), delayBetweenTexts);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => {
          const newIndex = (prev + 1) % texts.length;
          setCurrentColor(texts[newIndex].color); // Update color
          return newIndex;
        });
      }
    };

    const typingInterval = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingInterval);
  }, [charIndex, isDeleting, index]);

  return (
    <div className="row w-full">
      <h1
        className="text-[2rem] font-bold text-left !tracking-[2px] transition-all duration-500"
        style={{ color: currentColor }}
      >
        {text}
        <span className="animate-blink">|</span>
      </h1>
    </div>
  );
};

export default TypewriterEffect;
