import styles from "./Populars.module.css";

export default function Populars() {
  return (
    <div className={styles.container}>
      <div className={styles.caption}>
        <p className={styles.txtcategory}>Manga</p>
        <p className={styles.txtmost}>Most Viewed</p>
      </div>
      <div className={styles.previewcontainer}>
        <div className={styles.previewcard}>
          <img className={styles.previewimg} src="manga1.png" />
          <p className={styles.previewtitle}>Two Piece</p>
          <div className={styles.tooltip}>
            <p>Genre: Comedy, Action, Fantasy</p>
            <p>
              Two Piece is the story of Monkey D. Luffy, a young man who has a
              single dream: To find the legendary treasure known as the Two
              Piece and become the King of the Pirates. 
            </p>
            <a href="http://localhost:3000/preview">
              <button>view</button>
            </a>
          </div>
        </div>
        <div className={styles.previewcard}>
          <img className={styles.previewimg} src="manga2.png" />
          <p className={styles.previewtitle}>Beaver Tooth Man</p>
          <div className={styles.tooltip}>
            <p>Genre: Gore, Supernatural, Horror</p>
            <p>
              The world is one ravaged by Devils, otherworldly monsters who feed
              on human fear.
            </p>
            <a href="http://localhost:3000/preview">
              <button>view</button>
            </a>
          </div>
        </div>
        <div className={styles.previewcard}>
          <img className={styles.previewimg} src="manga3.png" />
          <p className={styles.previewtitle}>My Hero is a Part Timer</p>
          <div className={styles.tooltip}>
            <p>Genre: Adventure, Science, Fantasy</p>
            <p>
              The series focuses on a middle school student Izuku Midoriya, who
              has no superpowers.
            </p>
            <a href="http://localhost:3000/preview">
              <button>view</button>
            </a>
          </div>
        </div>
        <div className={styles.previewcard}>
          <img className={styles.previewimg} src="manga4.png" />
          <p className={styles.previewtitle}>Kyoto Ghoul</p>
          <div className={styles.tooltip}>
            <p>Genre: Dark Fantasy, Horror</p>
            <p>
              A college student is attacked by a ghoul, a being that feeds on
              human flesh. He later receives an organ transplant from the ghoul,
              becoming part monster himself.
            </p>
            <a href="http://localhost:3000/preview">
              <button>view</button>
            </a>
          </div>
        </div>
        <div className={styles.previewcard}>
          <img className={styles.previewimg} src="manga5.png" />
          <p className={styles.previewtitle}>SAO</p>
          <div className={styles.tooltip}>
            <p>Genre: Adventure, Science Fiction, Action</p>
            <p>
              A multiplayer virtual-reality game that takes a deadly turn when
              players discover they can't escape of their own will but must play
              to victory or to death.
            </p>
            <a href="http://localhost:3000/preview">
              <button>view</button>
            </a>
          </div>
        </div>
        <div className={styles.previewcard}>
          <img className={styles.previewimg} src="manga6.png" />
          <p className={styles.previewtitle}>JJP</p>
          <div className={styles.tooltip}>
            <p>Genre: Dark Fantasy, Supernatural</p>
            <p>
              A kind-hearted teenager, joins his school's Occult Club for fun,
              but discovers that its members are actual sorcerers who can
              manipulate the energy between beings for their own use.
            </p>
            <a href="http://localhost:3000/preview">
              <button>view</button>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.caption}>
        <p className={styles.txtcategory}>Novel</p>
        <p className={styles.txtmost}>Most Viewed</p>
      </div>
      <div className={styles.previewcontainer}>
        <div className={styles.previewcard}>
          <img className={styles.previewimg} src="novel1.png" />
          <p className={styles.previewtitle}>Duo Leveling</p>
          <div className={styles.tooltip}>
            <p>Genre: Action, Fantasy</p>
            <p>A weak E-Rank hunter, Sung Jin Woo. He almost meet his end at a dungeon but there was a silver lining in the direst moment!</p>
            <a href="http://localhost:3000/preview">
              <button>view</button>
            </a>
          </div>
        </div>
        <div className={styles.previewcard}>
          <img className={styles.previewimg} src="novel2.png" />
          <p className={styles.previewtitle}> Paprika and Wolf</p>
          <div className={styles.tooltip}>
            <p>Genres: Adventura, Fantasy, Romance</p>
            <p> Story revolves around Kraft Lawrence, a traveling merchant who peddles various goods from town to town to make a living in a stylized, fictional world, with a historical setting.</p>
            <a href="http://localhost:3000/preview">
              <button>view</button>
            </a>
          </div>
        </div>
        <div className={styles.previewcard}>
          <img className={styles.previewimg} src="novel3.png" />
          <p className={styles.previewtitle}>Classroom</p>
          <div className={styles.tooltip}>
            <p>Genre: Psychological thriller</p>
            <p>When Kiyotaka enters government-sponsored elite high school, he finds out just how merit-based this education system is. </p>
            <a href="http://localhost:3000/preview">
              <button>view</button>
            </a>
          </div>
        </div>
        <div className={styles.previewcard}>
          <img className={styles.previewimg} src="novel4.png" />
          <p className={styles.previewtitle}>Rising of the Hero</p>
          <div className={styles.tooltip}>
            <p>Genres: Anime, Isekai, Dark fantasy</p>
            <p>A gamer is magically summoned into a parallel universe, where he is chosen as one of four heroes destined to save the world from its prophesied doom.</p>
            <a href="http://localhost:3000/preview">
              <button>view</button>
            </a>
          </div>
        </div>
        <div className={styles.previewcard}>
          <img className={styles.previewimg} src="novel5.png" />
          <p className={styles.previewtitle}>Calling Me</p>
          <div className={styles.tooltip}>
            <p>Genre: Drama, Psychological, Supernatural, Tragedy</p>
            <p>A girl creates an imaginary cell phone…which one day rings. The boy on the other end claims to be calling from his own imaginary cell phone…</p>
            <a href="http://localhost:3000/preview">
              <button>view</button>
            </a>
          </div>
        </div>
        <div className={styles.previewcard}>
          <img className={styles.previewimg} src="novel6.png" />
          <p className={styles.previewtitle}>Toradora</p>
          <div className={styles.tooltip}>
            <p>Genre: Romantic comedy, Slice of life</p>
            <p>Taiga Aisaka is a tiny,self centered and unexpectedly strong girl who lives in a new apartment next to Ryuji but has no idea how to take care of herself...</p>
            <a href="http://localhost:3000/preview">
              <button>view</button>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.caption}>
        <p className={styles.txtcategory}>Illustration</p>
        <p className={styles.txtmost}>Most Viewed</p>
      </div>
      <div className={styles.previewcontainer}>
        <div className={styles.previewcard}>
          <img className={styles.previewimg} src="illust1.png" />
          <div className={styles.tooltip}>
            <a href="http://localhost:3000/preview">
              <button>view</button>
            </a>
          </div>
        </div>
        <div className={styles.previewcard}>
          <img className={styles.previewimg} src="illust2.png" />
          <div className={styles.tooltip}>
            <a href="http://localhost:3000/preview">
              <button>view</button>
            </a>
          </div>
        </div>
        <div className={styles.previewcard}>
          <img className={styles.previewimg} src="illust3.png" />
          <div className={styles.tooltip}>
            <a href="http://localhost:3000/preview">
              <button>view</button>
            </a>
          </div>
        </div>
        <div className={styles.previewcard}>
          <img className={styles.previewimg} src="illust4.png" />
          <div className={styles.tooltip}>
            <a href="http://localhost:3000/preview">
              <button>view</button>
            </a>
          </div>
        </div>
        <div className={styles.previewcard}>
          <img className={styles.previewimg} src="illust5.png" />
          <div className={styles.tooltip}>
            <a href="http://localhost:3000/preview">
              <button>view</button>
            </a>
          </div>
        </div>
        <div className={styles.previewcard}>
          <img className={styles.previewimg} src="illust6.png" />
          <div className={styles.tooltip}>
            <a href="http://localhost:3000/preview">
              <button>view</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
