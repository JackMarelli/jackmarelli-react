import { useContext, useEffect } from "react";
import GridLayout from "../../layouts/GridLayout/GridLayout";
import FooterSection from "../FooterSection/FooterSection";
import GlobalContext from "../../store/GlobalContext/GlobalContext";
import AnimatedLink from "../AnimatedLink/AnimatedLink";

export default function Footer() {
  const ctx = useContext(GlobalContext);
  const menuOptions = ctx.getMenuOptions();

  useEffect(() => {
    console.log(ctx.getMenuOptions());
  }, [ctx]);

  return (
    <footer>
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
        <FooterSection title="Language">
          <AnimatedLink to={`/`} content={"English"} capitalize={true} />
          <AnimatedLink to={`/`} content={"Italian"} capitalize={true} />
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
            to="https://www.behance.net/giacomomarelli1"
            content="Behance"
            capitalize={true}
          />
          <AnimatedLink
            to="https://github.com/JackMarelli"
            content="GitHub"
            capitalize={true}
          />
        </FooterSection>
        <FooterSection title="Location">
          <h3>Cantù, Italy</h3>
        </FooterSection>
        <div className="col-start-7 col-span-5 md:col-start-10 md:col-span-3 mt-24 mb-12 md:mt-48">
          Back to top{" "}
          <span className="font-symbola text-4xl md:text-6xl">☝</span>
        </div>
        <div className="col-span-full text-[8.5vw] leading-none font-serif ">
          Hire me at{" "}
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

/*

<div class="inline-contain section-title fs-lg">Links</div>
      <div class="inline-contain footer-links">
        <div class="footer-list">
          <div class="fs-lg">Cantù, Italy</div>
        </div>
        <div class="fs-lg footer-list">
          <a href="https://www.linkedin.com/in/giacomo-marelli-6a8866230/">Linkedin</a>
          <a href="https://github.com/JackMarelli">Github</a>
          <a href="https://www.behance.net/giacomomarelli1">Behance</a>
        </div>
        <div class="fs-lg footer-list">
          <a href="https://www.instagram.com/jack.marelli/">Instagram</a>
          <a href="https://twitter.com/jackmareIIi">X</a>
        </div>
        <div class="fs-lg footer-list">
          <a href="https://www.jackmarelli.com/">Home</a>
          <a href="https://www.jackmarelli.com/projects/">Works</a>
          <a href="https://www.jackmarelli.com/playground/">Playground</a>
          <a href="mailto:marelligiacomo@gmail.com">Contact</a>
          <a id="backToTopBtn" href="#">Back to top <span class="symbola">☝</span></a>
        </div>
      </div>
      <div class="inline-contain display fs-2xl footer-mail">Hire me at <span class="symbola">⤵</span> <br><a class="display-italic"
          href="mailto:marelligiacomo@gmail.com">marelligiacomo@gmail.com</a>
      </div>
      
      */
