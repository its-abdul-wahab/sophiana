import Button from "../../../components/Button";
import { Container } from "../../../components/Container";
import { images } from "../../../assets/images";
import { Link } from "react-router-dom";

const PartnershipSection = () => {
  return (
    <div className="py-[6.35rem]">
      <div className="flex w-full justify-center border-t border-primary relative">
        <div className="absolute top-1/2 -translate-y-1/2 bg-white">
          <h2 className="text-3xl px-10 lg:px-16  whitespace-nowrap font-crimson-regular">
            PARTNERSHIP PROGRAM
          </h2>
          <p className="text-xl font-crimson-regular mt-2 italic text-center">
            For Brands, Designers & Jewelers
          </p>
        </div>
      </div>
      <Container className="mt-[8.75rem]">
        <div className="flex justify-between items-center gap-[5.5rem] xl:gap-[9.25rem]">
          <div className="flex-1">
            <img src={images.partner_1} alt="GLOBAL REACH" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl xl:text-3xl mb-4 font-cormorant-semibold uppercase">
              GLOBAL REACH
            </h3>
            <p className="text-base xl:text-lg font-crimson-regular leading-snug">
              Sofiana offers a unique opportunity for sellers to showcase your
              products that will reach access to a pool of dedicated clientele.
              This not only expands your reach but also ensures that your
              creations are presented and promoted to a diverse and engaged
              clientele, enhancing your brand visibility and sales potential.
            </p>
          </div>
        </div>
        <div className="flex mt-[3.75rem] justify-between items-center gap-[5.5rem] xl:gap-[9.25rem]">
          <div className="flex-1">
            <h3 className="text-2xl xl:text-3xl mb-4 font-cormorant-semibold uppercase">
              a win-win Opportunity
            </h3>
            <p className="text-base xl:text-lg font-crimson-regular leading-snug">
              Not only can we showcase your creations to a wide audience, but we
              also collaborate with our partners to promote their products,
              ensuring they reach the right audiences. Our sales expertise and
              network support bridge the gap between East and West, making sales
              happen seamlessly.
            </p>
          </div>
          <div className="flex-1">
            <img src={images.partner_2} alt="A win-win Opportunity" />
          </div>
        </div>
        <div className="text-center mt-20">
          <Link to="/contact-us">
            <Button color="primary" variant="outline">
              APPLY AS DEALER
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default PartnershipSection;
