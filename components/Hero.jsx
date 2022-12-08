import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.sliding}>
        </div>
      </div>
      <div className={styles.herobox}>
        <p className={styles.title}>Welcome to Weebappp</p>
        <p className={styles.subtitle}>‘Create and share your own stories and illustrations’</p>
        <a href="http://localhost:3000/login">
          <button>Get Started</button>
        </a>
      </div>
      

    </div>
  );
}
