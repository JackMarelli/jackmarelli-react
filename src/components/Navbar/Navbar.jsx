import { useState, useContext, useEffect, useMemo } from "react";
import GridLayout from "../../layouts/GridLayout/GridLayout";
import GlobalContext from "../../store/GlobalContext/GlobalContext";
import AnimatedLink from "../AnimatedLink/AnimatedLink";
import { useNavigate } from "react-router-dom";
import { useLenis } from "@studio-freight/react-lenis";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ctx = useContext(GlobalContext);
  const menuOptions = ctx.getMenuOptions();
  const navigate = useNavigate();
  const lenis = useLenis();

  const [orientation, setOrientation] = useState({
    beta: 0,
    gamma: 0,
    supported: false,
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    let listenerAttached = false;
    let rafId = null;

    const handleOrientation = (event) => {
      const { beta, gamma } = event;
      if (typeof beta !== "number" || typeof gamma !== "number") {
        return;
      }

      const applyUpdate = () => {
        setOrientation((prev) => {
          const clampedBeta = Math.max(-90, Math.min(90, beta));
          const clampedGamma = Math.max(-90, Math.min(90, gamma));
          const hasMeaningfulChange =
            Math.abs(prev.beta - clampedBeta) > 1 ||
            Math.abs(prev.gamma - clampedGamma) > 1 ||
            !prev.supported;

          if (!hasMeaningfulChange) {
            return prev;
          }

          return {
            beta: clampedBeta,
            gamma: clampedGamma,
            supported: true,
          };
        });
      };

      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(applyUpdate);
    };

    const attachListener = async () => {
      if (typeof DeviceOrientationEvent === "undefined") {
        return;
      }

      try {
        if (
          typeof DeviceOrientationEvent.requestPermission === "function"
        ) {
          const permission = await DeviceOrientationEvent.requestPermission();
          if (permission !== "granted") {
            return;
          }
        }
      } catch (error) {
        // Ignore permission errors and fall back silently
      }

      window.addEventListener("deviceorientation", handleOrientation, true);
      listenerAttached = true;
    };

    attachListener();

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      if (listenerAttached) {
        window.removeEventListener(
          "deviceorientation",
          handleOrientation,
          true
        );
      }
    };
  }, []);

  const mobileOptionStyle = useMemo(() => {
    if (!orientation.supported) {
      return { color: "#111111" };
    }

    const gamma = Math.max(-45, Math.min(45, orientation.gamma));
    const beta = Math.max(-45, Math.min(45, orientation.beta));
    const normalizedGamma = gamma / 45; // -1 to 1
    const normalizedBeta = beta / 45; // -1 to 1
    const angle = 45 + normalizedGamma * 35;
    const magentaIntensity = Math.min(
      1,
      Math.abs(normalizedGamma) * 0.8 + Math.abs(normalizedBeta) * 0.4
    );
    const darkness = Math.min(0.95, 0.25 + Math.abs(normalizedBeta) * 0.5);
    const gradient = `linear-gradient(${angle}deg, rgba(255, 0, 153, ${
      0.15 + magentaIntensity * 0.6
    }) 0%, rgba(20, 20, 20, ${darkness}) 40%, rgba(255, 255, 255, ${
      0.08 + magentaIntensity * 0.2
    }) 65%, rgba(255, 0, 153, ${
      0.12 + magentaIntensity * 0.35
    }) 100%)`;
    const glowStrength = Math.min(
      1,
      Math.abs(normalizedGamma) + Math.abs(normalizedBeta)
    );

    return {
      color: "transparent",
      backgroundImage: gradient,
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      textShadow: `0 0 ${8 + glowStrength * 10}px rgba(255, 0, 153, ${
        0.2 + 0.4 * glowStrength
      })`,
      transition:
        "background-image 120ms linear, text-shadow 150ms linear, color 200ms ease",
    };
  }, [orientation]);

  const MobileMenuOption = ({ label, onClick, style }) => (
    <div className="col-span-full mb-4">
      <span
        className="capitalize text-6xl font-serif cursor-pointer"
        onClick={onClick}
        style={style}
      >
        {label}
      </span>
    </div>
  );

  const handleScrollToContact = () => {
    lenis.scrollTo(document.body.scrollHeight);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Close menu after navigation
  };

  const handleContactClick = () => {
    handleScrollToContact();
    handleMenuToggle(); // Close menu after scrolling
  };

  const mobileMenuItems = [
    ...menuOptions.map((option) => ({
      label: option,
      onClick: () => handleNavigation(`/${option}`),
    })),
    {
      label: "Contact",
      onClick: handleContactClick,
    },
  ];

  return (
    <>
      <nav
        className={`absolute top-0 w-full py-3 ${
          isMenuOpen ? "bg-gray-100" : "bg-light"
        } z-50 sticky top-0 md:text-2xl`}
      >
        <GridLayout>
          <div
            onClick={() => navigate("/")}
            className="col-span-6 xl:col-span-3 w-fit cursor-pointer"
          >
            <AnimatedLink to="/" content="Jack Marelli" />
          </div>
          <div className="col-span-3 h-full flex justify-start items-center">
            <img
              onClick={() => navigate("/")}
              className="h-4 md:h-5 xl:h-6 w-auto cursor-pointer"
              src="/assets/images/icons/logo/logo_black.svg"
              alt="Jack Marelli Logo"
            />
          </div>
          <div className="hidden xl:inline col-span-4 flex flex-row justify-start items-center">
            {menuOptions.map((option, index) => (
              <span key={option}>
                <AnimatedLink
                  to={`/${option}`}
                  content={option}
                  capitalize={true}
                />
                {index < menuOptions.length - 1 && (
                  <span className="w-fit me-2">,</span>
                )}
              </span>
            ))}
          </div>
          <div className="hidden xl:inline col-span-2 text-end">
            <AnimatedLink
              content="Contact"
              callBack={handleScrollToContact}
              className="cursor-pointer"
            />
          </div>
          <div
            className="xl:hidden col-span-3 text-end cursor-pointer"
            onClick={handleMenuToggle}
          >
            {isMenuOpen ? "Close" : "Menu"}
          </div>
        </GridLayout>
      </nav>

      {/* Full Screen Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-100 z-40 flex flex-col items-start justify-center text-black text-serif">
          <GridLayout>
            {mobileMenuItems.map(({ label, onClick }) => (
              <MobileMenuOption
                key={label}
                label={label}
                onClick={onClick}
                style={mobileOptionStyle}
              />
            ))}
          </GridLayout>
        </div>
      )}
    </>
  );
}
