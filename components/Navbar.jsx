import styles from "./Navbar.module.css";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logocontainer}>
        <a href="http://localhost:3000/">
          <img src="weeblogo40.png" />
        </a>
      </div>
      <div className={styles.buttoncontainer}>
        <div className={styles.down}>
          <button>PUBLISH</button>
          <div className={styles.dcontent}>
            <p className={styles.txt1}>Post Manga</p>
            <p className={styles.txt2}>Post Novel</p>
            <a href="http://localhost:3000/post">
              <p className={styles.txt3}>Post Illustrations</p>
            </a>
          </div>
        </div>
        <button>
          <Link to="creators" spy={true} smooth={true} offset={-20}>
            CREATORS
          </Link>
        </button>
        <button>
          <Link to="community" spy={true} smooth={true} offset={-20}>
            COMMUNITY
          </Link>
        </button>
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
