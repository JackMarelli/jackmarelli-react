//def
import logo from "./logo.svg";
import "./App.css";

//router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//pages
import Landing from "./routes/Landing/Landing";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;