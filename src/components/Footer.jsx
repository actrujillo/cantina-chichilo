import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMailOpen, HiOutlinePhone } from "react-icons/hi";
import { HiOutlineMapPin } from "react-icons/hi2";

export default function Footer() {
  const Links = [
    {
      href: "mailto:cantinachichilo@cantinachichilo.com.ar",
      text: "Nuestro email",
      icon: <HiOutlineMailOpen />,
    },
    {
      href: "tel:4584-1263",
      text: "4584-1263",
      icon: <HiOutlinePhone />,
    },
    {
      href: "https://goo.gl/maps/KZWsSXsG7FvEUz6G7",
      text: "Camarones 1904, CABA",
      icon: <HiOutlineMapPin />,
    },
  ];

  const Redes = [
    {
      href: "https://www.facebook.com/chichilodebuenosaires",
      icon: <FaFacebookF />,
    },
    {
      href: "https://www.instagram.com/cantinachichilook/",
      icon: <FaInstagram />,
    },
    {
      href: "https://wa.me/+541150200152",
      icon: <FaWhatsapp />,
    },
  ];

  return (
    <>
      <div className="flex h-10v bg-green text-white">
        <div className="hidden xl:flex xl:w-1/2">
          <img src="" alt="" />
        </div>
        <div className="w-full flex lg:justify-between xl:w-1/2 xl:justify-evenly">
          <h3 className="hidden items-center xl:flex">CONTACTO</h3>
          <div className="w-3/5 flex flex-col justify-around items-baseline pl-3 py-1 xl:w-2/5">
            {Links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                className="flex uppercase text-sm sm:text-[18px] sm:tracking-wider md:text-[16px] xl:text-sm"
              >
                <span className="mr-2 text-xl">{link.icon}</span>
                {link.text}
              </a>
            ))}
          </div>
          <div className="w-2/5 flex justify-around items-center lg:w-1/4">
            {Redes.map((red, index) => (
              <a
                key={index}
                href={red.href}
                target="_blank"
                className="bg-gray-300 rounded-full p-1 text-2xl sm:p-1.5 sm:text-3xl lg:text-2xl"
              >
                {red.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
