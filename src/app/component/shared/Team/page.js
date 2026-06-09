"use client";

import Image from "next/image";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Team() {
  const members = [
    {
      name: "সুমন আলী মাহমুদ",
      role: "প্রতিষ্ঠাতা ও ব্যবস্থাপনা পরিচালক",
      image: "/owner.jpeg",
      phone: "+8801939082023",
      email: "mahmudart210@gmail.com", // Fixed the broken markdown format link here
      featured: true,
    },
    {
      name: "রফিকুল ইসলাম",
      role: "সিনিয়র গ্রাফিক ডিজাইনার",
      image: "/avatar.png",
    },
    {
      name: "সোহেল রানা",
      role: "প্রিন্ট প্রোডাকশন ম্যানেজার",
      image: "/avatar.png",
    },
    {
      name: "মোস্তাফিজুর রহমান",
      role: "কর্পোরেট মার্কেটিং এক্সিকিউটিভ",
      image: "/avatar.png",
    },
  ];

  return (
    <section className="bg-white py-24 sm:py-32 relative overflow-hidden">
      {/* Structural Accent Blur Element */}
      <div className="absolute right-0 bottom-1/4 w-80 h-80 bg-neutral-100 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Typography Header Block */}
        <div className="text-center mb-16 sm:mb-24 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
            আমাদের টিম
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
            অভিজ্ঞ মানুষের হাতেই আপনার ব্র্যান্ড
          </h2>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-neutral-500 font-medium">
            আমাদের দক্ষ ডিজাইনার, প্রিন্ট বিশেষজ্ঞ এবং মার্কেটিং টিম প্রতিটি প্রজেক্টে সর্বোচ্চ মান এবং নির্ভরযোগ্য ডেলিভারি নিশ্চিত করতে প্রতিজ্ঞাবদ্ধ।
          </p>
        </div>

        {/* Executive Director Feature Spot Showcase */}
        <div className="mb-16 rounded-[2.5rem] border border-neutral-200/60 bg-neutral-50/50 p-8 md:p-12 backdrop-blur-md shadow-sm">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            
            {/* Left Image Side */}
            <div className="lg:col-span-5 relative h-[380px] w-full overflow-hidden rounded-3xl shadow-md ring-1 ring-black/5 bg-neutral-200">
              <Image
                src={members[0].image}
                alt={members[0].name}
                fill
                priority
                className="object-cover object-center filter brightness-95"
              />
            </div>

            {/* Right Copy Side */}
            <div className="lg:col-span-7 space-y-6 lg:pl-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400 text-neutral-950 px-4 py-1.5 text-xs font-bold tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-950 animate-ping" />
                প্রতিষ্ঠাতা ভিশন
              </span>

              <div className="space-y-1">
                <h3 className="text-3xl font-black text-neutral-900 tracking-tight">
                  {members[0].name}
                </h3>
                <p className="text-base text-neutral-500 font-semibold">
                  {members[0].role}
                </p>
              </div>

              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-medium">
               স্বপ্ন থেকে শুরু, বিশ্বাস দিয়ে এগিয়ে চলা।

আমি 
সুমন আলী (মাহমুদ)
প্রতিষ্ঠাতা ও ব্যবস্থাপনা পরিচালক,
মাহমুদ আর্ট এন্ড প্রেস

গ্রাহকদের আস্থা, সৃজনশীলতা এবং মানসম্মত সেবাকে সাথে নিয়ে প্রতিনিয়ত কাজ করে যাচ্ছি। আপনাদের ভালোবাসা ও সহযোগিতাই আমাদের এগিয়ে যাওয়ার শক্তি।

আন্তরিক ধন্যবাদ ও শুভেচ্ছা  আমাদের সাথে থাকার জন্য। ❤️
              </p>

              {/* Founder Contact Action Bars */}
              <div className="flex flex-wrap items-center gap-4 pt-2 ">
                <a
                  href={`tel:${members[0].phone}`}
                  className="inline-flex items-center gap-2.5 rounded-xl bg-neutral-950 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-neutral-800 hover:shadow-lg hover:shadow-neutral-950/10 hover:-translate-y-0.5 active:scale-95"
                >
                  <FaPhoneAlt className="text-xs text-amber-400" />
                  <span  className="text-white" >কল করুন</span>
                </a>

                <a
                  href={`mailto:${members[0].email}`}
                  className="inline-flex items-center gap-2.5 rounded-xl border border-neutral-300 bg-white px-6 py-3.5 text-sm font-semibold text-neutral-700 transition-all duration-300 hover:bg-neutral-50 hover:text-neutral-950 hover:-translate-y-0.5 active:scale-95"
                >
                  <FaEnvelope className="text-xs text-neutral-400" />
                  <span>ইমেইল করুন</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* General Agency Core Associates Grid Stack */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {members.slice(1).map((member, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[2rem] border border-neutral-200/70 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-xl hover:shadow-neutral-200/60"
            >
              {/* Profile Image Element Frame */}
              <div className="relative h-76 w-full bg-neutral-50 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Footer Meta Description Blocks */}
              <div className="p-6 sm:p-8 bg-white relative z-10">
                <h3 className="text-xl font-bold text-neutral-900 tracking-tight transition-colors group-hover:text-amber-500">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-neutral-400">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}