
"use client";

import {
  FaPaintBrush,
  FaPrint,
  FaIdCard,
  FaBullhorn,
  FaPalette,
  FaImages,
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi2";

export default function Services() {
  const services = [
    {
      icon: <FaPaintBrush />,
      title: "ব্যানার ডিজাইন",
      desc: "ডিজিটাল ডিসপ্লে, দোকানের সাইনবোর্ড এবং বড় কর্পোরেট ইভেন্টের জন্য মানসম্মত ও আকর্ষণীয় কাস্টম ব্যানার ডিজাইন।",
      isFeatured: true,
    },
    {
      icon: <FaPrint />,
      title: "পোস্টার প্রিন্টিং",
      desc: "উচ্চমানের কাগজ ও ম্যাট/গ্লসি ফিনিশে উন্নত মানের পোস্টার প্রিন্টিং সেবা।",
      isFeatured: false,
    },
    {
      icon: <FaIdCard />,
      title: "ভিজিটিং কার্ড",
      desc: "প্রিমিয়াম মানের বিজনেস কার্ড ডিজাইন ও প্রিন্টিং, যা আপনার ব্র্যান্ডের পরিচিতি আরও পেশাদার করে তোলে।",
      isFeatured: false,
    },
    {
      icon: <FaBullhorn />,
      title: "মার্কেটিং ম্যাটেরিয়াল",
      desc: "ব্রোশিওর, ফ্লায়ার, ইভেন্ট প্রচারণা সামগ্রী এবং বিভিন্ন প্রিন্ট মিডিয়া ডিজাইন ও প্রস্তুত।",
      isFeatured: false,
    },
    {
      icon: <FaImages />,
      title: "কাস্টম ব্র্যান্ডিং",
      desc: "সম্পূর্ণ ব্যবসায়িক ব্র্যান্ড পরিচিতি তৈরির সেবা, যার মধ্যে রঙের গাইডলাইন, ডিজিটাল অ্যাসেট ও কাস্টম ডিজাইন অন্তর্ভুক্ত।",
      isFeatured: true,
    },
    {
      icon: <FaPalette />,
      title: "ক্রিয়েটিভ ডিজাইন সল্যুশন",
      desc: "আপনার ব্যবসা বা ব্যক্তিগত চাহিদা অনুযায়ী সম্পূর্ণ নতুন ও ইউনিক গ্রাফিক ডিজাইন সমাধান।",
      isFeatured: false,
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-24 sm:py-32"
    >
      {/* Structural Accent Element */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-[300px] w-[300px] rounded-full bg-amber-400/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        {/* Header Block */}
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end sm:mb-24">
          <div className="max-w-xl space-y-4">
            <span className="block text-xs font-bold uppercase tracking-widest text-neutral-400">
              আমরা যা সবচেয়ে ভালো করি
            </span>

            <h2 className="text-4xl font-black tracking-tight text-neutral-900 sm:text-5xl">
              প্রিমিয়াম ডিজাইন ও ডিজিটাল প্রিন্টিং সেবা
            </h2>
          </div>

          <p className="max-w-sm text-base font-medium leading-relaxed text-neutral-500 sm:text-lg">
            আপনার ব্র্যান্ডকে দিন আলাদা পরিচয়।
            আমরা দিচ্ছি আধুনিক ডিজাইন, উন্নত মানের প্রিন্টিং এবং দ্রুত ডেলিভারি সুবিধা।
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative flex flex-col justify-between rounded-3xl border border-neutral-100 bg-neutral-50/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-neutral-200/50 sm:p-10 ${
                service.isFeatured
                  ? "lg:col-span-2"
                  : "lg:col-span-1"
              }`}
            >
              <div>
                {/* Icon */}
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-950 text-xl text-amber-400 shadow-md shadow-neutral-950/10 transition-colors duration-300 group-hover:bg-amber-400 group-hover:text-black">
                  {service.icon}
                </div>

                {/* Service Details */}
                <h3 className="mb-4 text-2xl font-bold tracking-tight text-neutral-900">
                  {service.title}
                </h3>

                <p className="max-w-2xl text-sm leading-relaxed text-neutral-500 sm:text-base">
                  {service.desc}
                </p>
              </div>

              {/* Bottom CTA */}
              <div className="mt-auto flex items-center gap-2 pt-8 text-sm font-bold text-neutral-900 transition-colors group-hover:text-amber-500">
                <span>বিস্তারিত দেখুন</span>

                <HiArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

