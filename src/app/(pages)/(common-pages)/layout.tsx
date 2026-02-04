import Footer from "@/src/components/common/Footer/Footer";
import NavigationMenuBar from "@/src/components/css-framework/shadcn/NavigationMenu";

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
