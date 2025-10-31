import { Link } from "react-router-dom";
import logo from "../../assets/VersaPro_logo_colour (1).png";

import {
  MailOutlined,
  PhoneOutlined,
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

export default function Footer() {
  return (
    <>
      <main className="bg-primary overflow-x-hidden md:px-8 px-4 py-10 flex flex-col gap-10">
        <div className="top-footer border-b-2 border-b-solid md:pb-14 pb-8 border-b-white flex flex-col md:flex-row items-start gap-10 md:justify-between">
          <div className="logo-and-socials flex flex-col gap-3 md:gap-5">
            <Link
              to="/"
              className="logo cursor-pointer bg-white md:p-4 p-2 flex items-center justify-center rounded-full"
            >
              <img
                src={logo}
                alt="versa pro logo"
                className="md:w-[200px] w-[150px]"
                loading="lazy"
              />
            </Link>

            <div className="socials flex flex-row gap-2 md:gap-4">
              <Link to="/" className="bg-white md:px-2 md:py-1 px-1 rounded-full">
                <FacebookOutlined className="text-primary-light" />
              </Link>
              <Link to="/" className="bg-white md:px-2 md:py-1 px-1 rounded-full">
                <TwitterOutlined className="text-primary-light" />
              </Link>
              <Link to="/" className="bg-white md:px-2 md:py-1 px-1 rounded-full">
                <LinkedinOutlined className="text-primary-light" />
              </Link>
              <Link to="/" className="bg-white md:px-2 md:py-1 px-1 rounded-full">
                <InstagramOutlined className="text-primary-light" />
              </Link>
            </div>
          </div>

          <div className="links flex flex-col md:gap-4 gap-2">
            <header className="text-white font-bold capitalize">quick links</header>
            <ul className="flex flex-col md:gap-3 gap-2 text-white/70 capitalize">
              <Link to="/">about us</Link>
              <Link to="/">services</Link>
              <Link to="/">our team</Link>
              <Link to="/">careers</Link>
              <Link to="/">blog</Link>
            </ul>
          </div>

          <div className="links flex flex-col md:gap-4 gap-2">
            <header className="text-white font-bold capitalize">contact us</header>
            <ul className="flex flex-col md:gap-3 gap-2 text-white/70">
              <a href="mailto:info@versapro.tech">
                {" "}
                <MailOutlined /> info@versapro.tech
              </a>
              <a href="tel:+447770093639">
                {" "}
                <PhoneOutlined /> +447770093639
              </a>
            </ul>
          </div>

          <div className="newsletter flex flex-col md:gap-4 gap-2">
            <header className="text-white font-bold capitalize">newsletter</header>
            <p className="text-white/70 font-thin md:text-lg text-base">Subscribe to our newsletter for updates and insights</p>

            <form className="flex flex-col w-full md:gap-4 gap-2">
              <input type="email" placeholder="enter your email" className="md:p-3 p-1 outline-none border border-1 border-white placeholder:capitalize" />
              <button type="submit" className="bg-transparent text-white md:p-3 capitalize p-1 font-medium border border-1 border-white">subscribe</button>
            </form>
          </div>
        </div>

        <div className="bottom-footer flex flex-col gap-2 iitems-start md:items-center justify-center text-white md:text-base text-sm">
          <p>© 2025 VERSAPRO. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <Link to="/" className="underline">
              Privacy Policy
            </Link>
            <Link to="/" className="underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
