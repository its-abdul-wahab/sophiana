import Button from "../../../components/Button";
import { Container } from "../../../components/Container";
import { images } from "../../../utils/images";

const ResellerSection = () => {
  return (
    <div className="py-[6.35rem]">
      <Container>
        <div className="flex justify-between items-center gap-[9.25rem]">
          <img src={images.network} alt="GLOBAL REACH" />
          <div className="space-y-4">
            <h3 className="text-3xl font-cormorant-semibold">
              Interested in Joining our Reseller Network?
            </h3>
            <p className="text-xl font-crimson-regular">
              Sofiana redefines luxury reselling by providing exclusive access
              to a selection of highly curated luxury jewelry, watches, and
              artworks to our digital reseller network. Eliminate the challenges
              of time-consuming product searches and photography by leveraging
              our SHOWROOM—a comprehensive tool for your selling success.
            </p>
            <Button color="primary" variant="outline">
              JOIN OUR NETWORK NOW
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ResellerSection;
