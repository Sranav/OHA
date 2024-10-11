import HomeCircle from "../../assets/images/HomeCircle.png";

function HomeBanner() {
  return (
    <div className="relative flex justify-end pt-6 pr-10">
      {/* Social Media Icons */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 pl-4"> {/* Vertically centered */}
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
         dsds {/* Instagram Icon */}
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          sdsd {/* YouTube Icon */}
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
         dsds {/* Facebook Icon */}
        </a>
      </div>

      <div className="flex flex-col text-[24px] font-bold leading-normal text-white w-full md:w-3/4 lg:w-2/3">
        <div>WELCOME TO OPTIMUM HOCKEY ACADEMY</div>
        <div className="text-[64px] text-red-text">Your Next Step of Hockey <br /> Development</div>
        <div className="border border-red-text mt-4 mb-4"></div>
        <div className="text-black text-[24px] pt-8">
          California’s premiere full-time hockey academy focused on player development and student athlete success.
        </div>

        {/* Content with bullet points */}
        <div className="mx-auto">
          {[
            "Full Day Academy (Grades 4-12)",
            "High Performance Training Program (HPTP)",
            "California Charter School Partnership",
            "Onsite Academic Teachers",
            "College Exposure Camp",
            "Tournament Teams",
            "Seasonal Development Camps",
          ].map((text, index) => (
            <div key={index} className="flex items-center gap-3 pt-3">
              <img src={HomeCircle} alt="" className="p-1" />
              <div className="text-[20px] text-red-text font-bold leading-normal">{text}</div>
            </div>
          ))}
        </div>

        <div className="mx-auto pt-8 pb-8">
          <button className="bg-red-text w-full text-center text-[18px] text-white p-2">READ MORE</button>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
