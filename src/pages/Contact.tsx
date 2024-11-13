import HomeFooter from "../Components/Home/HomeFooter";
import Layout, { PAGE } from "../Components/Layout/Layout";
import HomeBannerImage from "../assets/images/HomeBanner.png";
export const Contact = () => {
  return (
    <Layout bannerPath={HomeBannerImage} page={PAGE.CONTACT}>

    <div className="mt-52"><HomeFooter/></div>
  </Layout>
  );
};
