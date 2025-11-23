import styles from "./FormRefactor.module.css";
import Input from "../atomic/Input";
import Select from "../atomic/Select";

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

        <fieldset>
          <legend>Please pick your daily device</legend>

          <div>
            <input type="checkbox" id="mobile-phone" name="mobile-phone" />
            <label htmlFor="mobile-phone">Mobile phone</label>
          </div>

          <div>
            <input type="checkbox" id="laptop" name="laptop" />
            <label htmlFor="laptop">Laptop</label>
          </div>

          <div>
            <input type="checkbox" id="tablet" name="tablet" />
            <label htmlFor="tablet">Tablet</label>
          </div>
        </fieldset>

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
