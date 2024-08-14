import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Importing pages
import Landing from "./routes/Landing/Landing";
import About from "./routes/About/About";
import Work from "./routes/Work/Work";
import Playground from "./routes/Playground/Playground";
import Contact from "./routes/Contact/Contact";
import Regular from "./routes/Work/Regular/Regular";
import Sinapsi from "./routes/Work/Sinapsi/Sinapsi";
import MusicMatcher from "./routes/Work/MusicMatcher/MusicMatcher";
import _50SfumatureDiPinotNoir from "./routes/Work/_50SfumatureDiPinotNoir/_50SfumatureDiPinotNoir";
import MadeInBergamo from "./routes/Work/MadeInBergamo/MadeInBergamo";

// Define routes
const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/about", element: <About /> },
  { path: "/work", element: <Work /> },
  { path: "/work/regular", element: <Regular /> },
  { path: "/work/sinapsi", element: <Sinapsi /> },
  { path: "/work/musicmatcher", element: <MusicMatcher /> },
  {
    path: "/work/50sfumaturedipinotnoir",
    element: <_50SfumatureDiPinotNoir />,
  },
  {
    path: "/work/madeinbergamo",
    element: <MadeInBergamo />,
  },
  { path: "/playground", element: <Playground /> },
  { path: "/contact", element: <Contact /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
