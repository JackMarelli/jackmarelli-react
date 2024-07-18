import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function shuffleString(str) {
  const arr = str.split("");
  const shuffledArr = arr.slice(); // Create a copy for shuffling
  for (let i = shuffledArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
  }
  return arr.map((_, index) => {
    // Preserve the original capitalization
    return arr[index] === arr[index].toUpperCase()
      ? shuffledArr[index].toUpperCase()
      : shuffledArr[index].toLowerCase();
  }).join("");
}

export default function AnimatedLink({ to, content, capitalize }) {
  const linkRef = useRef(null);

  useEffect(() => {
    const linkElement = linkRef.current;
    let initialText = content;
    let interval;

    const handleMouseEnter = () => {
      let count = 0;
      interval = setInterval(() => {
        linkElement.innerHTML = shuffleString(initialText);
        count++;
        if (count >= 4) {
          clearInterval(interval);
          linkElement.innerHTML = initialText;
        }
      }, 200 / 4);
    };

    const handleMouseLeave = () => {
      clearInterval(interval);
      linkElement.innerHTML = initialText;
    };

    linkElement.addEventListener("mouseenter", handleMouseEnter);
    linkElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      linkElement.removeEventListener("mouseenter", handleMouseEnter);
      linkElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [content]);

  return (
    <Link ref={linkRef} to={to} className={`h-fit w-fit leading-tight ${capitalize && "capitalize"}`}>
      {content}
    </Link>
  );
}
