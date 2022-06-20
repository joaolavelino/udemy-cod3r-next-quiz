import AlternativeModel from "../../model/alternative";
import QuestionModel from "../../model/question";

const questions: QuestionModel[] = [
  new QuestionModel(101, "What's the name of the flag from USA?", [
    AlternativeModel.wrong("Liberty Flag"),
    AlternativeModel.wrong("Freedom stars and stripes"),
    AlternativeModel.wrong("Independence standard"),
    AlternativeModel.right("Star-spangled Banner"),
  ]),
  new QuestionModel(102, "What is the capital of Switzerland?", [
    AlternativeModel.wrong("Zurich"),
    AlternativeModel.wrong("Geneva"),
    AlternativeModel.wrong("Bern"),
    AlternativeModel.right("None of the alternatives is right"),
  ]),
  new QuestionModel(103, "How many time zones are there in China?", [
    AlternativeModel.wrong("3"),
    AlternativeModel.wrong("5"),
    AlternativeModel.wrong("7"),
    AlternativeModel.right("1"),
  ]),
  new QuestionModel(104, "Which of these countries is not in Africa?", [
    AlternativeModel.wrong("Mauritius"),
    AlternativeModel.wrong("Chad"),
    AlternativeModel.wrong("Tanzania"),
    AlternativeModel.right("Jordan"),
  ]),
  new QuestionModel(105, "What is the largest francophone city in the world?", [
    AlternativeModel.wrong("Paris - France"),
    AlternativeModel.wrong("Montréal - Canada"),
    AlternativeModel.wrong("Dakar - Senegal"),
    AlternativeModel.right("Kinshasa - Democratic Republic of Congo"),
  ]),
  new QuestionModel(106, "Which of these country flags has the most colors?", [
    AlternativeModel.wrong("Switzerland"),
    AlternativeModel.wrong("Venezuela"),
    AlternativeModel.wrong("United Kingdom"),
    AlternativeModel.right("South-Africa"),
  ]),
  new QuestionModel(107, "Antananarivo is the capital of which country?", [
    AlternativeModel.wrong("Guatemala"),
    AlternativeModel.wrong("Egypt"),
    AlternativeModel.wrong("Poland"),
    AlternativeModel.right("Madagascar"),
  ]),
  new QuestionModel(108, "Which of these countries is not landlocked?", [
    AlternativeModel.wrong("Mongolia"),
    AlternativeModel.wrong("Paraguay"),
    AlternativeModel.wrong("Austria"),
    AlternativeModel.right("Iran"),
  ]),
  new QuestionModel(
    109,
    "Which of these countries doesn't share an island with other country?",
    [
      AlternativeModel.wrong("Malaysia"),
      AlternativeModel.wrong("Haiti"),
      AlternativeModel.wrong("Dominican Republic"),
      AlternativeModel.right("Jamaica"),
    ]
  ),
  new QuestionModel(
    110,
    "Which of these countries doesn't share an island with other country?",
    [
      AlternativeModel.wrong("Malaysia"),
      AlternativeModel.wrong("Haiti"),
      AlternativeModel.wrong("Dominican Republic"),
      AlternativeModel.right("Jamaica"),
    ]
  ),
  new QuestionModel(111, "What is the most populated island in the world?", [
    AlternativeModel.wrong("Hispaniola - Cuba"),
    AlternativeModel.wrong("Great Britain - United Kingdom"),
    AlternativeModel.wrong("Honshū - Japan"),
    AlternativeModel.right("Java - Indonesia"),
  ]),
  new QuestionModel(112, "What is the longest country border in the world?", [
    AlternativeModel.wrong("Brazil - Bolivia"),
    AlternativeModel.wrong("Mongolia - China"),
    AlternativeModel.wrong("Argentina - Chile"),
    AlternativeModel.right("USA - Canada"),
  ]),
  new QuestionModel(
    113,
    "In which of these countries the highest mountain of the continent is not located?",
    [
      AlternativeModel.wrong("Tanzania"),
      AlternativeModel.wrong("Argentina"),
      AlternativeModel.wrong("United States of America"),
      AlternativeModel.right("Switzerland"),
    ]
  ),
  new QuestionModel(
    114,
    "How many countries in Europe has a population larger than São Paulo Metro Area?",
    [
      AlternativeModel.wrong("23"),
      AlternativeModel.wrong("15"),
      AlternativeModel.wrong("6"),
      AlternativeModel.right("9"), //Poland, Ukraine, Spain, Italy, UK, France, Germany, Turkey, Russia
    ]
  ),
  new QuestionModel(
    115,
    "Which of these are an official language on East Timor?",
    [
      AlternativeModel.wrong("English"),
      AlternativeModel.wrong("Chinese"),
      AlternativeModel.wrong("Indonesian"),
      AlternativeModel.right("Portuguese"),
    ]
  ),
  new QuestionModel(116, "Which is the lowest point in Earth surface? ", [
    AlternativeModel.wrong("Lake Assal - Djibouti"),
    AlternativeModel.wrong("Nieuwekerk - The Netherlands"),
    AlternativeModel.wrong("Death Valley - USA"),
    AlternativeModel.right("Dead Sea - Israel / Palestine / Jordan"),
  ]),
];

export default questions;
