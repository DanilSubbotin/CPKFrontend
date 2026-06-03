import { NavLink } from "react-router";
import Navigation from "./Navigation";
import Logo from "/public/imgs/Logo.svg";
import { routes } from "../../router";

const Header = () => {
  return (
    <header className="w-full max-w-422 mx-auto pt-6 pb-1 h-fit bg-white font-primary flex items-center justify-between">
      <NavLink to={routes.main}>
        <img src={Logo} alt="Логотип" />
      </NavLink>
      <Navigation />
      <div className="flex flex-col items-start font-semibold text-text-gray">
        <span>+ 7 937 123 45 67</span>
        <span>info@procpk.ru</span>
      </div>
    </header>
  );
};

export default Header;
