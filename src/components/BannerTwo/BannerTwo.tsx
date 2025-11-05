import styles from "./BannerTwo.module.css";

const Banner = (props: any) => {
    // Defensive: content may be undefined when this component is rendered
    // (for example on the home page if the parent doesn't pass data).
    const altText = props?.content?.BANNER_TWO?.image?.alt ?? "Banner image";

    return (
        <div className={styles.banner_container}>
            <div className={styles.banner_image}>
                <img
                    src="/images/meetings.png"
                    alt={altText}
                />
            </div>
            <div className={styles.banner_text}>
                <h2 className="h2">Welcome back, Pumpkin Spice Latte</h2>
                <p>It's the sip you've been waiting for all year. Our Pumpkin Spice Latte brings autumn to life in every cup.</p>
            </div>
        </div>
    )
}

export default Banner;
