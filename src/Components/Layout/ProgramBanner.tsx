import HomeCircle from "../../assets/images/HomeCircle.png";
import Instagram from "../../assets/images/Insta.png";
import YouTube from "../../assets/images/YouTube.png";
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
        className="relative min-h-screen md:pt-7 xs:pt-[90px]"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover", // Keeps the image proportional but may crop
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh", // Ensure the container takes full viewport height
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
              <a href="" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-red-text">
                <img src={Instagram} alt="Instagram" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-red-text">
                <img src={YouTube} alt="YouTube" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-red-text">
                <img src={FaceBook} alt="FaceBook" />
              </a>
            </div>
      
            <div className="flex flex-col gap-10  md:mt-0 xs:mt-32">
              <div className="flex lg:flex-row xs:flex-col lg:gap-36 xs:gap-4 justify-between pr-[50px]">
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
              <div className="flex lg:flex-row xs:flex-col lg:gap-36 xs:gap-4 justify-between pr-[50px]">
                <div className="flex flex-row pl-[50px] lg:w-auto xs:w-full overflow-hidden gap-40 ">
                  <img
                    src={Program3}
                    alt="Great Park Ice Arena"
                    className=" md:mx-0 xs:mx-[74px]"
                    style={{ width: "300px", height: "auto" }} // Fixed size for Program1
                  />
                   <img
                    src={Program4}
                    alt="Great Park Ice Arena"
                    className=" md:mx-0 xs:mx-[74px] "
                    style={{ width: "300px", height: "auto" }} // Fixed size for Program1
                  />
                   <img
                    src={Program5}
                    alt="Great Park Ice Arena"
                    className=" md:mx-0 xs:mx-[74px] "
                    style={{ width: "300px", height: "auto" }} // Fixed size for Program1
                  />
                 
                </div>
               
                
              </div>
              
            </div>
          </>
        )}
      </div>
    );
}

export default ProgramBanner;
