import React from 'react'
import styles from './Header.module.css'
import Logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'

export function Header() {
  return (
        <header>
            <div className={styles.headerContainer}>
            <Link to={"/inicio"}><img src={Logo} alt="" /></Link>
              <div className={styles.menuheader}>
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
                  <Link to={"/"}><button>LOGIN</button></Link>
              </div>
            </div>
        </header>
  )
}
