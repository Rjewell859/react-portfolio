import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";

function App() {
  return (
    <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Header />
          <Nav />
        </nav>
    
      <Routes>
        <Route path="/react-portfolio" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
  
      <Footer />

    </Router>
  );
}

export default App;
