import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import novaImg from "@/assets/images/nova.png"; // use @ or relative path based on setup
import matchingImg from "@/assets/images/matching.png";
import weatherImg from "@/assets/images/weather.png";
import netflixImg from "@/assets/images/netflix.png";
import plantImg from "@/assets/images/plant.png";
import Meteors from "@/components/ui/meteors";
import summaryImg from "@assets/images/summary.png";

const projects = [
  {
    title: "NOVA",
    description:
      "A simple virtual assistant with voice input, animated UI, and a user-friendly interface. Built with HTML, CSS, and JavaScript. ",
    src: novaImg,
    link: "",
    color: "#5196fd",
    githubLink: "https://github.com/ridafatima1210/NOVA",
    liveLink: "https://nova-git-main-rida-fatimas-projects-ef57397f.vercel.app",
  },
  {
    title: "Matching Pair Game",
    description:
      "A fun and interactive memory card game where players match pairs of cards. Built using HTML, CSS, and JavaScript with smooth animations and responsive design.",
    src: matchingImg,
    link: "",
    color: "#8f89ff",
    githubLink: "https://github.com/ridafatima1210/Matching-Pair",
    liveLink: "https://matching-pair-ezza6p9dm-rida-fatimas-projects-ef57397f.vercel.app/",
  },

  {
    title: "Weather Website",
    description:
      "This project is a website build using HTML, CSS, Javascript and RESTful API that fetches weather data from an API and displays the current weather conditions.",
    src: weatherImg,
    link: "",
    color: "#8f89ff",
    githubLink: "https://github.com/ridafatima1210/Weather_Website",
    liveLink: "https://weather-website-rida-fatimas-projects-ef57397f.vercel.app/",
  },

  {
  title: "Netflix Homepage Clone",
    description:
      "This project is a simplified clone of the Netflix homepage, built using HTML and CSS.",
    src: netflixImg,
    link: "",
    color: "#8f89ff",
    githubLink: "https://github.com/ridafatima1210/Homepage_of_Netflix",
    liveLink: "",  
  },
  {

  title: "Plant Vigil",
    description:
      "Plant Vigil is an AI-based plant disease detection system that uses image recognition to identify diseases from leaf and fruit photos. Built using Python, TensorFlow, and OpenCV, it leverages deep learning (CNNs) to analyze uploaded images and provide instant diagnoses along with treatment suggestions. The project features a responsive Flask web interface, with HTML, CSS, and JavaScript for the frontend, and is deployed on a scalable cloud platform using AWS. Designed for accessibility and impact, Plant Vigil helps farmers, gardeners, and researchers monitor plant health in real time, promoting early detection and sustainable agriculture.",
    src: plantImg,
    link: "",
    color: "#8f89ff",
    githubLink: "https://github.com/ridafatima1210/plant-vigil",
    liveLink: "",  
  }, 
  {

  title: "SummarMuse",
    description:
      "SummarMuse is an AI-powered document summarization tool that helps users generate concise and high-quality summaries from PDFs, text files, and images. Built with React, Vite, TailwindCSS, and Framer Motion for a clean and responsive UI, the app integrates the Gemini API for accurate AI-driven summarization. Users can select Short, Medium, or Long summaries based on their needs. The backend is deployed on Render for secure API handling, while the frontend is hosted on Vercel for fast and reliable performance.",
    src: summmaryImg,
    link: "",
    color: "#8f89ff",
    githubLink: "https://github.com/ridafatima1210/SummarMuse",
    liveLink: "https://summar-muse.vercel.app/",  
  }


];



export default function Projects1() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                src={project.src}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
}) {
  const container = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <Meteors number={10} />
                      </div>

      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Modern split card design */}
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          {/* Image section - full width on mobile, 55% on desktop */}
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
            <motion.img
              src={src}
              alt={title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

             
            {/* Colored overlay on hover */}
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />

            {/* Project number */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Project {i + 1}
            </div>
          </div>

          {/* Content section - full width on mobile, 45% on desktop */}
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-md">
                {description}
              </p>
            </div>

            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

              <div className="flex items-center gap-4">
                {/* GitHub Link */}
                <motion.a
                  href={projects[i].githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Code
                  </span>
                </motion.a>

                {/* Live Link */}
                <motion.a
                  href={projects[i].liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Live
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
    
  );
}
