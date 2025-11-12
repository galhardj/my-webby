import AccordionItem from "@/src/components/common/AccordionItem/AccordionItem";
import type { Accordion } from "@/src/type/content";

const Accordion = ({ accordions }: Accordion) => {
  return (
    <section>
      {accordions.map((accordion) => (
        <AccordionItem
          key={accordion.id}
          summary={accordion.summary}
          description={accordion.description}
        />
      ))}
    </section>
  );
};

export default Accordion;
