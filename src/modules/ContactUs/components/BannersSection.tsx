import { Container } from "../../../components/Container";

const BannersSection = () => {
  return (
    <>
      <Container size="md" className="pb-12 pt-7 !px-6 sm:py-[3.75rem]">
        <div className="!max-w-[700px]">
          <h1 className="text-xl sm:text-3xl font-crimson-semibold mb-6">
            Get in Touch.
          </h1>
          <p className="text-base sm:text-xl font-crimson-regular">
            Whether you're a dealer seeking a vibrant community or a personal
            shopper craving a more curated, digital shopping experience for your
            clients, our network is the ultimate spot for a good time. We're all
            about making jewel selling and curating a blast—blending digital
            delights, human connections, and unique finds.
            <br />
            <br />
            Whether you wish to apply or request Personal Shopper Service,
            connect with us now and let's turn this into a rewarding journey
            you'll love❤️
          </p>
        </div>
      </Container>
      <div className="flex w-full justify-center border-t border-[#8E8D8D] relative mb-10 sm:mb-20">
        <div className="absolute top-1/2 -translate-y-1/2">
          <h2 className="text-lg sm:text-xl lg:text-2xl px-6 bg-white whitespace-nowrap italic font-crimson-regular">
            Please fill the form below
          </h2>
        </div>
      </div>
    </>
  );
};

export default BannersSection;
