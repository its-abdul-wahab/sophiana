import { Parallax } from "react-scroll-parallax";
import { Container } from "../../../components/Container";

const SophianaSection = () => {
  return (
    <div className="py-[65px] bg-skin">
      <Parallax opacity={[0, 1]} easing={"easeOutQuad"}>
        <Container className="!max-w-[533px]">
          <h3 className="text-left sm:text-center text-3xl mb-4 font-cormorant-semibold">
            What is Sophiana?
          </h3>
          <p className="text-left sm:text-center text-base font-crimson-regular">
            At Sophiana, we bring stunning jewels, arts and exclusive leather
            goods to global audiences. By joining our curated network, your
            products will reach access to a pool of dedicated digital resellers
            and shoppers, each with their own customer base. Your creations are
            presented and promoted to a diverse and engaged clientele, enhancing
            your brand visibility and maximize sales potential.
          </p>
        </Container>
      </Parallax>
    </div>
  );
};

export default SophianaSection;
