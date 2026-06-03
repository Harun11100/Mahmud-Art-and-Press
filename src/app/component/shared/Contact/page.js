
"use client";

import {
  FiPhone,
  FiMail,
  FiClock,
  FiMapPin,
} from "react-icons/fi";
import { HiArrowUpRight } from "react-icons/hi2";

export default function Contact() {
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
      value: "শনি - বৃহস্পতি : সকাল ৯টা - রাত ১০টা",
      href: null,
    },
    {
      icon: <FiMapPin />,
      title: "প্রধান অফিস",
      value: "জিতার মোড়, কাশিমপুর, গাজীপুর",
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
                আপনার ব্র্যান্ডকে দিন শক্তিশালী পরিচয়
              </h2>

              <p className="text-sm leading-relaxed text-neutral-400 sm:text-base">
                লিমিটেড কোম্পানি, ফ্যাক্টরি, শোরুম, কর্পোরেট অফিস
                এবং ব্যবসার জন্য ডিজিটাল লাইটিং ব্যানার,
                ব্র্যান্ডিং ম্যাটেরিয়াল, পোস্টার, ভিজিটিং কার্ড
                ও প্রিমিয়াম প্রিন্টিং সার্ভিস প্রদান করি।
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
                      detail.href?.startsWith("http")
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

          {/* Right Premium CTA */}
          <div className="w-full lg:col-span-7">
            <div className="relative overflow-hidden rounded-[2rem] border border-neutral-800 bg-neutral-900/20 p-8 backdrop-blur-xl sm:p-10">
              
              {/* Glow Accent */}
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber-500/10 blur-3xl" />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
                    দ্রুত যোগাযোগ
                  </span>

                  <h3 className="mt-4 text-3xl font-black leading-tight text-white sm:text-5xl">
                    আপনার কোম্পানির <br />
                    মার্কেটিং ও ব্র্যান্ডিং শুরু করুন
                  </h3>

                  <p className="mt-5 max-w-2xl text-sm leading-relaxed text-neutral-400 sm:text-base">
                    কর্পোরেট অফিস, শোরুম, ফ্যাক্টরি,
                    ব্যবসায়িক প্রচারণা, ডিজিটাল লাইটিং
                    সাইনবোর্ড, ব্যানার, পোস্টার,
                    ভিজিটিং কার্ড এবং অন্যান্য
                    মার্কেটিং ম্যাটেরিয়ালের জন্য
                    সরাসরি WhatsApp-এ যোগাযোগ করুন।
                  </p>

                  {/* Service Highlights */}
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5">
                      <h4 className="font-bold text-white">
                        কর্পোরেট ব্র্যান্ডিং
                      </h4>

                      <p className="mt-2 text-sm text-neutral-400">
                        লিমিটেড কোম্পানি ও বড় ব্যবসার জন্য
                        প্রিমিয়াম ডিজাইন ও
                        মার্কেটিং ম্যাটেরিয়াল।
                      </p>
                    </div>

                    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5">
                      <h4 className="font-bold text-white">
                        ডিজিটাল লাইটিং ব্যানার
                      </h4>

                      <p className="mt-2 text-sm text-neutral-400">
                        দোকান, শোরুম ও ব্যবসার জন্য
                        LED সাইনবোর্ড ও
                        লাইটিং ব্যানার সল্যুশন।
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <div className="mt-10">
                  <a
                    href="https://wa.me/8801939082023?text=আসসালামু%20আলাইকুম,%20আমি%20আমার%20কোম্পানির%20ব্যানার,%20লাইটিং%20সাইনবোর্ড%20বা%20মার্কেটিং%20ম্যাটেরিয়াল%20সম্পর্কে%20জানতে%20চাই।"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-green-500 px-6 py-5 text-center text-sm font-bold text-white transition-all duration-300 hover:scale-[1.01] hover:bg-green-600"
                  >
                    <span>
                      WhatsApp এ যোগাযোগ করুন
                    </span>

                    <HiArrowUpRight className="text-base transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>

                  <p className="mt-4 text-center text-xs text-neutral-500">
                    কোটেশন, ডিজাইন আলোচনা ও
                    কর্পোরেট প্রজেক্ট সংক্রান্ত তথ্যের জন্য
                    সরাসরি যোগাযোগ করুন।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
