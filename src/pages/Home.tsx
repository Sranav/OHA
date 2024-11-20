import HomeFooter from "../Components/Home/HomeFooter";
import InstaLivePhoto from "../Components/Home/InstaLivePhoto";
import Layout, { PAGE } from "../Components/Layout/Layout";
import { NavBar } from "../Components/NavBar";
import HomeBannerImage from "../assets/images/HomeBanner.png";

export const Home = () => {
  return (
    <><NavBar /><Layout bannerPath={HomeBannerImage} page={PAGE.HOME}>

      <div>
        <InstaLivePhoto />
      </div>
      <div>
        <HomeFooter />
      </div>
    </Layout></>
  );
};
