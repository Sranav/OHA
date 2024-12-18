import HomeCircle from "../../assets/images/HomeCircle.png";
import Instagram from "../../assets/images/Instgram.png";
import YouTube from "../../assets/images/Youtube.png";
import FaceBook from "../../assets/images/FaceBook.png";
import HomeBannerTest from "../../assets/images/HomeBanner.png";
import MobileHomeBanner1 from "../../assets/images/MobileHomeBanner1.png";
import useWindowSize from "../../hooks/useWindowSize";
import { Link } from "react-router-dom";

function HomeBanner() {
  const { width } = useWindowSize();
  const bannerImage = width < 1024 ? MobileHomeBanner1 : HomeBannerTest;
  return (
    <div
  className="relative"
  style={{
    backgroundImage: `url(${bannerImage})`,
    backgroundColor: "lightgray", // Fallback background color
    backgroundSize: "cover", // Ensures the image covers the entire div
    backgroundPosition: "center", // Centers the background image
    backgroundRepeat: "no-repeat", // Prevents the image from repeating
    
    // boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)", // Adds the shadow
  }}
>
      {width && width < 1024 ? (
        // Mobile version
        <>
          <div className="absolute left-0 top-full mt-20 flex flex-col py-2 gap-4 z-10 bg-red-text items-start">
            <a href="https://www.instagram.com/optimumhockeyacademy/" target="_blank" rel="noopener noreferrer" className="text-white  hover:text-red-text pl-2 hover:scale-110 transition-transform duration-300">
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="https://www.youtube.com/@optimumhockeyacademy3211" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-text  hover:scale-110 transition-transform duration-300">
              <img src={YouTube} alt="YouTube" />
            </a>
            <a href="https://www.facebook.com/optimumhockeyacademy" target="_blank" rel="noopener noreferrer" className="text-white  hover:text-red-text pl-2.5 hover:scale-110 transition-transform duration-300">
              <img src={FaceBook} alt="FaceBook" />
            </a>
          </div>


          <div className="flex justify-end md:pt-6 xs:pt-[80px] px-9">
            <div className="flex flex-col  text-white w-full  pt-11">
              <div className="md:text-[24px] xs:text-[16px] font-bold leading-[1.2]">WELCOME TO <br />OPTIMUM HOCKEY  ACADEMY</div>
              <div className=" text-[36px] text-red-text pt-5 font-bold leading-[1.2]" >
                Your Next Step of Hockey <br /> Development
              </div>
              <div className="border border-red-text mt-4 mb-4 w-[272px] md:mx-auto"></div>
              {/* <div className="text-black text-[24px] pt-8">
                California’s premiere full-time hockey academy focused on player development and student athlete success.
              </div> */}

              <div className="mx-auto pt-12">
                <div className="flex items-center gap-3">
                  <img src={HomeCircle} alt="" className="p-1" />
                  <div className="md:text-[20px] xs:text-[12px] text-red-text font-bold leading-[1.2]">
                    Full Day Academy (Grades 4-12)
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img src={HomeCircle} alt="" className="p-1" />
                  <div className="md:text-[20px] xs:text-[12px] text-red-text font-bold leading-[1.2]">
                    High Performance Training Program (HPTP)
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img src={HomeCircle} alt="" className="p-1" />
                  <div className="md:text-[20px] xs:text-[12px] text-red-text font-bold leading-[1.2]">
                    California Charter School Partnership
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img src={HomeCircle} alt="" className="p-1" />
                  <div className="md:text-[20px] xs:text-[12px] text-red-text font-bold leading-[1.2]">
                    Onsite Academic Teachers
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img src={HomeCircle} alt="" className="p-1" />
                  <div className="md:text-[20px] xs:text-[12px] text-red-text font-bold leading-[1.2]">
                    College Exposure Camp
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img src={HomeCircle} alt="" className="p-1" />
                  <div className="md:text-[20px] xs:text-[12px] text-red-text font-bold leading-[1.2]">
                    Tournament Teams
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img src={HomeCircle} alt="" className="p-1" />
                  <div className="md:text-[20px] xs:text-[12px] text-red-text font-bold leading-[1.2]">
                    Seasonal Development Camps
                  </div>
                </div>
              </div>

              <div className="mx-auto pt-8 md:pb-8 xs:pb-[70px]">
                <button className="bg-red-text w-full text-center md:text-[18px] xs:text-[10px] text-white p-2 leading-[1.2]">
                  READ MORE
                </button>
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

          <div className="flex  justify-end pt-[27px] 3xl:mr-[20%] ">
            <div className="flex flex-col text-[24px] font-bold leading-[1.2] text-white pr-10">
              <div className="max-w-[550px] max-h-[44px]">WELCOME TO OPTIMUM HOCKEY ACADEMY</div>
              <div className="text-[64px] text-red-text font-bold leading-[1.2] pt-[5px] max-w-[828px] max-h-[152px]" style={{ WebkitTextStrokeWidth: "1px", WebkitTextStrokeColor: "#907E7E" }}>
                Your Next Step of Hockey  Development
              </div>
              <div className="border border-red-text ml-32 max-w-[680px] mt-[23px]"></div>
              <div className="flex max-w-[828px] max-h-[66px] text-[24px] text-black leadin-[1.2] pt-[49px]" style={{
                WebkitTextStrokeWidth: '1px',
                WebkitTextStrokeColor: '#616161',
              }}>
                <div>California’s premiere full time hockey academy focused on player development and student athlete success.</div>
              </div>
              {/* <div className="text-black text-[24px] pt-8 leading-[1.2] mr-[46px] max-w-[828px] max-h-[66px]">
                California’s premiere full-time hockey academy focused on player development and student athlete success.
              </div> */}
              

              <div className="flex flex-col pt-14 m-auto gap-3">
                <div className="flex items-center gap-3 w-full ">
                  <img src={HomeCircle} alt="" className="p-1" />
                  <div className="text-[20px] text-red-text font-bold leading-[1.2] ">
                    Full Day Academy (Grades 4-12)
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img src={HomeCircle} alt="" className="p-1" />
                  <div className="text-[20px] text-red-text font-bold leading-[1.2]">
                    High Performance Training Program (HPTP)
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img src={HomeCircle} alt="" className="p-1" />
                  <div className="text-[20px] text-red-text font-bold leading-[1.2]">
                    California Charter School Partnership
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img src={HomeCircle} alt="" className="p-1" />
                  <div className="text-[20px] text-red-text font-bold leading-[1.2]">
                    Onsite Academic Teachers
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img src={HomeCircle} alt="" className="p-1" />
                  <div className="text-[20px] text-red-text font-bold leading-[1.2]">
                    College Exposure Camp
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img src={HomeCircle} alt="" className="p-1" />
                  <div className="text-[20px] text-red-text font-bold leading-[1.2]">
                    Tournament Teams
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <img src={HomeCircle} alt="" className="p-1" />
                  <div className="text-[20px] text-red-text font-bold leading-[1.2]">
                    Seasonal Development Camps
                  </div>
                </div>
              </div>

              <div className="mx-auto pt-8 pb-2">
                <button className="bg-red-text w-full text-center text-[20px] text-white p-2 leading-[1.2] font-normal hover:bg-hover-text hover:text-black">
                 <Link to="/program">READ MORE</Link> 
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default HomeBanner;
