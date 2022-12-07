import styles from "./Community.module.css";

export default function Community() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.header}>Be a part of our Weebapp Community!</div>
        <div className={styles.imagecontainer}>
          <img src="communitypic.png" />
        </div>
      </div>
      <div className={styles.right}>
        <p>
          "The community that will showcase your talents and skills in writing
          stories, and creating illustrations"
        </p>
      </div>
    </div>
  );
}
