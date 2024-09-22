"use client";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";

import Link from "next/link";

import Nav from "./Nav";
import MobileNav from "./MobileNav";
import FullScreen from "./FullScreen";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="py-8 xl:py12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}

        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Henrique<span className="text-accent-hover">Dev</span>
          </h1>
        </Link>

        {/* desktop nav e hire button*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Contrate-me</Button>
          </Link>
          {/* <Switch onCheckedChange={() => setTheme("light")} /> */}
          <FullScreen />
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
