import { useRef } from "react";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import GridLayout from "../../layouts/GridLayout/GridLayout";

export default function Landing() {
  const mouseCarouselContainer = useRef();

  return (
    <BaseLayout>
      <div
        ref={mouseCarouselContainer}
        className="h-screen w-full bg-slate-100"
      >
        <GridLayout></GridLayout>
      </div>
    </BaseLayout>
  );
}
