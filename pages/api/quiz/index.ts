import questions from "../questionBank";

export default (req, res) => {
  const idList = questions.map((el) => el.id);
  const shuffledList = idList.sort((a, b) => 0.5 - Math.random());
  res.status(200).json({ idList });
};
