import type { Metadata } from "next";
import "@/src/styles/globals.css";
import Footer from "@/src/components/common/Footer/Footer";
import NavigationMenuBar from "../components/css-framework/shadcn/NavigationMenu";

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
      <body>
        <NavigationMenuBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
