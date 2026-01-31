import BannerLegacy from "@/src/components/common/Banner/BannerLegacy/BannerLegacy";
import Banner from "@/src/components/common/Banner/Banner";
import Accordion from "@/src/components/common/Accordion/Accordion";
import Form from "@/src/components/common/Forms/Contact/Contact";
import { BANNER } from "@/src/constants/banner";
import { ACCORDION_ITEMS } from "@/src/constants/accordion";
import { FORM } from "@/src/constants/form";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { fetchContentful } from "@/src/lib/api/contentful";

export default async function Page() {
  // TODO: to create domain/contentful.ts to process api response, refer; src/components/common/Products/ProductSectionWrapper.tsx
  const contentfulBanner = await fetchContentful();

  return (
    <>
      <BannerLegacy />
      <Banner
        position={contentfulBanner.fields.imagePosition ? "left" : "right"}
        image={BANNER.image}
        title={contentfulBanner.fields.title}
        richText={documentToReactComponents(
          contentfulBanner.fields.description,
        )}
      />
      <Accordion
        title={ACCORDION_ITEMS.title}
        accordions={ACCORDION_ITEMS.accordions}
      />
      <Form
        title={FORM.title}
        description={FORM.description}
        containers={FORM.containers}
        buttonText={FORM.buttonText}
      />
    </>
  );
}
