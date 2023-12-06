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
    <div
      className={`${
        sidebarOpen ? "w-[350px]" : "w-0"
      } flex h-full bd grow flex-col overflow-y-auto bg-red-400 px-2 absolute z-30 top-0 left-0`}
    >
      <nav className="flex flex-1 flex-col">
        <ul className="space-y-1">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link to={item.href}>
                <p
                  className={
                    "text-white hover:text-black hover:bg-primary group flex gap-x-3 rounded-md p-2 text-base leading-6"
                  }
                >
                  <i
                    className={
                      "text-secondary group-hover:text-black text-lg shrink-0 flex items-center justify-center"
                    }
                    aria-hidden="true"
                  />
                  {item.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Cross className="absolute right-3 top-3" />
    </div>
  );
};

export default Sidebar;
