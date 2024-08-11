import { createHashRouter, RouterProvider } from "react-router-dom";

//pages
import Landing from "./routes/Landing/Landing";
import About from "./routes/About/About";
import Work from "./routes/Work/Work";
import Playground from "./routes/Playground/Playground";
import Contact from "./routes/Contact/Contact";
import Regular from "./routes/Work/Regular/Regular";
import Sinapsi from "./routes/Work/Sinapsi/Sinapsi";
import MusicMatcher from "./routes/Work/MusicMatcher/MusicMatcher";

function App() {
  const router = createHashRouter([
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
      path: "/work/regular",
      element: <Regular />,
    },
    {
      path: "/work/sinapsi",
      element: <Sinapsi />,
    },
    {
      path: "/work/musicmatcher",
      element: <MusicMatcher />,
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
