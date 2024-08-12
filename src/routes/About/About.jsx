import { useEffect, useRef, useState } from "react";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import GridLayout from "../../layouts/GridLayout/GridLayout";
import AboutParagraph from "../../components/AboutParagraph/AboutParagraph";

export default function About() {
  const blinkerRef = useRef();
  const [blinkerState, setBlinkerState] = useState(true);
  const [randomSymbol, setRandomSymbol] = useState("⊙");

  useEffect(() => {
    const symbols = ["⊙", "⊚", "⭖"];
    setRandomSymbol(symbols[Math.floor(Math.random() * symbols.length)]);

    const blinkerInterval = setInterval(() => {
      setBlinkerState((prevState) => !prevState);
    }, 700);

    return () => clearInterval(blinkerInterval); // Cleanup the interval on component unmount
  }, []);

  return (
    <BaseLayout>
      <GridLayout>
        <h1 className="col-span-full font-serif text-5xl sm:text-7xl lg:text-9xl mt-24 indent-none sm:indent-32 lg:indent-96 hyphens-auto">
          Crafting pixel perfect interfaces from design do deployment.
        </h1>
        <AboutParagraph number="00" title="About">
          Hello! I'm Giacomo, a front-end developer born in 2003 with a solid
          background in design and IT. <span className="font-symbola">☺</span>{" "}
          Here are some of my values, my story, and my work process.{" "}
          <span className="font-symbola leading-none ms-2">⤦</span>
        </AboutParagraph>
        <span
          ref={blinkerRef}
          className={`col-start-1 md:col-start-6 col-span-full md:col-span-6 mt-16 md:mt-40 ${
            blinkerState ? "text-light" : "text-dark"
          }`}
        >
          Scroll
        </span>
        <AboutParagraph number="01" title="Education">
          Excluding kindergarten, elementary, and middle school, I've studied IT
          and telecommunications
          <span className="font-symbola leading-none ms-2">⏦</span>. I've
          enjoyed playing and experimenting with HTML, CSS, and JS since I was
          14. While I have an interest in electronics, it remains outside my
          professional field.
        </AboutParagraph>

        <div className="col-start-1 col-span-full md:col-start-6 md:col-span-3 mt-16 md:mt-24">
          <img
            className="w-full h-auto"
            src="/assets/images/about/0.JPG"
            alt="Me"
          />
        </div>
        <AboutParagraph number="02" title="Passion">
          Besides creating websites and designing interfaces, I'm fascinated by
          many other topics: sound systems, combat sports, vinyl records
          <span className="font-symbola leading-none ms-2">{randomSymbol}</span>
          , cooking, carpentry, neckties, and everything handmade.
        </AboutParagraph>
        <AboutParagraph number="03" title="Approach">
          My passion for craftsmanship has led me to believe that a developer is
          also an artisan. This belief has shaped my approach to always
          prioritize quality and attention to detail, ensuring that every final
          product is truly worthy of being called a craftwork.
        </AboutParagraph>
      </GridLayout>
    </BaseLayout>
  );
}
