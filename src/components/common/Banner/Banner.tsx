import styles from "./Banner.module.css";
import type { Banner } from "@/src/type/content";

const Banner = ({ position, image, title, description, richText }: Banner) => {
  return (
    <section
      className={`${styles.banner_container} ${styles[`layout--${position}`]}`}
    >
      <figure className={styles.banner_flex}>
        <img src={image.src} alt={image.alt} />
      </figure>
      <div className={`${styles.banner_text} ${styles.banner_flex}`}>
        <h2 className="h2">{title}</h2>
        <p>{description}</p>
        {richText}
      </div>
    </section>
  );
};

export default Banner;
