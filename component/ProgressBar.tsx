import styles from "../styles/ProgressBar.module.scss";

interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar(props: ProgressBarProps) {
  const percentage = `${props.progress}%`;

  return (
    <div className={styles.progressBar}>
      <div className={styles.bar}>
        <div
          className={styles.progress}
          style={{
            width: percentage,
          }}
        ></div>
      </div>
    </div>
  );
}
