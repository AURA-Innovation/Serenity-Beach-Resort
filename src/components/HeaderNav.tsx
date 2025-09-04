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
    <header className="sticky top-0 z-50 w-full border-b">
      <div className="glass dark:glass-dark mx-auto max-w-[1200px] px-4 py-3 flex items-center justify-between backdrop-blur-md">
        <a href="#hero" className="flex items-center gap-3">
          <div className="rounded-md overflow-hidden bg-white/10 p-1 flex items-center justify-center">
            <img
              src="https://serenityabaco.com/wp-content/uploads/2022/05/logo-1.png"
              alt="Serenity Abaco Logo"
              className="h-9 w-auto"
              loading="eager"
            />
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                // smooth scroll through handleNavClick
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="relative text-sm font-medium text-gray-800 dark:text-gray-100 hover:text-[#007bff] transition-colors px-3 py-1 rounded-md hover:bg-white/10"
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            className="bg-[#007bff] hover:bg-[#0056b3] text-white shadow-sm"
            onClick={() => {}}
          >
            <a href="#contact">Contact Us</a>
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu" className="bg-white/5">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] glass-card">
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