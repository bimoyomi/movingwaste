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
  title: "신독환경 | 이사 폐기물 전문 업체 | 추가요금 0원 확정가",
  description: "이사 폐기물, 사진 보내면 추가요금 0원 확정가로 바로 처리해드립니다. 누적 1,000건 이상 처리, 숨고 만족도 4.9점의 10년 경력 전문팀입니다. 100% 사전 확정가 정책으로 운영합니다. 무료 견적 상담 가능합니다.",
  keywords: ["신독환경", "이사 폐기물", "이사폐기물", "폐기물 처리", "이사 정리", "추가요금 없음", "확정가", "사전 확정가", "무료견적", "이사 청소", "전문 업체"],
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
