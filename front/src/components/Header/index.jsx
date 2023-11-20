import Link from "next/link";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <header className={styles.container}>
      <Link href="/">
        <div className={styles.logo}>
          <p className={styles.esquerda}>Minhas</p>
          <p className={styles.direita}>Séries</p>
        </div>
      </Link>
      <ul className={styles.containerLinks}>
        <li>Populares</li>
        <li>Mais bem avaliadas</li>
        <li>Na tv</li>
      </ul>
    </header>
  )
}