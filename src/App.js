//def
import logo from "./logo.svg";
import "./App.css";

//router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages
import Landing from "./routes/Landing/Landing";
import About from "./routes/About/About";
import Work from "./routes/Work/Work";
import Playground from "./routes/Playground/Playground";
import Contact from "./routes/Contact/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/work",
      element: <Work />,
    },
    {
      path: "/playground",
      element: <Playground />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
