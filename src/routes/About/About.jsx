import { useEffect, useRef, useState } from "react";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import GridLayout from "../../layouts/GridLayout/GridLayout";

export default function About() {
  const blinkerRef = useRef();
  const [blinkerState, setBlinkerState] = useState(true);

  useEffect(() => {
    const blinkerInterval = setInterval(() => {
      setBlinkerState((prevState) => !prevState);
    }, 700);

    return () => clearInterval(blinkerInterval); // Cleanup the interval on component unmount
  }, []);

  return (
    <BaseLayout>
      <GridLayout>
        <h1 className="col-span-full font-serif text-5xl sm:text-7xl lg:text-9xl mt-24 indent-none sm:indent-32 lg:indent-96 hyphens-auto">
          Creating pixel perfect interfaces from design do deployment.
        </h1>
        <span className="col-start-1 col-span-2 mt-32">(00)</span>
        <h2 className="col-span-10 md:col-span-3 mt-32 text-gray">About</h2>
        <p className="col-span-full md:col-span-6 mt-2 md:mt-36">
          Hello! I'm Giacomo, a class 2003 front-end developer with a rooted
          design and IT education. <span className="font-symbola">☺</span> Down
          below some of my values, my story and my work process.
          <span className="font-symbola leading-none ms-2">⤦</span>
        </p>
        <span
          ref={blinkerRef}
          className={`col-start-1 md:col-start-6 col-span-full md:col-span-6 mt-40 ${
            blinkerState ? "text-light" : "text-dark"
          }`}
        >
          Scroll
        </span>
        <span className="col-start-1 col-span-2 mt-32">(01)</span>
        <h2 className="col-span-10 md:col-span-3 mt-32 text-gray">Education</h2>
        <p className="col-span-full md:col-span-6 mt-2 md:mt-36">
          Excluding kindergarten, elementary and middle school: I've studied IT
          and telecomunications, i've enjoyed playing and experimenting with
          HTML, CSS and JS since i was 14, I have interest in electronics but
          it's out of my professional field.
        </p>
        <span className="col-start-1 col-span-2 mt-32">(02)</span>
        <h2 className="col-span-10 md:col-span-3 mt-32 text-gray">Education</h2>
        <p className="col-span-full md:col-span-6 mt-2 md:mt-36">
          Excluding kindergarten, elementary and middle school: I've studied IT
          and telecomunications, i've enjoyed playing and experimenting with
          HTML, CSS and JS since i was 14, I have interest in electronics but
          it's out of my professional field.
        </p>
      </GridLayout>
    </BaseLayout>
  );
}
