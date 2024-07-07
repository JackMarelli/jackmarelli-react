import React, { useRef, useEffect, useState } from "react";

const MouseCarousel = () => {
  const detectionZoneRef = useRef();
  const carouselContainerRef = useRef();
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState([]);
  const totalImages = 8; // Adjust the number to match your setup
  const aspectRatioTolerance = 0.3; // Adjust as necessary

  const carouselImages = Array.from({ length: totalImages }, (_, i) => `assets/images/fold_cursor_carousel/fold${i}.png`);

  const handleMouseMove = (event) => {
    const scrollY = window.scrollY;
    const currentPosition = { x: event.clientX, y: event.clientY + scrollY };
    const deltaX = currentPosition.x - initialPosition.x;
    const deltaY = currentPosition.y - initialPosition.y;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    if (distance >= 60) {
      setInitialPosition(currentPosition);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
      createCarouselItem(event.clientX, event.clientY + scrollY);
    }
  };

  const createCarouselItem = (x, y) => {
    setCarouselItems((prevItems) => {
      const newItems = [...prevItems];
      if (newItems.length >= totalImages) {
        newItems.shift();
      }
      newItems.push({ x, y, index: currentImageIndex });
      return newItems;
    });
  };

  useEffect(() => {
    const detectionZone = detectionZoneRef.current;
    detectionZone.addEventListener("mousemove", handleMouseMove);

    return () => {
      detectionZone.removeEventListener("mousemove", handleMouseMove);
    };
  }, [initialPosition]);

  const calculateInitialSize = (img) => {
    const aspectRatio = img.naturalWidth / img.naturalHeight;
    if (Math.abs(1 - aspectRatio) <= aspectRatioTolerance) {
      // Image is approximately square
      return { width: "16vw", height: "auto" };
    } else {
      if (img.naturalWidth > img.naturalHeight) {
        return { width: "auto", height: "10vh" };
      } else {
        return { width: "10vw", height: "auto" };
      }
    }
  };

  const handleImageLoad = (event) => {
    const img = event.target;
    const { width, height } = calculateInitialSize(img);
    img.style.width = width;
    img.style.height = height;
  };

  return (
    <div ref={carouselContainerRef} className="h-screen w-full relative z-40">
      <div ref={detectionZoneRef} className="absolute top-0 left-0 w-full h-full z-40"></div>
      {carouselItems.map((item, index) => (
        <img
          key={index}
          src={carouselImages[item.index]}
          alt={`carousel-${item.index}`}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30"
          style={{
            left: `${item.x}px`,
            top: `${item.y}px`,
            ...calculateInitialSize({ naturalWidth: 1, naturalHeight: 1 }) // initial dummy sizes to avoid flicker
          }}
          onLoad={handleImageLoad}
        />
      ))}
    </div>
  );
};

export default MouseCarousel;
