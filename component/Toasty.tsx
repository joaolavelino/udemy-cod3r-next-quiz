import styles from "../styles/Toasty.module.scss";

interface ToastyProps {
  text: string;
  show: boolean;
}

export default function Toasty(props: ToastyProps) {
  const showToasty = !props.show ? styles.hidden : "";

  return (
    <div className={`${styles.toasty} ${showToasty}`}>
      <p>{props.text}</p>
    </div>
  );
}
