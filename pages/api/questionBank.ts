import AlternativeModel from "../../model/alternative";
import QuestionModel from "../../model/question";

const questions: QuestionModel[] = [
  new QuestionModel(
    101,
    "What's the name of the flag from USA?",
    [
      AlternativeModel.wrong("Liberty Flag"),
      AlternativeModel.wrong("Freedom stars Banner"),
      AlternativeModel.wrong("Independence standard"),
      AlternativeModel.right("Star-spangled Banner"),
    ],
    "The current design was adopted in 1977, but it had only 13 stars. It was only in 1960 that the 50-star version 🇺🇸 was created, to incorporate the last state, Hawaii. Since 1818, on the adoption of the 20-star version, all the following updates took place on the independence day, July 4."
  ),
  new QuestionModel(
    102,
    "What is the capital of Switzerland?",
    [
      AlternativeModel.wrong("Zurich"),
      AlternativeModel.wrong("Geneva"),
      AlternativeModel.wrong("Bern"),
      AlternativeModel.right("None of the alternatives is right"),
    ],
    "Trick question! Switzerland has no official capital city. There's no legal status of capital city. Bern, mistakenly took as the capital has the status of Federal City, and is where the government is seated. Curiously, Switzerland has 5 simultaneous presidents."
  ),
  new QuestionModel(
    103,
    "How many time zones are there in China?",
    [
      AlternativeModel.wrong("3"),
      AlternativeModel.wrong("5"),
      AlternativeModel.wrong("7"),
      AlternativeModel.right("1"),
    ],
    "China adopted the single time zone to create a sense of national unity. But there are regional special time regulations: For instance, Xinjiang (the westernmost province) there is the Xinjiang Time, that it's 2 hours behind the national official time (called 'Beijing Time'). Both time standards are used in parallel."
  ),
  new QuestionModel(
    104,
    "Which of these countries is not in Africa?",
    [
      AlternativeModel.wrong("Mauritius"),
      AlternativeModel.wrong("Chad"),
      AlternativeModel.wrong("Tanzania"),
      AlternativeModel.right("Jordan"),
    ],
    "Jordan is located in the Middle East, therefore in Asia. It borders Israel, Palestine, Saudi Arabia, Iraq and Syria."
  ),
  new QuestionModel(
    105,
    "What is the largest francophone city in the world?",
    [
      AlternativeModel.wrong("Paris - France"),
      AlternativeModel.wrong("Montréal - Canada"),
      AlternativeModel.wrong("Dakar - Senegal"),
      AlternativeModel.right("Kinshasa - Democratic Republic of Congo"),
    ],
    "Kinshasa has a population of 15 million (17 million on the metropolitan area). The second largest is Paris with a population of 2.1million (12,5 million - metro area). Completing the top 5 are Abdijan - Ivory Coast, Montréal - Canada, and Dakar - Senegal"
  ),
  new QuestionModel(
    106,
    "Which of these country flags has the most colors?",
    [
      AlternativeModel.wrong("Switzerland"),
      AlternativeModel.wrong("Venezuela"),
      AlternativeModel.wrong("United Kingdom"),
      AlternativeModel.right("South-Africa"),
    ],
    "South African flag 🇿🇦 has 6 colors while Switzerland's flag 🇨🇭 has only 2, Venezuela's flag 🇻🇪 has 4 and the Union Jack 🇬🇧 has 3. The flag with most colors is Belize's flag 🇧🇿 with 12, because of the coat-of-arms displayed on it."
  ),
  new QuestionModel(
    107,
    "Antananarivo is the capital of which country?",
    [
      AlternativeModel.wrong("Guatemala"),
      AlternativeModel.wrong("Egypt"),
      AlternativeModel.wrong("Poland"),
      AlternativeModel.right("Madagascar"),
    ],
    "Antananarivo has a population of 1,2 million and it's located on the central part of the island. It's name means 'City of the Thousand' in honor of the thousand soldiers that captured the city from the first occupants in the name of the King Andrianjaka."
  ),
  new QuestionModel(
    108,
    "Which of these countries is not landlocked?",
    [
      AlternativeModel.wrong("Mongolia"),
      AlternativeModel.wrong("Paraguay"),
      AlternativeModel.wrong("Austria"),
      AlternativeModel.right("Iran"),
    ],
    "Iran has a 2815km coastline facing the Caspian Sea, the Persian Gulf and the Gulf of Oman, some of the most strategic places on the international oil trade."
  ),
  new QuestionModel(
    109,
    "Which of these countries doesn't share an island with other country?",
    [
      AlternativeModel.wrong("Malaysia"),
      AlternativeModel.wrong("Haiti"),
      AlternativeModel.wrong("Dominican Republic"),
      AlternativeModel.right("Jamaica"),
    ],
    "Malaysia share island of Borneo with both Brunei and Indonesia (it's the only island in the world shared by more than 2 nations). Haiti and Dominican Republic share the same island "
  ),
  new QuestionModel(
    110,
    "Which of these rivers doesn't cross any capital-city",
    [
      AlternativeModel.wrong("Mekong River"),
      AlternativeModel.wrong("Danube River"),
      AlternativeModel.wrong("Nile River"),
      AlternativeModel.right("Rhine River"),
    ],
    "The Rhine river, despite being one of the most economically important rivers, crossing 6 countries, it doesnt cross any of their capital cities. The Mekong river crosses the capital cities of Laos (Vientiane) and Cambodia (Phnom Pehn). The Nile crosses the capital cities of Egypt (Cairo) and Sudan (Khartoum). The Danube crosses the capital cities of Ausria (Vienna), Slovakia (Bratislava), Hungary (Budapest) and Serbia (Belgrade)"
  ),
  new QuestionModel(
    111,
    "What is the most populated island in the world?",
    [
      AlternativeModel.wrong("Luzon - The Philippines"),
      AlternativeModel.wrong("Great Britain - United Kingdom"),
      AlternativeModel.wrong("Honshū - Japan"),
      AlternativeModel.right("Java - Indonesia"),
    ],
    " The island of Java has a population of 141 million people. Indonesia has 3 more islands on the top 15: Sumatra, Borneo and New Guinea. The Philippines has 2 islands on the top 7: Luzon (4th) and Mindanao (7th). Honshū, the main island of Japan is the 2nd most populated while Great Britain is the 3rd."
  ),
  new QuestionModel(
    112,
    "What is the longest country border in the world?",
    [
      AlternativeModel.wrong("Mongolia - China"),
      AlternativeModel.wrong("Russia - Kazakhstan"),
      AlternativeModel.wrong("Argentina - Chile"),
      AlternativeModel.right("USA - Canada"),
    ],
    "The entire border between the USA and Canada is 8.891km long. It has two sections, the canadian south border with the contiguous USA and the west border with Alaska. The Russia-Kazakhstan is the second-largest with 6.846km and the top 3 ends with the Argentina-Chile border (5.300km). The Mongolia-China border is in 4th place with 4.677km "
  ),
  new QuestionModel(
    113,
    "In which of these countries the highest mountain of the continent is NOT located?",
    [
      AlternativeModel.wrong("Tanzania"),
      AlternativeModel.wrong("Argentina"),
      AlternativeModel.wrong("United States of America"),
      AlternativeModel.right("Switzerland"),
    ],
    "Despite the Alps being the most well known mountain range on Europe, the tallest mountain of the continent is Mount Elbrus (5.642m above sea level) in the Caucasus mountain, in Russia, near the border of Georgia. Africa's highest mountain, the Kilimanjaro, is in Tanzania. South-America's highest mountain, the Aconcagua, is in Argentina. And the North-America's highest mountain, the Denali, is in Alaska, on the USA."
  ),
  new QuestionModel(
    114,
    "How many countries in Europe has a population larger than São Paulo Metro Area?",
    [
      AlternativeModel.wrong("23"),
      AlternativeModel.wrong("15"),
      AlternativeModel.wrong("6"),
      AlternativeModel.right("8"), //Poland, Ukraine, Spain, Italy, UK, France, Germany, Turkey, Russia
    ],
    "There are only nine countries with a larger population than São Paulo's metro area (22 million): Poland (37 million), Ukraine (43 million), Spain (46 million), Italy (60 million), France (65 million), the UK (67 million), Germany (83 million) and Russia (145 million - with the most populated areas in the european part). Turkey has a population of 84 million, but the most part is on the asian part of the country."
  ),
  new QuestionModel(
    115,
    "Which of these are an official language on East Timor?",
    [
      AlternativeModel.wrong("English"),
      AlternativeModel.wrong("Chinese"),
      AlternativeModel.wrong("Indonesian"),
      AlternativeModel.right("Portuguese"),
    ],
    "East Timor is one of the most recent countries in the world, gaining it's independence from Indonesia in 2002. The portuguese language comes from the colonization era. Until 1975, it was known as Portuguese Timor. After the liberation from portugal, it was invaded by Indonesia just 9 days later, when a violent decades-long conflict between the separatists and the indonesian military started. "
  ),
  new QuestionModel(
    116,
    "Which is the lowest point in Earth surface? ",
    [
      AlternativeModel.wrong("Lake Assal - Djibouti"),
      AlternativeModel.wrong("Nieuwekerk - The Netherlands"),
      AlternativeModel.wrong("Death Valley - USA"),
      AlternativeModel.right("Dead Sea - Israel / Palestine / Jordan"),
    ],
    "The Dead Sea depression lies 413m below sea-level. It's almost 3 times lower than the second lowest, Lake Assai. The Netherlands, despite being known as a country with lots of places under the sea-level, is rather flat. Its lowest point is only 6m under sea-level. "
  ),
  new QuestionModel(
    117,
    "Which of these mountain ranges isn't on the Americas? ",
    [
      AlternativeModel.wrong("Andes Range"),
      AlternativeModel.wrong("Brooks Range"),
      AlternativeModel.wrong("Sierra Madre"),
      AlternativeModel.right("Atlas Range"),
    ],
    "The Atlas Range are located in northwestern Africa, extending from Morocco to Tunisia. The Andes are located in South-America, the Sierra Madre is located in Mexico and the Brooks Range is located far north, on the northern coast of Alaska."
  ),
  new QuestionModel(
    118,
    "Which of these countries is not part of the Maghreb region?",
    [
      AlternativeModel.wrong("Tunisia"),
      AlternativeModel.wrong("Lybia"),
      AlternativeModel.wrong("Spain"),
      AlternativeModel.right("Egypt"),
    ],
    "The Maghreb is the westermost part of the arab world. It comprises countries on the northwestern Africa: Lybia, Algeria, Tunisia, Morocco and Mauritania, as well as the spanish exclave cities of Ceuta and Melilla, located in Africa. For more than 700 years, the Maghreb extended also almost through the entire Iberian Peninsula. Egypt and Sudan, also northern countries of Africa are considered to be on other region known as Mashriq."
  ),
  new QuestionModel(
    119,
    "What is the deepest recorded river in the World?",
    [
      AlternativeModel.wrong("Danube - Europe"),
      AlternativeModel.wrong("Yangtze - Asia"),
      AlternativeModel.wrong("Amazon - South America"),
      AlternativeModel.right("Congo - Africa"),
    ],
    "The Congo River has a maximum depth of 219m. The second is the Yangtze, and the Danube is the third. The Amazon, despite being the largest river in the world by discharged water volume (followed by the Congo River, in second), is only the fifth deepest river in the world."
  ),
  new QuestionModel(
    120,
    "What is the most populated country in Africa?",
    [
      AlternativeModel.wrong("South Africa"),
      AlternativeModel.wrong("Ethiopia"),
      AlternativeModel.wrong("Egypt"),
      AlternativeModel.right("Nigeria"),
    ],
    "Nigeria is not only the most populated country in Africa but it's the 7th most populated country on Earth, only behind Brazil, Pakistan, Indonesia, The United States, India and China. Lagos, its largest metro area has a population of more than 15 million people and a population projection of 32 million in 2050."
  ),
  new QuestionModel(
    121,
    "What is the flattest country in the world?",
    [
      AlternativeModel.wrong("The Netherlands"),
      AlternativeModel.wrong("Marshall Islands"),
      AlternativeModel.wrong("Qatar"),
      AlternativeModel.right("Maldives"),
    ],
    "The Maldives are the flattest country on Earth with an altitude span of 5 meters between the sea level and the (...) Mount Villingili. Yeah... 5 meters... "
  ),
  new QuestionModel(
    122,
    "What is the most sparsely populated country in the world?",
    [
      AlternativeModel.wrong("Australia"),
      AlternativeModel.wrong("Namibia"),
      AlternativeModel.wrong("Canada"),
      AlternativeModel.right("Mongolia"),
    ],
    "Both Austalia and Namibia are home to large deserts, but the most sparsely populated country in the world is Mongolia with 2 people/km2 spread and a combination of desert (Gobi Desert), mountains and steppes."
  ),
  new QuestionModel(
    123,
    "What is the most densely populated country in the world?",
    [
      AlternativeModel.wrong("India"),
      AlternativeModel.wrong("Singapore"),
      AlternativeModel.wrong("Bangladesh"),
      AlternativeModel.right("Monaco"),
    ],
    "Monaco has a density of 19341 hab/km2. It's more than twice as much of the second place, Singapore and 333 times the world average. Despite having such a high population, India is way larger than most people think, being the 7th largest county in the world. Bangladesh is the most densest country that's not an island or a city-state, it has the 8th highest population while being only the 94th largest country in the world."
  ),
  new QuestionModel(
    124,
    "Among the top-10 highest mountains, how much of them are not in the Himalaiyas",
    [
      AlternativeModel.wrong("5"),
      AlternativeModel.wrong("0"),
      AlternativeModel.wrong("3"),
      AlternativeModel.right("1"),
    ],
    "The K2 is the second highest mountain on Earth with 8611m above sea level. It's located on the Karakoram Range, located in the Kashmir region, spanning the borders of Pakistan, China and India. It's the only mountain outside of the Himalayas that's on the top-10 list. But on the top-25 list, there are 10 mountains of the Karakoram Range, the other 16 are on the Himalayas. "
  ),
  new QuestionModel(
    125,
    "What is the highest mountain outside of Asia?",
    [
      AlternativeModel.wrong("Elbrus - Russia"),
      AlternativeModel.wrong("Kilimanjaro - Tanzania"),
      AlternativeModel.wrong("Denali - United States"),
      AlternativeModel.right("Aconcagua - Argentina"),
    ],
    "Both Austalia and Namibia are home to large deserts, but the most sparsely populated country in the world is Mongolia with 2 people/km2 spread and a combination of desert (Gobi Desert), mountains and steppes."
  ),
  new QuestionModel(
    126,
    "What is the highest capital of the world?",
    [
      AlternativeModel.wrong("Addis Ababa, Ethipoia"),
      AlternativeModel.wrong("Bogota - Colombia"),
      AlternativeModel.wrong("Quito - Ecuador"),
      AlternativeModel.right("La Paz - Bolivia"),
    ],
    "La Paz is located 3869m above sea level. Combined with El Alto (4150m above sea level), it's the world highes metro area. Despite being the highest capital, it's 1231m below the highest city in the world, the mining town of La Rinconada, in Peru. Quito, Bogota, Addis Ababa and Mexico City are the other top-5 highest capitals. "
  ),
];

export default questions;
