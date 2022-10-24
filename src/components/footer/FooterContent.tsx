import React from 'react'
import styles from './FooterContent.module.css'
import Logo from '../../assets/Logo.png'
import { InstagramLogo, FacebookLogo, YoutubeLogo, TelegramLogo, TwitterLogo } from "phosphor-react"

export function FooterContent() {
  return (
    <footer>
      <img src={Logo} />
      <div className={styles.fticons}>
        <a href="https://www.instagram.com/libertariauniversidade/" target="_blank"><InstagramLogo size={32}/></a>
        <a href="https://www.facebook.com/universidadelibertariaoficial/" target="_blank"><FacebookLogo size={32}/></a>
        <a href="https://www.youtube.com/c/UniversidadeLibert%C3%A1ria" target="_blank"><YoutubeLogo size={32}/></a>
        <a href="https://t.me/unilibe" target="_blank"><TelegramLogo size={32}/></a>
        <a href="https://twitter.com/UniversidadeLi3" target="_blank"><TwitterLogo size={32}/></a>
      </div>

      <div className={styles.ftlinks}>
        <a href="">contato@universidadelibertaria.com</a>
        <span> |</span>
        <a href="">Relatórios de Impacto</a>
        <span> |</span>
        <a href="">(Não) Política de Direitos Autorais</a>
      </div>
    </footer>
  )
}
