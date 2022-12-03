import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logoframe}>
        <img src="weeblogofooter.png" />
      </div>
      <div className={styles.rightframe}>
        <div className={styles.labelframe}>
          <div className="labelcolumn">
            <p className={styles.bold}>Manga</p>
            <p className={styles.bold}>Novels</p>
            <p className={styles.bold}>Illustrations</p>
          </div>
          <div className="labelcolumn">
            <p className={styles.normal}>Popular</p>
            <p className={styles.normal}>Categories</p>
            <p className={styles.normal}>Recommended</p>
            <p className={styles.normal}>Latest</p>
          </div>
          <div className="labelcolumn">
            <p className={styles.bold}>Participate</p>
            <p className={styles.normal}>Community</p>
          </div>
        </div>
        <div className={styles.buttonframe}>
          <button>User Terms</button>
          <button>Privacy Policy</button>
        </div>
      </div>
    </div>
  );
}
