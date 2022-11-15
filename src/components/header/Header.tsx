import React from "react";
import styles from "./Header.module.css";
import Logo from "../../assets/Logo.png";

export function Header() {
  return (
    <header>
      <div className={styles.headerContainer}>
        <img src={Logo} alt='' />
        <div className={styles.menuHeader}>
          <nav>
            <ul className={styles.NavBar}>
              <li>
                <a>Artigos</a>
              </li>
              <li>
                <a>Vídeos</a>
              </li>
              <li>
                <a>Jornal Libertário</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.btns}>
          <button>CLUBE DA LIBERDADE</button>
          <button>LOGIN</button>
        </div>
      </div>
    </header>
  );
}
