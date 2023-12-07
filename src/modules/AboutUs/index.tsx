import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { images } from "../../assets/images";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sophiana | About-Us</title>
        <link rel="canonical" href="" />
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
