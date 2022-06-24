import styles from "../styles/Quiz.module.scss";
import QuestionModel from "../model/question";
import Question from "./Question";
import Button from "./Button";
import Loader from "./Loader";
import Image from "next/image";
import logo from "../public/gq-logo.png";
import Link from "next/link";

interface QuizProps {
  question: QuestionModel;
  timerDuration: number;
  lastQuestion?: boolean;
  sendAnsweredQuestion: (question: QuestionModel) => void;
  toNextStep?: () => void;
  progress: number;
}

export default function Quiz(props: QuizProps) {
  function onAnswer(index: number) {
    //this will send to the parent component the questionModel with the updated properties
    props.sendAnsweredQuestion(props.question.answer(index));
  }

  return (
    <section className={styles.quiz}>
      <header className={styles.questionNumber}>
        <div className={styles.logoHeader}>
          <Link href={"/"}>
            <Image src={logo} layout="intrinsic" alt="logo" />
          </Link>
        </div>
        <p>Question {props.progress + 1}</p>
      </header>
      {props.question ? (
        <Question
          key={props.question.id}
          question={props.question}
          timer={props.timerDuration}
          onAnswer={onAnswer}
        />
      ) : (
        <Loader />
      )}
      <div className={styles.buttons}>
        <Button
          text={props.lastQuestion ? "To the results!" : "Next question"}
          onClick={props.toNextStep}
        />
        <Button href="/" cancel text="Give up" />
      </div>
    </section>
  );
}
