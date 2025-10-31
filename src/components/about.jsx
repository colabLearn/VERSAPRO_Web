import image from "../assets/aboutImage.png";
import innovation from "../assets/innnovation.png";
import expert from "../assets/expert.png";
import smart from "../assets/smart.png";

export default function About() {
  return (
    <>
      <main className="bg-black/10 md:p-[3rem] p-[2rem] flex flex-col items-center justify-center">
        <header className="flex flex-col md:flex-row items-start">
          <div className="details flex-1 md:flex-[.5] flex flex-col items-start gap-3 md:gap-5">
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
          </div>

          <div className="image flex-1 md:flex-[.5]">
            <img src={image} alt="about-image" className="md:-mt-5" />
          </div>
        </header>
        <div className="content flex flex-col md:flex-row items-center md:justify-between gap-10 mt-10">
          <div className="box flex flex-col items-center justify-center gap-3 md:gap-4">
            <img src={innovation} alt="icon-image" className="md:w-[200px] w-[100px]" />
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
          </div>
          <div className="box flex flex-col items-center justify-center gap-3 md:gap-4">
            <img src={expert} alt="icon-image" className="md:w-[200px] w-[100px]" />
            <div className="flex flex-col items-center text-center gap-2 md:gap-3">
              <h2 className="font-semibold text-lg md:text-4xl">Expert Team</h2>
              <p className="text-sm md:text-base w-full md:w-[80%]">
                A team of dedicated professionals with proven expertise,
                delivering excellence through modern technology, innovative
                design, and impactful, reliable solutions.
              </p>
            </div>
          </div>
          <div className="box flex flex-col items-center justify-center gap-3 md:gap-4">
            <img src={smart} alt="icon-image" className="md:w-[200px] w-[100px]" />
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
          </div>
        </div>
      </main>
    </>
  );
}
