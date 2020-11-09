export class Team {
  constructor() {
    this.characters = null;
  }

  [Symbol.iterator]() {
    let index = 0;
    const { characters } = this;
    const { size } = characters;

    return {
      next() {
        if (index < size) {
          return {
            done: false,
            value: [...characters][index++],
          };
        }

        return {
          done: true,
        };
      },
    };
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
