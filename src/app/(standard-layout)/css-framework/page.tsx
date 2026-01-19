import StatusCard from "@/src/components/css-framework/shadcn/StatusCard";
import HighlightCarousel from "@/src/components/css-framework/shadcn/HighlightCarousel";
import Timeline from "@/src/components/css-framework/daisyui/Timeline";
import Diff from "@/src/components/css-framework/daisyui/Diff";
import Testimonial from "@/src/components/css-framework/tailwindcss/Testimonial";
import GridList from "@/src/components/css-framework/tailwindcss/GridList/GridList";
import ModalDemo from "@/src/components/common/Modal/ModalClaude";
import ModalSection from "@/src/components/common/Modal/Modal";

export default function Page() {
  return (
    <>
      <Diff />
      <StatusCard />
      <HighlightCarousel />
      <Timeline />
      <Testimonial />
      <GridList />
      <ModalDemo />
      <ModalSection />
    </>
  );
}
