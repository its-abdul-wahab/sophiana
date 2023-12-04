import { images } from "../../../utils/images";

const BannerSection = () => {
  return (
    <div
      className="bg-cover bg-center h-[calc(100vh-5.75rem)] text-secondary text-[2.5rem] font-cormorant-medium text-center flex justify-center items-center"
      style={{ backgroundImage: `url(${images.banner})` }}
    >
      <h1 className="max-w-[506px] mx-auto ">
        {" "}
        Luxury Selling & Curating REDEFINED
      </h1>
      {/* <Button>JOIN AS DEALER</Button> */}
    </div>
  );
};

export default BannerSection;
