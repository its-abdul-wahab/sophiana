import { Link } from "react-router-dom";
import { Container } from "../Container";
import { Menu } from "../../assets/icons";
import Sidebar from "../Sidebar";
import { useState } from "react";
import { scrollToTop } from "../../utils";

const LeftNavigation = [
  {
    name: "Product Listings",
    href: "/coming-soon",
  },
  {
    name: "Dealer / Personal Shopper Sign-up",
    href: "/contact-us",
  },
];

const RightNavigation = [
  {
    name: "About SOPHIANA",
    href: "/about-us",
  },
  {
    name: "Personal Shopper Service",
    href: "/contact-us",
  },
  {
    name: "Contact us",
    href: "/contact-us",
  },
];

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="h-3.5 sm:h-6 bg-skin"></div>
      <nav className="w-full bg-primary z-30 shadow sticky top-0">
        <Container size="md">
          <div className="flex items-center justify-center relative lg:justify-between py-3 sm:py-5">
            <div
              className="lg:hidden absolute left-0"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu />
            </div>
            <ul className="items-center justify-center space-x-6 hidden lg:flex">
              {LeftNavigation?.map((item, i) => (
                <Link to={item.href} key={i}>
                  <li className="mb-5 text-secondary text-sm font-crimson-regular md:mb-0">
                    {item.name}
                  </li>
                </Link>
              ))}
            </ul>
            <Link to="/" onClick={scrollToTop}>
              <h2 className="text-base sm:text-xl tracking-[5px] font-inter-light text-secondary">
                SOPHIANA
              </h2>
            </Link>
            <ul className="items-center justify-center space-x-6 hidden lg:flex">
              {RightNavigation?.map((item, i) => (
                <Link to={item.href} key={i}>
                  <li className="mb-5 text-secondary text-sm font-crimson-regular md:mb-0">
                    {i === 0 ? (
                      <>
                        About<span className="italic"> SOPHIANA</span>
                      </>
                    ) : (
                      item.name
                    )}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </Container>
      </nav>

      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </>
  );
};
export default Header;
