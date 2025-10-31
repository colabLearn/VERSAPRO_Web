import { FaHome, FaPhone, FaEnvelope } from "react-icons/fa";
import Navbar from "./common/navbar";
import { motion } from "framer-motion";

export default function Contact() {
  const addresses = [
    {
      id: 1,
      country: "united kingdom",
      location: "51 Brougham Gardens Dundee, United Kingdom, DD4 6TN",
      number: "+44(0)7770093639",
      email: "management@versapro.tech",
    },
    {
      id: 2,
      country: "germany",
      location: "Hauptstraße, Berlin, Germany 10115",
      number: "+49 30 12345678",
      email: "adediran.adeniran@versapro.tech",
    },
  ];
  return (
    <>
    <Navbar />
      <main className="md:px-[3rem] px-[2rem] md:py-[5rem] py-[2rem] overflow-x-hidden">
        <motion.div className="flex flex-col md:items-center md:text-center md:justify-center w-[100%] md:w-[65%] mx-auto gap-3 md:gap-4" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 2.0 }}>
          <h1 className="font-semibold text-2xl md:text-4xl leading-normal">
            Contact Us
          </h1>
          <p className="text-text-color text-sm md:text-base">
           We would love to hear from you. Send us a message with your project ideas feedback or questions and we will respond as soon as possible to help you.
          </p>
        </motion.div>


        <section className="mt-10 md:mt-20 flex flex-col md:flex-row gap-10 md:gap-20">
          <div className="address flex-1 md:flex-[.5]">
            <div className="flex flex-col gap-5 md:gap-10">
              {addresses.map((item, idx) => (
                <motion.div
                  key={item.id}
                  className="bg-primary/10 md:p-5 p-3 flex flex-col gap-3 md:gap-5"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 2.0, delay: idx * 0.18 }}
                >
                  <h2 className="font-bold uppercase text-base">{item.country}</h2>

                  <div className="flex flex-col gap-2 md:gap-3">
                    <p className="flex items-center gap-1 md:gap-2 text-sm md:text-base"><FaHome /> {item.location}</p>
                    <p className="flex items-center gap-1 md:gap-2 text-sm md:text-base"><FaPhone /> {item.number}</p>
                    <p className="flex items-center gap-1 md:gap-2 text-sm md:text-base"><FaEnvelope /> {item.email}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="form flex-1 md:flex-[.5]">
            <motion.form
              className="flex flex-col items-start gap-3 md:gap-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { staggerChildren: 0.4 } } }}
            >
              <motion.input type="text" placeholder="enter your name" className="w-full border border-1 border-primary rounded px-3 py-2 md:px-6 md:py-4 focus:ring-2 placeholder:capitalize outline-none" variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 2.0 } } }} />
              <motion.input type="email" placeholder="enter your email" className="w-full border border-1 border-primary rounded px-3 py-2 md:px-6 md:py-4 focus:ring-2 placeholder:capitalize outline-none" variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 2.0 } } }} />
              <motion.input type="text" placeholder="subject" className="w-full border border-1 border-primary rounded px-3 py-2 md:px-6 md:py-4 focus:ring-2 placeholder:capitalize outline-none" variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 2.0 } } }} />
              <motion.textarea placeholder="message" className="w-full border border-1 border-primary rounded px-3 py-2 md:px-6 md:py-3 focus:ring-2 placeholder:capitalize outline-none" variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 2.0 } } }}></motion.textarea>
              <motion.button type="submit" className="bg-primary text-white font-semibold w-full rounded border-none outline-none capitalize flex items-center justify-center px-3 py-2 md:px-6 md:py-4" whileHover={{ scale: 1.01, y: -1 }} whileTap={{ scale: 0.98 }}>send message</motion.button>
            </motion.form>
          </div>
        </section>
      </main>
    </>
  );
}
