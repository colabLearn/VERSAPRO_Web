import { RocketOutlined, TeamOutlined, BulbOutlined } from "@ant-design/icons";

export default function About() {
  return (
    <>
      <main className="bg-white md:p-[3rem] p-[2rem] flex flex-col items-center justify-center">
        <header className="flex flex-col items-center justify-center w-full md:w-[65%] text-center gap-2 md:gap-6">
          <h1 className="text-3xl md:text-5xl text-text-color capitalize font-semibold">
            about us
          </h1>
          <p className="text-sm md:text-[15px]">
            VERSAPRO is a leading technology company dedicated to delivering
            innovative solutions and exceptional service to our clients
            worldwide. Our commitment to excellence drives everything we do.
          </p>
        </header>
        <div className="content flex flex-col md:flex-row items-center md:justify-between gap-4 md:gap-10 mt-14 md:mt-32">
          <div className="box flex flex-col items-center gap-1 md:gap-2 text-center">
            <RocketOutlined className="text-6xl text-yellow-500" />
            <h2 className="font-semibold text-lg md:text-xl">
              Innovation First
            </h2>
            <p className="text-[15px]">
              Driven by innovation and progress, we craft cutting edge solutions
              that tackle tomorrow’s challenges and empower growth in a changing
              world.
            </p>
          </div>
          <div className="box flex flex-col items-center gap-1 md:gap-2 text-center">
            <TeamOutlined className="text-6xl text-yellow-500" />
            <h2 className="font-semibold text-lg md:text-xl">Expert Team</h2>
            <p className="text-[15px]">
              A team of dedicated professionals with proven expertise,
              delivering excellence through modern technology, innovative
              design, and impactful, reliable solutions.
            </p>
          </div>
          <div className="box flex flex-col items-center gap-1 md:gap-2 text-center">
            <BulbOutlined className="text-6xl text-yellow-500" />
            <h2 className="font-semibold text-lg md:text-xl">
              Smart Solutions
            </h2>
            <p className="text-[15px]">
              We use intelligent, data-driven, and innovative approaches to
              solve complex problems, simplify challenges, enhance efficiency,
              and create lasting impact.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
