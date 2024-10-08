import React, { useRef, useEffect, useState } from "react";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import GridLayout from "../../layouts/GridLayout/GridLayout";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import GridWork from "../../components/GridWork/GridWork";
import ExtraSection from "../../components/ExtraSection/ExtraSection";
import ExtraSectionRow from "../../components/ExtraSectionRow/ExtraSectionRow";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const detectionZoneRef = useRef();
  const textContainerRef = useRef();
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState([]);
  const totalImages = 8; // Adjust the number to match your setup
  const aspectRatioTolerance = 0.3; // Adjust as necessary
  const navigate = useNavigate();

  const carouselImages = Array.from(
    { length: totalImages },
    (_, i) => `assets/images/fold_cursor_carousel/fold${i}.png`
  );

  const handleMouseMove = (event) => {
    const scrollY = window.scrollY;
    const currentPosition = { x: event.clientX, y: event.clientY + scrollY };
    const deltaX = currentPosition.x - initialPosition.x;
    const deltaY = currentPosition.y - initialPosition.y;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    if (distance >= 60) {
      setInitialPosition(currentPosition);
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % carouselImages.length
      );
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
    <BaseLayout>
      <div className="relative h-[94dvh] overflow-hidden bg-light">
        <div
          ref={textContainerRef}
          className="absolute inset-0 z-30 pointer-events-none flex items-end bg-light"
        >
          <div className="w-full p-4 md:p-8">
            <div className="font-serif text-5xl md:text-[6.4vw] leading-[94%] text-light relative z-40 mix-blend-difference">
              I'm Giacomo, a creative developer based near Milano. I mainly
              design and build websites and often dabble myself with other tasks
              due to demand. <span className="font-symbola">⤵</span>
            </div>
            {carouselItems.map((item, index) => (
              <img
                key={index}
                src={carouselImages[item.index]}
                alt={`carousel-${item.index}`}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10"
                style={{
                  left: `${item.x}px`,
                  top: `${item.y}px`,
                  ...calculateInitialSize({
                    naturalWidth: 1,
                    naturalHeight: 1,
                  }), // initial dummy sizes to avoid flicker
                }}
                onLoad={handleImageLoad}
              />
            ))}
          </div>
        </div>
        <div
          ref={detectionZoneRef}
          className="hidden md:block absolute top-0 left-0 w-full h-full z-20"
        ></div>
      </div>
      <GridLayout cn="items-end">
        <SectionHeader content="Featured Work" hr={true} hideHrOnMobile={true} />
        <GridWork
          cols={6}
          image={`assets/images/work/uniq/uniq_thumb.png`}
          title={`Uniq Bar and Bistrot`}
          link="https://www.behance.net/gallery/169770509/UNIQ-Bar-Restourant-Identity-Concept"
        />
        <GridWork
          cols={3}
          video={`assets/videos/logo_spin.mp4`}
          title={`Jack Marelli`}
          link="https://pitch.com/public/a11bd9a9-6432-4e14-8989-5f6288e39d51/4cb5ad97-18fa-47b2-ae99-d8e90e164b47"
        />
        <GridWork
          start={4}
          cols={6}
          video={`assets/videos/misuraemme.mp4`}
          title={`Misuraemme Moodboard Creator`}
          link="https://www.misuraemme.it/en/materials/moodboard-creator"
        />
        <GridWork
          cols={3}
          image={`assets/images/work/regular/regular_thumb.png`}
          title={`Regular Magazine`}
          link="/work/regular"
        />
        <GridWork
          cols={6}
          image={`assets/images/work/sinapsi/propic_negative.png`}
          title={`Sinapsi`}
          link="/work/sinapsi"
        />
        <div onClick={() => navigate("/work")} className="col-span-12 md:col-span-3 h-fit md:aspect-square border md:border-2 border-dark flex flex-col justify-center items-center cursor-pointer mb-4 md:mb-8 pt-2">
          <h2 className="font-serif text-3xl md:text-7xl">All Work</h2>
          <span className="font-symbola text-4xl md:text-7xl -mt-4 md:-mt-8">⇁</span>
        </div>
        <p className="col-start-1 col-span-full font-serif text-3xl md:text-7xl">
          I am all for the details: visual hierarchies, communication throught
          color and shapes, perfect spacings. Design and code are mediums of
          expression, through which I bring ideas to life with precision and
          flair.
        </p>
        <SectionHeader content="Some of my skills" hr={false} />
        <ExtraSection title="Softwares">
          <ExtraSectionRow
            content="Figma"
            detail="UI design and prototyping"
            bt={false}
          />
          <ExtraSectionRow
            content="Illustrator"
            detail="Logo and visual elements creation"
          />
          <ExtraSectionRow
            content="Photoshop"
            detail="Images manipulation and mockup creation"
          />
          <ExtraSectionRow
            content="Lightroom"
            detail="Images color and light correction"
          />
          <ExtraSectionRow
            content="Indesign"
            detail="Refined document pagination"
          />
        </ExtraSection>
        <ExtraSection title="Technologies">
          <ExtraSectionRow
            content="HTML"
            detail="Websites Structure"
            bt={false}
          />
          <ExtraSectionRow
            content="CSS (Tailwind, Bootstrap)"
            detail="Website style, shapes, positioning and colors"
          />
          <ExtraSectionRow
            content="Javascript (React, Lenis)"
            detail="Website functionality and complex animations"
          />
        </ExtraSection>
        <ExtraSection title="Languages">
          <ExtraSectionRow
            content="English"
            detail="Can speak, listen read and write"
            bt={false}
          />
          <ExtraSectionRow content="Italian" detail="My native language" />
          <ExtraSectionRow content="German (WIP)" detail="Coming soon..." />
        </ExtraSection>
      </GridLayout>
    </BaseLayout>
  );
}
