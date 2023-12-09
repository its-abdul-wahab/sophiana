import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { images } from "../../assets/images";
import { Helmet } from "react-helmet";

const ComingSoon = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sophiana | Coming-Soon</title>
        <link rel="canonical" href="" />
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
        <Link to="/contact-us">
          <Button className="w-[216px]">JOIN AS DEALER</Button>
        </Link>
        <Button className="mt-[18px] w-[216px]" variant="outline">
          JOIN AS SHOPPER
        </Button>
      </div>
    </>
  );
};

export default ComingSoon;
