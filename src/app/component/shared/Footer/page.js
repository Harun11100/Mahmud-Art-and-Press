
"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";
import { HiArrowUp } from "react-icons/hi2";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "হোম", href: "#hero" },
    { label: "সেবাসমূহ", href: "#services" },
    { label: "পোর্টফোলিও", href: "#portfolio" },
    { label: "রিভিউ", href: "#reviews" },
    { label: "যোগাযোগ", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      href: "https://facebook.com",
      label: "ফেসবুক",
    },
    {
      icon: <FaInstagram />,
      href: "https://instagram.com",
      label: "ইনস্টাগ্রাম",
    },
    {
      icon: <FaTwitter />,
      href: "https://twitter.com",
      label: "টুইটার",
    },
    {
      icon: <FaLinkedinIn />,
      href: "https://linkedin.com",
      label: "লিংকডইন",
    },
  ];

  return (
    <footer className="relative border-t border-neutral-900 bg-neutral-950 text-neutral-400">
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 md:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 items-start gap-10 border-b border-neutral-900 pb-12 md:grid-cols-12 md:gap-8">
          {/* Brand */}
          <div className="space-y-4 md:col-span-5">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-white transition-opacity hover:opacity-80"
            >
              মাহমুদ আর্ট এন্ড প্রেস
              <span className="font-light text-amber-400">
                .
              </span>
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-neutral-500">
              আধুনিক ডিজাইন, ব্যানার, পোস্টার, ভিজিটিং কার্ড
              ও প্রিমিয়াম প্রিন্টিং সেবা দিয়ে আমরা আপনার
              ব্যবসার পরিচিতি আরও শক্তিশালী করতে সাহায্য করি।
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-200">
              দ্রুত লিংক
            </h4>

            <ul className="grid grid-cols-2 gap-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4 md:col-span-3 md:flex md:flex-col md:items-end md:text-right">
            <div className="w-full">
              <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-neutral-200 md:text-right">
                আমাদের অনুসরণ করুন
              </h4>

              <div className="flex items-center gap-3 md:justify-end">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900 text-sm text-neutral-400 transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 sm:flex-row">
          <p className="text-center text-xs text-neutral-600 sm:text-left">
            &copy; {currentYear} ArtPress। সর্বস্বত্ব সংরক্ষিত।
            আধুনিক React প্রযুক্তি ব্যবহার করে তৈরি।
          </p>

          {/* Back to top */}
          <a
            href="#hero"
            aria-label="উপরে ফিরে যান"
            className="group flex items-center gap-2 text-xs font-bold tracking-wide text-neutral-500 transition-colors duration-300 hover:text-white"
          >
            <span>উপরে যান</span>

            <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 transition-transform group-hover:-translate-y-0.5">
              <HiArrowUp className="text-xs text-neutral-400 transition-colors group-hover:text-white" />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}

