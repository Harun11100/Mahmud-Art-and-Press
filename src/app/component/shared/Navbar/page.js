"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const navLinks = [
    { label: "হোম", href: "#hero" },
    { label: "সেবাসমূহ", href: "#services" },
    { label: "পোর্টফোলিও", href: "#portfolio" },
    { label: "রিভিউ", href: "#reviews" },
    { label: "ডিজিটাল সেবা", href: "#digital-services" },
    { label: "যোগাযোগ", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-gray-100 bg-white/80 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-white/40 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 md:px-12">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-3 font-bold tracking-tight text-black transition-opacity hover:opacity-80"
        >
          <Image
            src="/logo.png"
            alt="মাহমুদ আর্ট এন্ড প্রেস লোগো"
            width={34}
            height={34}
            className="object-contain sm:w-[40px] sm:h-[40px]"
          />

          <span className="text-sm sm:text-xl md:text-2xl leading-tight whitespace-nowrap">
            মাহমুদ আর্ট এন্ড প্রেস
            <span className="font-light text-neutral-400">.</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-6 lg:gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="relative py-2 text-sm font-medium text-neutral-600 transition-colors hover:text-black after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex  text-white">
          <a
            href="#contact"
            className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-neutral-800"
          >
            কোট নিন
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-neutral-800 md:hidden"
          aria-label="menu"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-x-0 top-16 sm:top-20 md:hidden bg-white border-b border-neutral-100 shadow-xl transition-all duration-300 ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <div className="px-5 py-5 flex flex-col gap-4">

          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 text-base font-medium text-neutral-700 border-b border-neutral-100 hover:text-black"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 w-full rounded-xl bg-black py-3 text-center text-sm font-medium text-white"
          >
            কোট নিন
          </a>
        </div>
      </div>
    </header>
  );
}