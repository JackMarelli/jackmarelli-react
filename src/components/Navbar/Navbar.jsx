import { useState, useContext } from "react";
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

  return (
    <>
      <nav
        className={`absolute top-0 w-full py-3 ${
          isMenuOpen ? "bg-gray-100" : "bg-light"
        } z-50 sticky top-0`}
      >
        <GridLayout>
          <div
            onClick={() => navigate("/")}
            className="col-span-6 xl:col-span-3 w-fit cursor-pointer"
          >
            <AnimatedLink to="/" content="Jack Marelli" />
          </div>
          <div className="col-span-3 xl:col-span-3 h-full flex justify-start items-center">
            <img
              onClick={() => navigate("/")}
              className="h-4 md:h-5 xl:h-6 w-auto cursor-pointer"
              src="assets/images/icons/logo/logo_black.svg"
              alt="Jack Marelli Logo"
            />
          </div>
          <div className="hidden xl:inline xl:col-start-7 col-span-5 flex flex-row justify-start items-center">
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
          <div className="hidden xl:inline xl:col-span-1 flex justify-end">
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
            {menuOptions.map((option) => (
              <div className="col-span-full mb-4">
                <span
                  key={option}
                  className="capitalize text-5xl font-serif cursor-pointer"
                  onClick={() => handleNavigation(`/${option}`)}
                >
                  {option}
                </span>
              </div>
            ))}
            <div className="col-span-full">
              <span
                className="capitalize text-5xl font-serif cursor-pointer"
                onClick={() => {
                  handleScrollToContact();
                  handleMenuToggle(); // Close menu after scrolling
                }}
              >
                Contact
              </span>
            </div>
          </GridLayout>
        </div>
      )}
    </>
  );
}
