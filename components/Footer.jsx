import styles from "./Footer.module.css";

export default function Footer(){
    return(
        <div className={styles.container}>
            <div className={styles.logoframe}>
                <img src="weeblogofooter.png" />
            </div>
            <div className={styles.rightframe}>
                <div className={styles.labelframe}>
                    <div className="labelcolumn">
                        <p>Manga</p>
                        <p>Novels</p>
                        <p>Illustrationns</p>
                    </div>
                    <div className="labelcolumn">
                        <p>Manga</p>
                        <p>Novels</p>
                        <p>Illustrationns</p>
                    </div>
                    <div className="labelcolumn">
                        <p>Manga</p>
                        <p>Novels</p>
                        <p>Illustrationns</p>
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