import styles from "./LogIn.module.css";
import Submit from "./submitlogin";

export default function Login() {
  return (
    <div className={styles.container}>
      <img className={styles.img} src="background1.png" />
      <div className={styles.frame}>
        <img className={styles.mylogo} src="weeblogo150.png" />
        <p className={styles.login}>Log In</p>
        <div className={styles.placeholder}>
          <div className={styles.phleft}>
            <div className={styles.formcontainer}>
              <input className={styles.phleftpc} placeholder="Username" />
              <label className={styles.labels}>Username</label>
            </div>
            <div className={styles.formcontainer}>
              <input className={styles.phleftpc} placeholder="Password" />
              <label className={styles.labels}>Password</label>
            </div>
            <p className={styles.forgot}>Forgot Password?</p>

            <Submit />
            <a href="http://localhost:3000/signup">
              <p className={styles.dont}>Don't have an account?</p>
            </a>
          </div>
          <div className={styles.phright}></div>
        </div>
      </div>
    </div>
  );
}
