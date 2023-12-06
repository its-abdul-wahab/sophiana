import { Container } from "../../../components/Container";
import { images } from "../../../assets/images";
import Input from "../../../components/forms/Input";
import FormCheck from "../../../components/forms/FormCheck";
import Textarea from "../../../components/forms/Textarea";
import Button from "../../../components/Button";

const TreasuresSection = () => {
  return (
    <div className="sm:py-[6.35rem] bg-skin">
      <Container className="!px-0 sm:!px-4">
        <div className="flex justify-between items-center sm:flex-row flex-col gap-[3.5rem] xl:gap-[6.875rem]">
          <div className="flex-1 ">
            <img src={images.contact} alt="contact" />
          </div>
          <form className="w-full sm:w-[40%] px-6 sm:px-0 space-y-2">
            <div className="flex gap-2">
              <Input placeholder="FIRST NAME*" />
              <Input placeholder="LAST NAME*" />
            </div>
            <Input placeholder="EMAIL ADDRESS*" />
            <Input placeholder="COMPANY" />
            <Input placeholder="LOCATION*" />
            <Input placeholder="PHONE NUMBER*" />
            <div className="border border-[#636262] p-2">
              <p className="text-[10px] mb-2 font-inter-extraLight text-primary">
                TELL US WHO YOU ARE*
              </p>
              <FormCheck type="radio" label="JEWELLER" />
              <FormCheck type="radio" label="PERSONAL SHOPPER" />
              <FormCheck type="radio" label="COLLECTORS" />
            </div>
            <Input placeholder="WHATSAPP/LINE/WECHAT:" />
            <Textarea
              name=""
              className="h-[243px]"
              placeholder="MESSAGE*  For applying, please include your website, social media if you have any."
            />
            <div className="text-center pt-12">
              <Button
                variant="outline"
                color="primary"
                className="!text-sm w-[247px] !py-1 !font-inter-medium !border-[#636262]"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default TreasuresSection;
