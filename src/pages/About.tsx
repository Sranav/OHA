import HomeFooter from "../Components/Home/HomeFooter";
import Layout, { PAGE } from "../Components/Layout/Layout";
import { NavBar } from "../Components/NavBar";
import HomeBannerImage from "../assets/images/HomeBanner.png";
const About = () => {
  return (
    <><NavBar /><Layout bannerPath={HomeBannerImage} page={PAGE.ABOUT}>

      <div><HomeFooter /></div>
    </Layout></>
  );
};

export default About;