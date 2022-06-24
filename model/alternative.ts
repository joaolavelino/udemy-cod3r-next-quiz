export default class AlternativeModel {
  #value: string;
  #isRight: boolean;
  #isRevealed: boolean;

  constructor(value: string, isRight: boolean, isRevealed = false) {
    this.#value = value;
    this.#isRight = isRight;
    this.#isRevealed = isRevealed;
  }

  //these methods will be used to create the question bank in a way there will be no unindentified boolean values on the constructor
  static right(value: string) {
    return new AlternativeModel(value, true);
  }
  static wrong(value: string) {
    return new AlternativeModel(value, false);
  }
  static buildFromObject(obj: AlternativeModel): AlternativeModel {
    return new AlternativeModel(obj.value, obj.isRight, obj.isRevealed);
  }

  get value() {
    return this.#value;
  }
  get isRight() {
    return this.#isRight;
  }
  get isRevealed() {
    return this.#isRevealed;
  }

  reveal() {
    return new AlternativeModel(this.#value, this.#isRight, true);
  }

  toObject() {
    return {
      value: this.#value,
      isRight: this.#isRight,
      isRevealed: this.#isRevealed,
    };
  }
}
