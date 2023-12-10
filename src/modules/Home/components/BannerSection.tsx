import { Button } from "../../../components/Button";
import { images } from "../../../assets/images";
import { Link } from "react-router-dom";
import { ParallaxBanner } from "react-scroll-parallax";

const BannerSection = () => {
  return (
    <ParallaxBanner
      layers={[
        { image: images.banner, speed: -20 },
        {
          speed: -15,
          children: (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="max-w-[506px] mx-auto text-2xl sm:text-[2.5rem] mb-7 leading-snug  font-cormorant-garamond-italic italic">
                Luxury Selling & Curating{" "}
                <span className="block italic font-garamond-medium-italic">
                  {" "}
                  REDEFINED
                </span>
              </h1>
              <Link to="/contact-us">
                <Button className="w-[216px]">JOIN AS DEALER</Button>
              </Link>
              <Link to="/contact-us">
                <Button className="mt-[18px] w-[216px]" variant="outline">
                  JOIN AS SHOPPER
                </Button>
              </Link>
            </div>
          ),
        },
      ]}
      className="bg-cover bg-center h-[calc(100vh-3.875rem)] sm:h-[calc(100vh-5.75rem)] text-secondary text-center"
    />
  );
};

export default BannerSection;
