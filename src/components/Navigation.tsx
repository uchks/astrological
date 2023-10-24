import { IconHome2 } from "@tabler/icons-react";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const navLinks = [
    {
      icon: IconHome2,
      href: "/",
    },
    {
      name: "Projects",
      href: "/projects",
    },
  ];

  return (
    <div className="grid md:flex justify-between">
      <div className="flex gap-1">
        {navLinks.map((link, index) => (
          <NavLink key={index} link={link} currentPath={currentPath} />
        ))}
      </div>
    </div>
  );
};

const NavLink = ({ link, currentPath }) => {
  const isActive = currentPath === link.href;

  return (
    <a
      href={link.href}
      className={`flex items-center text-gray-10 hover:text-gray-12 hover:bg-gray-4 p-1 pr-2 pl-2 rounded-lg transition-colors duration-200 ${
        isActive ? "bg-gray-4 text-gray-12" : ""
      }`}
      style={{ transition: "animate-fade" }}
    >
      {link.icon && <link.icon />}
      {link.name}
    </a>
  );
};

export default Navigation;
