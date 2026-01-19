"use client";

import styles from "./AccordionItem.module.css";
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
      className={styles["accordion-item"]}
      onClick={() => onItemClick(id)}
      open={openItem}
    >
      <summary>{summary}</summary>
      <p>{description}</p>
    </details>
  );
};

export default AccordionItem;
