import bg from "../assets/mission-image.jpg";
import { motion } from "framer-motion";

export default function Mission() {
  return (
    <>
      <main
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="overlay bg-black/70 md:px-[3rem] px-[2rem] md:py-[5rem] py-[4rem] h-[100%]">
          <motion.header
            className="flex flex-col items-center justify-center text-center gap-2 md:gap-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2.0 }}
          >
            <h1 className="text-3xl md:text-5xl text-white capitalize font-semibold">
              our missions
            </h1>
          </motion.header>

          <section className="flex flex-col items-start justify-center gap-6 md:mt-20 mt-10 mx-auto w-[90%] md:w-[60%]">
            {[{
              bar: "bg-yellow-500",
              text: "Our mission is to transform education by combining artificial intelligence, data, and human understanding to create adaptive, intelligent learning experiences that empower educators and inspire lifelong curiosity in every learner."
            },{
              bar: "bg-white",
              text: "We strive to bridge technology and learning science, designing AI-powered tools that help educators personalize instruction, enhance outcomes, and make data-driven education accessible to schools and learners worldwide."
            },{
              bar: "bg-primary",
              text: "Versapro’s mission is to build intelligent, human-centered systems that merge innovation with empathy, empowering global learning communities to achieve meaningful progress through insight, collaboration, and transformative educational technology."
            }].map((m, idx) => (
              <motion.div
                key={idx}
                className="mission flex items-start gap-5 flex-1 md:flex-[.5]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 2.0, delay: idx * 0.2 }}
              >
                <motion.div className={`bar md:w-4 md:h-20 w-2 h-32 ${m.bar}`} initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 2.0, delay: 0.15 + idx * 0.15 }} style={{ transformOrigin: "top" }}></motion.div>
                <div className="text text-[13px] md:text-base text-white font-thin md:font-medium w-full md:w-[100%]">
                  {m.text}
                </div>
              </motion.div>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}
