import type { Form } from "@/src/type/prop";

export const gridColumn: Record<number, string> = {
  1: "1fr",
  2: "1fr 1fr",
};

export const FORM: Form = {
  title: "Customer Form",
  description:
    "Please fill below form to inform us on what to improve or for any inquiries to raise to our team!",
  containers: [
    {
      column: 2,
      inputs: [
        {
          fieldType: "input",
          type: "text",
          id: "name",
          label: "Name",
        },
        {
          fieldType: "input",
          type: "number",
          id: "age",
          label: "Age",
        },
        {
          fieldType: "input",
          type: "tel",
          id: "phone",
          label: "Phone Number",
        },
        {
          fieldType: "select",
          id: "hobby",
          label: "Hobby",
          options: [
            "Please pick one of the hobbies",
            "Travel",
            "Reading",
            "Writing",
            "Sport",
          ],
        },
      ],
    },
    {
      column: 1,
      inputs: [
        {
          fieldType: "checkbox",
          legend: "Please pick your daily device",
          checkboxes: ["Mobile phone", "Laptop", "Tablet"],
        },
        {
          fieldType: "textarea",
          id: "message",
          label: "Message",
          placeholder: "Please input your suggestion here",
        },
      ],
    },
  ],
  buttonText: "Submit",
};
