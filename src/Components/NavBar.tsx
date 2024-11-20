import OHALogo from "../assets/images/OHALogo.png";
import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <>
      {/* Top Div with White Background */}
      <div className='flex justify-between bg-white fixed w-full start-0 top-0 z-20 '>
        <Link to='/' className="3xl:ml-[20%]">
          <img src={OHALogo} alt="" className="pt-[21px] md:pl-[50px] xs:pl-[10px] 3xl:pl-0" />
        </Link>
        <div className="py-5 md:pr-10 xs:pr-[10px] mb-1 3xl:mr-[20%]">
          <button className="bg-red-text w-full text-center lg:text-[20px] xs:text-[10px] text-white py-1 px-2 leading-[1.2] hover:bg-hover-text hover:text-black"><Link to="/contact">Contact Us</Link></button>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-black fixed w-full z-20 top-[60px] start-0 border-b border-gray-600">
        <div className="flex items-center md:justify-end xs:justify-center mx-auto p-[5px] md:pr-11 xs:pr-3 3xl:mr-[20%]">
          {/* Nav Links */}
          <ul className="flex flex-row lg:gap-[50px] xs:gap-6  font-medium">
            <li>
              <Link
                to="/about"
                className="md:text-[20px] xs:text-[10px] text-white hover:text-hover-text"
                aria-current="page"
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to='/calander'
                className="md:text-[20px] xs:text-[10px] text-white hover:text-hover-text"
              >
                CALENDAR
              </Link>
            </li>
            <li>
              <Link
                to='/program'
                className="md:text-[20px] xs:text-[10px] text-white hover:text-hover-text"
              >
                PROGRAM
              </Link>
            </li>
            <li>
              <Link
                to="/alumni"
                className="md:text-[20px] xs:text-[10px] text-white hover:text-hover-text"
              >
                ALUMNI
              </Link>
            </li>
            <li>
              <Link
                to='/faq'
                className="md:text-[20px] xs:text-[10px] text-white hover:text-hover-text"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to='/contact'
                className="md:text-[20px] xs:text-[10px] text-white hover:text-hover-text"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
