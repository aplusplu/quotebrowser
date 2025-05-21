import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuoteDetail from "./pages/QuoteDetail";
import Favorites from "./pages/Favorites";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);



  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <>
      <header style={{ padding: "1rem", textAlign: "center" }}>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="glassy-button"
        >
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote/:id" element={<QuoteDetail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}
