import { Button } from "../../../components/Button";
import { images } from "../../../assets/images";
import { Link } from "react-router-dom";

const BannerSection = () => {
  return (
    <div
      className="bg-cover bg-center h-[calc(100vh-5.75rem)] bg-fixed text-secondary text-[2.5rem] font-cormorant-medium text-center flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${images.banner})` }}
    >
      <h1 className="max-w-[506px] mx-auto mb-2">
        Luxury Selling & Curating REDEFINED
      </h1>
      <Link to="contact-us">
        <Button className="w-[216px]">JOIN AS DEALER</Button>
      </Link>
      <Button className="mt-[18px] w-[216px]" variant="outline">
        JOIN AS SHOPPER
      </Button>
    </div>
  );
};

export default BannerSection;
