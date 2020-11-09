export class Team {
  constructor() {
    this.characters = null;
  }

  * [Symbol.iterator]() {
    const { characters } = this;
    const { size } = characters;

    for (let i = 0; i < size; i += 1) {
      yield [...characters][i++];
    }
  }

  insertCharacters(arr) {
    this.characters = new Set(arr);
  }
}

export class Person {
  constructor(name) {
    this.name = name;
  }
}
