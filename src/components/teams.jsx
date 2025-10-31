import tunji from "../assets/tunji.jpg";
import diran from "../assets/diran.jpeg";
import khoi from "../assets/khoi.jpeg";
import mubarak from "../assets/mubarak.png";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Adetunji Adeniran, PhD, FHEA.",
    role: "Founder, Tech Lead",
    image: tunji,
  },
  {
    name: "Adediran Adeniran",
    role: "VPimSys Design Lead",
    image: diran,
  },
  {
    name: "Mubaraq Oyebisi",
    role: "Frontend Engineer",
    image: mubarak,
  },
  {
    name: "Anh Khoi",
    role: "Frontend Engineer Intern",
    image: khoi,
  },
];

export default function Teams() {
  const [current, setCurrent] = useState(1); // Start with 2nd card centered

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  const next = () =>
    setCurrent((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));

  return (
    <main className="bg-black/10 md:p-[3rem] p-[2rem] flex flex-col items-start">
      <header>
        <h2 className="text-xl md:text-3xl text-primary pb-2 border-b-4 border-b-solid border-b-primary capitalize font-semibold w-fit">
          meet our team
        </h2>
        <div className="mt-4 md:mt-10 flex flex-col gap-2">
          <h2 className="font-medium text-xl md:text-2xl">
            A team devoted to transforming creativity and innovation into
            real-world solutions.
          </h2>
          <p className="text-text-color text-sm md:text-base">
            Our dedicated team transforms ideas into impactful innovations,
            using collaboration, expertise, and technology to create solutions
            that drive progress and meaningful change.
          </p>
        </div>
      </header>

      {/* Carousel Section */}
      <section className="relative flex items-center justify-center w-full py-10 md:py-20 overflow-hidden">
        {/* Left Arrow */}
        <motion.button
          onClick={prev}
          className="absolute left-4 md:left-16 z-[9999] rounded-full transition bg-black/50 text-white"
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft size={45} />
        </motion.button>

        {/* Cards */}
        <motion.div className="flex items-center justify-center relative w-full max-w-6xl h-[60vh]" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 2.0 }}>
          {teamMembers.map((member, index) => {
            const isActive = index === current;
            const isPrev =
              index === (current - 1 + teamMembers.length) % teamMembers.length;
            const isNext = index === (current + 1) % teamMembers.length;

            let positionClass =
              "opacity-0 scale-75 z-0 translate-x-0 pointer-events-none";
            if (isActive)
              positionClass =
                "opacity-100 scale-100 z-20 translate-x-0 pointer-events-auto";
            else if (isPrev)
              positionClass =
                "opacity-60 scale-90 z-10 -translate-x-[60%] md:-translate-x-[200px]";
            else if (isNext)
              positionClass =
                "opacity-60 scale-90 z-10 translate-x-[60%] md:translate-x-[200px]";

            return (
              <motion.div
                key={index}
                className={`absolute transition-all duration-700 ease-in-out ${positionClass}`}
                whileHover={isActive ? { scale: 1.02 } : {}}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <div className="bg-primary text-white rounded-xl overflow-hidden shadow-lg border border-white/10 w-[280px] md:w-[350px]">
                  <div
                    style={{
                      backgroundImage: `url(${member.image})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      height: "50vh",
                    }}
                  ></div>
                  <div className="p-4 text-center">
                    <h3 className="capitalize font-semibold">{member.name}</h3>
                    <p className="text-white/70 capitalize">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Right Arrow */}
        <motion.button
          onClick={next}
          className="absolute right-4 md:right-16 z-20 rounded-full transition bg-black/50 text-white"
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight size={45} />
        </motion.button>
      </section>
    </main>
  );
}
