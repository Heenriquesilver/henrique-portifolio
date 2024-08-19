"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "Início",
    path: "/",
  },
  {
    name: "Resumo",
    path: "/resume",
  },
  {
    name: "serviços",
    path: "/services",
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

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className=" flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent-hover" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">Henrique</h1>
            <span className="text-accent-hover">Dev</span>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname &&
                  "text-accent-hover border-b-2 border-accent-hover"
                } text-xl capitalize hover:text-accent-hover transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
