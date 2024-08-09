import { useContext } from "react";
import GridLayout from "../../layouts/GridLayout/GridLayout";
import GlobalContext from "../../store/GlobalContext/GlobalContext";
import AnimatedLink from "../AnimatedLink/AnimatedLink";
import { useNavigate } from "react-router-dom";
import { useLenis } from "@studio-freight/react-lenis";

export default function Navbar() {
  const ctx = useContext(GlobalContext);
  const menuOptions = ctx.getMenuOptions();
  const navigate = useNavigate();
  const lenis = useLenis();

  const handleScrollToContact = () => {
    lenis.scrollTo(document.body.scrollHeight);
  };

  return (
    <nav className="absolute top-0 w-full py-3 bg-light z-50 sticky top-0">
      <GridLayout>
        <div
          onClick={() => navigate("/")}
          className="col-span-6 xl:col-span-3 w-fit cursor-pointer"
        >
          <AnimatedLink to="/" content="Jack Marelli" />
        </div>
        <div className="col-span-3 xl:col-span-3 h-full flex justify-start items-center ">
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
        <div className="xl:hidden col-span-3 text-end ">Menu</div>
      </GridLayout>
    </nav>
  );
}
