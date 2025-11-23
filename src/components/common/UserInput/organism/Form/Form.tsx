import styles from "./Form.module.css";
import Input from "../../atomic/common/Input";
import Select from "../../atomic/common/Select";
import Checkbox from "../../atomic/common/Checkbox";
import Textarea from "../../atomic/common/Textarea";
import Container from "./Container/Container";
import type { Form } from "@/src/type/prop";

const Form = ({ title, description }: Form) => {
  return (
    <section className={styles["form-section"]}>
      <h2>{title}</h2>
      <p>{description}</p>
      <form className={styles.form}>
        <Container column="1fr 1fr">
          <Input id="name" type="text" label="Name" />
          <Input id="age" type="number" label="Age" />
          <Input id="phone" type="tel" label="Phone Number" />
          <Select
            id="hobby"
            label="Hobby"
            options={[
              "Please pick one of the hobbies",
              "Travel",
              "Reading",
              "Writing",
              "Sport",
            ]}
          />
        </Container>

        <Container column="1fr">
          <Checkbox
            legend="Please pick your daily device"
            checkboxes={["Mobile phone", "Laptop", "Tablet"]}
          />
          <Textarea
            id="message"
            label="Message"
            placeholder="Please input your suggestion here"
          />
        </Container>

        <button>Submit</button>
      </form>
    </section>
  );
};

export default Form;
