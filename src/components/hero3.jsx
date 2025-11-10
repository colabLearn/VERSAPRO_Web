import { BulbOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

export default function Hero3() {
  return (
    <>
      <main className="flex flex-col md:flex-row gap-5 md:justify-center items-start md:items-center md:py-[8rem] md:px-[3rem] p-[2rem]">
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
           Intelligent Learning, Real Impact: Transforming Math Education with Innovation 
          </motion.h1>
          <motion.p
            className="md:w:[49%] md:text-center font-medium"
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 2.0 } } }}
          >
            We are building a smart educational tool that not only improve math learning but also contribute to research and long-term societal progress. 
          </motion.p>

          <motion.div className="btn flex flex-row items-start gap-3" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 2.0 } } }}>
            <motion.button
              className="bg-primary text-white flex items-center gap-2 outline-none md:px-10 md:py-4 p-2 rounded capitalize"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <BulbOutlined className="text-yellow-400 font-bold text-xl md:text-lg" />
              <p className="text-sm md:text-lg">Explore Our Solutions</p>
            </motion.button>
          </motion.div>
        </motion.div>
      </main>
    </>
  );
}


