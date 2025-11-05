import styles from "./BannerTwo.module.css";
import { banner } from "@/src/type/banner";

const Banner = ({ content }: banner) => {
  return (
    <div className={styles.banner_container}>
      <div className={styles.banner_image}>
        <img src={content.image.src} alt={content.image.alt} />
      </div>
      <div className={styles.banner_text}>
        <h2 className="h2">{content.title}</h2>
        <p>{content.description}</p>
      </div>
    </div>
  );
};

export default Banner;
