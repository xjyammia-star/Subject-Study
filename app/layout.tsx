import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "History Study Tool",
  description: "Interactive study tool for Year 8 History",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
