import { Link } from "react-router-dom";
import footerLogo from "../../assets/images/OHALogo.png";

const HomeFooter = () => {
  return (
    <div className="bg-footer-color  ">
      <div className="flex flex-row justify-between items-center md:pl-[50px] xs:pl-[17px] py-4 3xl:mx-[20%]">
        <div className="flex flex-col text-[12px] leading-[1.2] font-bold">
          <div className="leading-[1.2] "><Link to="mailto:info@optimumhockeyacademy.com">info@optimumhockeyadademy.com</Link></div>
          <div className="leading-[1.2]">888 Ridge Valley</div>
          <div className="leading-[1.2]">Irvine, CA 92618</div>
          <div className="leading-[1.2]">(949) 237-2637</div>
        </div>
        <div className="flex justify-center items-center py-[27px] md:pr-[50px] xs:pr-[17px] "> {/* Center the logo vertically */}
          <img src={footerLogo} alt="Optimum Hockey Academy Logo" className="md:w-[224px] md:h-[53px] xs:w-[97px] xs:h-[23px]" /> {/* Adjust max height as needed */}
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
