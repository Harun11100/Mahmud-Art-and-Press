
"use client";

import { useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("সব");

  const categories = [
    "সব",
    "ব্যানার",
    "প্রিন্ট",
    "ব্র্যান্ডিং",
  ];

  const projects = [
    {
      title: "কর্পোরেট ইভেন্ট ব্যানার ডিজাইন",
      category: "ব্যানার",
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    },
    {
      title: "প্রিমিয়াম ভিজিটিং কার্ড ডিজাইন",
      category: "ব্র্যান্ডিং",
      img: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?w=800",
    },
    {
      title: "আধুনিক পোস্টার প্রিন্ট ডিজাইন",
      category: "প্রিন্ট",
      img: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=800",
    },
    {
      title: "কর্পোরেট ব্র্যান্ড পরিচিতি",
      category: "ব্র্যান্ডিং",
      img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800",
    },
    {
      title: "প্রিমিয়াম প্যাকেজিং প্রিন্ট",
      category: "প্রিন্ট",
      img: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?w=800",
    },
    {
      title: "শপ ব্যানার ডিজাইন",
      category: "ব্যানার",
      img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800",
    },
  ];

  // Filtering Logic
  const filteredProjects =
    activeFilter === "সব"
      ? projects
      : projects.filter(
          (p) => p.category === activeFilter
        );

  return (
    <section
      id="portfolio"
      className="relative bg-neutral-950 py-24 text-white sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Heading */}
        <div className="mb-16 flex flex-col items-center space-y-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            আমাদের কাজ
          </span>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            নির্বাচিত ডিজাইন ও প্রিন্ট কাজ
          </h2>

          <p className="max-w-md text-sm text-neutral-400 sm:text-base">
            আমাদের প্রিমিয়াম ডিজাইন, লাইটিং সাইনবোর্ড, ব্যানার, পোস্টার
            ও ব্র্যান্ডিং কাজগুলো দেখুন।
          </p>
        </div>

        {/* Filter Menu */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-2 sm:mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                setActiveFilter(category)
              }
              className={`rounded-full border px-5 py-2.5 text-xs font-semibold tracking-wide transition-all duration-300 ${
                activeFilter === category
                  ? "border-white bg-white text-black shadow-lg shadow-white/5"
                  : "border-neutral-800/80 bg-neutral-900 text-neutral-400 hover:border-neutral-700 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map(
            (project, index) => (
              <div
                key={index}
                className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-3xl bg-neutral-900 ring-1 ring-white/10"
              >
                {/* Image */}
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-full w-full object-cover brightness-90 transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-75"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 flex translate-y-4 items-end justify-between gap-4 p-6 transition-transform duration-500 ease-out group-hover:translate-y-0 sm:p-8">
                  <div className="space-y-1.5">
                    <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-400 ring-1 ring-white/10 backdrop-blur-md">
                      {project.category}
                    </span>

                    <h3 className="text-xl font-bold leading-tight tracking-tight text-white">
                      {project.title}
                    </h3>
                  </div>

                  {/* Action Icon */}
                  <div className="flex h-10 w-10 shrink-0 -translate-x-2 items-center justify-center rounded-full bg-white text-black opacity-0 shadow-lg transition-all duration-500 delay-75 group-hover:translate-x-0 group-hover:opacity-100">
                    <HiArrowUpRight className="text-sm" />
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

