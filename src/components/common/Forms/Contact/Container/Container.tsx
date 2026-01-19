import styles from "./Container.module.css";
import type { FormContainer } from "@/src/type/forms";

const Container = ({ column, children }: FormContainer) => {
  return (
    <div
      className={styles["form-grid"]}
      style={{ gridTemplateColumns: column }}
    >
      {children}
    </div>
  );
};

export default Container;
