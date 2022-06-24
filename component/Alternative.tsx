import AlternativeModel from "../model/alternative";
import styles from "../styles/Alternative.module.scss";

interface AlternativeProps {
  alternative: AlternativeModel;
  index: number;
  letter: string;
  letterBackground: string;
  questionIsAnswered: boolean;
  onAnswer: (index: number) => void;
}

export default function Alternative(props: AlternativeProps) {
  const revealed = props.alternative.isRevealed ? styles.revealed : "";
  const isRight = props.alternative.isRight ? styles.isRight : styles.isWrong;
  const isAnswered = props.questionIsAnswered ? styles.inactive : "";

  return (
    <div
      className={`${styles.alternativeContainer} `}
      onClick={() => props.onAnswer(props.index)}
    >
      <div className={`${styles.alternativeCard} ${revealed} `}>
        <div className={`${styles.front} ${isAnswered}`}>
          <div
            className={styles.letterDiv}
            style={{ backgroundColor: props.letterBackground }}
          >
            {props.letter}
          </div>
          <div className={styles.contentDiv}>
            <p>{props.alternative.value}</p>
          </div>
        </div>
        <div className={`${styles.back} ${isRight}`}>
          <p className={styles.auxText}>
            {props.alternative.isRight
              ? "The correct answer is:"
              : "You guessed:"}
          </p>
          <p>{props.alternative.value}</p>
        </div>
      </div>
    </div>
  );
}
