import styles from "./Secpage.module.css";

export default function Secpage(){
    return(
        <div className={styles.container}>
            <div className={styles.containerx}>
                <div className={styles.message}>
                Weebapp is an online community service where you can post and enjoy creative work.
                </div>
                <div className={styles.cardcontainer}>
                    <div className={styles.card1}>
                        <p className={styles.label1}>Create</p>
                        <img src="create.png" />
                        <p className={styles.label2}>Create your own novel, manga, or illustration and share them with the people of the Weebapp community!</p>
                    </div>
                    <div className={styles.card2}>
                        <p className={styles.label1}>Share</p>
                        <img src="share.png" />
                        <p className={styles.label2}>Create your own novel, manga, or illustration and share them with the people of the Weebapp community!</p>
                    </div>
                    <div className={styles.card3}>
                        <p className={styles.label1}>Enjoy</p>
                        <img src="enjoy.png" />
                        <p className={styles.label2}>Create your own novel, manga, or illustration and share them with the people of the Weebapp community!</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
}