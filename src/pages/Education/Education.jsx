import React, { useState, useEffect } from "react";
import {
  Calendar,
  BookOpen,
  Percent,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import Meteors from "@/components/ui/meteors";

const GridBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          className="absolute inset-0"
        >
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <rect
              width="40"
              height="40"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              className="opacity-40 animate-gridPulse"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
};

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      degree:
        "B.Tech Computer Science and Engineering (Artificial Intelligence)",
      school: "Pranveer Singh Institute of Technology, Kanpur",
      mascot: "📘",
      year: "2022 - 2026",
      cgpa: "7.8",
    },
    {
      degree: "Indian School Certificate - ISC (12th)",
      school: "Sir Syed Public School, Unnao",
      mascot: "📗",
      year: "2021",
      percent: "84.4%",
    },
    {
      degree: "Indian Certificate of Secondary Education - ICSE (10th)",
      school: "Sir Syed Public School, Unnao",
      mascot: "📘",
      year: "2019",
      percent: "82%",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes gridPulse {
        0%, 100% { opacity: 0.1; }
        50% { opacity: 0.3; }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden py-32 bg-[#04081A] px-6 lg:px-12 xl:px-24">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <GridBackground />
        <Meteors number={25} className="absolute inset-0" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
            Take a look at my academic background, including the institutions I’ve attended and the degrees I’ve completed.
          </p>
        </motion.div>

        {/* Education Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative border rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm ${
                hoveredIndex === index
                  ? "border-teal-500 scale-[1.02]"
                  : "border-blue-400/20"
              }`}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{edu.mascot}</span>
                    <h3 className="text-xl font-semibold text-white leading-snug">
                      {edu.degree}
                    </h3>
                  </div>

                  <p className="text-gray-300 flex items-center gap-2 text-base">
                    <BookOpen className="w-5 h-5 text-teal-500" />
                    {edu.school}
                  </p>

                  <div className="flex flex-col gap-2 text-sm text-gray-400">
                    <p className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {edu.year}
                    </p>

                    {edu.percent && (
                      <div className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-400/10 text-yellow-300 rounded-full text-xs w-fit">
                        <Percent className="w-4 h-4" />
                        {edu.percent}
                      </div>
                    )}

                    {edu.cgpa && (
                      <div className="inline-flex items-center gap-1 px-3 py-1 bg-indigo-400/10 text-indigo-300 rounded-full text-xs w-fit">
                        <Star className="w-4 h-4" />
                        CGPA: {edu.cgpa}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;