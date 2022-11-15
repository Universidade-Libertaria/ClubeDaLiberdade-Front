import { Link } from "react-router-dom";
import styles from "../styles/Planos.module.css";

export function Planos() {
  return (
    <div className={styles.wrapper}>
      <h2>Compare os Planos</h2>
      <div className={styles.authorsContainer}>
        <div className={styles.authorContainer}>
          <p>Mises</p>
          <span className={styles.preço}>GRÁTIS</span>
          <ul>
            <li>Aulões e Tira Dúvidas</li>
            <li>Desconto com Parceiros</li>
            <li>Acesso a alguns Cursos</li>
            <li>Contêm anúncios</li>
            <li>
              <s>Grupos Exclusivos</s>
            </li>
            <li>
              <s>Aplicativo Exclusivo</s>
            </li>
            <li>
              <s>Aulas Presenciais</s>
            </li>
            <li>
              <s>Eventos Gratuitos</s>
            </li>
            <li>
              <s>Um Novo Curso Todo Mês</s>
            </li>
            <li>
              <s>Acesso Antecipado aos Conteúdos</s>
            </li>
          </ul>
          <Link to={"/Cadastro&Pagamento"}>Assine agora</Link>
        </div>
        <div className={styles.authorContainer}>
          <p>Rothbard</p>
          <div>
            <span className={styles.preço}>R$ 49,90</span>
            <span className={styles.mes}>/mês</span>
          </div>
          <ul>
            <li>Aulões e Tira Dúvidas</li>
            <li>Desconto com Parceiros</li>
            <li>Acesso a alguns Cursos</li>
            <li>Sem anúncios</li>
            <li>
              <s>Grupos Exclusivos</s>
            </li>
            <li>Aplicativo Exclusivo</li>
            <li>Aulas Presenciais</li>
            <li>
              <s>Eventos Gratuitos</s>
            </li>
            <li>
              <s>Um Novo Curso Todo Mês</s>
            </li>
            <li>
              <s>Acesso Antecipado aos Conteúdos</s>
            </li>
          </ul>
          <Link to={"/Cadastro&Pagamento"}>Assine agora</Link>
        </div>
        <div className={styles.authorContainer}>
          <p>Hoppe</p>
          <div>
            <span className={styles.preço}>R$ 69,90</span>
            <span className={styles.mes}>/mês</span>
          </div>
          <ul>
            <li>Aulões e Tira Dúvidas</li>
            <li>Desconto com Parceiros</li>
            <li>Acesso a alguns Cursos</li>
            <li>Sem anúncios</li>
            <li>Grupos Exclusivos</li>
            <li>Aplicativo Exclusivo</li>
            <li>Aulas Presenciais</li>
            <li>Eventos Gratuitos</li>
            <li>Um Novo Curso Todo Mês</li>
            <li>Acesso Antecipado aos Conteúdos</li>
          </ul>
          <Link to={"/Cadastro&Pagamento"}>Assine agora</Link>
        </div>
      </div>
      <p>
        Também na opção de pagamento anual. Aceitamos cartões, boleto e
        criptomoedas.
      </p>
    </div>
  );
}
