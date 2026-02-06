import AdminContactsGrid from "@/src/components/css-framework/tailwindcss/GridList/GridClaude";
import ToggleSwitch from "@/src/components/css-framework/tailwindcss/ToggleSwitch";
import HeroBanner from "@/src/components/common/Hero";
import { HERO_BANNER } from "@/src/constants/banner";

// TODO: check 'server undefined' in /ui-in-the-work' server console
export default function Page() {
  return (
    <>
      <HeroBanner
        image={HERO_BANNER.image}
        title={HERO_BANNER.title}
        subtitle={HERO_BANNER.subtitle}
        description={HERO_BANNER.description}
        link={HERO_BANNER.link}
      />
      <AdminContactsGrid />
      <ToggleSwitch />
    </>
  );
}
