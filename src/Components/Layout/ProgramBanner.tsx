import HomeCircle from "../../assets/images/HomeCircle.png";
import Instagram from "../../assets/images/Instgram.png";
import YouTube from "../../assets/images/Youtube.png";
import FaceBook from "../../assets/images/FaceBook.png";
import HomeBannerTest from "../../assets/images/HomeBanner.png";
import MobileHomeBanner from "../../assets/images/MobileHomeBanner.png";
import useWindowSize from "../../hooks/useWindowSize";
import Program1 from "../../assets/images/Program1.png";
import Program2 from "../../assets/images/Program2.png";
import Program3 from "../../assets/images/Program3.png";
import Program4 from "../../assets/images/Program4.png";
import Program5 from "../../assets/images/Program5.png";
import FAQComponent from "../Program/FAQComponent";
import FAQComponentMobile from "../Program/FaqComponentMobile";

function ProgramBanner() {
    const { width } = useWindowSize();
    const bannerImage = width < 1024 ? MobileHomeBanner : HomeBannerTest;
    return (
        <div
        className="relative  md:pt-7 xs:pt-[90px]"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover", // Keeps the image proportional but may crop
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
         
          backgroundAttachment: "fixed", // Optional, keeps the image fixed during scrolling
        }}
      >
        {width && width < 1024 ? (
          // Mobile version
          <>
            {/* <div className="absolute left-0 top-[50%] flex flex-col py-2 gap-4 z-10 bg-red-text items-start">
              <a href="" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-red-text">
                <img src={Instagram} alt="Instagram" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-red-text">
                <img src={YouTube} alt="YouTube" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-red-text">
                <img src={FaceBook} alt="FaceBook" />
              </a>
            </div> */}
      
            <div className="flex flex-col gap-10 mt-12">
              <div className="flex lg:flex-row xs:flex-col lg:gap-36 xs:gap-4  mx-auto pb-24">
              <div className="flex-grow mx-5">
                  <FAQComponentMobile />
                </div>
                <div className="flex flex-col mx-5  overflow-hidden align-middle gap-5 ">
                  <img
                    src={Program4}
                    alt="Great Park Ice Arena"
                    className=""
                    
                  />
                   <img
                    src={Program1}
                    alt="Great Park Ice Arena"
                    className="  "
                    
                  />
                  <img
                    src={Program3}
                    alt="Great Park Ice Arena"
                    className=" "
                    
                  />
                </div>
                
                
              </div>
              
              
            </div>
          </>
        ) : (
          // Desktop version
          <>
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
      
            <div className="flex flex-col gap-10  md:mt-0 xs:mt-32 3xl:mx-[20%]">
              <div className="flex lg:flex-row xs:flex-col lg:gap-[134px] xs:gap-4 justify-between pr-[50px]">
                <div className="flex flex-col pl-[50px] lg:w-auto xs:w-full overflow-hidden gap-5 ">
                  <img
                    src={Program1}
                    alt="Great Park Ice Arena"
                    className=" md:mx-0 xs:mx-[74px]"
                    style={{ width: "300px", height: "auto" }} // Fixed size for Program1
                  />
                   <img
                    src={Program2}
                    alt="Great Park Ice Arena"
                    className=" md:mx-0 xs:mx-[74px] "
                    style={{ width: "300px", height: "auto" }} // Fixed size for Program1
                  />
                 
                </div>
                <div className="flex-grow">
                  <FAQComponent />
                </div>
                
              </div>
              <div className="flex lg:flex-row xs:flex-col lg:gap-36 xs:gap-4 justify-between pr-[50px] pb-12">
                <div className="flex flex-row pl-[50px] lg:w-auto xs:w-full overflow-hidden gap-40 ">
                  <img
                    src={Program3}
                    alt="Great Park Ice Arena"
                    className=" md:mx-0 xs:mx-[74px]"
                    style={{ width: "300px", height: "auto" }} // Fixed size for Program1
                  />
                  <div className=" flex gap-20">
                   <img
                    src={Program4}
                    alt="Great Park Ice Arena"
                    className=" md:mx-0 xs:mx-[74px] max-w-[407px] max-h-[271px] "
                     // Fixed size for Program1
                  />
                   <img
                    src={Program5}
                    alt="Great Park Ice Arena"
                    className=" md:mx-0 xs:mx-[74px] max-w-[370px] max-h-[271px]"
                     // Fixed size for Program1
                  />
                 </div>
                </div>
               
                
              </div>
              
            </div>
          </>
        )}
      </div>
    );
}

export default ProgramBanner;
