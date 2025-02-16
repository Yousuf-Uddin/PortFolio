/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";
import styled from "styled-components";

const Letter = styled.span`
  display: inline-block;
  font-family: "Mona Sans";
`;

const AnimatedText = ({ text }) => {
  const lettersRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      lettersRef.current.forEach((letter) => {
        if (letter) {
          const rect = letter.getBoundingClientRect();
          const dx = e.clientX - (rect.left + rect.width / 2);
          const dy = e.clientY - (rect.top + rect.height / 2);
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 150; // You can adjust this value
          const proximity = Math.max(0, maxDistance - distance) / maxDistance;
          letter.style.fontWeight = `${400 + proximity * 800}`;
          letter.style.fontVariationSettings = `"wdth" ${50 * proximity + 100}`;
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      {text.split("").map((letter, index) => (
        <Letter
          className=" text-6xl transition-all duration-[250ms] delay-[-30ms] ease-in-out lg:text-8xl whitespace-nowrap "
          key={index}
          ref={(el) => (lettersRef.current[index] = el)}
        >
          {letter}
        </Letter>
      ))}
    </div>
  );
};

export default AnimatedText;
