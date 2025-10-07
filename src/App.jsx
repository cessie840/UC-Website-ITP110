import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";

import Home from "./Home";
import MissionVision from "./MissionVision";
import Gallery from "./Gallery";
import About from "./About";
import Contact from "./Contact";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <Header />
      <div style={{ marginTop: "50px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission-vision" element={<MissionVision />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
