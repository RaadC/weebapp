import styles from "./postillustration.module.css";


export default function Illust () {
    return (
        <div className={styles.container}>
            <div className={styles.name}> 
            <div className={styles.text1}>Post Illustration </div>
            <div className={styles.bg}>
                <div className={styles.placeholders}>
            <input className={styles.title} placeholder = "Title" />
            <textarea className={styles.desc} placeholder = "Description" />
            <button className={styles.submit}> Submit</button>
            </div>
            <div className={styles.aaa}>
            <button className={styles.select}> Select files</button>
            <p className={styles.filestext}>You can upload JPEG or PNG files</p>
            </div>
            </div>
            
            </div>
        </div>
    );
}