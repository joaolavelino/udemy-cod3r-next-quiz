import { shuffle } from "../functions/array";
import AlternativeModel from "./alternative";

export default class QuestionModel {
  #id: number;
  #statement: string;
  #alternatives: AlternativeModel[];
  #isRight: boolean;
  #isAnswered: boolean;

  constructor(
    id: number,
    statement: string,
    alternatives: AlternativeModel[],
    isRight = false
  ) {
    this.#id = id;
    this.#statement = statement;
    this.#alternatives = alternatives;
    this.#isRight = isRight;
  }

  get id() {
    return this.#id;
  }
  get statement() {
    return this.#statement;
  }
  get alternatives() {
    return this.#alternatives;
  }
  get isRight() {
    return this.#isRight;
  }
  get isAnswered() {
    for (let alternative of this.#alternatives) {
      if (alternative.isRevealed) return true;
    }
    return false;
  }

  // ESTA FUNÇÃO ABAIXO FOI MINHA TENTATIVA DE RESOLUÇÃO SOZINHO, PORÉM HA UM PROBLEMA GRAVE COM ELA.. O LOOP FOREACH NAO PERMITE QUE O LOOP SEJA QUEBRADO NO MEIO (APENAS COM O LANÇAMENTO DE UM ERRO, O QUE NÃO É RECOMENDADO) ... PARA FAZER O LOOP PODER SER PARADO NO MEIO DO CAMINHO É NECESSARIO USAR UM LOOP SIMPLES COM FOR ( SÓ QUE COM ESSE LOOP EU NÃO VOU TER ACESSO AO ELEMENTO DO ARRAY) OU O FOR...OF (FORMA USADA NA RESOLUÇÃO DO EXERCÍCIO)
  // get isAnswered() {
  //   this.#alternatives.forEach((alternative) => {
  //     console.log(alternative.isRevealed);
  //     if (alternative.isRevealed) return true;

  //   });
  //   console.log("none were revealed");
  //   return false;
  // }

  answer(chosenIndex: number): QuestionModel {
    const gotItRight = this.alternatives[chosenIndex].isRight;
    const revealedAlternatives = this.#alternatives.map((alt, index) => {
      const revealConditions = index === chosenIndex || alt.isRight;
      return revealConditions ? alt.reveal() : alt;
    });
    return new QuestionModel(
      this.#id,
      this.#statement,
      revealedAlternatives,
      gotItRight
    );
  }

  alternativesShuffle() {
    const shuffledAlternatives = shuffle(this.#alternatives);
    return new QuestionModel(
      this.#id,
      this.#statement,
      shuffledAlternatives,
      this.#isRight
    );
  }

  toObject() {
    return {
      id: this.#id,
      statement: this.#statement,
      alternatives: this.#alternatives.map((alt) => alt.toObject()),
      isAnswered: this.isAnswered,
      isRight: this.#isRight,
    };
  }
}
