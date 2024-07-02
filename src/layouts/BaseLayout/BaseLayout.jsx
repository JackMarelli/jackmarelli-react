import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./BaseLayout.module.scss"; //used for selection

export default function BaseLayout({ children, footer = true, navbar = true }) {
  return (
    <div className="w-100 h-fit flex flex-col text-3xl">
      {navbar && <Navbar />}
      {children}
      {footer && <Footer />}
    </div>
  );
}
