import type { Metadata } from "next";
import "@/src/styles/globals.css";
import Footer from "@/src/components/common/Footer/Footer";
import NavigationMenuBar from "@/src/components/css-framework/shadcn/NavigationMenu";

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
    <>
      <NavigationMenuBar />
      <main className="min-h-dvh">{children}</main>
      <Footer />
    </>
  );
}
