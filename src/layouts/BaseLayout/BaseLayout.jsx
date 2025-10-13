import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import Loader from "../../components/Loader/Loader";

export default function BaseLayout({ children, footer = true, navbar = true }) {
  const { pathname } = useLocation();
  const navigation = useNavigation();
  const lenis = useLenis();

  const [initialLoading, setInitialLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setInitialLoading(false), 700);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 0 });
      lenis.options.lerp = 0.07;
    }
  }, [pathname, lenis]);

  const isRouteChanging = navigation.state !== "idle";
  const showLoader = initialLoading || isRouteChanging;

  return (
    <ReactLenis root>
      <Loader active={showLoader} />

      <div className="w-100 h-fit flex flex-col text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight">
        {navbar && <Navbar />}
        {/* If a page passed children (old usage), render them.
            Otherwise, render nested routes via Outlet (new usage). */}
        {children ?? <Outlet />}
        {footer && <Footer />}
      </div>
    </ReactLenis>
  );
}
