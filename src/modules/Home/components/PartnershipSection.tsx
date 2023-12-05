import Button from "../../../components/Button";
import { Container } from "../../../components/Container";
import { images } from "../../../utils/images";

const PartnershipSection = () => {
  return (
    <div className="py-[6.35rem]">
      <div className="flex w-full justify-center border-t border-primary relative">
        <div className="absolute top-1/2 -translate-y-1/2">
          <h2 className="text-4xl px-10 lg:px-16 bg-white whitespace-nowrap font-cormorant-regular">
            PARTNERSHIP PROGRAM
          </h2>
          <p className="text-2xl font-crimson-regular italic text-center">
            For Brands, Designers & Jewelers
          </p>
        </div>
      </div>
      <Container className="mt-[8.75rem]">
        <div className="flex justify-between items-center gap-[9.25rem]">
          <img src={images.partner_1} alt="GLOBAL REACH" />
          <div>
            <h3 className="text-3xl mb-4 font-cormorant-semibold uppercase">
              GLOBAL REACH
            </h3>
            <p className="text-xl font-crimson-regular">
              Sofiana offers a unique opportunity for sellers to showcase your
              products that will reach access to a pool of dedicated clientele.
              This not only expands your reach but also ensures that your
              creations are presented and promoted to a diverse and engaged
              clientele, enhancing your brand visibility and sales potential.
            </p>
          </div>
        </div>
        <div className="flex mt-[3.75rem] justify-between items-center gap-[9.25rem]">
          <div>
            <h3 className="text-3xl mb-4 font-cormorant-semibold uppercase">
              a win-win Opportunity
            </h3>
            <p className="text-xl font-crimson-regular">
              Not only can we showcase your creations to a wide audience, but we
              also collaborate with our partners to promote their products,
              ensuring they reach the right audiences. Our sales expertise and
              network support bridge the gap between East and West, making sales
              happen seamlessly.
            </p>
          </div>
          <img src={images.partner_2} alt="A win-win Opportunity" />
        </div>
        <div className="text-center mt-20">
          <Button color="primary" variant="outline">
            APPLY AS DEALER
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default PartnershipSection;
