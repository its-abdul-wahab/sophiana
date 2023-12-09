import { Helmet } from "react-helmet";
import BannerSection from "./components/BannersSection";
import ContactInfoSection from "./components/ContactInfoSection";
import { images } from "../../assets/images";

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Connect with SOPHIANA: Your Luxury Concierge</title>
        <meta
          name="description"
          content="Reach out to our dedicated team at Sophiana. We're here to answer your questions and personalize your luxury experience. Contact us today."
        />
        <meta
          name="keywords"
          content="Vintage jewelry, Estate jewelry, Antique jewelry, Art Deco jewelry, Victorian jewelry, Haute joaillerie, Fine jewelry, Luxury jewelry, Diamond jewelry, Gold jewelry, Diamonds, Rubies, Emeralds, Antique diamond ring, Vintage diamond earrings, Art Deco sapphire necklace, Vintage pearl bracelet, Antique emerald pendant, Estate gold bangle, Vintage cameo brooch, Antique opal ring, Vintage garnet necklace, Antique turquoise earrings, Antique filigree jewelry, Vintage enamel jewelry, Antique gemstone jewelry, Vintage silver jewelry, Antique costume jewelry, Vintage signed jewelry, Vintage designer jewelry, Vintage jewelry for sale, Vintage jewelry near me, Where to buy vintage jewelry online, Buy jewelry online, Jewelry near me, Exquisite vintage & estate jewels, High jewellery, Designer jewelry collections, Important gemstones, Vintage diamond rings, Antique diamond earrings, Art Deco sapphire necklace, Vintage pearl bracelet, Antique emerald pendant, Estate gold bangle, Vintage cameo brooch, Antique opal ring, Vintage garnet necklace, Antique turquoise earrings, Vintage filigree jewelry, Vintage enamel jewelry, Antique gemstone jewelry, Vintage silver jewelry, Antique costume jewelry."
        />
        <link rel="dofollow" href="https://sophiana.vercel.app/" />
        <link rel="canonical" href="https://sophiana.vercel.app/" />
        <meta property="og:image" content={images.linkPreview} />
        <meta property="og:image:secure_url" content={images.linkPreview} />
      </Helmet>
      <BannerSection />
      <ContactInfoSection />
    </>
  );
};

export default ContactUs;
