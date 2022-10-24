import React from 'react'
import styles from './Header.module.css'
import Logo from '../../assets/Logo.png'

export function Header() {
  return (
    <div>
        <header>
            <div className={styles.menuheader}>
              <img src={Logo} alt="" />
              <nav>
                <ul className={styles.NavBar}>
                  <li><a>Artigos</a></li>
                  <li><a>Vídeos</a></li>
                  <li><a>Jornal Libertário</a></li>
                </ul>
              </nav>
            </div>

            <div className={styles.btns}>
                <button>CLUBE DA LIBERDADE</button>
                <button>LOGIN</button>
            </div>
        </header>
    </div>
  )
}
