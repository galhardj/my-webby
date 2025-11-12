import type { AccordionItemProp } from "@/src/type/prop";

const AccordionItem = ({ key, summary, description }: AccordionItemProp ) => {
  return (
    <details key={key}>
      <summary>{summary}</summary>
      <p>{description}</p>
    </details>
  );
};

export default AccordionItem;
