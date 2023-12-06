import { useLocation } from "react-router-dom";

const navigation = {
  main: [
    { name: "+ 1-212-345-6789" },
    { name: "Email: team@Sophiana.com" },
    { name: "LOS ANGELES   HONG KONG " },
  ],
};

export default function Footer() {
  const location = useLocation();
  const { pathname } = location;

  console.log(pathname, "pathname");

  return (
    <>
      <footer
        className={`${
          pathname === "/about-us" ||
          pathname === "/contact-us" ||
          pathname === "/coming-soon"
            ? "hidden sm:block"
            : "block"
        } bg-skin relative`}
      >
        <div className="max-w-[662px] px-4 mx-auto py-5 sm:pt-12">
          <div className="flex items-center justify-between flex-col sm:flex-row sm:py-12 px-8 sm:border-t border-primary">
            {navigation.main.map((item) => (
              <div key={item.name}>
                <span className="text-xs sm:text-[10px] font-inter-light tracking-[2px]">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </footer>
      <div className="py-3 bg-[#DDD9D4]">
        <p className="text-center text-[10px] sm:text-sm font-inter-regular tracking-[3.75px] text-[#7E7C7C] ">
          SOPHIANA 2024
        </p>
      </div>
    </>
  );
}
