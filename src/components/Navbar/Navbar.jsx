import { useContext } from "react";
import GridLayout from "../../layouts/GridLayout/GridLayout";
import GlobalContext from "../../store/GlobalContext/GlobalContext";
import AnimatedLink from "../AnimatedLink/AnimatedLink";

export default function Navbar() {
  const ctx = useContext(GlobalContext);
  const menuOptions = ctx.getMenuOptions();

  return (
    <nav className="text-3xl absolute top-0 w-full py-4">
      <GridLayout>
        <div className="col-span-2 w-fit">Jack Marelli</div>
        <div className="h-full flex justify-start items-center">
          <img
            className="h-6 w-auto"
            src="assets/images/icons/logo/logo_black.svg"
            alt="Jack Marelli Logo"
          />
        </div>
        <div className="col-start-7 col-span-5 flex flex-row justify-start items-center">
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
        <div className="col-span-1 flex justify-end">Contact</div>
      </GridLayout>
    </nav>
  );
}
