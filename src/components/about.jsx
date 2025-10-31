import image from "../assets/aboutImage.png";
import innovation from "../assets/innnovation.png";
import expert from "../assets/expert.png";
import smart from "../assets/smart.png";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <main className="bg-black/10 md:p-[3rem] p-[2rem] flex flex-col items-center justify-center">
        <motion.header
          className="flex flex-col md:flex-row items-start"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 2.0, staggerChildren: 0.4 } } }}
        >
          <motion.div className="details flex-1 md:flex-[.5] flex flex-col items-start gap-3 md:gap-5" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
            <h1 className="text-xl md:text-3xl text-primary pb-2 border-b-4 border-b-solid border-b-primary capitalize font-semibold">
              about us
            </h1>
            <p className="text-sm md:text-base text-text-color text-justify md:mt-5">
              VersaPro is a forward-thinking technology company redefining
              education through artificial intelligence, data, and human
              insight. We combine innovation, research, and empathy to design
              intelligent learning solutions that empower educators, inspire
              learners, and transform classrooms. Our mission is to make
              education more adaptive, data-driven, and deeply human by creating
              lasting impact across schools and learning communities worldwide.
            </p>
          </motion.div>

          <motion.div className="image flex-1 md:flex-[.5]" variants={{ hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1, transition: { duration: 2.0 } } }}>
            <motion.img src={image} alt="about-image" className="md:-mt-5" loading="lazy" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 200, damping: 18 }} />
          </motion.div>
        </motion.header>
        <motion.div
          className="content flex flex-col md:flex-row items-center md:justify-between gap-10 mt-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.4 } } }}
        >
          <motion.div className="box flex flex-col items-center justify-center gap-3 md:gap-4" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 2.0 } } }}>
            <img src={innovation} alt="icon-image" className="md:w-[200px] w-[100px]" loading="lazy" />
            <div className="flex flex-col items-center text-center gap-2 md:gap-3">
              <h2 className="font-semibold text-lg md:text-4xl">
                Innovation First
              </h2>
              <p className="text-sm md:text-base w-full md:w-[80%]">
                Driven by innovation and progress, we craft cutting edge
                solutions that tackle tomorrow’s challenges and empower growth
                in a changing world.
              </p>
            </div>
          </motion.div>
          <motion.div className="box flex flex-col items-center justify-center gap-3 md:gap-4" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 2.0 } } }}>
            <img src={expert} alt="icon-image" className="md:w-[200px] w-[100px]" loading="lazy" />
            <div className="flex flex-col items-center text-center gap-2 md:gap-3">
              <h2 className="font-semibold text-lg md:text-4xl">Expert Team</h2>
              <p className="text-sm md:text-base w-full md:w-[80%]">
                A team of dedicated professionals with proven expertise,
                delivering excellence through modern technology, innovative
                design, and impactful, reliable solutions.
              </p>
            </div>
          </motion.div>
          <motion.div className="box flex flex-col items-center justify-center gap-3 md:gap-4" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 2.0 } } }}>
            <img src={smart} alt="icon-image" className="md:w-[200px] w-[100px]" loading="lazy" />
            <div className="flex flex-col items-center text-center gap-2 md:gap-3">
              <h2 className="font-semibold text-lg md:text-4xl">
                Smart Solutions
              </h2>
              <p className="text-sm md:text-base w-full md:w-[80%]">
                We use intelligent, data-driven, and innovative approaches to
                solve complex problems, simplify challenges, enhance efficiency,
                and create lasting impact.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </>
  );
}
