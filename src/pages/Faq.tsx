import HomeFooter from "../Components/Home/HomeFooter";
import Layout, { PAGE } from "../Components/Layout/Layout";
import { NavBar } from "../Components/NavBar";
import HomeBannerImage from "../assets/images/HomeBanner.png";

export const Faq = () => {
  return (
    <><NavBar /><Layout bannerPath={HomeBannerImage} page={PAGE.FAQ}>

      <div><HomeFooter /></div>
    </Layout></>
  );
};
