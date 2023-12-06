import BannerSection from "./components/BannerSection";
import PartnershipSection from "./components/PartnershipSection";
import TreasuresSection from "./components/TreasuresSection";
import ResellerSection from "./components/ResellerSection";
import FadeInOnScroll from "../../components/FadeInScroll";
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
      <FadeInOnScroll>
        <SophianaSection />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <PartnershipSection />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <TreasuresSection />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <ResellerSection />
      </FadeInOnScroll>
      <ScrollBehavior />
    </>
  );
};

export default Home;
