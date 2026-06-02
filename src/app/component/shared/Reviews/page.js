
"use client";

import { FaStar, FaQuoteLeft } from "react-icons/fa6";

export default function Reviews() {
  const reviews = [
    {
      name: "রহিম আহমেদ",
      role: "মার্কেটিং ডিরেক্টর, এপেক্স লিমিটেড",
      message:
        "ArtPress আমাদের কর্পোরেট ইভেন্টের উপস্থিতিকে সম্পূর্ণ নতুন মাত্রা দিয়েছে। ব্যানার ডিজাইনের মান, রঙের নিখুঁত ব্যবহার এবং দ্রুত ডেলিভারি সত্যিই প্রশংসনীয়।",
    },
    {
      name: "করিম উদ্দিন",
      role: "প্রতিষ্ঠাতা, আলফা স্টুডিওস",
      message:
        "শুরু থেকে শেষ পর্যন্ত অত্যন্ত পেশাদার সেবা পেয়েছি। আমরা যে প্রিমিয়াম ভিজিটিং কার্ড অর্ডার করেছিলাম, তা দেখতে ও অনুভবে খুবই আকর্ষণীয় এবং প্রথম ইমপ্রেশন দারুণ তৈরি করে।",
    },
    {
      name: "সাব্বির হাসান",
      role: "অপারেশনস প্রধান, নেক্সা রিটেইল",
      message:
        "পোস্টার ডিজাইন ও সম্পূর্ণ ব্র্যান্ড পরিচিতি তৈরির জন্য অত্যন্ত নির্ভরযোগ্য। আমাদের এলোমেলো ধারণাগুলোকে তারা চমৎকার মানের প্রিন্ট ডিজাইনে রূপ দিয়েছে।",
    },
  ];

  // নাম থেকে আদ্যক্ষর বের করার ফাংশন
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-white py-24 sm:py-32"
    >
      {/* Decorative Blur */}
      <div className="pointer-events-none absolute bottom-0 left-10 h-72 w-72 rounded-full bg-neutral-100 opacity-60 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        {/* Heading */}
        <div className="mb-16 flex flex-col items-center space-y-4 text-center sm:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
            গ্রাহকদের মতামত
          </span>

          <h2 className="text-4xl font-black tracking-tight text-neutral-900 sm:text-5xl">
            আমাদের উপর যাদের আস্থা
          </h2>

          <p className="max-w-md text-sm text-neutral-500 sm:text-base">
            আমাদের ডিজাইন ও প্রিন্টিং সেবা নিয়ে ব্যবসায়ী ও
            গ্রাহকদের বাস্তব অভিজ্ঞতা পড়ুন।
          </p>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between rounded-3xl border border-neutral-200/50 bg-neutral-50/60 p-8 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-neutral-200/40 sm:p-10"
            >
              {/* Quote Icon */}
              <div className="pointer-events-none absolute right-8 top-8 text-4xl text-neutral-200/50">
                <FaQuoteLeft />
              </div>

              <div className="space-y-6">
                {/* Rating */}
                <div className="flex items-center gap-1 text-xs text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* Message */}
                <p className="relative z-10 text-base font-medium leading-relaxed text-neutral-700">
                  "{review.message}"
                </p>
              </div>

              {/* User Info */}
              <div className="mt-8 flex items-center gap-4 border-t border-neutral-200/40 pt-8">
                {/* Avatar */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-xs font-bold tracking-wider text-white shadow-sm">
                  {getInitials(review.name)}
                </div>

                <div className="space-y-0.5 overflow-hidden">
                  <h3 className="truncate text-base font-bold tracking-tight text-neutral-950">
                    {review.name}
                  </h3>

                  <p className="truncate text-xs font-medium text-neutral-400">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

