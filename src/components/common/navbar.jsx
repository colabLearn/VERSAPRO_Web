import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/VersaPro_logo_colour (1).png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <nav className="overflow-x-hidden md:p-8 p-4 shadow-sm">
        <div className="nested bg-primary flex flex-row items-center justify-between md:py-4 md:px-8 py-2 px-4 rounded-full">
          <Link
            to="/"
            className="logo cursor-pointer bg-white md:p-4 p-2 flex items-center justify-center rounded-full"
          >
            <img
              src={logo}
              alt="versa pro logo"
              className="md:w-[200px] w-[100px]"
            />
          </Link>
          <ul className="md:flex md:flex-row md:items-center md:gap-10 capitalize text-white font-medium hidden">
            <Link to="/" className="hover:font-bold text-lg">
              home
            </Link>
            <Link to="/partners" className="hover:font-bold text-lg">
              partners
            </Link>
            <Link to="/contact" className="hover:font-bold text-lg">
              contact
            </Link>
          </ul>

          <div className="menu flex flex-col gap-[5px] md:hidden" onClick={handleOpen}>
            <div className="w-8 h-1 bg-white rounded-full"></div>
            <div className="w-8 h-1 bg-white rounded-full"></div>
            <div className="w-8 h-1 bg-white rounded-full"></div>
          </div>
        </div>

        {open && (
          <ul className="flex flex-col gap-4 capitalize bg-white text-text-color font-medium md:hidden w-[91vw] p-3 shadow-2xl absolute rounded-lg mt-2">
            <Link to="/" className="hover:font-bold text-base border-b-1 border-b-solid border-b pb-2">
              home
            </Link>
            {/* <Link to="/team" className="hover:font-bold text-base border-b-1 border-b-solid border-b pb-2">
              team
            </Link> */}
            <Link to="/project" className="hover:font-bold text-base border-b-1 border-b-solid border-b pb-2">
              projects
            </Link>
            <Link to="/partners" className="hover:font-bold text-base border-b-1 border-b-solid border-b pb-2">
              partners
            </Link>
            <Link to="/contact" className="hover:font-bold text-base pb-2">
              contact
            </Link>
          </ul>
        )}
      </nav>
    </>
  );
}
