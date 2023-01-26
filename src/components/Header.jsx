import { Link } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import logo from "../assets/statics/logo.png";

export default function Header() {
  const [menu, setMenu] = useState(false);

  const Links = [
    { name: "Inicio", link: "/" },
    { name: "Nosotros", link: "/nosotros" },
    { name: "Menu", link: "/menu" },
    { name: "Reservas", link: "/reservas" },
    { name: "Horarios", link: "/horarios" },
  ];

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className="shadow-md w-full fixed top-[-1px] left-0">
        <div className="md:flex items-center justify-between bg-red py-4 md:px-10 px-2">
          <div className="flex cursor-pointer ">
            {/* hay que cambiar la fuente, usar la nuestra */}
            <Link to="/" className="">
              <img src={logo} alt="logo cantina chichilo" className="w-56" />
            </Link>
          </div>
          <div
            className="absolute right-8 top-7 cursor-pointer md:hidden bg-red"
            onClick={handleMenu}
          >
            {menu ? (
              <CgClose size={32} color="#7f1421" />
            ) : (
              <GiHamburgerMenu size={32} color="#7f1421" />
            )}
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-0 absolute md:static bg-red md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              menu ? "top-16" : "top-[-490px]"
            }`}
          >
            {Links.map((link, index) => (
              <li
                key={index}
                className=" md:ml-8 text-xl md:my-0 my-7"
                onClick={handleMenu}
              >
                <Link
                  to={link.link}
                  className="text-white hover:text-grana duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
