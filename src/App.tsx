import './Global.css'
import styles from './App.module.css'
import { Header } from './components/header/Header'
import { MainContent } from './components/main/MainContent'
import { FooterContent } from './components/footer/FooterContent'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'


export function App() {

  return (
    <div className={styles.wrapper}>
      <Header />
      <MainContent/>
      <FooterContent />

      
    </div>
  )
}

