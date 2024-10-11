import { NavBar } from "../NavBar";
import AboutBanner from "./AboutBanner";
import HomeBanner from "./HomeBanner";

interface LayoutProps {
    children: React.ReactNode;
    bannerPath: string;
    page: PAGE; // Add more page types as needed in the future.
}
export enum PAGE {
    HOME = "home",
    SERVICE = "service",
    ABOUT = "about",
    NonProfit = "nonprofit",
    ContactUs = "contactus",
}
const Layout: React.FC<LayoutProps> = ({ children, bannerPath, page = PAGE.HOME }) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bannerPath})`,
          backgroundSize: "cover", // This will ensure the image covers the entire div
          backgroundPosition: "center", // This will center the background image
          backgroundRepeat: "no-repeat", // Prevent the image from repeating
          
        }}
      >
        <NavBar bgImgUrl={bannerPath} />
        <div className='lg:pt-32 sm:pt-28  mx-auto'>
          {page === PAGE.HOME && <HomeBanner />}
          {page === PAGE.ABOUT && <AboutBanner />}
          {/* {page === PAGE.ABOUT && <AboutBanner/>}
          {page === PAGE.NonProfit && <NonProfitBanner/>}
          {page === PAGE.ContactUs && <ContactBanner/>} */}
        </div>
      </div>
  
      {children}
  
    </>
  );
};
  
export default Layout;