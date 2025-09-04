"use client";

import React from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import NavCallButton from "@/components/NavCallButton";

const NAV_LINKS = [
  { label: "The Resort", href: "#resort" },
  { label: "About Us", href: "#about" },
  { label: "Activities", href: "#activities" },
  { label: "Properties", href: "#properties" },
  { label: "Contact", href: "#contact" },
];

const PHONE = "4067506135";

const HeaderNav: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [activeId, setActiveId] = React.useState<string>("");
  const isMobile = useIsMobile();

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (isMobile && href === "#contact") {
      window.location.href = `tel:${PHONE}`;
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href).join(",");
    const sections = Array.from(document.querySelectorAll<HTMLElement>(ids));
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveId(`#${visible[0].target.id}`);
        }
      },
      { root: null, rootMargin: "0px 0px -40% 0px", threshold: [0.25, 0.5, 0.75] }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const headerBg = scrolled
    ? "bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/65 shadow-sm border-b"
    : "bg-transparent";

  const linkBase =
    scrolled
      ? "text-gray-700 hover:text-[#007bff]"
      : "text-white/90 hover:text-white";

  return (
    <header className={`fixed top-0 z-50 w-full transition-colors ${headerBg}`}>
      <div className="mx-auto max-w-[1200px] px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2" aria-label="Go to top">
          <img
            src="https://serenityabaco.com/wp-content/uploads/2022/05/logo-1.png"
            alt="Serenity Abaco Logo"
            className="h-9 w-auto"
            loading="eager"
          />
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.href;
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium transition-colors ${linkBase} ${isActive ? "text-[#007bff]" : ""}`}
              >
                {link.label}
              </button>
            );
          })}
          {/* Add compact nav call button */}
          <NavCallButton />
          <Button
            asChild={!isMobile}
            className={`${scrolled ? "" : "bg-white/10 hover:bg-white/20 border-white/30 text-white"} bg-[#007bff] hover:bg-[#0056b3]`}
          >
            {isMobile ? (
              <a href={`tel:${PHONE}`}>Call Us</a>
            ) : (
              <a href="#contact">Contact Us</a>
            )}
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant={scrolled ? "outline" : "outline"}
                size="icon"
                aria-label="Open menu"
                className={scrolled ? "" : "border-white/40 text-white"}
              >
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
                    variant={activeId === link.href ? "secondary" : "ghost"}
                    className="justify-start text-base"
                    onClick={() => handleNavClick(link.href)}
                  >
                    {link.label}
                  </Button>
                ))}
                {/* Mobile call trigger inside the sheet */}
                <NavCallButton />
                <Button
                  className="mt-2 bg-[#007bff] hover:bg-[#0056b3]"
                  onClick={() => handleNavClick("#contact")}
                >
                  {isMobile ? "Call Us" : "Contact Us"}
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