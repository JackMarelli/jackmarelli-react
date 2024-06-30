import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function BaseLayout({ props, children }) {
  return (
    <div className="w-100 h-fit flex flex-col">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
