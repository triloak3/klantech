// App component — sets up routing for all pages
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Team from "./pages/Team.jsx";
import Projects from "./pages/Projects.jsx";
import Achievements from "./pages/Achievements.jsx";
import Events from "./pages/Events.jsx";
import Gallery from "./pages/Gallery.jsx";
import Join from "./pages/Join.jsx";

export default function App() {
  return (
    <BrowserRouter>
      {/* Navbar is always visible */}
      <Navbar />

      {/* Page content */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/join" element={<Join />} />
          <Route path="/joinus" element={<Join />} />
        </Routes>
      </main>

      {/* Footer is always visible */}
      <Footer />
    </BrowserRouter>
  );
}
