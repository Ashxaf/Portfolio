import React, { useState } from "react";
import degree from "../assets/degree.png";
import Focus from "../assets/Focus.png";
import Strength from "../assets/Strength.png";
import Fun from "../assets/Fun.png";

const cards = [
  {
    title: "Degree",
    description: "BCA (Bachelor of Computer Applications)",
    img: degree,
  },
  {
    title: "Focus",
    description: "Frontend Development & Web Apps",
    img: Focus,
  },
  {
    title: "Strengths",
    description: "Clean UI, Problem Solving, Consistency",
    img: Strength,
  },
  {
    title: "Fun Fact",
    description:
      "Once dreamed of being a data analyst, turns out, I still think like one.",
    img: Fun,
  },
];

function AboutSection() {
    const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    // Toggle card on click
    setActiveCard((prev) => (prev === index ? null : index));
  };
  return (
    <section
      id="about"
      className="bg-[#fdfcdc] text-[#0d1b2a] py-24 px-6 md:px-20"
    >
      <h2 className="text-5xl font-extrabold mb-10 text-[#0d1b2a]">About Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 max-w-8xl mx-auto gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-5 text-[#0d1b2a]">How I Started My Journey :</h3>
          <p className="text-xl font-semibold leading-9 text-[#0d1b2a]/90">
            I started my journey with a strong interest in data analysis, I
            loved discovering patterns and making sense of complex information.
            But along the way, I discovered the world of frontend development
            and found a space where logic meets creativity.
          </p>

          <p className="text-xl font-semibold leading-9 mt-6 text-[#0d1b2a]/90">
            Today, I bring that analytical mindset into building clean,
            thoughtful, and responsive user interfaces. Every component I write
            has purpose. Every layout I craft aims for clarity and experience.
          </p>

          {/* Core Beliefs */}
          <div className="mt-8">
            <h4 className="text-2xl font-bold mb-2">What I Believe :</h4>
            <ul className="list-disc list-inside text-[#0d1b2a]/90 space-y-2 text-lg font-medium">
              <li>Code should be readable, scalable, and purposeful.</li>
              <li>Good design is invisible. it just works.</li>
              <li>Consistency beats complexity.</li>
              <li>Learning never stops, curiosity drives me.</li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl shadow-2xl p-15 borde bg-white border-black rounded-2xl mx-auto grid lg:grid-cols-1 md:grid-cols-1 gap-10 items-center">
          {/* Left */}
          <div>
            <h4 className="text-2xl font-bold mb-5">Personal Details : </h4>
            <p className="text-xl font-semibold leading-9 text-[#0d1b2a]/90">
              I'm a <span className="font-bold">BCA graduate</span> with a
              strong foundation in computer science and a passion for solving
              problems through technology.
            </p>
            <p className="text-xl font-semibold leading-9 mt-6 text-[#0d1b2a]/90">
              I enjoy creating digital experiences that are clean, purposeful,
              and user-centric.
            </p>
            <p className="text-xl font-semibold leading-9 mt-6 text-[#0d1b2a]/90">
              I’m constantly learning, recently diving into React Native and
              backend development. I believe in building with intention and
              staying curious.
            </p>
          </div>

          {/* Right - Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            const isActive = activeCard === index;
            return (
              <div
                key={index}
                className="relative h-44 overflow-hidden rounded-xl shadow-xl border border-[#e0e0e0] cursor-pointer bg-white group"
                onClick={() => handleCardClick(index)}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url(${card.img})` }}
                >
                  <div className="absolute inset-0 bg-black/55"></div>
                </div>

                {/* Title */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-500 z-10 text-[#fdfcdc] ${
                    isActive
                      ? "translate-y-full opacity-0"
                      : "group-hover:-translate-y-full group-hover:opacity-0"
                  }`}
                >
                  <h3 className="text-xl font-bold text-center">
                    {card.title}
                  </h3>
                </div>

                {/* Description */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-500 z-20 text-[#fdfcdc] px-6 text-center font-semibold ${
                    isActive
                      ? "translate-y-0 opacity-100"
                      : "translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                  }`}
                >
                  <p>{card.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
