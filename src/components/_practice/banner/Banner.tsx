import styles from "./Banner.module.css";

const Banner = () => {
    return (
        <div className={styles.banner_container}>
            <div className={styles.banner_image}>
                <img
                    src="/images/meetings.png"
                    alt="Season Sip Banner"
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
