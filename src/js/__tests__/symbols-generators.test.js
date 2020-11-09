import { Team, Person } from '../symbols-iterators';

test('Iterator with generator', () => {
  // надеюсь, не слишком длинно для теста получилось
  const team = new Team();
  const charactersList = [new Person('Petya'), new Person('Vasya'), new Person('Sasha')];
  team.insertCharacters(charactersList);

  let counter = 0;
  const characters = [];

  for (const person of team) {
    counter += 1;
    characters.push(person);
  }

  expect(counter).toBe(3);
  expect(characters).toEqual(charactersList);
});
