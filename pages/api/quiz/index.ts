import questions from "../questionBank";
import { shuffle } from "../../../functions/array";

export default function getAllQuestions(req, res) {
  const idList = questions.map((el) => el.id);
  const quiz = shuffle(idList);
  res.status(200).json(quiz);
}
