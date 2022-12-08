import styles from "./Creators.module.css";


export default function Creators() {
  return (
    <div id="creators" className={styles.container}>
        <div className={styles.left}>
            <p className={styles.header}>CREATORS</p>
            <div className={styles.cardscontainer}>
                <div className={styles.card}>
                    <img src="icon4.png" />
                    <div className={styles.title}>
                        <p>Ice Alcantara</p>
                        <p>Project Manager</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src="icon3.png" />
                    <div className={styles.title}>
                        <p>Mary Valdez</p>
                        <p>Designer</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src="icon2.png" />
                    <div className={styles.title}>
                        <p>Mariel Tolentino</p>
                        <p>Developer</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src="icon1.png" />
                    <div className={styles.title}>
                        <p>Jann Radley Maniago</p>
                        <p>Developer</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.right}>
            <img src="weeblogo40.png" />
            <div className={styles.description}>
                <p>Weebapp is an online community where users can upload and view works such as mangas, novels, and illustrations.</p>
                <p>We see a future where through this app, you can become a well known artist and get to have the exposure for your work.</p>
                <p>We envisioned a community of people getting together in a safe space where users can interact and share there mangas, novels, and illustrations through this space.</p>
            </div>
        </div>
    </div>
  );
}
