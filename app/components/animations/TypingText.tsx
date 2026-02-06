"use client";

import { useState, useEffect } from "react";

interface TypingTextProps {
  text: string;
  className?: string;
  speed?: number;
  as?: "p" | "span" | "h1" | "h2" | "h3" | "h4";
}

export default function TypingText({
  text,
  className,
  speed = 50,
  as: Tag = "p",
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowCursor(false), 2000);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <Tag className={className}>
      {displayedText}
      {showCursor && (
        <span
          className="ml-[0.05em] inline-block w-[0.1em] border-r-2 border-primary"
          style={{ animation: "blink-caret 0.75s step-end infinite" }}
          aria-hidden="true"
        />
      )}
    </Tag>
  );
}
