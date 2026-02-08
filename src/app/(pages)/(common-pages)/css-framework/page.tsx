import StatusCard from "@/src/components/mock-model/shadcn/StatusCard";
import HighlightCarousel from "@/src/components/mock-model/shadcn/HighlightCarousel";
import Timeline from "@/src/components/mock-model/daisyui/Timeline";
import Diff from "@/src/components/mock-model/daisyui/Diff";
import Testimonial from "@/src/components/mock-model/tailwindcss/Testimonial";
import GridList from "@/src/components/mock-model/tailwindcss/GridList/GridList";
import ModalDemo from "@/src/components/mock-model/Modal";
import ModalSection from "@/src/components/common/Modal";

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
