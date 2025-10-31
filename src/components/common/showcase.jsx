import logo from "../../../public/images/mathmorph2.png";
import { Link } from "react-router-dom";
export default function Showcase() {
  return (
    <>
      <div className="bg-white md:p-[3rem] p-[2rem] flex flex-col items-start gap-6 md:gap-10">
        <header>
          <h1 className="text-xl md:text-3xl text-primary pb-2 border-b-4 border-b-solid border-b-primary capitalize font-semibold">
            Our Flagship Product
          </h1>
        </header>
        <main>
            <div className="details flex flex-col gap-3">
                <h1 className="font-bold text-xl md:text-2xl">MathMorph — Intelligent Learning, Powered by AI and Human Insight</h1>
                <p className="font-normal text-base">MathMorph is Versapro’s flagship learning platform designed to transform how students master mathematics.</p>

                <ul className="list-disc pl-10 flex flex-col gap-2">
                    <li>Built on advanced AI and learning science, it creates personalized learning paths that adapt in real time, guiding every learner with precision, empathy, and insight.</li>
                    <li>For teachers, MathMorph delivers clarity and control, turning data into action, enabling smarter instruction, and revealing each learner’s unique journey toward mastery.</li>
                    <li>By uniting schools, educators, parents, and learners on one intelligent platform, MathMorph builds a connected ecosystem where every student can thrive in math.</li>
                </ul>
                <Link to='/project' className="flex flex-start bg-primary text-white w-fit md:px-6 md:py-4 px-3 py-2 capitalize">read more</Link>
            </div>
            <div className="image mt-10">
                <img src={logo} alt="" />
            </div>
        </main>
      </div>
    </>
  );
}
