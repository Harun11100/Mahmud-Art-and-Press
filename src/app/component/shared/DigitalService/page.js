"use client";

import Image from "next/image";

import {
  FaGlobe,
  FaMobileAlt,
  FaBullhorn,
  FaPaintBrush,
  FaSearch,
  FaRocket,
  FaWhatsapp,
} from "react-icons/fa";

export default function DigitalServices() {
  const services = [
    {
      icon: <FaGlobe />,
      title: "ওয়েবসাইট ডেভেলপমেন্ট",
      desc: "ব্যবসা, প্রতিষ্ঠান, স্কুল, রেস্টুরেন্ট ও কর্পোরেট কোম্পানির জন্য আধুনিক ও রেসপন্সিভ ওয়েবসাইট তৈরি।",
    },
    {
      icon: <FaMobileAlt />,
      title: "মোবাইল অ্যাপ ডেভেলপমেন্ট",
      desc: "Android ও iOS মোবাইল অ্যাপ তৈরি করে আপনার ব্যবসাকে আরও সহজে গ্রাহকদের কাছে পৌঁছে দিন।",
    },
    {
      icon: <FaBullhorn />,
      title: "ডিজিটাল মার্কেটিং",
      desc: "Facebook, Google এবং অন্যান্য প্ল্যাটফর্মে ফলাফলভিত্তিক মার্কেটিং ক্যাম্পেইন পরিচালনা।",
    },
    {
      icon: <FaPaintBrush />,
      title: "ল্যান্ডিং পেজ ডিজাইন",
      desc: "প্রোডাক্ট, সার্ভিস বা ক্যাম্পেইনের জন্য কনভার্শন-ফোকাসড ল্যান্ডিং পেজ তৈরি।",
    },
    {
      icon: <FaSearch />,
      title: "লিড জেনারেশন",
      desc: "টার্গেটেড কাস্টমার খুঁজে বের করে আপনার ব্যবসার বিক্রয় বৃদ্ধি করতে সহায়তা।",
    },
    {
      icon: <FaRocket />,
      title: "সোশ্যাল মিডিয়া ব্র্যান্ডিং",
      desc: "Facebook, Instagram ও অন্যান্য প্ল্যাটফর্মে ব্র্যান্ড পরিচিতি বৃদ্ধি ও পেজ ম্যানেজমেন্ট।",
    },
  ];

  const projects = [
    {
      image: "/digital-services/website.png",
      title: "কর্পোরেট ওয়েবসাইট",
    },
    {
      image: "/digital-services/mobileapp.png",
      title: "মোবাইল অ্যাপ",
    },
    {
      image: "/digital-services/marketing.png",
      title: "ডিজিটাল মার্কেটিং",
    },
    {
      image: "/digital-services/branding.png",
      title: "সোশ্যাল মিডিয়া ব্র্যান্ডিং",
    },
  ];

  return (
    <section
      id="digital-services"
      className="relative overflow-hidden bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 py-24 text-white"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-amber-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-amber-400">
            ডিজিটাল সেবা
          </span>

          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
            আপনার ব্যবসাকে
            <span className="text-amber-400">
              {" "}
              অনলাইনে নিয়ে যান
            </span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-neutral-400">
           আপনার ব্যবসার জন্য ওয়েবসাইট, মোবাইল অ্যাপ, ডিজিটাল মার্কেটিং ও অনলাইন ব্র্যান্ডিং সেবা এখন আমাদের ডিজিটাল পার্টনারের মাধ্যমে পাওয়া যাচ্ছে।
          </p>
        </div>

        <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-white">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-neutral-800 bg-neutral-900/80 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-amber-400"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400 text-xl text-black">
                {service.icon}
              </div>

              <h3 className="mb-4 text-xl font-bold">
                {service.title}
              </h3>

              <p className="leading-relaxed text-neutral-400">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20">
          <div className="rounded-[2rem] border border-neutral-800 bg-neutral-900/70 p-10 text-center backdrop-blur-xl">
            <h3 className="mb-4 text-3xl font-black">
              ডিজিটালভাবে ব্যবসা বৃদ্ধি করতে চান?
            </h3>

            <p className="mx-auto mb-8 max-w-2xl text-neutral-400">
              ওয়েবসাইট, মোবাইল অ্যাপ, ডিজিটাল মার্কেটিং কিংবা
              সোশ্যাল মিডিয়া ব্র্যান্ডিং সম্পর্কে বিস্তারিত জানতে
              আমাদের সাথে WhatsApp-এ যোগাযোগ করুন।
            </p>

            <a
              href="https://wa.me/8801939082023/?text=আসসালামু%20আলাইকুম,%20আমি%20আমার%20ব্যবসার%20ডিজিটাল%20সেবা%20সম্পর্কে%20জানতে%20চাই।"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-amber-400 px-8 py-4 font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-amber-300"
            >
              <FaWhatsapp className="text-lg" />
              <span>ফ্রি কনসালটেশন নিন</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
