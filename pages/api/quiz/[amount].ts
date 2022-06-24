import questions from "../questionBank";
import { shuffle } from "../../../functions/array";

export default (req, res) => {
  const quizLength = +req.query.amount;
  const idList = questions.map((el) => el.id);
  const shuffledList = shuffle(idList);
  const quiz = shuffledList.slice(0, quizLength);
  res.status(200).json(quiz);
};
