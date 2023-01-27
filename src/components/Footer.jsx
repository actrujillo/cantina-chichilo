import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMailOpen, HiOutlinePhone } from "react-icons/hi";
import { HiOutlineMapPin } from "react-icons/hi2";

export default function Footer() {
  const Links = [
    {
      href: "mailto:cantinachichilo@cantinachichilo.com.ar",
      text: "Nuestro email",
      icon: <HiOutlineMailOpen size={18} />,
    },
    {
      href: "tel:4584-1263",
      text: "4584-1263",
      icon: <HiOutlinePhone size={18} />,
    },
    {
      href: "https://goo.gl/maps/KZWsSXsG7FvEUz6G7",
      text: "Camarones 1904, CABA",
      icon: <HiOutlineMapPin size={18} />,
    },
  ];

  return (
    <>
      <div className="flex h-10v bg-green text-white">
        <div className="hidden">
          <img src="" alt="" />
        </div>
        <div className="w-full flex">
          <h3 className="hidden">CONTACTO</h3>
          <div className="w-3/5 flex flex-col justify-around items-baseline pl-3 py-1">
            {Links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                className="flex text-sm sm:text-[16px]"
              >
                <span className="mr-2">{link.icon}</span>
                {link.text}
              </a>
            ))}

            {/* <a
              href="mailto:cantinachichilo@cantinachichilo.com.ar"
              target="_blank"
              className="flex text-sm "
            >
              <span>
                <HiOutlineMailOpen size={18} className="mr-2" />
              </span>
              Nuestro email
            </a>

            <a href="tel:4584-1263" className="flex text-sm">
              <HiOutlinePhone size={18} className="mr-2" />
              4584-1263
            </a>

            <a
              href="https://goo.gl/maps/KZWsSXsG7FvEUz6G7"
              target="_blank"
              className="flex text-sm"
            >
              <HiOutlineMapPin size={18} className="mr-2" />
              Camarones 1904, CABA
            </a> */}
          </div>
          <div className="w-2/5 flex justify-around items-center">
            <a
              href="https://www.facebook.com/chichilodebuenosaires"
              target="_blank"
            >
              <FaFacebookF
                size={32}
                color="#fff"
                className="bg-gray-300 rounded-full p-1"
              />
            </a>
            <a
              href="https://www.instagram.com/cantinachichilook/"
              target="_blank"
            >
              <FaInstagram
                size={32}
                color="#fff"
                className="bg-gray-300 rounded-full p-1"
              />
            </a>
            <a href="https://wa.me/+541150200152" target="_blank">
              <FaWhatsapp
                size={32}
                color="#fff"
                className="bg-gray-300 rounded-full p-1"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
