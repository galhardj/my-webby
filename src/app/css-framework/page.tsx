import StatusCard from "@/src/components/css-framework/shadcn/StatusCard";
import HighlightCarousel from "@/src/components/css-framework/shadcn/HighlightCarousel";
import Timeline from "@/src/components/css-framework/daisyui/Timeline";
import Diff from "@/src/components/css-framework/daisyui/Diff";
import Testimonial from "@/src/components/css-framework/tailwindcss/Testimonial";
import GridList from "@/src/components/css-framework/tailwindcss/GridList/GridList";
import AdminContactsGrid from "@/src/components/css-framework/tailwindcss/GridList/GridClaude";
import ToggleSwitch from "@/src/components/css-framework/tailwindcss/ToggleSwitch";

export default function Page() {
  return (
    <main className="min-h-dvh">
      <Diff />
      <StatusCard />
      <HighlightCarousel />
      <Timeline />
      <Testimonial />
      <GridList />
      <AdminContactsGrid />
      <ToggleSwitch />
    </main>
  );
}
