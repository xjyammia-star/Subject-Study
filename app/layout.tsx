// 放到: app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import GlobalLanguageToggle from "@/components/GlobalLanguageToggle";

export const metadata: Metadata = {
  title: "Study Portal",
  description: "Interactive study tool for Year 8",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* Global language toggle — fixed bottom-right */}
        <div className="fixed bottom-5 right-5 z-50">
          <div className="bg-surface-1 border border-border rounded-xl px-3 py-2 shadow-lg shadow-black/30 flex items-center gap-2">
            <span className="text-[11px] text-gray-600 mr-0.5">Language</span>
            <GlobalLanguageToggle />
          </div>
        </div>
      </body>
    </html>
  );
}
