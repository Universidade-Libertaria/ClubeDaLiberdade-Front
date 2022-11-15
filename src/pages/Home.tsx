import styles from "../styles/Home.module.css";
import { Header } from "../components/header/Header";
import { MainContent } from "../components/main/MainContent";
import { Footer } from "../components/footer/Footer";

export function Home() {
  return (
    <div className={styles.wrapper}>
      <MainContent />
    </div>
  );
}
