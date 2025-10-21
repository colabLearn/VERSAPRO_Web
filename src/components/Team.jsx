import tunji from "../assets/tunji.jpg";
import diran from "../assets/diran.jpeg";
import khoi from "../assets/khoi.jpeg";
import mubarak from "../assets/mubarak.png";

export default function Team() {
  return (
    <>
      <main className="md:px-[3rem] px-[2rem] md:py-[5rem] py-[4rem]">
        <header className="flex flex-col md:items-center md:text-center md:justify-center w-[100%] md:w-[65%] mx-auto gap-3 md:gap-4">
          <h2 className="font-semibold text-2xl md:text-4xl leading-normal">
            A team devoted to transforming creativity and innovation into
            real-world solutions.
          </h2>
          <p className="text-text-color text-sm md:text-base">
            Our dedicated team transforms ideas into impactful innovations,
            using collaboration, expertise, and technology to create solutions
            that drive progress and meaningful change.
          </p>
        </header>

        <section className="emp flex flex-col md:flex-row md:gap-5 gap-4 mt-4 md:mt-20">
          <div className="card flex flex-col border border-1 border-text-color bg-primary text-white md:gap-8 gap-4 rounded md:w-[400px] w-full">
            <div
              style={{
                backgroundImage: `url(${tunji})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "50vh",
              }}
            ></div>
            <div className="details md:p-4 p-3 flex flex-col gap-2">
              <h3 className="capitalize font-semibold">Adetunji Adeniran, PhD, FHEA.</h3>
              <p className="text-white/70">founder, tech-lead</p>
            </div>{" "}
          </div>
          <div className="card flex flex-col border border-1 border-text-color bg-primary text-white md:gap-8 gap-4 rounded md:w-[400px] w-full">
            <div
              style={{
                backgroundImage: `url(${diran})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "50vh",
              }}
            ></div>
            <div className="details md:p-4 p-3 flex flex-col gap-2">
              <h3 className="capitalize font-semibold">Adediran Adeniran</h3>
              <p className="text-white/70">VPimSys Design-Lead</p>
            </div>
          </div>
          <div className="card flex flex-col border border-1 border-text-color bg-primary text-white md:gap-8 gap-4 rounded md:w-[400px] w-full">
            <div
              style={{
                backgroundImage: `url(${khoi})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "50vh",
              }}
            ></div>
            <div className="details md:p-4 p-3 flex flex-col gap-2">
              <h3 className="capitalize font-semibold">Anh Khoi</h3>
              <p className="text-white/70">frontend engineer</p>
            </div>
          </div>
          <div className="card flex flex-col border border-1 border-text-color bg-primary text-white md:gap-8 gap-4 rounded md:w-[400px] w-full">
            <div
              style={{
                backgroundImage: `url(${mubarak})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "50vh",
              }}
            ></div>
            <div className="details md:p-4 p-3 flex flex-col gap-2">
              <h3 className="capitalize font-semibold">mubaraq oyebisi</h3>
              <p className="text-white/70">frontend engineer</p>
            </div>{" "}
          </div>
        </section>
      </main>
    </>
  );
}

// import React from 'react';
// import { LinkedinOutlined, GithubOutlined, MailOutlined } from '@ant-design/icons';
// import '../components_css/team.css';

// const team = [
//   {
//     image_url: "/images/tunji_2.jpg",
//     name: 'Adetunji Adeniran, PhD, FHEA.',
//     position: "Founder/Tech-Lead",
//     bio: "Leading innovation and technical strategy with over 10 years of experience in software development. Specializes in cloud architecture, distributed systems, and enterprise software solutions. Has successfully led multiple high-impact projects and mentored numerous developers throughout his career.",
//     expertise: [
//       "Cloud Architecture",
//       "Distributed Systems",
//       "Enterprise Software",
//       "Team Leadership"
//     ],
//     achievements: "Led the development of several successful enterprise solutions and established the company's technical roadmap.",
//     social: {
//       linkedin: "#",
//       github: "#",
//       email: "mailto:info@versapro.com"
//     }
//   },
//   {
//     image_url: "/images/adetunji.jpeg",
//     name: 'Adediran Adeniran',
//     position: "VPimSys Design-Lead",
//     bio: "I am a Senior Financial Controller with over a decade of experience in finance, accounting, financial reporting, and process automation. My career has been defined by a strong commitment to leveraging technology to drive efficiency and accuracy in financial operations. As a tech-oriented finance professional, I specialize in integrating automation solutions to streamline workflows, enhance data integrity, and support strategic decision-making. I believe that the future of finance lies in intelligent automation, and I am passionate about bridging the gap between traditional financial practices and innovative digital tools.",
//     expertise: [
//       "System Architecture",
//       "Design Patterns",
//       "Enterprise Solutions",
//       "UI/UX Design"
//     ],
//     achievements: "Architected the VPimSys platform from ground up, implementing industry-leading design practices.",
//     social: {
//       linkedin: "#",
//       github: "#",
//       email: "mailto:adediran.adeniran@versapro.com"
//     }
//   },
//   {
//     image_url: "/images/khoi.jpeg",
//     name: 'Anh Khoi',
//     position: "Front-end Developer",
//     bio: "Passionate front-end developer with expertise in modern web technologies and innovative solutions. Specializes in creating responsive, user-friendly interfaces using the latest front-end frameworks and best practices. Committed to delivering high-quality, performant web applications.",
//     expertise: [
//       "React.js",
//       "Modern CSS",
//       "UI/UX Implementation",
//       "Web Performance"
//     ],
//     achievements: "Developed and maintained multiple key features of the company's web applications.",
//     social: {
//       linkedin: "#",
//       github: "#",
//       email: "mailto:khoi.nguyen@versapro.com"
//     }
//   }
// ];

// const Team = () => {
//   return (
//     <div className="team-container">
//       <div className="team-header">
//         <h1>Meet Our Team</h1>
//         <p>Dedicated professionals working together to bring innovation to life</p>
//       </div>

//       <div className="team-grid">
//         {team.map((member, index) => (
//           <div className="team-card" key={index}>
//             <div className="member-image">
//               <img src={member.image_url} alt={member.name} />
//               <div className="social-links">
//                 <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
//                   <LinkedinOutlined />
//                 </a>
//                 <a href={member.social.github} target="_blank" rel="noopener noreferrer">
//                   <GithubOutlined />
//                 </a>
//                 <a href={member.social.email}>
//                   <MailOutlined />
//                 </a>
//               </div>
//             </div>
//             <div className="member-info">
//               <div className="member-basic-info">
//                 <h3>{member.name}</h3>
//                 <span className="position">{member.position}</span>
//               </div>
//               <div className="member-details">
//                 <p className="bio">{member.bio}</p>
//                 <div className="expertise">
//                   <h4>Areas of Expertise</h4>
//                   <ul>
//                     {member.expertise.map((skill, i) => (
//                       <li key={i}>{skill}</li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div className="achievements">
//                   <h4>Key Achievements</h4>
//                   <p>{member.achievements}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="team-cta">
//         <h2>Join Our Team</h2>
//         <p>We're always looking for talented individuals to join our growing team</p>
//         <a href="/careers" className="cta-button">View Open Positions</a>
//       </div>
//     </div>
//   );
// };

// export default Team;
