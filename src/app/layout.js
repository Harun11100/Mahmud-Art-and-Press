
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default:
      "মাহমুদ আর্ট এন্ড প্রেস | ব্যানার, পোস্টার ও প্রিন্টিং সার্ভিস",
    template: "%s | মাহমুদ আর্ট এন্ড প্রেস",
  },

  description:
    "মাহমুদ আর্ট এন্ড প্রেস-এ আমরা ব্যানার ডিজাইন, পোস্টার প্রিন্টিং, ভিজিটিং কার্ড, ব্র্যান্ডিং ম্যাটেরিয়াল এবং বিভিন্ন ধরনের প্রিমিয়াম প্রিন্টিং সার্ভিস প্রদান করি। ব্যবসা, প্রতিষ্ঠান ও ইভেন্টের জন্য আধুনিক ডিজাইন ও দ্রুত সেবা পেতে আজই যোগাযোগ করুন।",

  keywords: [
    "মাহমুদ আর্ট এন্ড প্রেস",
    "ব্যানার ডিজাইন",
    "পোস্টার প্রিন্টিং",
    "ভিজিটিং কার্ড",
    "প্রিন্টিং সার্ভিস বাংলাদেশ",
    "আর্ট এন্ড প্রেস",
    "ব্র্যান্ডিং ডিজাইন",
    "ফ্লেক্স ব্যানার",
    "ডিজিটাল প্রিন্টিং",
    "ব্যবসার ডিজাইন সার্ভিস",
  ],

  authors: [
    {
      name: "মাহমুদ আর্ট এন্ড প্রেস",
    },
  ],

  creator: "মাহমুদ আর্ট এন্ড প্রেস",
  publisher: "মাহমুদ আর্ট এন্ড প্রেস",

  openGraph: {
    title:
      "মাহমুদ আর্ট এন্ড প্রেস | ব্যানার, পোস্টার ও প্রিন্টিং সার্ভিস",
    description:
      "ব্যানার, পোস্টার, ভিজিটিং কার্ড, ব্র্যান্ডিং ডিজাইন ও প্রিমিয়াম প্রিন্টিং সার্ভিসের নির্ভরযোগ্য প্রতিষ্ঠান।",
    type: "website",
    locale: "bn_BD",
    siteName: "মাহমুদ আর্ট এন্ড প্রেস",
  },

  metadataBase: new URL(
    "https://your-domain.com"
  ),

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html
      lang="bn"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}
      </body>
    </html>
  );
}

