import styles from "./Submitbtn.module.css";

export default function Submit() {
    return(
        <button className={styles.btn}><a href="http://localhost:3000/home">Submit</a></button>
    );
}