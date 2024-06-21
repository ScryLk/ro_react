import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/Scrylk.png" alt="" />
          <div className={styles.authorInfo}>
            <strong>Lucas Kepler</strong>
            <span>Wed Developer</span>
          </div>
        </div>
        <time title="11 de Maio as 08:13h" dateTime="2022-05-11 08:13:58">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
          <p>Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa. É um</p>
          <p>projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto</p>
          <p>é DoctorCare 🚀 <a href="#">jane.design/doctorcare</a></p>
          <p> 
            <a href="">#novoprojeto</a> {" "}
            <a href="">#nlw </a>  {" "}
            <a href="">#rocketseat</a>
          </p>
      </div>
    </article>
  );
}
