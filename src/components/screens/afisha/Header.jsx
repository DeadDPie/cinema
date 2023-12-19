import styles from "./Header.module.css";
export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <a href="#" className={styles.logo}>
          Logo
        </a>
        <nav>
          <a href="#" className={styles.a}>
            Home
          </a>
          <a href="#" className={styles.a}>
            About
          </a>
          <button className={styles.btn}>Login</button>
        </nav>
      </header>
    </>
  );
};
