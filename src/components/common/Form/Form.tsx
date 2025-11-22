import styles from "./Form.module.css";

const Form = () => {
  return (
    <section className={styles["form-section"]}>
      <h2>Customer Form</h2>
      <p>Please fill below form to inform us on what to improve or for any inquiries to raise to our team!</p>
      <form className={styles.form}>
        <div className={styles["form-grid"]}>
          <div className={styles["form-label"]}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>

          <div className={styles["form-label"]}>
            <label htmlFor="age">Age</label>
            <input type="number" id="age" name="age" />
          </div>

          <div className={styles["form-label"]}>
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" />
          </div>

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

export default Form;
