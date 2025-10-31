import logo from "../../../public/images/mathmorph2.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function Showcase() {
  return (
    <>
      <div className="bg-white md:p-[3rem] p-[2rem] flex flex-col items-start gap-6 md:gap-10">
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2.0 }}
        >
          <h1 className="text-xl md:text-3xl text-primary pb-2 border-b-4 border-b-solid border-b-primary capitalize font-semibold">
            Our Flagship Product
          </h1>
        </motion.header>
        <main>
            <motion.div
              className="details flex flex-col gap-3"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { staggerChildren: 0.4 } } }}
            >
                <motion.h1 className="font-bold text-xl md:text-2xl" variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 2.0 } } }}>MathMorph — Intelligent Learning, Powered by AI and Human Insight</motion.h1>
                <motion.p className="font-normal text-base" variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 2.0 } } }}>MathMorph is Versapro’s flagship learning platform designed to transform how students master mathematics.</motion.p>

                <motion.ul className="list-disc pl-10 flex flex-col gap-2" variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.4 } } }}>
                    <motion.li variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { duration: 2.0 } } }}>Built on advanced AI and learning science, it creates personalized learning paths that adapt in real time, guiding every learner with precision, empathy, and insight.</motion.li>
                    <motion.li variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { duration: 2.0 } } }}>For teachers, MathMorph delivers clarity and control, turning data into action, enabling smarter instruction, and revealing each learner’s unique journey toward mastery.</motion.li>
                    <motion.li variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { duration: 2.0 } } }}>By uniting schools, educators, parents, and learners on one intelligent platform, MathMorph builds a connected ecosystem where every student can thrive in math.</motion.li>
                </motion.ul>
                <motion.div variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 2.0 } } }}>
                  <Link to='/project' className="flex flex-start bg-primary text-white w-fit md:px-6 md:py-4 px-3 py-2 capitalize">read more</Link>
                </motion.div>
            </motion.div>
            <motion.div className="image mt-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 2.0 }}>
                <motion.img src={logo} alt="" loading="lazy" animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} />
            </motion.div>
        </main>
      </div>
    </>
  );
}
