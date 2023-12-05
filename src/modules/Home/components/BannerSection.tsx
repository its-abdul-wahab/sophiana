import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { images } from "../../../utils/images";

const BannerSection = () => {
  return (
    <>
      <div
        className="bg-cover bg-center h-[calc(100vh-5.75rem)] text-secondary text-[2.5rem] font-cormorant-medium text-center flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${images.banner})` }}
      >
        <h1 className="max-w-[506px] mx-auto mb-8">
          Luxury Selling & Curating REDEFINED
        </h1>
        <Button className="w-[216px]">JOIN AS DEALER</Button>
        <Button className="mt-[18px] w-[216px]" variant="outline">
          JOIN AS SHOPPER
        </Button>
      </div>
      <div className="py-[65px] bg-skin">
        <Container className="!max-w-[533px]">
          <h3 className="text-center text-3xl mb-4 font-cormorant-semibold">
            What is Sophiana?
          </h3>
          <p className="text-center text-base font-crimson-regular">
            At Sophiana, we bring stunning jewels, arts and exclusive leather
            goods to global audiences. By joining our curated network, your
            products will reach access to a pool of dedicated digital resellers
            and shoppers, each with their own customer base. Your creations are
            presented and promoted to a diverse and engaged clientele, enhancing
            your brand visibility and maximize sales potential.
          </p>
        </Container>
      </div>
    </>
  );
};

export default BannerSection;
