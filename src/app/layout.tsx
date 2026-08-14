import type { Metadata } from "next";
import { Anuphan } from "next/font/google";
import "./globals.css";

const anuphan = Anuphan({
  variable: "--font-anuphan",
  subsets: ["thai", "latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "โรงเรียนอนุบาลมิตรอุดม",
    template: "%s | โรงเรียนอนุบาลมิตรอุดม",
  },
  description:
    "โรงเรียนอนุบาลที่ออกแบบทุกการเรียนรู้ และทุกพื้นที่ เพื่อเด็กปฐมวัยโดยเฉพาะ",
  openGraph: {
    title: "โรงเรียนอนุบาลมิตรอุดม",
    description: "เรียนอย่างมีความสุข สนุกอย่างมีความหมาย",
    type: "website",
    locale: "th_TH",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th" className={anuphan.variable}>
      <body>{children}</body>
    </html>
  );
}

