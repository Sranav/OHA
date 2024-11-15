import CalenderDescription from "../Components/Calender/CalenderDescription";
import HomeFooter from "../Components/Home/HomeFooter";
import Layout, { PAGE } from "../Components/Layout/Layout";
import HomeBannerImage from "../assets/images/HomeBanner.png";

export const Calander = () => {
  return (
    <Layout bannerPath={HomeBannerImage} page={PAGE.CALENDER}>
      {/* <CalenderDescription/> */}
    <div><HomeFooter/></div>
  </Layout>
  );
};
