import React, { useEffect, useState } from "react";
import {
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import WhatsAppButton from "./Components/WhatsAppButton";

import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("marknexx-theme") !== "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);

    localStorage.setItem(
      "marknexx-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <div className="app">
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/services/:slug"
            element={<ServiceDetail />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />

      <WhatsAppButton />
    </div>
  );
}

export default App;