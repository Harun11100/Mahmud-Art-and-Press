
"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function Hero() {
  const stats = [
    { value: "5000+", label: "সম্পন্ন ডিজাইন" },
    { value: "4900+", label: "সন্তুষ্ট গ্রাহক" },
    { value: "24/7", label: "দ্রুত সাপোর্ট" },
  ];

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden bg-neutral-950 text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-[500px] w-[500px] translate-x-1/2 translate-y-1/2 rounded-full bg-blue-500/5 blur-[150px]" />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 md:px-12 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Content */}
          <div className="space-y-8 lg:col-span-7">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900 px-4 py-2 text-xs font-medium tracking-wide text-neutral-300 backdrop-blur-md">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
              পেশাদার আর্ট ও ডিজিটাল প্রিন্টিং সেবা
            </span>

            {/* Heading */}
            <h1 className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
              আকর্ষণীয় লাইটিং সাইনবোর্ড, ব্যানার,
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200 bg-clip-text text-transparent">
                {" "}পোস্টার ও প্রিন্টিং{" "}
              </span>
              সল্যুশন
            </h1>

            {/* Description */}
           <p className="max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg">
            আমরা ব্যবসা প্রতিষ্ঠান ও বিভিন্ন অনুষ্ঠানের জন্য প্রিমিয়াম মানের 
            আকর্ষণীয় লাইটিং সাইনবোর্ড, ব্যানার, পোস্টার, ভিজিটিং কার্ড, ফ্লেক্স, 
            ব্র্যান্ডিং ম্যাটেরিয়াল এবং কাস্টম ডিজাইন ও প্রিন্টিং সেবা প্রদান করি।
          </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 ">
              <Link
                href="#portfolio"
                className="group inline-flex items-center gap-2  rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-100 hover:shadow-xl hover:shadow-white/5 active:translate-y-0"
              >
                <span className="text-sm font-medium text-neutral-900 transition-colors group-hover:text-amber-500">
                     আমাদের কাজ দেখুন
                </span>
      
      

                <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900/50 px-7 py-4 text-sm font-semibold text-neutral-300 backdrop-blur-sm transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-900 hover:text-white"
              >
                ফ্রি কোট নিন
              </Link>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-neutral-900 pt-2" />

            {/* Stats */}
            <div className="grid max-w-md grid-cols-3 gap-4 sm:gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {stat.value}
                  </h3>

                  <p className="text-xs font-medium text-neutral-500 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Images */}
          <div className="relative lg:col-span-5 lg:pl-4">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {/* Left Column */}
              <div className="space-y-4 sm:space-y-6">
                <div className="group relative aspect-[3/4] overflow-hidden rounded-3xl bg-neutral-900 ring-1 ring-white/10">
                  <img
                    src="/lighting-signboard.png"
                    alt="লাইটিং সাইনবোর্ড ডিজাইন"
                    className="h-full w-full object-cover brightness-95 transition-all duration-700 group-hover:scale-105 group-hover:brightness-100"
                  />
                </div>

                <div className="group relative aspect-square overflow-hidden rounded-3xl bg-neutral-900 ring-1 ring-white/10">
                  <img
                    src="/poster-print.jpeg"
                    alt="ব্যানার ডিজাইন"
                    className="h-full w-full object-cover brightness-95 transition-all duration-700 group-hover:scale-105 group-hover:brightness-100"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4 pt-8 sm:space-y-6 sm:pt-12">
                <div className="group relative aspect-square overflow-hidden rounded-3xl bg-neutral-900 ring-1 ring-white/10">
                  <img
                    src="/image4.jpeg"
                    alt="ভিজিটিং কার্ড ডিজাইন"
                    className="h-full w-full object-cover brightness-95 transition-all duration-700 group-hover:scale-105 group-hover:brightness-100"
                  />
                </div>

                <div className="group relative aspect-[3/4] overflow-hidden rounded-3xl bg-neutral-900 ring-1 ring-white/10">
                  <img
                    src="/image5.jpeg"
                    alt="প্রিমিয়াম প্রিন্টিং সেবা"
                    className="h-full w-full object-cover brightness-95 transition-all duration-700 group-hover:scale-105 group-hover:brightness-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

