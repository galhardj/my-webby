"use client";

import { useState } from "react";
import AccordionItem from "@/src/components/common/AccordionItem/AccordionItem";
import type { Accordion } from "@/src/type/content";

const Accordion = ({ title, accordions }: Accordion) => {
  const [openItem, setOpenItem] = useState<null | number>(null);

  const openAccordionItemHandler = (id: number) => {
    setOpenItem((prev) => (prev === id ? prev : id));
  };

  return (
    <section>
      <h2>{title}</h2>
      {accordions.map((accordion) => (
        <AccordionItem
          key={accordion.id}
          id={accordion.id}
          summary={accordion.summary}
          description={accordion.description}
          openItem={openItem === accordion.id}
          onItemClick={openAccordionItemHandler}
        />
      ))}
    </section>
  );
};

export default Accordion;
