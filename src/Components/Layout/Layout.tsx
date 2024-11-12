import { NavBar } from "../NavBar";
import AboutBanner from "./AboutBanner";
import AluminiBanners from "./AluminiBanners";
import HomeBanner from "./HomeBanner";
import ProgramBanner from "./ProgramBanner";

interface LayoutProps {
    children: React.ReactNode;
    bannerPath: string;
    page: PAGE; // Add more page types as needed in the future.
}
export enum PAGE {
    HOME = "home",
    SERVICE = "service",
    ABOUT = "about",
    Program = "program",
    ContactUs = "contactus",
    Alumini ="alumini",
}
const Layout: React.FC<LayoutProps> = ({ children, bannerPath, page = PAGE.HOME }) => {
  return (
    <>
      {/* <div
        style={{
          backgroundImage: `url(${bannerPath})`,
          backgroundSize: "cover", // This will ensure the image covers the entire div
          backgroundPosition: "center", // This will center the background image
          backgroundRepeat: "no-repeat", // Prevent the image from repeating
          
        }}
      > */}
      <NavBar  />
      <div className='lg:pt-28 sm:pt-28  '>
        {page === PAGE.HOME && <HomeBanner />}
        {page === PAGE.ABOUT && <AboutBanner />}
        {page === PAGE.Program && <ProgramBanner />}
        {page === PAGE.Alumini && <AluminiBanners />}
        {/* {page === PAGE.ABOUT && <AboutBanner/>}
          {page === PAGE.NonProfit && <NonProfitBanner/>}
          {page === PAGE.ContactUs && <ContactBanner/>} */}
      </div>
  
      {children}
  
    </>
  );
};
  
export default Layout;