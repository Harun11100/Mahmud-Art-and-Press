"use client";

import {
  FaBuilding,
  FaLightbulb,
  FaBullhorn,
  FaClock,
  FaShieldAlt,
  FaLayerGroup,
} from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";

export default function EnterpriseSolutions() {
  const features = [
    {
      id: "01",
      icon: <FaLightbulb />,
      title: "ডিজিটাল লাইটিং সাইনবোর্ড সল্যুশন",
      desc: "শোরুম, কর্পোরেট অফিস, ইভেন্ট ও ব্যবসা প্রতিষ্ঠানের জন্য আধুনিক আল্ট্রা-ব্রাইট ডিজিটাল ও প্রিমিয়াম লাইটিং ব্যানার ডিজাইন, ম্যানুফ্যাকচারিং এবং ফুল সেটআপ ইন্সটলেশন সেবা।",
      isFeatured: true,
    },
    {
      id: "02",
      icon: <FaBullhorn />,
      title: "মার্কেটিং ম্যাটেরিয়াল প্রোডাকশন",
      desc: "হাই-ভলিউম ব্রোশিওর, কাস্টম এক্স-ব্যানার, ফ্লায়ার, ইভেন্ট কিট এবং হাই-এন্ড প্রমোশনাল প্রিন্টিং ম্যাটেরিয়াল বৃহৎ পরিসরে দ্রুত প্রস্তুতকরণ।",
      isFeatured: false,
    },
    {
      id: "03",
      icon: <FaLayerGroup />,
      title: "কর্পোরেট ব্র্যান্ডিং সাপোর্ট",
      desc: "একটি নবাগত বা প্রতিষ্ঠিত ব্র্যান্ডের সম্পূর্ণ ভিজ্যুয়াল আইডেন্টিটি, এক্সক্লুসিভ শোরুম আউটফিটিং, প্রিন্ট অ্যাসেট এবং ওমনিচ্যানেল ভিজ্যুয়াল কনসিস্টেন্সি নিশ্চিত করা।",
      isFeatured: false,
    },
    {
      id: "04",
      icon: <FaShieldAlt />,
      title: "প্রিমিয়াম কোয়ালিটি নিশ্চয়তা",
      desc: "আমদানিকৃত উন্নত মানের ইঙ্কজেট মিডিয়া, নিখুঁত রঙের কালার-ক্যালিব্রেশন ট্র্যাকিং এবং দীর্ঘস্থায়ী ওয়েদার-প্রুফ ম্যাটেরিয়াল ব্যবহারের শতভাগ গ্যারান্টি।",
      isFeatured: true,
    },
    {
      id: "05",
      icon: <FaClock />,
      title: "টাইম-ক্রিটিকাল ও দ্রুত ডেলিভারি",
      desc: "জরুরি ক্যাম্পেইন এবং ওভারনাইট ইভেন্ট সেটআপের জন্য ডেডিকেটেড শিফটিং ব্যাকআপের মাধ্যমে একদম নির্ধারিত ডেডলাইনের মধ্যে নির্ভরযোগ্য কাজ সম্পন্ন করার নিশ্চয়তা।",
      isFeatured: false,
    },
    {
      id: "06",
      icon: <FaBuilding />,
      title: "বৃহৎ এন্টারপ্রাইজ বিশেষ সেবা",
      desc: "লিমিটেড কোম্পানি, রিয়েল এস্টেট জায়ান্ট, নামী রিটেইল চেইন ও কর্পোরেট গ্রুপ অফ ইন্ডাস্ট্রির জন্য লং-টার্ম ভলিউম-বেসড বিটুবি কাস্টম সল্যুশন।",
      isFeatured: false,
    },
  ];

  return (
    <section className="bg-white py-24 sm:py-32 relative overflow-hidden">
      {/* Structural Minimal Backdrop Lights */}
      <div className="absolute left-0 top-1/4 w-[400px] h-[400px] bg-neutral-100 rounded-full blur-[120px] pointer-events-none opacity-50" />

      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        
        {/* Modern Split Layout Header Group */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="space-y-4 max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-neutral-100 border border-neutral-200 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest text-neutral-800">
              Enterprise Solutions
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-neutral-950 leading-snug">
              কর্পোরেট ও লিমিটেড কোম্পানির ব্র্যান্ডিং 
            </h2>
          </div>
          <p className="text-neutral-500 text-base sm:text-lg max-w-md font-medium leading-relaxed">
            আমরা লিমিটেড কোম্পানি, মাল্টিন্যাশনাল চেইন, শোরুম আউটলেট এবং মেগা ইভেন্ট ম্যানেজমেন্ট এজেন্সির জন্য হাই-এন্ড ডিজিটাল ডিসপ্লে ও কাস্টম প্রোডাকশন স্কেল নিশ্চিত করি।
          </p>
        </div>

        {/* Asymmetric Bento-Style Feature Matrix Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.id}
              className={`group relative rounded-[2rem] border border-neutral-200/70 bg-neutral-50/50 p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:bg-white hover:shadow-xl hover:shadow-neutral-200/50 flex flex-col justify-between ${
                item.isFeatured ? "lg:col-span-2" : "lg:col-span-1"
              }`}
            >
              {/* Top Structural Information Row */}
              <div>
                <div className="flex items-center justify-between gap-4 mb-8">
                  {/* High Contrast Icon Box Frame */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-950 text-xl text-amber-400 shadow-md shadow-neutral-950/10 group-hover:bg-amber-400 group-hover:text-neutral-950 transition-colors duration-300">
                    {item.icon}
                  </div>
                  {/* Subtle Tracking Tag Counter */}
                  <span className="text-xs font-mono font-bold text-neutral-300 group-hover:text-neutral-400 transition-colors">
                    {item.id}
                  </span>
                </div>

                <h3 className="mb-4 text-2xl font-bold text-neutral-950 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-3xl">
                  {item.desc}
                </p>
              </div>

              {/* Decorative Subtle Line Accent */}
              <div className="w-full h-px bg-neutral-200/20 pt-6 mt-6" />
            </div>
          ))}
        </div>

        {/* Premium Corporate Call-To-Action Board Banner Wrap */}
        <div className="mt-20 relative rounded-[2.5rem] bg-neutral-950 p-10 sm:p-16 text-center text-white overflow-hidden shadow-2xl shadow-neutral-950/20">
          {/* Subtle Ambient Radial Lighting Ring */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.04)_0%,transparent_70%)] pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h3 className="text-3xl sm:text-4xl font-black tracking-tight leading-snug">
              আপনার প্রতিষ্ঠানের ব্র্যান্ড ইমেজকে <br className="hidden sm:block"/>
              নিয়ে যান এক অনন্য উচ্চতায়
            </h3>

            <p className="max-w-xl mx-auto text-sm sm:text-base text-neutral-400 leading-relaxed">
              মেগা ব্যানার ক্যাম্পেইন, এক্সক্লুসিভ শোরুম ব্র্যান্ডিং, ডিজিটাল ডিসপ্লে সাইনেজ অথবা যেকোনো জটিল প্রিন্টিং প্রজেক্টের কাস্টম রিকোয়ারমেন্ট প্রসেসিং-এর জন্য আজই আমাদের কনসালট্যান্ট টিমের সাথে কথা বলুন।
            </p>

            <div className="pt-4 text-black">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition-all duration-300 hover:bg-neutral-100 hover:shadow-xl hover:shadow-white/5 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>কর্পোরেট কোটেশন নিন</span>
                <HiArrowUpRight className="text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}