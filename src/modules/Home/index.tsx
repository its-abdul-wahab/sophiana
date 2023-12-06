import BannerSection from "./components/BannerSection";
import PartnershipSection from "./components/PartnershipSection";
import TreasuresSection from "./components/TreasuresSection";
import ResellerSection from "./components/ResellerSection";
import FadeInOnScroll from "../../components/FadeInScroll";
import SophianaSection from "./components/SophianaSection";
import ScrollBehavior from "../../components/ScrollBehavior";

const Home = () => {
  return (
    <>
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
