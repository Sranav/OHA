import AlumniContents from "../Components/Alumini/AlumniContents";
import HomeFooter from "../Components/Home/HomeFooter";
import Layout, { PAGE } from "../Components/Layout/Layout";
import HomeBannerImage from "../assets/images/HomeBanner.png";
export const Alumni = () => {
  return (
    <Layout bannerPath={HomeBannerImage} page={PAGE.Alumini}>
      <div className="lg:block xs:hidden">
        <AlumniContents/>
      </div>
    <div><HomeFooter/></div>
  </Layout>
  );
};
