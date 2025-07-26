import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import About from "./Components/About.jsx";
import Skills from "./Components/Skills.jsx";
import { ScrollProgress } from "@/Components/magicui/scroll-progress.tsx";
import AnimatedCursor from "react-animated-cursor";
import { useEffect, useState } from "react";

function App() {
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowCursor(window.innerWidth >= 768); // show only on devices wider than 768px
    };

    handleResize(); // Initial check

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {showCursor && (
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          color="255, 0, 0"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={1.5}
          trailingSpeed={5}
          showSystemCursor={false}
          clickables={[
            "a",
            "button",
            ".link",
            ".btn",
            ".cursor-pointer",
            ".cursor-default",
            ".cursor-grabbing",
          ]}
        />
      )}
      <div className="w-full overflow-x-hidden">
        <ScrollProgress className="top-[65px]" />
        <Navbar />
        <Hero />
        <About />
        <Skills />
      </div>
    </>
  );
}

export default App;
