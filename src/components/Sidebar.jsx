import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cloakImg} src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/Scrylk.png" alt="" />
        <strong>Lucas Kepler</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">Editar seu Perfil</a>
      </footer>
    </aside>
  );
}
