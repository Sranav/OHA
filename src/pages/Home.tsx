import HomeFooter from "../Components/Home/HomeFooter";
import InstaLivePhoto from "../Components/Home/InstaLivePhoto";
import Layout, { PAGE } from "../Components/Layout/Layout";
import HomeBannerImage from "../assets/images/HomeBanner.png";

export const Home = () => {
  return (
    <Layout bannerPath={HomeBannerImage} page={PAGE.HOME}>

      <div>
        <InstaLivePhoto/>
      </div>
      <div>
        <HomeFooter/>
      </div>
    </Layout>
  );
};
