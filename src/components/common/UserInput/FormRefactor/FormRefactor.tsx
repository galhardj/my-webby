import styles from "./FormRefactor.module.css";
import Input from "../atomic/Input";

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
          <Input id="name" type="text" label="Nameee!" />
          <Input id="age" type="number" label="Age" />
          <Input id="phone" type="tel" label="Phone Number" />

          <div className={styles["form-label"]}>
            <label htmlFor="hobby">Hobby</label>
            <select id="hobby" name="hobby">
              <option value="">Please pick one of the hobbies</option>
              <option value="travel">Travel</option>
              <option value="reading">Reading</option>
              <option value="writing">Writing</option>
              <option value="sport">Sport</option>
            </select>
          </div>
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
