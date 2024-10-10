import { Link } from "react-router-dom";
import OHALogo from "../assets/images/OHALogo.png";
type NavbarType = {
  bgImgUrl: string;
};
export const NavBar: React.FC<NavbarType> = ({ bgImgUrl })=> {
  
  return (
    <>
      {/* Top Div with White Background */}
      <div className='flex justify-between bg-white fixed w-full start-0 top-0 h-20'>
        <img src={OHALogo} alt="" className="py-5 pl-4" />
        <div className="py-6 pr-11 mb-1">
          <button className="bg-red-text w-full text-center text-[18px] text-white py-1 px-2">Contact Us</button>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-black fixed w-full z-20 top-[80px] start-0 border-b border-gray-600">
        <div className="flex items-center justify-end mx-auto p-1 pr-11">
          {/* Nav Links */}
          <ul className="flex flex-row md:gap-8 xs:gap-4 font-medium">
            <li>
              <Link
                to="/about"
                className="md:text-[20px] xs:text-[14px] text-white hover:text-hover-text"
                aria-current="page"
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to='/calander'
                className="md:text-[20px] xs:text-[14px] text-white hover:text-hover-text"
              >
                CALENDAR
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="md:text-[20px] xs:text-[14px] text-white hover:text-hover-text"
              >
                PROGRAM
              </a>
            </li>
            <li>
              <a
                href="#"
                className="md:text-[20px] xs:text-[14px] text-white hover:text-hover-text"
              >
                ALUMNI
              </a>
            </li>
            <li>
              <a
                href="#"
                className="md:text-[20px] xs:text-[14px] text-white hover:text-hover-text"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="md:text-[20px] xs:text-[14px] text-white hover:text-hover-text"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
