import React, { useEffect } from "react";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/nav/navbar";

function App() {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <p>
          <a href="https://blacklivesmatters.carrd.co/">
            <code>#blacklivesmatter</code>
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
