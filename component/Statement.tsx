import styles from "../styles/Statement.module.scss";

interface StatementProps {
  value: string;
  children: any;
}

export default function Statement(props: StatementProps) {
  return (
    <div className={styles.statement}>
      <div>
        <h2>{props.value}</h2>
      </div>
      <div>{props.children}</div>
    </div>
  );
}
