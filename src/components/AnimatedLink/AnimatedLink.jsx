import React, { useEffect, useRef, useState } from "react";

function shuffleString(str) {
  const arr = str.split("");
  const shuffledArr = arr.slice(); // Create a copy for shuffling
  for (let i = shuffledArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
  }
  return arr
    .map((_, index) => {
      // Preserve the original capitalization
      return arr[index] === arr[index].toUpperCase()
        ? shuffledArr[index].toUpperCase()
        : shuffledArr[index].toLowerCase();
    })
    .join("");
}

export default function AnimatedLink({ to, content, capitalize }) {
  const linkRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const linkElement = linkRef.current;
    let initialText = content;
    let interval;

    const handleMouseEnter = () => {
      if (isAnimating) return; // Do nothing if animation is already ongoing
      setIsAnimating(true);
      let count = 0;
      interval = setInterval(() => {
        linkElement.innerHTML = shuffleString(initialText);
        count++;
        if (count >= 4) {
          clearInterval(interval);
          linkElement.innerHTML = initialText;
          setIsAnimating(false); // Reset the flag when animation ends
        }
      }, 240 / 4);
    };

    linkElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      linkElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [content, isAnimating]);

  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = to;
  };

  return (
    <span
      ref={linkRef}
      className={`h-fit w-fit leading-tight cursor-pointer ${capitalize && "capitalize"}`}
      onClick={handleClick}
    >
      {content}
    </span>
  );
}
