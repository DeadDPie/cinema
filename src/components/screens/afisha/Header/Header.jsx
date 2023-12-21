import styles from "./Header.module.css";
export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <a href="#" className={styles.logo}>
          Logo
        </a>
        <div className={styles.box}>
          <input type="text" placeholder="Search" onChange={() => {}} />
          <a href="#">
            <i class="bx bx-search" onClick={() => {}}></i>
          </a>
        </div>
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
