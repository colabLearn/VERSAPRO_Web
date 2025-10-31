import { Button } from "antd";
import Navbar from "./common/navbar";
// import '../components_css/project.css';

const ProjectPhases = Object.freeze({
  PLANNING: "Planning / Concept",
  DEVELOPMENT: "Active Development",
  BETA: "Beta Testing",
  LIVE: "Live",
  MAINTENANCE: "Maintenance Mode",
  ARCHIVED: "Archived",
});

const projects = [
  {
    id: "1",
    title: "MathMorph",
    logo: "/images/mathmorph2.png",
    description:
      "MathMorph is our flagship AI-driven math learning platform, created to redefine how students understand and excel in mathematics. It delivers accessible, engaging, and effective learning experiences for learners of all ages and backgrounds. By leveraging advanced technology, it transforms traditional teaching methods, allowing students to learn at their own pace while the AI monitors progress, provides instant feedback, and adapts to individual needs. Tutors and parents benefit from real-time insights, effort tracking, and actionable recommendations—all accessible through a unified, intuitive dashboard.",
    features: [
      "Personalized Learning Paths",
      "Real-time Student Progress Tracking",
      "Simplified Tutor Assignment Workflow",
      "Real-Time Assessment & Smart Feedback",
    ],
    link: "#",
    status: ProjectPhases.DEVELOPMENT,
  },
  // {
  //   id: "2",
  //   title: "ColabLearn",
  //   logo: "/images/vp_logo.png",
  //   description:
  //     "An innovative e-learning platform dedicated to delivering cutting-edge tech courses and programs that empower learners to excel in today’s digital world. Our ongoing work harnesses the latest advancements in learning science, artificial intelligence, and educational engineering to design interactive, engaging, and effective content. We focus on fostering deep understanding, critical thinking, creativity, collaboration, and real-world skill development—preparing individuals to innovate, solve complex problems, and thrive in a technology-driven future filled with endless opportunities and transformative possibilities.",
  //   features: [
  //     "Advanced Learning Management System",
  //     "Interactive Course Content",
  //     "AI-Powered Learning Analytics",
  //     "Collaborative Learning Tools",
  //   ],
  //   link: "https://www.youtube.com/@ColabLearn",
  //   status: ProjectPhases.BETA,
  // }, //,
  // {
  //   id: '3',
  //   title: "VPimSys",
  //   logo: "/images/VPimSys_Logo.jpg",
  //   description: "A cloud-based platform designed to revolutionize how small retail businesses manage their operations. VPimSys provides an affordable, easy-to-use, and scalable solution for managing product catalogs, purchase orders, inventory, and analytics.",
  //   features: [
  //     "Real-time Inventory Management",
  //     "Sales Analytics Dashboard",
  //     "Cloud-based POS System",
  //     "Automated Purchase Orders"
  //   ],
  //   link: "#",
  //   status: ProjectPhases.PLANNING
  // }
];

const Project = () => {
  return (
    <>
      <Navbar />
      <div className="projects-container md:px-[3rem] px-[2rem] md:py-[5rem] py-[2rem] overflow-x-hidden">
        <div className="projects-header flex flex-col md:items-center md:text-center md:justify-center w-[100%] md:w-[65%] mx-auto gap-3 md:gap-4">
          <h1 className="font-semibold text-2xl md:text-4xl leading-normal">
            Our Projects
          </h1>
          <p className="text-text-color text-sm md:text-base">
            Innovative and tailored digital solutions that empower organizations
            to achieve transformation, enhance efficiency, optimize performance,
            and drive sustainable business growth in today’s competitive
            landscape.
          </p>
        </div>

        <div className="projects-grid flex flex-col md:flex-row items-start gap-4 mt-10 md:mt-20">
          {projects.map((project) => (
            <div
              className="project-card flex flex-col justify-between gap-2 bg-primary/10 md:p-8 p-4 flex-1 h-fit md:h-[35rem]"
              key={project.id}
            >
              <header className="project-header flex flex-row items-center justify-between">
                <img
                  src={project.logo}
                  alt={project.title}
                  className="project-logo w-[100px] md:w-[200px]"
                />
                <span className="project-status bg-primary rounded-full text-white font-medium md:px-4 md:py-2 px-2 py-1 text-[10px] md:text-base">
                  {project.status}
                </span>
              </header>

              <section className="project-content flex flex-col gap-2">
                <h2 className="text-primary text-lg md:text-2xl font-thin">
                  {project.title}
                </h2>
                {/* <p 
                  className={`project-description ${expandedProjects[project.id] ? 'expanded' : '' }`}
                  onClick={() => toggleExpand(project.id)}
                  style={{cursor: 'pointer', position: 'relative'}}
                  title={expandedProjects[project.id] ? "Click to view less" : "Click to view more"} 
                  >
                  {project.description}</p> */}
                <p className="project-description text-text-color text-justify text-sm md:text-base">
                  {project.description}
                </p>

                <div className="project-features py-2">
                  <h3 className="font-medium text-sm md:text-base">
                    Key Features
                  </h3>
                  <ul className="md:px-4 px-5">
                    {project.features.map((feature, index) => (
                      <li
                        className="list-disc text-sm md:text-base"
                        key={index}
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  type="primary"
                  href={project.link}
                  target="_blank"
                  className="project-link mt-auto bg-primary text-white py-3 md:py-5"
                >
                  Book a Demo
                </Button>
              </section>
            </div>
          ))}
        </div>

        <div className="projects-cta flex flex-col items-center justify-center mt-10 md:mt-20 gap-2 md:gap-3 bg-secondary/10 py-10 md:py-20 px-5">
          <h2 className="text-xl md:text-2xl">Have a Project in Mind?</h2>
          <p className="text-sm text-center">{`Let's work together to bring your ideas to life`}</p>
          <Button
            type="primary"
            href="/contact"
            className="bg-primary text-white"
            size="large"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </>
  );
};

export default Project;
