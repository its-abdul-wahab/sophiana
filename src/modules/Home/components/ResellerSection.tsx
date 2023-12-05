import Button from "../../../components/Button";
import { Container } from "../../../components/Container";
import { images } from "../../../assets/images";
import { Link } from "react-router-dom";

const ResellerSection = () => {
  return (
    <div className="py-[6.35rem]">
      <Container>
        <div className="flex justify-between items-center gap-[5.5rem] xl:gap-[9.25rem]">
          <div className="flex-1">
            <img src={images.network} alt="GLOBAL REACH" />
          </div>
          <div className="flex-1">
            <h3 className="text-3xl font-cormorant-semibold tracking-[0.6px]">
              Interested in Joining our Reseller Network?
            </h3>
            <p className="text-lg my-4 font-crimson-regular leading-snug">
              Sofiana redefines luxury reselling by providing exclusive access
              to a selection of highly curated luxury jewelry, watches, and
              artworks to our digital reseller network. Eliminate the challenges
              of time-consuming product searches and photography by leveraging
              our SHOWROOM—a comprehensive tool for your selling success.
            </p>
            <Link to="/contact-us">
              <Button color="primary" variant="outline">
                JOIN OUR NETWORK NOW
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ResellerSection;
