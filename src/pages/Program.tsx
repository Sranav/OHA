import HomeFooter from "../Components/Home/HomeFooter";
import Layout, { PAGE } from "../Components/Layout/Layout";
import HomeBannerImage from "../assets/images/HomeBanner.png";
export const Program = () => {
  return (
    <Layout bannerPath={HomeBannerImage} page={PAGE.Program}>

      <div><HomeFooter/></div>
    </Layout>
  );
};
