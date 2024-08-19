import Link from "next/link";

import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/Heenriquesilver",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/luiz-henrique-59a09613b/",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/heenriquesilver",
  },
  {
    icon: <FaWhatsapp />,
    path: "https://wa.me/5581987482058?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20seus%20serviços%20de%20tecnólogia.",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            target="_blank"
            key={index}
            href={item.path}
            className={iconStyles}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
