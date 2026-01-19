import type { Metadata } from "next";
import "@/src/styles/globals.css";

export const metadata: Metadata = {
  title: "My Webby",
  description: "A minimal Next.js homepage with static content",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="min-h-dvh">{children}</main>;
}
