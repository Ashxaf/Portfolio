import React, { useState } from "react";
import CircularGallery from "../animation/CircularGallery";
import { AgCharts } from "ag-charts-react";
import { MotionHighlightCardsHoverDemo } from "./MotionHighlight";
function Skills() {
  const [chartOptions, setChartOptions] = useState({
    data: [
      { skills: "React JS", score: 80 },
      { skills: "Python", score: 60 },
      { skills: "Tailwind CSS", score: 75 },
      { skills: "HTML 5", score: 70 },
      // { skills: 'JavaScript', score: 96 },
      { skills: "Angular", score: 49 },
      { skills: "React Native", score: 65 },
      { skills: "My SQL", score: 60 },
      { skills: "Next JS", score: 68 },
      // { skills: 'Streamlit', score: 60 },
      // { skills: 'Git', score:  },
      { skills: "Bootstrap", score: 78 },
      { skills: "TypeScript", score: 67 },
      // { skills: 'Power BI', score: 58 },
    ],
    series: [
      {
        type: "bar",
        direction: "horizontal",
        xKey: "skills",
        yKey: "score",
        fill: "#0077b6",
        highlighted: true,
        highlightStyle: {
          item: {
            fill: "#98f5e1",
          },
        },
      },
    ],

    axes: [
      {
        type: "category",
        position: "left",
        label: {
          color: "#e5e5e5",
        },
        line: {
          enabled: false,
        },

        gridLine: {
          enabled: false,
        },
      },

      {
        type: "number",
        position: "bottom",
        label: {
          color: "#e5e5e5",
        },
        line: {
          enabled: false,
        },
        gridLine: {
          enabled: false,
        },
        min: 0,
        max: 100,
      },
    ],
    theme: {
      overrides: {
        common: {
          background: {
            fill: "transparent",
          },
        },
      },
    },
  });

  return (
    <div className="py-24 bg-[#0d1b2a] text-[#fdfcdc] px-6 md:px-20">
      <h2 className="text-5xl font-extrabold mb-20 text-[#fdfcdc]">Skills</h2>
      <h4 className="text-2xl font-bold mb-5">What I Bring to the Table : </h4>

      <div className="" style={{ height: "500px", position: "relative" }}>
        <CircularGallery bend={2} textColor="#fdfcdc" borderRadius={0.05} />
      </div>

      <div className="grid grid-cols-1 gap-16 2xl:grid-cols-2 max-w-8xl mx-auto mt-48">
        <div className="w-full p-10 pb-16 rounded-3xl bg-[#1a395ade]">
          <h2 className="text-2xl font-bold mb-5">Proficiency Chart :</h2>
          <AgCharts className="h-full gap-3" options={chartOptions} />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-5">Core Strengths :</h2>
          <MotionHighlightCardsHoverDemo />
        </div>
      </div>
    </div>
  );
}

export default Skills;
