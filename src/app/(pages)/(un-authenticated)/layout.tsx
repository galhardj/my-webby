import NavigationMenuBar from "@/src/components/mock-model/shadcn/NavigationMenu";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavigationMenuBar variant="fixed-transparent" />
      <main className="min-h-dvh">{children}</main>
    </>
  );
}
