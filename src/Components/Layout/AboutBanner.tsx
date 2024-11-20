import { useEffect, useState } from "react";
import AboutBannerImage from "../../assets/images/HomeBanner.png";
import Instagram from "../../assets/images/Instgram.png";
import YouTube from "../../assets/images/Youtube.png";
import FaceBook from "../../assets/images/FaceBook.png";
import AboutArena from "../../assets/images/AboutArena.png";
import OAClasses from "../../assets/images/OAClasses.png";
import CoFounderOne from "../../assets/images/CoFounderOne.png";
import CoFounderTwo from "../../assets/images/CoFounderTwo.png";

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
      className="lg:pb-4 xs:pb-[150px]"
      style={{
        backgroundImage: isLargeScreen ? `url(${AboutBannerImage})` : "none",
        backgroundSize: "cover", // Ensures the image covers the entire div
        backgroundPosition: "center", // Centers the background image
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
      }}
    >
      <div className="absolute left-0 top-[50%] flex flex-col py-2 gap-4 z-10 bg-red-text items-start">
            <a href=" https://www.instagram.com/optimumhockeyacademy/" target="_blank" rel="noopener noreferrer" className="text-white  hover:text-red-text pl-2 hover:scale-110 transition-transform duration-300">
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="https://www.youtube.com/@optimumhockeyacademy3211" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-text  hover:scale-110 transition-transform duration-300">
              <img src={YouTube} alt="YouTube" />
            </a>
            <a href="https://www.facebook.com/optimumhockeyacademy" target="_blank" rel="noopener noreferrer" className="text-white  hover:text-red-text pl-2.5 hover:scale-110 transition-transform duration-300">
              <img src={FaceBook} alt="FaceBook" />
            </a>
          </div>
      <div className="flex flex-col gap-10 md:pt-[50px] xs:pt-[34px] md:mt-0 xs:mt-24">
        <div className="flex lg:flex-row xs:flex-col lg:gap-36 xs:gap-[15px]">
          <div className="flex lg:w-2/3 lg:justify-end  xs:justify-center">
            <img src={AboutArena} alt="Great Park Ice Arena" className="object-contain md:mx-0 max-w-[254px] max-h-[191px]" />
          </div>
          <div className="flex w-full flex-col lg:items-start xs:items-start">
            <div className="md:text-[32px] xs:text-[20px] text-red-text font-bold leading-[1.2] lg:mx-0 xs:mx-12">
              Great Park Ice & FivePoints Arena
            </div>
            <ul className="list-disc md:text-[24px] xs:text-[14px] lg:pl-10 xs:pl-7 text-black font-normal lg:mx-0 xs:mx-12 leading-[1.2]">
              <li>4 rinks (3 NHL, 1 Olympic)</li>
              <li>2,500 seat arena</li>
              <li>Anaheim Ducks Practice Facility</li>
              <li>Largest ice facility in California</li>
            </ul>
          </div>
        </div>
        <div className="flex lg:flex-row xs:flex-col lg:gap-36 xs:gap-4">
          <div className="flex lg:w-2/3 lg:justify-end xs:w-full xs:justify-center">
            <img src={OAClasses} alt="Optimum Academic Classrooms" className="object-contain md:mx-0 xs:mx-[74px] max-w-[254px] max-h-[143px]" />
          </div>
          <div className="flex w-full flex-col lg:items-start xs:items-start" >
            <div className="md:text-[32px] xs:text-[20px] text-red-text font-bold leading-[1.2] lg:mx-0 xs:mx-12 ">
              Optimum Academic Classrooms
            </div>
            <ul className="list-disc md:text-[24px] xs:text-[14px] lg:pl-10 xs:pl-7 text-black font-normal lg:mx-0 xs:mx-12 leading-[1.2] pt-6">
              <li>3 onsite classrooms at Great Park Ice</li>
              <li>Small group academics</li>
              <li>Classes instructed by onsite California Accredited <br /> Teachers</li>
              <li>Partnered with Epic Charter Schools</li>
            </ul>
          </div>
        </div>
        <div className="flex lg:flex-row xs:flex-col lg:gap-36 xs:gap-4">
          <div className="flex lg:w-2/3 lg:justify-end xs:w-full xs:justify-center">
            <img src={CoFounderOne} alt="Alex Kim" className=" md:mx-0 xs:mx-[74px] max-w-[100px] max-h-[100px]" />
          </div>
          <div className="flex w-full">
            <div className="flex w-full lg:flex-row xs:flex-col md:gap-10 xs:gap-4 lg:items-start min-w-[230px]">
              {/* Left side: Alex Kim's name and title */}
              <div className="flex flex-col lg:mx-0 xs:mx-[65px]">
                <div className="md:text-[32px] xs:text-[20px] text-red-text font-bold leading-[1.2]  lg:min-w-[267px]">
                  Alex Kim
                </div>
                <div className="md:text-[16px] xs:text-[14px] text-black font-normal leading-[1.2]">
                  Director of Hockey Operations <br /> Co-Founder
                </div>
              </div>

              {/* Right side: List content */}
              <ul className="list-disc md:text-[20px] xs:text-[12px] text-black font-normal lg:mx-0 xs:mx-[65px] leading-[1.2] pt-3 max-w-[399px] lg:pl-0 xs:pl-7 ">
                <li>11 year professional hockey in AHL,<br /> ECHL, Europe, and Asia</li>
                <li>7 years as head coach of Jr Ducks 16U AAA program</li>
                <li>Advanced to USA Hockey National Tournament in 4 of last 5 years</li>
              </ul>
            </div>
          </div>

        </div>
        <div className="flex lg:flex-row xs:flex-col lg:gap-36 xs:gap-4">
          <div className="flex lg:w-2/3 lg:justify-end xs:w-full xs:justify-center">
            <img src={CoFounderTwo} alt="Alex Kim" className=" md:mx-0 xs:mx-[74px] max-w-[100px] max-h-[100px]" />
          </div>
          <div className="flex w-full">
            <div className="flex w-full lg:flex-row xs:flex-col md:gap-10 xs:gap-4 lg:items-start ">
              {/* Left side: Alex Kim's name and title */}
              <div className="flex flex-col lg:mx-0 xs:mx-[65px]">
                <div className="md:text-[32px] xs:text-[20px] text-red-text font-bold leading-[1.2]  lg:min-w-[267px] ">
                Craig Johnson
                </div>
                <div className="md:text-[16px] xs:text-[14px] text-black font-normal  leading-[1.2]">
                  Director of Hockey Development <br /> Co-Founder
                </div>
              </div>

              {/* Right side: List content */}
              <ul className="list-disc md:text-[20px] xs:text-[12px] text-black font-normal lg:mx-0 xs:mx-[65px] lg:pr-10 leading-[1.2] pt-3 max-w-[480px] lg:pl-0 xs:pl-7 ">
                <li>14 year professional hockey in NHL (Anaheim Ducks, Los Angeles Kings, St. Louis Blues, Toronto Maple Leads, Washington Capitals)</li>
                <li>1994 USA Olympian</li>
                <li>2023-2024 Anaheim Ducks Assistant Coach</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutBanner;