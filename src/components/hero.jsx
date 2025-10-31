import { BulbOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      <main className="flex flex-col md:flex-row gap-5 md:justify-between items-start md:items-center md:py-[8rem] md:px-[3rem] p-[2rem]">
        <motion.div
          className="details flex flex-col md:items-center items-start gap-4 md:gap-5 text-white"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 2.0, ease: "easeOut", staggerChildren: 0.4 }
            }
          }}
        >
          <motion.h1
            className="text-3xl md:text-[50px] leading-[45px] md:leading-[70px] font-semibold md:font-bold w-full md:w-[70%] md:text-center"
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 2.0 } } }}
          >
            Pioneering Intelligent Education Through Artificial Intelligence and Learning Science.
          </motion.h1>
          <motion.p
            className="md:w-[49%] md:text-center font-medium"
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 2.0 } } }}
          >
           We unite advanced AI with human understanding to convert data into actionable insight, shaping learning experiences that are intelligent, adaptive, and personally meaningful.
          </motion.p>

          <motion.div className="btn flex flex-row items-start gap-3" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 2.0 } } }}>
            <motion.button
              className="bg-primary text-white flex items-center gap-2 outline-none md:px-10 md:py-4 p-2 rounded capitalize"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <BulbOutlined className="text-yellow-400 font-bold text-xl md:text-lg" />{" "}
              <p className="text-sm md:text-lg">Explore Our Solutions</p>
            </motion.button>
          </motion.div>
        </motion.div>
      </main>
    </>
  );
}
