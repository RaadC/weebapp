import styles from "./Creators.module.css";

export default function Creators() {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <p className={styles.header}>CREATORS</p>
            <div className={styles.cardscontainer}>
                <div className={styles.card}>
                    <img src="Radley.jpg" />
                    <div className={styles.title}>
                        <p>Ice Alcantara</p>
                        <p>Project Manager</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src="weeblogo40.png" />
                    <div className={styles.title}>
                        <p>Ice Alcantara</p>
                        <p>Project Manager</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src="weeblogo40.png" />
                    <div className={styles.title}>
                        <p>Ice Alcantara</p>
                        <p>Project Manager</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src="weeblogo40.png" />
                    <div className={styles.title}>
                        <p>Ice Alcantara</p>
                        <p>Project Manager</p>
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