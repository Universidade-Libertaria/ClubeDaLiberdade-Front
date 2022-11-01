import styles from "../App.module.css";
import { Header } from "../components/header/Header";
import { MainContent } from "../components/main/MainContent";
import { FooterContent } from "../components/footer/FooterContent";

export function Home() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <MainContent />
      <FooterContent />
    </div>
  );
}
