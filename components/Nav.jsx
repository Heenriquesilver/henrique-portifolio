"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Início",
    path: "/",
  },
  {
    name: "serviços",
    path: "/services",
  },
  {
    name: "Resumo",
    path: "/resume",
  },
  {
    name: "Experiência",
    path: "/work",
  },
  {
    name: "contato",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname &&
              "text-accent-hover border-b-2 border-accent-hover"
            } capitalize font-medium hover:text-accent-hover transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
