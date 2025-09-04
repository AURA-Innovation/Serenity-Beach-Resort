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
import { CONTACT } from "@/config/contact";

const NAV_LINKS = [
  { label: "The Resort", href: "#resort" },
  { label: "About Us", href: "#about" },
  { label: "Activities", href: "#activities" },
  { label: "Properties", href: "#properties" },
  { label: "Contact", href: "#contact" },
];

const HeaderNav: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [scrollY, setScrollY] = React.useState(0);
  const [activeId, setActiveId] = React.useState<string>("");
  const isMobile = useIsMobile();

  const handleNavClick = (href: string, e?: React.MouseEvent) => {
    setOpen(false);
    e?.preventDefault();
    if (isMobile && href === "#contact") {
      window.location.href = `tel:${CONTACT.phone}`;
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 10);
      setScrollY(y);
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
        if (visible[0]?.target?.id) setActiveId(`#${visible[0].target.id}`);
      },
      { root: null, rootMargin: "0px 0px -40% 0px", threshold: [0.25, 0.5, 0.75] }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const opacity = Math.min(0.95, scrollY / 300);
  const headerBg = scrolled
    ? `bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/65 shadow-sm border-b`
    : "bg-transparent";
  const dynamicStyle = scrolled ? { backgroundColor: `rgba(255, 255, 255, ${opacity})` } : {};

  const linkBase = scrolled
    ? "text-gray-700 hover:text-[#007bff]"
    : "text-white/90 hover:text-white";

  const brandTextClass = scrolled ? "text-gray-800" : "text-white/95";

  return (
    <header className={`fixed top-0 z-50 w-full transition-colors ${headerBg}`}>
      <div 
        className="mx-auto max-w-[1200px] px-4 py-2.5 flex items-center justify-between transition-all duration-300"
        style={dynamicStyle}
      >
        <a href="#hero" className="flex items-center gap-2" aria-label="Go to top">
          <img
            src="https://serenityabaco.com/wp-content/uploads/2022/05/logo-1.png"
            alt=""
            aria-hidden="true"
            className="h-8 w-auto"
            loading="eager"
          />
            <span
            className={`hidden sm:inline text-sm font-semibold tracking-[0.16em] ${brandTextClass}`}
            style={{ fontVariantCaps: "small-caps", fontVariantLigatures: "discretionary-ligatures" } as React.CSSProperties}
          >
            Serenity Beach
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(link.href, e)}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm font-medium transition-colors nav-underline ${linkBase} ${isActive ? "text-[#007bff]" : ""} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007bff] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded`}
              >
                {link.label}
              </a>
            );
          })}
          <NavCallButton />
          <Button
            asChild={!isMobile}
            className={`${scrolled ? "" : "bg-white/10 hover:bg-white/20 border-white/30 text-white"} bg-[#007bff] hover:bg-[#0056b3] btn-lux btn-gold-hover`}
          >
            {isMobile ? (
              <a href={`tel:${CONTACT.phone}`}>Call Us</a>
            ) : (
              <a href="#contact" onClick={(e) => handleNavClick("#contact", e)}>Contact Us</a>
            )}
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
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
                    alt=""
                    aria-hidden="true"
                    className="h-8 w-auto"
                  />
                  <span className="text-sm font-semibold tracking-[0.16em]" style={{ fontVariantCaps: "small-caps" } as React.CSSProperties}>
                    Serenity Beach
                  </span>
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 grid gap-3">
                {NAV_LINKS.map((link) => (
                  <Button
                    key={link.href}
                    variant={activeId === link.href ? "secondary" : "ghost"}
                    className="justify-start text-base"
                    onClick={(e) => handleNavClick(link.href, e as any)}
                  >
                    {link.label}
                  </Button>
                ))}
                <NavCallButton />
                <Button
                  className="mt-2 bg-[#007bff] hover:bg-[#0056b3] btn-lux btn-gold-hover"
                  onClick={(e) => handleNavClick("#contact", e as any)}
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