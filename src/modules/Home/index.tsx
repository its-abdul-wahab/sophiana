import BannerSection from "./components/BannerSection";
import PartnershipSection from "./components/PartnershipSection";
import TreasuresSection from "./components/TreasuresSection";
import ResellerSection from "./components/ResellerSection";
import SophianaSection from "./components/SophianaSection";
import ScrollBehavior from "../../components/ScrollBehavior";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sophiana | Home</title>
        <link rel="canonical" href="" />
      </Helmet>
      <BannerSection />
      <SophianaSection />
      <PartnershipSection />
      <TreasuresSection />
      <ResellerSection />
      <ScrollBehavior />
    </>
  );
};

export default Home;
