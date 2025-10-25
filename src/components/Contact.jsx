import { FaHome, FaPhone, FaEnvelope } from "react-icons/fa";

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
      <main className="md:px-[3rem] px-[2rem] md:py-[5rem] py-[2rem] overflow-x-hidden">
        <div className="flex flex-col md:items-center md:text-center md:justify-center w-[100%] md:w-[65%] mx-auto gap-3 md:gap-4">
          <h1 className="font-semibold text-2xl md:text-4xl leading-normal">
            Contact Us
          </h1>
          <p className="text-text-color text-sm md:text-base">
           We would love to hear from you. Send us a message with your project ideas feedback or questions and we will respond as soon as possible to help you.
          </p>
        </div>


        <section className="mt-10 md:mt-20 flex flex-col md:flex-row gap-10 md:gap-20">
          <div className="address flex-1 md:flex-[.5]">
            <div className="flex flex-col gap-5 md:gap-10">
              {addresses.map((item) => (
                <div key={item.id} className="bg-primary/10 md:p-5 p-3 flex flex-col gap-3 md:gap-5">
                  <h2 className="font-bold uppercase text-base">{item.country}</h2>

                  <div className="flex flex-col gap-2 md:gap-3">
                    <p className="flex items-center gap-1 md:gap-2 text-sm md:text-base"><FaHome /> {item.location}</p>
                    <p className="flex items-center gap-1 md:gap-2 text-sm md:text-base"><FaPhone /> {item.number}</p>
                    <p className="flex items-center gap-1 md:gap-2 text-sm md:text-base"><FaEnvelope /> {item.email}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="form flex-1 md:flex-[.5]">
            <form className="flex flex-col items-start gap-3 md:gap-6">
              <input type="text" placeholder="enter your name" className="w-full border border-1 border-primary rounded px-3 py-2 md:px-6 md:py-4 focus:ring-2 placeholder:capitalize outline-none" />
              <input type="email" placeholder="enter your email" className="w-full border border-1 border-primary rounded px-3 py-2 md:px-6 md:py-4 focus:ring-2 placeholder:capitalize outline-none" />
              <input type="text" placeholder="subject" className="w-full border border-1 border-primary rounded px-3 py-2 md:px-6 md:py-4 focus:ring-2 placeholder:capitalize outline-none" />
              <textarea placeholder="message" className="w-full border border-1 border-primary rounded px-3 py-2 md:px-6 md:py-3 focus:ring-2 placeholder:capitalize outline-none"></textarea>
              <button type="submit" className="bg-primary text-white font-semibold w-full rounded border-none outline-none capitalize flex items-center justify-center px-3 py-2 md:px-6 md:py-4">send message</button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
