import React from "react";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import GridLayout from "../../layouts/GridLayout/GridLayout";
import MouseCarousel from "../../components/MouseCarousel/MouseCarousel";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

export default function Landing() {
  return (
    <BaseLayout>
      <div className="relative h-screen overflow-hidden bg-light">
        <MouseCarousel />
        <div className="absolute inset-0 z-10 pointer-events-none flex items-end">
          <div className="w-full p-4 mix-blend-exclusion">
            <div className="font-serif text-[6.4vw] leading-[94%] text-dark">
              I'm Giacomo, a creative developer based near Milano. I mainly
              design and build websites and often dabble myself with other tasks
              due to demand. <span className="font-symbola">⤵</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light z-20 h-screen">
        <GridLayout>
          <SectionHeader hr={true} />
        </GridLayout>
      </div>
    </BaseLayout>
  );
}
