import { useEffect, useState } from "react";
import AboutBannerImage from "../../assets/images/HomeBanner.png";
import AboutArena from "../../assets/images/AboutArena.png";
import OAClasses from "../../assets/images/OAClasses.png";
import CoFounderOne from "../../assets/images/CoFounderOne.png";

function AboutBanner() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);
    
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="pb-[221px]"
      style={{
        backgroundImage: isLargeScreen ? `url(${AboutBannerImage})` : "none",
        backgroundSize: "cover", // Ensures the image covers the entire div
        backgroundPosition: "center", // Centers the background image
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
      }}
    >
      <div className="flex flex-col gap-10 md:pt-[50px] xs:pt-[34px] md:mt-0 xs:mt-32">
        <div className="flex md:flex-row xs:flex-col justify-center md:gap-36 xs:gap-4">
          <img src={AboutArena} alt="Great Park Ice Arena" className="max-w-full h-auto md:mx-0 xs:mx-[74px]" />
          <div>
            <div className="md:text-[32px] xs:text-[20px] text-red-text font-bold leading-normal md:mx-0 xs:mx-12">
              Great Park Ice & FivePoints Arena
            </div>
            <ul className="list-disc md:text-[24px] xs:text-[14px] pl-10 text-black font-normal md:mx-0 xs:mx-12">
              <li>4 rinks (3 NHL, 1 Olympic)</li>
              <li>2,500 seat arena</li>
              <li>Anaheim Ducks Practice Facility</li>
              <li>Largest ice facility in California</li>
            </ul>
          </div>
        </div>
        <div className="flex md:flex-row xs:flex-col justify-center md:gap-36 xs:gap-4">
          <img src={OAClasses} alt="Optimum Academic Classrooms" className="max-w-full h-auto md:pl-12 md:mx-0 xs:mx-[74px]" />
          <div>
            <div className="md:text-[32px] xs:text-[20px] text-red-text font-bold leading-normal md:mx-0 xs:mx-12">
              Optimum Academic Classrooms
            </div>
            <ul className="list-disc md:text-[24px] xs:text-[14px] pl-10 text-black font-normal md:mx-0 xs:mx-12">
              <li>3 onsite classrooms at Great Park Ice</li>
              <li>Small group academics</li>
              <li>Classes instructed by onsite California Accredited <br /> Teachers</li>
              <li>Partnered with Epic Charter Schools</li>
            </ul>
          </div>
        </div>
        <div className="flex md:flex-row xs:flex-col justify-center md:gap-36 xs:gap-4">
          <img src={CoFounderOne} alt="Alex Kim" className="max-w-full h-auto md:mx-0 xs:mx-[74px]" />
  
          <div className="flex md:flex-row xs:flex-col md:gap-10 xs:gap-4">
            {/* Left side: Alex Kim's name and title */}
            <div className="flex flex-col">
              <div className="md:text-[32px] xs:text-[20px] text-red-text font-bold leading-normal md:mx-0 xs:mx-12">
                Alex Kim
              </div>
              <div className="md:text-[16px] xs:text-[14px] text-black font-normal md:mx-0 xs:mx-12">
                Director of Hockey Operations <br /> Co-Founder
              </div>
            </div>

            {/* Right side: List content */}
            <ul className="list-disc md:text-[20px] xs:text-[12px] text-black font-normal md:mx-0 xs:mx-16">
              <li>11 year professional hockey in AHL,<br /> ECHL, Europe, and Asia</li>
              <li>7 years as head coach of Jr Ducks 16U AAA program</li>
              <li>Advanced to USA Hockey National Tournament in 4 of last 5 years</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
