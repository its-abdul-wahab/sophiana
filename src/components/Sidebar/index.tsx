import { Link } from "react-router-dom";
import { Cross } from "../../assets/icons";

const navigation = [
  { name: "Dealers", href: "/" },
  { name: "Overview", href: "/" },
  { name: "Overview", href: "/" },
  { name: "Overview", href: "/" },
];

interface IProps {
  setSidebarOpen?: Function;
  sidebarOpen?: boolean;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: IProps) => {
  return (
    <>
      <div
        className={`${
          sidebarOpen ? "block" : "hidden"
        } absolute h-screen bg-black/70 z-30 top-0 left-0 w-full`}
      ></div>
      <div
        className={`${
          sidebarOpen
            ? "w-[350px] sm:w-[620px] md:w-[750px]"
            : "w-0 overflow-hidden"
        } flex h-full bd grow flex-col overflow-y-auto bg-white absolute z-40 top-0 left-0 duration-300 pb-5`}
      >
        <nav className="flex flex-1 flex-col">
          <h1 className="text-black mt-16 sm:mt-[109px] ml-11 sm:ml-[93px] text-lg sm:text-[25px] font-inter-regular">
            HOME
          </h1>
          <div className="max-w-[300px] sm:max-w-[650px] mt-7 pl-6 border-t border-borderColor">
            <h2 className="text-[#030303] font-cormorant-garamond text-2xl sm:text-3xl italic pt-8">
              Dealers
            </h2>
            <ul className="ml-16">
              <li className="text-black mt-8 text-[25px] font-inter-regular cursor-pointer">
                PARTNERSHIP PROGRAM
              </li>
              <li className="text-black mt-5 text-[25px] font-inter-regular italic">
                SIGN UP NOW
              </li>
            </ul>

            <h2 className="text-[#030303] font-cormorant-garamond text-3xl italic pt-11">
              Personal Shoppers
            </h2>
            <ul className=" ml-16">
              <li className="text-black  mt-8 text-[25px] font-inter-regular">
                PRODUCT LISTINGS
              </li>
              <li className="text-black mt-5 text-[25px] font-inter-regular italic">
                GET ACCESS
              </li>
            </ul>
          </div>
          <div className="max-w-[650px] mt-7 pl-7 border-t border-borderColor">
            <h2 className="text-[#030303] font-cormorant-garamond text-3xl italic pt-7">
              Concierge Area
            </h2>
            <ul className="ml-16">
              <li className="text-black mt-8 text-[25px] font-inter-regular">
                PERSONAL SHOPPER SERVICE
              </li>
              <li className="text-black mt-5 text-[25px] font-inter-regular">
                ABOUT SOPHIANA
              </li>
              <li className="text-black mt-5 text-[25px] font-inter-regular">
                CONTACT US
              </li>
            </ul>
          </div>
        </nav>
        <div
          className="absolute right-10 sm:right-[90px] top-8 sm:top-[62px]"
          onClick={() => {
            if (setSidebarOpen) {
              setSidebarOpen(false);
            }
          }}
        >
          <Cross className="" />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
