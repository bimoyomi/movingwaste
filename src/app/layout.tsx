import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "신독환경 | 유품정리 전문 업체",
  description: "혼자서는 힘든 유품정리, 걱정만 쌓여가고 계신가요? 남겨진 물건 하나하나 정성껏, 전문가가 책임지고 정리해드립니다. 무료 견적 상담 가능합니다.",
  keywords: ["신독환경", "유품정리", "집정리", "이사정리", "청소", "무료견적", "전문정리"],
  authors: [{ name: "신독환경" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-664862220"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-664862220');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
