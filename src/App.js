import { HashRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Landing from "./routes/Landing/Landing";
import About from "./routes/About/About";
import Work from "./routes/Work/Work";
import Playground from "./routes/Playground/Playground";
import Contact from "./routes/Contact/Contact";
import Regular from "./routes/Work/Regular/Regular";
import Sinapsi from "./routes/Work/Sinapsi/Sinapsi";
import MusicMatcher from "./routes/Work/MusicMatcher/MusicMatcher";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/regular" element={<Regular />} />
        <Route path="/work/sinapsi" element={<Sinapsi />} />
        <Route path="/work/musicmatcher" element={<MusicMatcher />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
