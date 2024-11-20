import CalenderDescription from "../Components/Calender/CalenderDescription";
import HomeFooter from "../Components/Home/HomeFooter";
import Layout, { PAGE } from "../Components/Layout/Layout";
import { NavBar } from "../Components/NavBar";
import HomeBannerImage from "../assets/images/HomeBanner.png";

export const Calander = () => {
  return (
    <><NavBar />
    <Layout bannerPath={HomeBannerImage} page={PAGE.CALENDER}>
      <div>
      <CalenderDescription/>
      </div>
      <div><HomeFooter /></div>
    </Layout></>
  );
};
