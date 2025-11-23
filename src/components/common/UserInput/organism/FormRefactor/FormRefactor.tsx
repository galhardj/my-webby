import styles from "./FormRefactor.module.css";
import Input from "../../atomic/Input";
import Select from "../../atomic/Select";
import Checkbox from "../../atomic/Checkbox";

const FormRefactor = () => {
  return (
    <section className={styles["form-section"]}>
      <h2>Customer Form</h2>
      <p>
        Please fill below form to inform us on what to improve or for any
        inquiries to raise to our team!
      </p>
      <form className={styles.form}>
        <div className={styles["form-grid"]}>
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
        </div>

        <Checkbox
          legend="Please pick your daily device"
          checkboxes={["Mobile phone", "Laptop", "Tablet"]}
        />

        <div className={styles["form-label"]}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Please input your suggestion here"
          />
        </div>

        <button>Submit</button>
      </form>
    </section>
  );
};

export default FormRefactor;
