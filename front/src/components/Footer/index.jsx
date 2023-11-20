import Button from "../Button";
import Input from "../Input";
import Label from "../Label";
import styles from "./styles.module.css";

export default function Footer() {

  return (
    <footer className={styles.container}>
      <div className={styles.containerButtonList}>
        <div className={styles.containerButton}>
          <div>
            <Label>Receba novidades:</Label>
            <Input inputButton type="email" placeholder="fulano@gmail.com" />
          </div>
          <Button style={{ marginTop: "1rem", height: "35px" }} inputButton>Buscar</Button>
        </div>
        <ul className={styles.listCredits}>
          <li>Fale conosco</li>
          <li>Quem somos</li>
          <li>Política de privacidade</li>
        </ul>
      </div>
    </footer>
  )
}