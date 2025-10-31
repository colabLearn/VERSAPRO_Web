import { Button } from "antd";
import { GlobalOutlined, TeamOutlined } from "@ant-design/icons";
import Navbar from "./common/navbar";
// import '../components_css/Partners.css';

const partners = [
  {
    id: "1",
    name: "Microsoft",
    logo: "/images/MS_Startups_Celebration_Badge_Dark.png",
    category: "Technology Partner",
    description:
      "Strategic partnership with Azure providing cutting-edge cloud tools and infrastructure for development and deployment.",
    benefits: [
      "Access to Azure's cloud infrastructure",
      "Technical support and resources",
      "Development tools and services",
      "Scalability and security solutions",
    ],
    link: "https://azure.microsoft.com",
  },
];

const Partners = () => {
  return (
    <>
    <Navbar />
      <div className="partners-container md:px-[3rem] px-[2rem] md:py-[5rem] py-[2rem] overflow-x-hidden">
        <div className="partners-header flex flex-col md:items-center md:text-center md:justify-center w-[100%] md:w-[65%] mx-auto gap-3 md:gap-4">
          <h1 className="font-semibold text-2xl md:text-4xl leading-normal">
            Our Partners
          </h1>
          <p className="text-text-color text-sm md:text-base">
            We partner with industry leaders, combining deep technical expertise
            and real-world experience to design transformative learning journeys
            and project solutions that set new standards of excellence.
          </p>
        </div>

        <div className="partners-grid flex flex-col md:flex-row items-start gap-4 mt-10 md:mt-20">
          {partners.map((partner) => (
            <div
              className="partner-card flex flex-col justify-between gap-2 bg-primary/10 md:p-8 p-4 flex-1 h-fit md:h-[45rem]"
              key={partner.id}
            >
              <div className="partner-logo">
                <img src={partner.logo} alt={partner.name} className="" />
              </div>

              <div className="partner-content">
                <div className="partner-info">
                  <h2 className="text-primary text-lg md:text-2xl font-thin">
                    {partner.name}
                  </h2>
                  <span className="partner-category flex items-center gap-2 font-bold mt-2">
                    <GlobalOutlined /> {partner.category}
                  </span>
                  <p className="partner-description text-text-color text-sm md:text-base">
                    {partner.description}
                  </p>
                </div>

                <div className="partner-benefits flex flex-col gap-2 mt-2 text-sm  md:text-base">
                  <h3>Partnership Benefits</h3>
                  <ul className="list-disc pl-4">
                    {partner.benefits.map((benefit, index) => (
                      <li className="pb-2" key={index}>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  type="primary"
                  href={partner.link}
                  target="_blank"
                  className="partner-link mt-auto bg-primary text-white py-3 md:py-5 w-full md:mt-3"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-content flex flex-col items-center justify-center mt-10 md:mt-20 gap-2 md:gap-3 bg-secondary/10 py-10 md:py-20 px-5">
          <TeamOutlined className="cta-icon md:text-4xl font-bold text-2xl" />
          <h2 className="text-xl md:text-2xl">Become a Partner</h2>
          <p className="text-sm text-center">Join our network of industry leaders and innovators</p>
          <Button type="primary" href="/contact" className="bg-primary text-white" size="large">
            Partner With Us
          </Button>
        </div>
      </div>
    </>
  );
};

export default Partners;
