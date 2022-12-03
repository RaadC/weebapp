import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logocontainer}>
        <img src="weeblogo40.png" />
      </div>
      <div className={styles.buttoncontainer}>
        <button>CREATE</button>
        <button>CREATORS</button>
        <button>COMMUNITY</button>
      </div>
      <div className={styles.searchbarcontainer}>
      <input className={styles.searchbar} placeholder="Search" />
      </div>
      <div className={styles.usercontainer}>
      <a href="http://localhost:3000/login">
          <img className={styles.userlogo} src="userlogo.png" />
        </a>
      </div>
    </div>
  );
}
