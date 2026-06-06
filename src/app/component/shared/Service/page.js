
"use client";

import {
  FaPaintBrush,
  FaPrint,
  FaIdCard,
  FaBullhorn,
  FaPalette,
  FaImages,
  FaHeart,
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
      title: "পোস্টার প্রিন্টিং সেবা",
      desc: "আপনার প্রচার-প্রচারণাকে আরও আকর্ষণীয় করতে নিয়ে এলাম,হাই-কোয়ালিটি প্রিন্ট,আকর্ষণীয় ডিজাইন সাপোর্ট,বিভিন্ন সাইজে প্রিন্টিং ও দ্রুত ডেলিভারি সুবিধা।",
      isFeatured: false,
    },
    {
      icon: <FaIdCard />,
      title: "ভিজিটিং কার্ড সেবা",
      desc: "ব্যবসার প্রথম ইমপ্রেশন তৈরি করে একটি সুন্দর ও মানসম্পন্ন ভিজিটিং কার্ড। আমরা দিচ্ছি আধুনিক ডিজাইন, উন্নত মানের প্রিন্ট এবং প্রিমিয়াম ফিনিশিং।",
      isFeatured: false,
    },
   {
  icon: <FaBullhorn />,
  title: "মার্কেটিং ম্যাটেরিয়াল",
  desc: "আপনার ব্যবসার প্রচার ও পরিচিতি বৃদ্ধি করতে আমরা ব্রোশিওর, ফ্লায়ার, ইভেন্ট প্রচারণা সামগ্রীসহ বিভিন্ন মার্কেটিং ম্যাটেরিয়ালের আকর্ষণীয় ডিজাইন ও প্রিমিয়াম মানের প্রিন্টিং সেবা প্রদান করি, যা আপনার ব্র্যান্ডকে আরও পেশাদার ও গ্রাহকবান্ধব করে তোলে।",
  isFeatured: false,
},
    {
      icon: <FaImages />,
      title: "কাস্টম ব্র্যান্ডিং সেবা",
      desc: "লোগো, সাইনবোর্ড, ভিজিটিং কার্ড, আইডি কার্ড, স্টিকার, প্যাকেজিং কিংবা কর্পোরেট গিফট—সবকিছুতেই আপনার ব্র্যান্ডের নিজস্ব পরিচয় ফুটিয়ে তুলতে আমরা দিচ্ছি প্রিমিয়াম কাস্টম ব্র্যান্ডিং সেবা।",
      isFeatured: true,
    },
    {
      icon: <FaPalette />,
      title: "ক্রিয়েটিভ ডিজাইন সল্যুশন",
      desc: "আপনার ব্যবসার প্রচার ও ব্র্যান্ডিংকে আইডিয়া থেকে বাস্তবায়ন—সবকিছু একসাথে।মাহমুদ আর্ট এন্ড প্রেস – আপনার বিশ্বস্ত ক্রিয়েটিভ ডিজাইন পার্টনার।",
      isFeatured: false,
    },
    {
  icon: <FaHeart />,
  title: "বিয়ের কার্ড ডিজাইন ও প্রিন্টিং",
  desc: "বিয়ে, গায়ে হলুদ, আকদ, সংবর্ধনা ও অন্যান্য পারিবারিক অনুষ্ঠানের জন্য আকর্ষণীয় ও আধুনিক বিয়ের কার্ড ডিজাইন এবং প্রিমিয়াম মানের প্রিন্টিং সেবা। বিভিন্ন কাগজ, ফিনিশিং ও কাস্টম ডিজাইনের সুবিধা রয়েছে।",
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

            <h2 className="text-3xl font-black tracking-tight text-neutral-900 sm:text-5xl">
              প্রিমিয়াম ডিজাইন ও ডিজিটাল প্রিন্ট সেবা
            </h2>
          </div>

          <p className="max-w-sm text-base font-medium leading-relaxed text-neutral-500 sm:text-lg">
            আপনার ব্র্যান্ডকে দিন আলাদা পরিচয়।
            আমরা দিচ্ছি আধুনিক ডিজাইন, উন্নত মানের প্রিন্টিং, ব্রান্ডিং এবং দ্রুত ডেলিভারি সুবিধা।
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
            
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

