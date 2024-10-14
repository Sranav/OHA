import footerLogo from "../../assets/images/OHALogo.png";

const HomeFooter = () => {
  return (
    <div className="bg-footer-color">
      <div className="flex flex-row justify-between items-center py-5 px-8">
        <div className="flex flex-col gap-2 text-[12px]">
          <div>info@optimumhockeyadademy.com</div>
          <div>888 Ridge Valley</div>
          <div>Irvine, CA 92618</div>
          <div>(949) 237-2637</div>
        </div>
        <div className="flex justify-center items-center"> {/* Center the logo vertically */}
          <img src={footerLogo} alt="Optimum Hockey Academy Logo" className="md:w-[250px] md:h-[53px] xs:w-[97px] xs:h-[23px]" /> {/* Adjust max height as needed */}
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
