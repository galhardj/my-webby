import styles from "./BannerTwo.module.css";
import { banner } from "@/src/type/banner";

const Banner = (props: { content: banner }) => {
  return (
    <div className={styles.banner_container}>
      <div className={styles.banner_image}>
        <img src={props.content.image.src} alt={props.content.image.alt} />
      </div>
      <div className={styles.banner_text}>
        <h2 className="h2">{props.content.title}</h2>
        <p>{props.content.description}</p>
      </div>
    </div>
  );
};

export default Banner;
