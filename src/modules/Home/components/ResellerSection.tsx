import Button from "../../../components/Button";
import { Container } from "../../../components/Container";
import { images } from "../../../assets/images";
import { Link } from "react-router-dom";

const ResellerSection = () => {
  return (
    <div className="sm:py-[6.35rem]">
      <Container className="px-0">
        <div className="relative sm:flex justify-between items-center gap-[5.5rem] xl:gap-[9.25rem]">
          <div className="flex-1">
            <img src={images.network} alt="GLOBAL REACH" />
          </div>
          <div className="flex-1 sm:relative text-center sm:text-left absolute top-1/2 -translate-y-1/2 sm:-translate-y-0 px-10 sm:px-0">
            <h3 className="text-xl sm:text-3xl font-cormorant-semibold tracking-[0.6px] sm:text-primary text-white">
              Interested in Joining our Reseller Network?
            </h3>
            <hr className="w-[50%] mx-auto border-[#8E8D8D] my-4 sm:hidden" />
            <p className="text-base sm:text-lg mb-8 sm:my-4 font-crimson-regular  leading-snug sm:text-primary text-white">
              Sofiana redefines luxury reselling by providing exclusive access
              to a selection of highly curated luxury jewelry, watches, and
              artworks to our digital reseller network. Eliminate the challenges
              of time-consuming product searches and photography by leveraging
              our SHOWROOM—a comprehensive tool for your selling success.
            </p>
            <Link to="/contact-us">
              <Button
                className="sm:block hidden"
                color="primary"
                variant="outline"
              >
                JOIN OUR NETWORK NOW
              </Button>
              <Button
                className="sm:hidden block !px-8 border-[#8E8D8D]"
                variant="outline"
              >
                JOIN OUR NETWORK
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ResellerSection;
