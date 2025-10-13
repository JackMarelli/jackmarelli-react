import { useContext, useEffect } from "react";
import { useLenis } from "@studio-freight/react-lenis";
import GridLayout from "../../layouts/GridLayout/GridLayout";
import FooterSection from "../FooterSection/FooterSection";
import GlobalContext from "../../store/GlobalContext/GlobalContext";
import AnimatedLink from "../AnimatedLink/AnimatedLink";

export default function Footer() {
  const ctx = useContext(GlobalContext);
  const menuOptions = ctx.getMenuOptions();
  const lenis = useLenis();

  const handleScrollToTop = () => {
    lenis.scrollTo(0);
  };

  useEffect(() => {
    console.log(ctx.getMenuOptions());
  }, [ctx]);

  return (
    <footer className="mt-24 text-base/5 md:text-2xl">
      <GridLayout>
        <FooterSection title="Menu">
          {menuOptions.map((option, index) => (
            <AnimatedLink
              key={option}
              to={`/${option}`}
              content={option}
              capitalize={true}
            />
          ))}
        </FooterSection>
        <FooterSection title="Associate">
          <AnimatedLink
            to={`https://www.quantum-studio.it/`}
            content={"Quantum Studio"}
            capitalize={true}
          />
        </FooterSection>
        <FooterSection title="Social">
          <AnimatedLink
            to="https://www.instagram.com/jack.marelli/"
            content="Instagram"
            capitalize={true}
          />
          <AnimatedLink
            to="https://www.linkedin.com/in/giacomo-marelli-6a8866230/"
            content="LinkedIn"
            capitalize={true}
          />
          <AnimatedLink
            to="https://github.com/JackMarelli"
            content="GitHub"
            capitalize={true}
          />
        </FooterSection>
        <FooterSection title="Locations">
          <h3>Milan (MI), Italy</h3>
          <h3>Gallarate (VA), Italy</h3>
          <h3>Como (CO), Italy</h3>
        </FooterSection>
        <div
          onClick={handleScrollToTop}
          className="col-start-7 col-span-5 md:col-start-10 md:col-span-3 mt-24 mb-12 md:mt-48 cursor-pointer"
        >
          <AnimatedLink content="Back to top" />
          <span className="font-symbola text-4xl md:text-6xl">☝</span>
        </div>
        <div className="col-span-full text-[8.5vw] leading-none font-serif ">
          Reach out{" "}
          <span className="font-symbola">
            ⤵ <br />
          </span>
          <a className="font-italic" href="mailto:marelligiacomo@gmail.com">
            marelligiacomo@gmail.com
          </a>
        </div>
      </GridLayout>
    </footer>
  );
}