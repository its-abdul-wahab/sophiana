import { Container } from "../../../components/Container";
import { images } from "../../../assets/images";
import { Parallax } from "react-scroll-parallax";

const TreasureData = [
  {
    src: images.treasure_1,
    dec: "Vintage & Estate Jewels",
  },
  {
    src: images.treasure_2,
    dec: "High Jewellery",
  },
  {
    src: images.treasure_3,
    dec: "Designer Jewelry",
  },
  {
    src: images.treasure_4,
    dec: "Important Gemstones",
  },
];

const TreasuresSection = () => {
  return (
    <div className="py-[3.5rem] sm:py-[6.35rem] bg-skin">
      <Container>
          <div className="flex w-full justify-center border-t border-primary relative mb-14">
            <div className="absolute top-1/2 -translate-y-1/2">
              <h2 className="text-lg sm:text-xl lg:text-3xl px-6 bg-skin whitespace-nowrap font-crimson-regular">
                TREASURES HIGHLIGHTS
              </h2>
            </div>
          </div>
          <p className="text-lg font-crimson-regular max-w-[636px] mb-12 leading-snug">
            From everyday fine jewelry and high jewelry to vintage & estate
            jewels or important gemstones. We curate the finest collections from
            independent jewelry houses and designers, connecting them with our
            reseller network and their discerning clientele.
          </p>
        <div className="grid sm:grid-cols-2 items-center gap-7">
          {TreasureData?.map((item, i) => (
            <div className="relative" key={i}>
              <Parallax
                translateY={["100px", "-60px"]}
              >
                <img
                  src={item.src}
                  alt={item.dec}
                  className="mx-auto sm:mx-0"
                />
                <p className="absolute top-1/2 -translate-y-1/2 left-1/2 whitespace-nowrap -translate-x-1/2 font-crimson-regular text-3xl text-white">
                  {item.dec}
                </p>
              </Parallax>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TreasuresSection;
