"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`header-capsule fixed left-1/2 top-6 z-50 w-full max-w-[1400px] -translate-x-1/2 transition-all duration-300 ${
        scrolled ? "header-capsule--scrolled" : ""
      }`}
    >
      <div className="flex h-20 items-center justify-between gap-6 px-10">
        <Link
          href="/"
          className="header-logo flex flex-shrink-0 items-center"
          aria-label="Wizard Web Development home"
        >
          <Image
            src="/images/wizardLogo.png"
            alt="Wizard Web Development"
            width={140}
            height={36}
            className="h-[60px] w-auto"
            priority
          />
        </Link>

        <nav
          className="header-nav flex flex-1 items-center justify-end gap-1"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="header-nav-link px-4 py-2 text-[18px] font-medium tracking-[0.03em] text-white/75 transition-colors hover:text-white/95"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-shrink-0 items-center">
          <Link
            href="#contact"
            className="header-cta inline-flex h-9 items-center justify-center rounded-[12px] px-4 text-[12px] font-medium uppercase tracking-widest text-white transition-all md:h-10 md:px-5"
          >
            Start Project
          </Link>
        </div>
      </div>
    </header>
  );
}
