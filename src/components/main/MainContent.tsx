import React from 'react'
import FormLogo from '../../assets/formlogo.png'
import styles from './MainContent.module.css'

export function MainContent() {
  return (
  <main>
      <h1>Acesse Agora</h1>
      <form action="" className={styles.loginform}>
        <img src={FormLogo}/>
        <input type="text" placeholder='Usuário ou e-mail'/>
        <input type="password" placeholder='Senha'/>
        <button className={styles.lgnbtn}>LOGIN</button>
        <a href="">Esqueceu o usuário ou senha?</a>
      </form>
      <div className={styles.NewMemBtn}>
        <button>Não é um membro ainda? Participe!</button>
      </div>
  </main>
  )
}
