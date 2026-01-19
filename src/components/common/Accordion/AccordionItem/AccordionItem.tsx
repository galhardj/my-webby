"use client";

import styles from "./AccordionItem.module.css";
import type { AccordionItemProp } from "@/src/type/forms";

const AccordionItem = ({
  id,
  summary,
  description,
  openItem,
  onItemClick,
}: AccordionItemProp) => {
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
