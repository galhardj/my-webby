import styles from "./Form.module.css";
import type { Form } from "@/src/type/prop";
import ContainerMapper from "./mapper/ContainerMapper";

const Form = ({ title, description, containers, buttonText }: Form) => {
  return (
    <section className={styles["form-section"]}>
      <h2>{title}</h2>
      <p>{description}</p>
      <form className={styles.form}>
        <ContainerMapper containers={containers} />
        <button>{buttonText}</button>
      </form>
    </section>
  );
};

export default Form;
