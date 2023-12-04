import { Link } from "react-router-dom";
import { Container } from "../Container";

const LeftNavigation = [
  {
    name: "Product Listings",
    href: "",
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
  return (
    <>
      <div className="h-6 bg-skin"></div>
      <nav className="w-full bg-primary shadow sticky top-0">
        <Container size="md">
          <div className="flex items-center justify-between md:py-5">
            <ul className="items-center justify-center md:flex md:space-x-6">
              {LeftNavigation?.map((item, i) => (
                <Link to={item.href} key={i}>
                  <li className="mb-5 text-secondary text-sm font-crimson-regular md:mb-0">
                    {item.name}
                  </li>
                </Link>
              ))}
            </ul>
            <Link to="/">
              <h2 className="text-xl tracking-[5px] font-inter-light text-secondary">
                SOPHIANA
              </h2>
            </Link>
            <ul className="items-center justify-center md:flex md:space-x-6">
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
    </>
  );
};
export default Header;
