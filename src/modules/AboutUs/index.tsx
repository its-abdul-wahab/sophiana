import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { images } from "../../assets/images";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>About Us | Sophiana Jewelry</title>
        <meta
          name="description"
          content="Discover the Sophiana difference. We curate exquisite jewels, watches & art, offering personalized service and digital ease. Learn our story."
        />
        <meta
          name="keywords"
          content="Vintage jewelry, Estate jewelry, Antique jewelry, Art Deco jewelry, Victorian jewelry, Haute joaillerie, Fine jewelry, Luxury jewelry, Diamond jewelry, Gold jewelry, Diamonds, Rubies, Emeralds, Antique diamond ring, Vintage diamond earrings, Art Deco sapphire necklace, Vintage pearl bracelet, Antique emerald pendant, Estate gold bangle, Vintage cameo brooch, Antique opal ring, Vintage garnet necklace, Antique turquoise earrings, Antique filigree jewelry, Vintage enamel jewelry, Antique gemstone jewelry, Vintage silver jewelry, Antique costume jewelry, Vintage signed jewelry, Vintage designer jewelry, Vintage jewelry for sale, Vintage jewelry near me, Where to buy vintage jewelry online, Buy jewelry online, Jewelry near me, Exquisite vintage & estate jewels, High jewellery, Designer jewelry collections, Important gemstones, Vintage diamond rings, Antique diamond earrings, Art Deco sapphire necklace, Vintage pearl bracelet, Antique emerald pendant, Estate gold bangle, Vintage cameo brooch, Antique opal ring, Vintage garnet necklace, Antique turquoise earrings, Vintage filigree jewelry, Vintage enamel jewelry, Antique gemstone jewelry, Vintage silver jewelry, Antique costume jewelry."
        />
        <link rel="dofollow" href="https://sophiana.vercel.app/" />
        <link rel="canonical" href="https://sophiana.vercel.app/" />
      </Helmet>
      <div
        className="bg-cover bg-center h-[calc(100vh-6.31rem)] sm:h-[calc(100vh-20.31rem)] bg-fixed text-secondary text-center flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${images.about})` }}
      >
        <div className="max-w-[564px] mx-auto mb-6 lg:mb-20">
          <h1 className="text-2xl sm:text-[2.5rem] mb-4 sm:mb-9  leading-snug font-cormorant-garamond  sm:font-crimson-regular">
            THE SOPHIANA{" "}
            <span className="italic block sm:inline">DIFFERENCE</span>
          </h1>
          <div className="w-[50px] sm:block hidden h-[1px] mx-auto -rotate-90 bg-[#8E8D8D]"></div>
          <p className="font-crimson-regular text-lg sm:text-2xl text-center mb-4 sm:mt-9 px-16 sm:px-0">
            At SOPHIANA, we bring stunning jewels, watches and art pieces to
            global audiences. We redefine how luxury is sold—combining the
            digital world with personalized touch.
          </p>
        </div>
        <Link to="/contact-us">
          <Button className="w-[216px]">GET IN TOUCH</Button>
        </Link>
      </div>
    </>
  );
};

export default AboutUs;
