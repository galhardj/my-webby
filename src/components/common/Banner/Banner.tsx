import styles from "./Banner.module.css";
import type { Banner } from "@/src/type/content";

const Banner = ({ content }: Banner) => {
  return (
    <section
      className={`${styles.banner_container} ${styles[`layout--${content.position}`]}`}
    >
      <figure className={styles.banner_flex}>
        <img src={content.image.src} alt={content.image.alt} />
      </figure>
      <div className={`${styles.banner_text} ${styles.banner_flex}`}>
        <h2 className="h2">{content.title}</h2>
        <p>{content.description}</p>
      </div>
    </section>
  );
};

export default Banner;
