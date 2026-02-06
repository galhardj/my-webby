import Footer from "@/src/components/common/Footer/Footer";
import NavigationMenuBar from "@/src/components/css-framework/shadcn/NavigationMenu";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: move 'sticky' style inside NavigationMenuBar
  return (
    <>
      <div className="bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
        <NavigationMenuBar />
      </div>
      <main className="min-h-dvh">{children}</main>
      <Footer />
    </>
  );
}
