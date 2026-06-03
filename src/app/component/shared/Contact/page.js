"use client";

import {
  FiPhone,
  FiMail,
  FiClock,
  FiMapPin,
} from "react-icons/fi";
import { HiArrowUpRight } from "react-icons/hi2";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted");
  };

  const contactDetails = [
    {
      icon: <FiPhone />,
      title: "সরাসরি কল করুন",
      value: "+8801939082023",
      href: "tel:+8801939082023",
    },
    {
      icon: <FiMail />,
      title: "ইমেইল করুন",
      value: "mahmudart210@gmail.com",
      href: "mailto:mahmudart210@gmail.com",
    },
    {
      icon: <FiClock />,
      title: "কার্যক্রমের সময়",
      value: "শনি-বৃহস্পতি : সকাল ৯টা - রাত ১০টা",
      href: null,
    },
    {
      icon: <FiMapPin />,
      title: "প্রধান অফিস",
      value: "জিতার মোড়, কাশিমপুর, গাজীপুর, বাংলাদেশ",
      href: "https://maps.google.com",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-neutral-950 py-24 text-white sm:py-32"
    >
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] bg-amber-500/5 blur-[150px]" />

      <div className="pointer-events-none absolute left-10 top-1/4 h-[300px] w-[300px] bg-blue-500/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Content */}
          <div className="space-y-8 lg:col-span-5">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
                যোগাযোগ করুন
              </span>

              <h2 className="text-4xl font-black leading-none tracking-tight sm:text-5xl">
                আপনার ব্র্যান্ডকে দিন নতুন পরিচয়
              </h2>

              <p className="text-sm leading-relaxed text-neutral-400 sm:text-base">
                আকর্ষণীয় লাইটিং সাইনবোর্ড, ব্যানার, পোস্টার, ভিজিটিং কার্ড অথবা
                ব্র্যান্ডিং ম্যাটেরিয়াল প্রয়োজন? আজই
                যোগাযোগ করুন এবং আপনার ব্যবসার জন্য
                প্রিমিয়াম মানের ডিজাইন ও প্রিন্টিং সেবা
                গ্রহণ করুন।
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {contactDetails.map((detail, index) => {
                const Wrapper = detail.href
                  ? "a"
                  : "div";

                return (
                  <Wrapper
                    key={index}
                    href={detail.href || undefined}
                    target={
                      detail.href?.startsWith(
                        "http"
                      )
                        ? "_blank"
                        : undefined
                    }
                    rel="noopener noreferrer"
                    className={`group block rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 backdrop-blur-md transition-all duration-300 ${
                      detail.href
                        ? "cursor-pointer hover:border-neutral-700 hover:bg-neutral-900"
                        : "cursor-default"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900 text-sm text-amber-400 transition-all duration-300 group-hover:bg-amber-400 group-hover:text-black">
                        {detail.icon}
                      </div>

                      <div className="overflow-hidden">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                          {detail.title}
                        </p>

                        <p className="truncate text-sm font-semibold text-neutral-200 transition-colors group-hover:text-white">
                          {detail.value}
                        </p>
                      </div>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </div>

          {/* Right Form */}
          <div className="w-full lg:col-span-7">
            <div className="rounded-[2rem] border border-neutral-800 bg-neutral-900/20 p-8 backdrop-blur-xl sm:p-10">
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wide text-neutral-400">
                      আপনার নাম
                    </label>

                    <input
                      type="text"
                      required
                      placeholder="যেমন: রহিম আহমেদ"
                      className="w-full rounded-xl border border-neutral-800 bg-neutral-900/60 px-4 py-3.5 text-sm text-white placeholder-neutral-600 transition-all focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wide text-neutral-400">
                      ইমেইল ঠিকানা
                    </label>

                    <input
                      type="email"
                      required
                      placeholder="যেমন: rahim@gmail.com"
                      className="w-full rounded-xl border border-neutral-800 bg-neutral-900/60 px-4 py-3.5 text-sm text-white placeholder-neutral-600 transition-all focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                    />
                  </div>
                </div>

                {/* Service Select */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wide text-neutral-400">
                    প্রয়োজনীয় সেবা
                  </label>

                  <select
                    required
                    defaultValue=""
                    className="w-full cursor-pointer appearance-none rounded-xl border border-neutral-800 bg-neutral-900/60 px-4 py-3.5 text-sm text-neutral-300 transition-all focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                  >
                    <option
                      value=""
                      disabled
                      className="bg-neutral-950"
                    >
                      একটি সেবা নির্বাচন করুন...
                    </option>

                    <option
                      value="banner"
                      className="bg-neutral-950"
                    >
                       আকর্ষণীয় লাইটিং সাইনবোর্ড ও প্রিন্টিং
                    </option>

                    <option
                      value="poster"
                      className="bg-neutral-950"
                    >
                      পোস্টার ডিজাইন ও প্রিন্টিং
                    </option>

                    <option
                      value="cards"
                      className="bg-neutral-950"
                    >
                      ভিজিটিং কার্ড ডিজাইন
                    </option>

                    <option
                      value="branding"
                      className="bg-neutral-950"
                    >
                      ব্র্যান্ডিং ম্যাটেরিয়াল
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wide text-neutral-400">
                    প্রজেক্টের বিস্তারিত
                  </label>

                  <textarea
                    rows={4}
                    required
                    placeholder="আপনার প্রজেক্ট সম্পর্কে লিখুন..."
                    className="w-full resize-none rounded-xl border border-neutral-800 bg-neutral-900/60 px-4 py-3.5 text-sm text-white placeholder-neutral-600 transition-all focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white py-4 text-sm font-bold text-black shadow-lg shadow-white/5 transition-all duration-300 hover:bg-neutral-100 active:scale-[0.99]"
                >
                  <span>অনুসন্ধান পাঠান</span>

                  <HiArrowUpRight className="text-sm transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}