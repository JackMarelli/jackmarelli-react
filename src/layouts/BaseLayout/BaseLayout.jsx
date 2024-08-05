import { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./BaseLayout.module.scss"; //used for selection
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { useLocation } from "react-router-dom";

export default function BaseLayout({ children, footer = true, navbar = true }) {
  const { pathname } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 0 });
      lenis.options.lerp = 0.07;
    }
  }, [pathname, lenis]);

  return (
    <ReactLenis root>
      <div className="w-100 h-fit flex flex-col text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight">
        {navbar && <Navbar />}
        {children}
        {footer && <Footer />}
      </div>
    </ReactLenis>
  );
}
