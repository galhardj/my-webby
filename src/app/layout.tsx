import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Webby",
  description: "A minimal Next.js homepage with static content",
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
