import styles from "./submitlogin.module.css";

export default function Submit() {
    return(
        <button className={styles.btn}><a href="http://localhost:3000/home">Log In</a></button>
    );
}