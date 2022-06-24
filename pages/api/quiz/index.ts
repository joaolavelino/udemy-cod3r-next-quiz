import questions from "../questionBank";
import { shuffle } from "../../../functions/array";

export default (req, res) => {
  const idList = questions.map((el) => el.id);
  const quiz = shuffle(idList);
  res.status(200).json(quiz);
};
