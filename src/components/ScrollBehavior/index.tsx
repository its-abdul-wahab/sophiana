import { Arrow } from "../../assets/icons";
import { useEffect, useState } from "react";

const ScrollBehavior = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 800) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div
      onClick={scrollToTop}
      className={`${
        isVisible ? "visible" : "hidden"
      } h-11 w-11 cursor-pointer hover:bg-primary/90 bg-primary rounded-full fixed bottom-24 z-20 right-10 flex justify-center items-center`}
    >
      <Arrow />
    </div>
  );
};

export default ScrollBehavior;
