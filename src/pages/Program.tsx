import HomeFooter from "../Components/Home/HomeFooter";
import Layout, { PAGE } from "../Components/Layout/Layout";
import { NavBar } from "../Components/NavBar";
import HomeBannerImage from "../assets/images/HomeBanner.png";
export const Program = () => {
  return (
    <><NavBar /><Layout bannerPath={HomeBannerImage} page={PAGE.Program}>

      <div><HomeFooter /></div>
    </Layout></>
  );
};
