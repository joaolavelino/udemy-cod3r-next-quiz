import Button from "./Button";
import styles from "../styles/Layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      {children}
      <footer className={styles.footer}>
        <h4>Created by Joao Avelino, using NextJS and Typescript</h4>
        <div>
          <Button
            href="https://github.com/joaolavelino"
            text="Github"
            small
            outline
            external
          />
          <Button
            href="https://www.linkedin.com/in/joao-avelino-045b37108/"
            text="LinkedIn"
            small
            outline
            external
          />
        </div>
      </footer>
    </div>
  );
}
