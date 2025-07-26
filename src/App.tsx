import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import About from "./Components/About.jsx";
import Skills from "./Components/Skills.jsx";
import { ScrollProgress } from "@/Components/magicui/scroll-progress.tsx";
import AnimatedCursor from "react-animated-cursor";
function App() {
  return (
    
    <>
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
        ]}/>
      <div className="w-full overflow-x-hidden">
        
        <ScrollProgress className="top-[65px]" />
        <Navbar />
        <Hero />
        <About />
        <Skills/>
      </div>
    </>
  );
}

export default App;
