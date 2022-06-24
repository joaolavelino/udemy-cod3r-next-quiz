import { time } from "console";
import { useState } from "react";
import QuestionModel from "../model/question";
import styles from "../styles/Question.module.scss";
import Alternative from "./Alternative";
import Button from "./Button";
import Statement from "./Statement";
import Timer from "./Timer";
import Toasty from "./Toasty";

interface QuestionProps {
  question: QuestionModel;
  timer?: number;
  onAnswer: (index: number) => void;
  // onTimeIsUp: (index: number) => void;
}

export default function Question(props: QuestionProps) {
  function renderAlternatives() {
    let letters = [
      { value: "a", color: "#e3ce72" },
      { value: "b", color: "#67add6" },
      { value: "c", color: "#e37272" },
      { value: "d", color: "#a3e299" },
    ];
    return props.question.alternatives.map((e, i) => (
      <Alternative
        key={`${props.question}${i}`}
        alternative={e}
        letter={letters[i].value}
        index={i}
        letterBackground={letters[i].color}
        onAnswer={props.onAnswer}
        questionIsAnswered={props.question.isAnswered}
      />
    ));
  }

  return (
    <div className={styles.question}>
      <Statement value={props.question.statement}>
        <Timer
          duration={props.timer || 5}
          onTimeIsUp={props.onAnswer}
          timerKey={props.question.id}
        />
      </Statement>
      <div className={styles.alternatives}>{renderAlternatives()}</div>
      <Toasty text={props.question.info} show={props.question.isAnswered} />
    </div>
  );
}
