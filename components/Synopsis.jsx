import styles from "./Synopsis.module.css";

export default function Synopsis() {
  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <div className={styles.back}>
          <img src="backarrow.png" />
          <a href="http://localhost:3000/home"><p>BACK</p></a>
        </div>
        <div className={styles.middle}>
          <div className={styles.imagecontainer}>
            <img src="synopsis1.png" />
          </div>
          <div className={styles.textcontainer}>
            <p className={styles.title}>TWO PIECE</p>
            <p className={styles.author}>Eichiro Oda</p>
            <p>
              Gol D. Roger was known as the Pirate King, the strongest and most
              infamous being to have sailed the Grand Line. The capture and
              death of Roger by the World Government brought a change throughout
              the world. His last words before his death revealed the location
              of the greatest treasure in the world, One Piece. It was this
              revelation that brought about the Grand Age of Pirates, men who
              dreamed of finding Two Piece (which promises an unlimited amount
              of riches and fame), and quite possibly the most coveted of titles
              for the person who found it, the title of the Pirate King. Enter
              Monkey D. Luffy, a 17-year-old boy who defies the standard
              definition of a pirate. Rather than the popular persona of a
              wicked, hardened, toothless pirate who ransacks villages for fun,
              Luffy’s reason for being a pirate is one of pure wonder; the
              thought of an exciting adventure and meeting new and intriguing
              people, along with finding Two Piece. Following in the footsteps
              of his childhood hero, Luffy and his crew travel across the Grand
              Line, experiencing crazy adventures, unveiling dark mysteries and
              battling strong enemies, all in order to reach Two Piece.
            </p>
          </div>
        </div>
        <div className={styles.chaptercontainer}>
          <div className={styles.chapterhead}>Chapter 3 - Two Piece</div>
          <hr />
          <div className={styles.chaptercard}>
            <p>Chapter 3</p>
            <p className={styles.date}>11/18/22</p>
          </div>
          <hr />
          <div className={styles.chaptercard}>
            <p>Chapter 3</p>
            <p className={styles.date}>11/11/22</p>
          </div>
          <hr />
          <div className={styles.chaptercard}>
            <p>Chapter 3</p>
            <p className={styles.date}>11/04/22</p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}
