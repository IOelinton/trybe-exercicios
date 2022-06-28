let player = {
  PName: "Marta",
  lastName: "Silva",
  age: 34,
  medals: { golden: 2, silver: 3 },
};

jagador1 = player;
console.log(
  "A jogadora",
  jagador1.PName,
  jagador1.lastName,
  "tem",
  jagador1.age,
  "anos de idade"
);

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

console.log(
  "A jogadora " +
    player.PName +
    " " +
    player.lastName +
    " foi eleita a melhor do mundo por " +
    player.bestInTheWorld.length +
    " vezes."
);

console.log(
  "A jogadora possui",
  player.medals.golden,
  "medalhas de ouro e",
  player.medals.silver,
  "medalhas de prata"
);

//-----------------------------

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (const key in names) {
      console.log('Ola', names[key])
  }

  //-----------------------------

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (const key in car) {
    console.log(key, car[key])
  }

  const trybeStudent = { 
    name: "Luiza",
    class: 15,
    favoriteSubject: "javascript",
    };

    