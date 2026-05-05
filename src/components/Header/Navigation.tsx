import { NavLink } from "react-router";
import { routes } from "../../router";

const Navigation = () => {
  const nav = [
    { name: "Услуги", path: routes.services },
    { name: "О компании", path: routes.about },
    { name: "Бистрикс 24", path: routes.bitrix },
    { name: "BPMsoft", path: routes.bpmSoft },
  ];

  return (
    <nav className="flex gap-30 items-center">
      {nav.map((item) => (
        <NavLink
          to={item.path}
          key={item.name}
          className="text-text-gray cursor-pointer"
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
