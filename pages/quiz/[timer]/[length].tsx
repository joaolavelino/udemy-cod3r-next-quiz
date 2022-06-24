import { useEffect, useState } from "react";
import styles from "../../../styles/Home.module.scss";
import QuestionModel from "../../../model/question";
import AlternativeModel from "../../../model/alternative";
import Quiz from "../../../component/Quiz";
import { useRouter } from "../../../node_modules/next/router";
import Loader from "../../../component/Loader";
import Layout from "../../../component/Layout";

const BASE_URL = "http://localhost:3000";

export default function QuizPage() {
  const [quizLength, setQuizLength] = useState<number>(0);
  const [timerDuration, setTimerDuration] = useState<number>(0);
  const [questionList, setQuestionList] = useState<number[]>([]);
  const [score, setScore] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [question, setQuestion] = useState<QuestionModel>();

  const router = useRouter();
  const { length, timer } = router.query;

  useEffect(() => {
    setQuizLength(+length);
    setTimerDuration(+timer);
  }, [length]);

  useEffect(() => {
    quizLength > 0 && loadQuestionList();
  }, [quizLength]);

  useEffect(() => {
    questionList.length > 0 && loadCurrentQuestion(questionList[progress]);
  }, [questionList]);

  useEffect(() => {
    progress >= 1 && loadCurrentQuestion(questionList[progress]);
  }, [progress]);

  async function loadQuestionList() {
    const resp = await fetch(`${BASE_URL}/api/quiz/${+quizLength}`);
    const questionList = await resp.json();
    setQuestionList(questionList);
  }
  async function loadCurrentQuestion(id: number) {
    const resp = await fetch(`${BASE_URL}/api/questions/${id}`);
    const json = await resp.json();
    const questionModel = QuestionModel.buildFromObject(json);
    setQuestion(questionModel);
  }
  //this function recieves the answered question model and sets the question state, in order to update the DOM.
  function onAnsweredQuestion(question: QuestionModel) {
    setQuestion(question);
    if (question.isRight) setScore(score + 1);
  }

  function nextQuestion() {
    setProgress(progress + 1);
  }

  function onNextStep() {
    if (progress < quizLength - 1) {
      nextQuestion();
    } else {
      router.push({
        pathname: "/results",
        query: {
          length: quizLength,
          score: score,
        },
      });
    }
  }

  const isTheLastQuestion = progress == quizLength - 1;

  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          {question ? (
            <Quiz
              question={question}
              timerDuration={timerDuration}
              lastQuestion={isTheLastQuestion}
              sendAnsweredQuestion={onAnsweredQuestion}
              toNextStep={onNextStep}
              progress={progress}
            />
          ) : (
            <Loader />
          )}
        </main>
      </div>
    </Layout>
  );
}
