import './Global.css'
import { Header } from './components/header/Header'
import { MainContent } from './components/main/MainContent'
import { FooterContent } from './components/footer/FooterContent'



export function App() {

  return (
    <>
      <Header />
      <MainContent/>
      <FooterContent />
    </>
  )
}

