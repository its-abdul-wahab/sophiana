import { Helmet } from "react-helmet";
import BannerSection from "./components/BannersSection";
import ContactInfoSection from "./components/ContactInfoSection";

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sophiana | Contact-Us</title>
        <link rel="canonical" href="" />
      </Helmet>
      <BannerSection />
      <ContactInfoSection />
    </>
  );
};

export default ContactUs;
