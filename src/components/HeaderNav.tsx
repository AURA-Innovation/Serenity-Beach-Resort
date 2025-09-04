"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import React from "react";

const NAV_LINKS = [
  { label: "The Resort", href: "#resort" },
  { label: "About Us", href: "#about" },
  { label: "Activities", href: "#activities" },
  { label: "Properties", href: "#properties" },
  { label: "Contact", href: "#contact" },
];

const HeaderNav: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="mx-auto max-w-[1200px] px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <img
            src="https://serenityabaco.com/wp-content/uploads/2022/05/logo-1.png"
            alt="Serenity Abaco Logo"
            className="h-9 w-auto"
            loading="eager"
          />
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-[#007bff] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="bg-[#007bff] hover:bg-[#0056b3]">
            <a href="#contact">Contact Us</a>
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <img
                    src="https://serenityabaco.com/wp-content/uploads/2022/05/logo-1.png"
                    alt="Serenity Abaco Logo"
                    className="h-8 w-auto"
                  />
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 grid gap-3">
                {NAV_LINKS.map((link) => (
                  <Button
                    key={link.href}
                    variant="ghost"
                    className="justify-start text-base"
                    onClick={() => handleNavClick(link.href)}
                  >
                    {link.label}
                  </Button>
                ))}
                <Button
                  className="mt-2 bg-[#007bff] hover:bg-[#0056b3]"
                  onClick={() => handleNavClick("#contact")}
                >
                  Contact Us
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;