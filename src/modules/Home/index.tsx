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
        <meta charSet="UTF-8" />
        <title>
          Sophiana | Luxury & Designer Jewelry for the Discerning Collector
        </title>
        <meta
          name="description"
          content="Discover exquisite vintage & estate jewels, high jewellery, designer collections, & important gemstones at Sophiana. Shop the world's finest pieces online."
        />
        <meta
          name="keywords"
          content=" Vintage jewelry, Estate jewelry, Antique jewelry, Art Deco jewelry, Victorian jewelry, Haute joaillerie, Fine jewelry, Luxury jewelry, Diamond jewelry, Gold jewelry, Diamonds, Rubies, Emeralds, Antique diamond ring, Vintage diamond earrings, Art Deco sapphire necklace, Vintage pearl bracelet, Antique emerald pendant, Estate gold bangle, Vintage cameo brooch, Antique opal ring, Vintage garnet necklace, Antique turquoise earrings, Antique filigree jewelry, Vintage enamel jewelry, Antique gemstone jewelry, Vintage silver jewelry, Antique costume jewelry, Vintage signed jewelry, Vintage designer jewelry, Vintage jewelry for sale, Vintage jewelry near me, Where to buy vintage jewelry online, Buy jewelry online, Jewelry near me, Exquisite vintage & estate jewels, High jewellery, Designer jewelry collections, Important gemstones, Vintage diamond rings, Antique diamond earrings, Art Deco sapphire necklace, Vintage pearl bracelet, Antique emerald pendant, Estate gold bangle, Vintage cameo brooch, Antique opal ring, Vintage garnet necklace, Antique turquoise earrings, Vintage filigree jewelry, Vintage enamel jewelry, Antique gemstone jewelry, Vintage silver jewelry, Antique costume jewelry."
        />
        <link rel="dofollow" href="https://sophiana.vercel.app/" />
        <link rel="canonical" href="https://sophiana.vercel.app/" />
        {/* <meta property="og:image" content={linkPreview} />
        <meta property="og:image:secure_url" content={linkPreview} /> */}
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
