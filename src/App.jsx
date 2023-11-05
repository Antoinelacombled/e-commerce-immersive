import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import SceneOne from "./components/SceneOne/SceneOne";
import SceneTwo from "./components/SceneTwo/SceneTwo";

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="super-container">
        <Routes>
          <Route path="/" element={<SceneOne />} />
          <Route path="/living-room" element={<SceneTwo />} />
        </Routes>

        <div className="explore-menu">
          <button
            className="explore-btn"
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            Explore
          </button>
          {isMenuOpen && (
            <div className="scenes">
              <Link to="/bedroom" className="scene-word">
                Bedroom
              </Link>
              <Link to="/living-room" className="scene-word">
                Living Room
              </Link>
              <Link to="/" className="scene-word">
                Studio
              </Link>
              <Link to="/sport-room" className="scene-word">
                Sport Room
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
