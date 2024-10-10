import HomeCircle from "../../assets/images/HomeCircle.png";

function HomeBanner() {
  return (
    <div className="flex justify-end pt-6 pr-10"> {/* Adjusted to add padding-right */}
      <div className="flex flex-col  text-[24px] font-bold leading-normal text-white w-full md:w-3/4 lg:w-2/3"> {/* Added text-right */}
        <div>WELCOME TO OPTIMUM HOCKEY ACADEMY</div>
        <div className="text-[64px] text-red-text ">Your Next Step of Hockey <br /> Development</div>
        <div className="border border-red-text mt-4 mb-4"></div>
        <div className="text-black text-[24px] pt-8">
          California’s premiere full-time hockey academy focused on player development and student athlete success.
        </div>
        <div className="mx-auto">
          <div className="flex items-center  gap-3 pt-6"> {/* Adjusted alignment */}
            <img src={HomeCircle} alt="" className="p-1"/>
            <div className="text-[20px] text-red-text font-bold leading-normal">Full Day Academy (Grades 4-12)</div>
          </div>
          <div className="flex items-center  gap-3"> {/* Adjusted alignment */}
            <img src={HomeCircle} alt="" className="p-1"/>
            <div className="text-[20px] text-red-text font-bold leading-normal">High Performance Training Program (HPTP)</div>
          </div>
          <div className="flex items-center  gap-3"> {/* Adjusted alignment */}
            <img src={HomeCircle} alt="" className="p-1"/>
            <div className="text-[20px] text-red-text font-bold leading-normal">California Charter School Partnership</div>
          </div>
          <div className="flex items-center  gap-3"> {/* Adjusted alignment */}
            <img src={HomeCircle} alt="" className="p-1"/>
            <div className="text-[20px] text-red-text font-bold leading-normal">Onsite Academic Teachers</div>
          </div>
          <div className="flex items-center  gap-3"> {/* Adjusted alignment */}
            <img src={HomeCircle} alt="" className="p-1"/>
            <div className="text-[20px] text-red-text font-bold leading-normal">College Exposure Camp </div>
          </div>
          <div className="flex items-center  gap-3"> {/* Adjusted alignment */}
            <img src={HomeCircle} alt="" className="p-1"/>
            <div className="text-[20px] text-red-text font-bold leading-normal">Tournament Teams</div>
          </div>
          <div className="flex items-center  gap-3"> {/* Adjusted alignment */}
            <img src={HomeCircle} alt="" className="p-1"/>
            <div className="text-[20px] text-red-text font-bold leading-normal">Seasonal Development Camps</div>
          </div>
        </div>
        <div className="mx-auto pt-8 pb-8">
          <button className="bg-red-text w-full text-center text-[18px] text-white p-2">READ MORE</button>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
