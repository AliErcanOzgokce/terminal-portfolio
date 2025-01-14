import React, { useEffect, useState } from "react";
import {
  LoadingWrapper,
  LoadingText,
  HackerText,
} from "./styles/Loading.styled";

const LoadingScreen = () => {
  const [loadingText, setLoadingText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const loadingLines = [
    "Initializing system...",
    "Establishing connection...",
    "Loading AI agents...",
    "Access granted...",
    "Welcome to CreatorBID Terminal",
  ];

  // Yanıp sönen cursor için
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const sleep = (ms: number) =>
      new Promise(resolve => setTimeout(resolve, ms));
    let mounted = true;

    const typeWriter = async () => {
      try {
        for (
          let lineIndex = currentLine;
          lineIndex < loadingLines.length;
          lineIndex++
        ) {
          const line = loadingLines[lineIndex];
          setCurrentLine(lineIndex);

          for (let charIndex = 0; charIndex <= line.length; charIndex++) {
            if (!mounted) return;
            setLoadingText(line.substring(0, charIndex));
            await sleep(50);
          }

          if (!mounted) return;
          await sleep(800); // Satır arası bekleme süresini kısalttık

          if (lineIndex < loadingLines.length - 1) {
            setLoadingText("");
          } else {
            setIsComplete(true);
          }
        }
      } catch (error) {
        console.error("Animation error:", error);
      }
    };

    typeWriter();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <LoadingWrapper>
      <HackerText>
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <div key={i}>
              {Array(Math.floor(Math.random() * 50) + 20)
                .fill(0)
                .map((_, j) => (
                  <span key={j}>
                    {String.fromCharCode(Math.floor(Math.random() * 93) + 33)}
                  </span>
                ))}
            </div>
          ))}
      </HackerText>
      <LoadingText>
        {loadingText}
        {!isComplete && (showCursor ? "█" : " ")}
      </LoadingText>
    </LoadingWrapper>
  );
};

export default LoadingScreen;
