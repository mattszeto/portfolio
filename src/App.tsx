import React, { useState, useEffect } from "react";
import Navbar from "./components/NavBar";
import Window from "./components/Window";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

const App: React.FC = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const ifMobileView = dimensions.width <= 1027;
  const renderWindows = () => (
    <div>
      <div className="app-about-me">
        <Window size="m" draggable={!ifMobileView}>
          <AboutMe />
        </Window>
      </div>
      <div className="app-details">
        <Window size="m" draggable={!ifMobileView}>
          <Experience />
        </Window>
        <Window size="s" draggable={!ifMobileView}>
          <Projects />
        </Window>
      </div>
    </div>
  );

  return (
    <div className="app">
      <header className="app-header">
        <Navbar />
      </header>
      {renderWindows()}
    </div>
  );
};

export default App;
