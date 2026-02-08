"use client";

import type { AccordionItemProps } from "@/src/type/props";

const AccordionItem = ({
  id,
  summary,
  description,
  openItem,
  onItemClick,
}: AccordionItemProps) => {
  return (
    <details
      className="py-4"
      onClick={() => onItemClick(id)}
      open={openItem}
    >
      <summary>{summary}</summary>
      <p>{description}</p>
    </details>
  );
};

export default AccordionItem;
