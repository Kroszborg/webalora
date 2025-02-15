"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { motion, useAnimation, type Variants } from "framer-motion";

interface TypewriterEffectProps {
  words: {
    text: string;
    className?: string;
  }[];
}

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  words,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const typeNextChar = () => {
      if (currentCharIndex < words[currentWordIndex].text.length) {
        setCurrentCharIndex(currentCharIndex + 1);
      } else if (currentWordIndex < words.length - 1) {
        setTimeout(() => {
          controls.start("hidden").then(() => {
            setCurrentWordIndex(currentWordIndex + 1);
            setCurrentCharIndex(0);
            controls.start("visible");
          });
        }, 1000); // Pause before moving to the next word
      }
    };

    const timer = setTimeout(typeNextChar, 100); // Adjust typing speed here

    return () => clearTimeout(timer);
  }, [currentWordIndex, currentCharIndex, words, controls]);

  return (
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial="hidden"
          animate={controls}
          variants={textVariants}
          transition={{ duration: 0.5 }}
          className={`inline-block ${word.className || ""}`}
        >
          {index === currentWordIndex
            ? word.text.slice(0, currentCharIndex)
            : index < currentWordIndex
            ? word.text
            : ""}
          {index !== words.length - 1 && " "}
        </motion.span>
      ))}
    </h1>
  );
};
