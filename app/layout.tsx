// 放到: app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import GlobalLanguageToggle from "@/components/GlobalLanguageToggle";

export const metadata: Metadata = {
  title: "学习笔记",
  description: "Jimmy 的 Year 8 互动学习笔记",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "学习笔记",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="学习笔记" />
        <meta name="theme-color" content="#16162a" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        {children}
        <div className="fixed bottom-4 right-4 z-50 sm:bottom-5 sm:right-5">
          <div className="bg-surface-1 border border-border rounded-xl px-3 py-2 shadow-lg shadow-black/30 flex items-center gap-2">
            <span className="text-[11px] text-gray-600 mr-0.5">Language</span>
            <GlobalLanguageToggle />
          </div>
        </div>
      </body>
    </html>
  );
}
