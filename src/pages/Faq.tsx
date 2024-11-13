import HomeFooter from "../Components/Home/HomeFooter";
import Layout, { PAGE } from "../Components/Layout/Layout";
import HomeBannerImage from "../assets/images/HomeBanner.png";

export const Faq = () => {
  return (
    <Layout bannerPath={HomeBannerImage} page={PAGE.FAQ}>

    <div><HomeFooter/></div>
  </Layout>
  );
};
