import questions from "../questionBank";

export default function getQuestion(req, res) {
  const currentId = +req.query.id;
  const currentQuestion = questions.filter(
    (question) => question.id === currentId
  );
  if (currentQuestion.length === 1) {
    const question = currentQuestion[0].alternativesShuffle();
    res.status(200).json(question.toObject());
  } else {
    res
      .status(404)
      .json({ error: "There's no question with the provided ID." });
  }
}
