import styles from "./Signup.module.css";
import Submit from "../components/Submitbtn";

export default function Signup() {
    return(
        <div className={styles.container}>
            <img className={styles.img} src = "background1.png"/>       
            <div className = {styles.frame}>
            <img className ={styles.mylogo} src = "weeblogo150.png" />
            <p className={styles.signup}>Sign Up</p>
            <div className= {styles.placeholder}>
            <div className={styles.phleft}>
                <div className={styles.formcontainer}>
                <input className={styles.phleftpc} placeholder = "Name"/>
                <label className={styles.labels}>Name</label>
                </div>
                <div className={styles.formcontainer}>
                <input className={styles.phleftpc} placeholder = "Username"/>
                <label className={styles.labels}>Username</label>
                </div>
                <div className={styles.formcontainer}>
                <input className={styles.phleftpc} type="password" placeholder = "password"/>
                <label className={styles.labels}>Password</label>
                </div>
                <div className={styles.formcontainer}>
                <input className={styles.phleftpc} type="password" placeholder = "Repeat password"/>
                <label className={styles.labels}>Repeat Password</label>
                </div>
                <Submit />
            </div>
            <div className={styles.phright}>

            </div>
        </div>
        </div>
        </div>
        

    );
}