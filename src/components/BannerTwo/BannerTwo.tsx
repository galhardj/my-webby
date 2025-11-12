import styles from "./BannerTwo.module.css";
import { BannerTwo } from "@/src/type/banner";

const Banner = ({ content }: BannerTwo) => {
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
