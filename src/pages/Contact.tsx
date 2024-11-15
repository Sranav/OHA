import HomeFooter from "../Components/Home/HomeFooter";
import Layout, { PAGE } from "../Components/Layout/Layout";
import HomeBannerImage from "../assets/images/HomeBanner.png";
export const Contact = () => {
  return (
    <Layout bannerPath={HomeBannerImage} page={PAGE.CONTACT}>
      
    <div className="lg:mt-[400px] xs:mt-0 "><HomeFooter/></div>
  </Layout>
  );
};
