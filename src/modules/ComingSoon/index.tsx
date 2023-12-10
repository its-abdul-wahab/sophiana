import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { images } from "../../assets/images";
import { Helmet } from "react-helmet";
import { scrollToTop } from "../../utils";

const ComingSoon = () => {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Explore Exquisite Jewels, Watches & Art by SOPHIANA</title>
        <meta
          name="description"
          content="Captivating collection of luxury jewels, watches, and art at SOPHIANA. Find your perfect piece and experience personalized service. Shop now!"
        />
        <meta
          name="keywords"
          content="Vintage jewelry, Estate jewelry, Antique jewelry, Art Deco jewelry, Victorian jewelry, Haute joaillerie, Fine jewelry, Luxury jewelry, Diamond jewelry, Gold jewelry, Diamonds, Rubies, Emeralds, Antique diamond ring, Vintage diamond earrings, Art Deco sapphire necklace, Vintage pearl bracelet, Antique emerald pendant, Estate gold bangle, Vintage cameo brooch, Antique opal ring, Vintage garnet necklace, Antique turquoise earrings, Antique filigree jewelry, Vintage enamel jewelry, Antique gemstone jewelry, Vintage silver jewelry, Antique costume jewelry, Vintage signed jewelry, Vintage designer jewelry, Vintage jewelry for sale, Vintage jewelry near me, Where to buy vintage jewelry online, Buy jewelry online, Jewelry near me, Exquisite vintage & estate jewels, High jewellery, Designer jewelry collections, Important gemstones, Vintage diamond rings, Antique diamond earrings, Art Deco sapphire necklace, Vintage pearl bracelet, Antique emerald pendant, Estate gold bangle, Vintage cameo brooch, Antique opal ring, Vintage garnet necklace, Antique turquoise earrings, Vintage filigree jewelry, Vintage enamel jewelry, Antique gemstone jewelry, Vintage silver jewelry, Antique costume jewelry."
        />
        <link rel="dofollow" href="https://sophiana.vercel.app/" />
        <link rel="canonical" href="https://sophiana.vercel.app/" />
      </Helmet>
      <div
        className="bg-no-repeat bg-cover bg-center  h-[calc(100vh-6.31rem)] sm:h-[calc(100vh-20.31rem)] bg-fixed text-secondary text-center flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${images.coming})` }}
      >
        <div className="max-w-[564px] mx-auto mb-8 sm:mb-10">
          <p className="font-crimson-regular text-lg sm:text-2xl text-center mb-4 sm:mt-9 px-16 sm:px-0">
            <span className="italic font-crimson-semibold">Sophiana</span> - A
            new digital place where you dance with diamonds and mingle with
            masterpieces. Get ready for a luxurious rendezvous with breathtaking
            jewels, art, and exclusive leather goods. Sign up now and stay
            tuned.
          </p>
        </div>
        <Link to="/contact-us" onClick={scrollToTop}>
          <Button className="w-[216px]">JOIN AS DEALER</Button>
        </Link>
        <Link to="/contact-us">
          <Button
            className="mt-[18px] w-[216px]"
            variant="outline"
            onClick={scrollToTop}
          >
            JOIN AS SHOPPER
          </Button>
        </Link>
      </div>
    </>
  );
};

export default ComingSoon;
