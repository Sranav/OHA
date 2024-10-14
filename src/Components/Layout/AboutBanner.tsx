import AboutBannerImage from "../../assets/images/HomeBanner.png";
import AboutArena from "../../assets/images/AboutArena.png";
import OAClasses from "../../assets/images/OAClasses.png";
import CoFounderOne from "../../assets/images/CoFounderOne.png";

function AboutBanner() {
  return (
    <div
      className="pb-[221px]"
      style={{
        backgroundImage: `url(${AboutBannerImage})`,
        backgroundSize: "cover", // Ensures the image covers the entire div
        backgroundPosition: "center", // Centers the background image
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
      }}
    >
      {/* Arena Section */}
      <div className="flex md:flex-row xs:flex-col justify-center text-body-text xl:gap-36 xs:gap-24 pt-[50px]">
        <div className="flex items-center">
          <img src={AboutArena} alt="Great Park Ice Arena" className="max-w-full h-auto" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-[32px] text-red-text font-bold leading-normal">
            Great Park Ice & FivePoints Arena
          </div>
          <ul className="list-disc text-[24px] pl-10 text-black font-normal">
            <li>4 rinks (3 NHL, 1 Olympic)</li>
            <li>2,500 seat arena</li>
            <li>Anaheim Ducks Practice Facility</li>
            <li>Largest ice facility in California</li>
          </ul>
        </div>
      </div>

      {/* Academic Classrooms Section */}
      <div className="flex md:flex-row xs:flex-col justify-center text-body-text xl:gap-36 xs:gap-24 pt-10">
        <div className="flex items-center align-baseline">
          <img src={OAClasses} alt="Optimum Academic Classrooms" className="max-w-full h-auto pl-10" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-[32px] text-red-text font-bold leading-normal">
            Optimum Academic Classrooms
          </div>
          <ul className="list-disc text-[24px] pl-10 text-black font-normal">
            <li>3 onsite classrooms at Great Park Ice</li>
            <li>Small group academics</li>
            <li>Classes instructed by onsite California Accredited <br /> Teachers</li>
            <li>Partnered with Epic Charter Schools</li>
          </ul>
        </div>
      </div>
      <div className="flex md:flex-row xs:flex-col justify-center text-body-text xl:gap-36 xs:gap-24 pt-[50px]">
        <div className="flex items-center">
          <img src={CoFounderOne} alt="Great Park Ice Arena" className="max-w-full h-auto" />
        </div>
        <div className="flex flex-row justify-center">
          <div className="text-[32px] text-red-text font-bold leading-normal">
          Alex Kim
            <div className="text-[16px] text-black font-normal">Director of Hockey Operations <br /> Co-Founder</div>
          </div>
          <ul className="list-disc text-[20px] pl-10 text-black font-normal">
            <li>11 year professional hockey in AHL,<br /> ECHL, Europe and Asia.  </li>
            <li>7 years as head coach of Jr Ducks 16U <br /> AAA program</li>
            <li>Advanced to USA Hockey National Tournament <br /> in 4 of last 5 years</li>
           
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
