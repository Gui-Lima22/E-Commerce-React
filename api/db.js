const faker = require('faker');

const TOTAL_PAGES = 5;

const baseProducts = [
    {
      id: 1,
      team: "Real Madrid",
      directory: "real-madrid",
      league: "LaLiga",
      color: ["white"],
      price: faker.datatype.number({min: 10000, max: 20000}),
      sales: faker.datatype.number(40)
    },
    {
      id: 2,
      team: "Barcelona",
      directory: "barcelona",
      league: "LaLiga",
      color: ["blue", "garnet"],
      price: faker.datatype.number({min: 10000, max: 20000}),
      sales: faker.datatype.number(40)
    },
    {
      id: 3,
      team: "Manchester United",
      directory: "manchester-united",
      league: "PremierLeague",
      color: ["red"],
      price: faker.datatype.number({min: 10000, max: 20000}),
      sales: faker.datatype.number(40)
    },
    {
      id: 4,
      team: "Chelsea",
      directory: "chelsea",
      league: "PremierLeague",
      color: ["blue"],
      price: faker.datatype.number({min: 10000, max: 20000}),
      sales: faker.datatype.number(40)
    },
    {
      id: 5,
      team: "Bayern Munich",
      directory: "bayern",
      league: "Bundesliga",
      color: ["red", "white"],
      price: faker.datatype.number({min: 10000, max: 20000}),
      sales: faker.datatype.number(40)
    },
    {
      id: 6,
      team: "Paris Saint-Germain",
      directory: "psg",
      league: "Ligue1",
      color: ["blue", "red"],
      price: faker.datatype.number({min: 10000, max: 20000}),
      sales: faker.datatype.number(40)
    },
    {
      id: 7,
      team: "Juventus",
      directory: "juventus",
      league: "SerieA",
      color: ["black", "white"],
      price: faker.datatype.number({min: 10000, max: 20000}),
      sales: faker.datatype.number(40)
    },
    {
      id: 8,
      team: "Liverpool",
      directory: "liverpool",
      league: "PremierLeague",
      color: ["red"],
      price: faker.datatype.number({min: 10000, max: 20000}),
      sales: faker.datatype.number(40)
    },
    {
      id: 9,
      team: "Atletico Madrid",
      directory: "atletico-de-madrid",
      league: "LaLiga",
      color: ["red", "white"],
      price: faker.datatype.number({min: 10000, max: 20000}),
      sales: faker.datatype.number(40)
    },
    {
      id: 10,
      team: "Arsenal",
      directory: "arsenal",
      league: "PremierLeague",
      color: ["red", "white"],
      price: faker.datatype.number({min: 10000, max: 20000}),
      sales: faker.datatype.number(40)
    },
    {
      id: 11,
      team: "Borussia Dortmund",
      directory: "borussia-dortmund",
      league: "Bundesliga",
      color: ["yellow", "black"],
      price: faker.datatype.number({min: 10000, max: 20000}),
      sales: faker.datatype.number(40)
    },
    {
      id: 12,
      team: "Inter Milan",
      directory: "inter-de-milao",
      league: "SerieA",
      color: ["blue", "black"],
      price: faker.datatype.number({min: 10000, max: 20000}),
      sales: faker.datatype.number(40)
    },
    {
      id: 13,
      team: "AC Milan",
      directory: "milan",
      league: "SerieA",
      color: ["red", "black"],
      price: faker.datatype.number({min: 10000, max: 20000}),
      sales: faker.datatype.number(40)
    },
    {
      id: 14,
      team: "Tottenham Hotspur",
      directory: "tottenham-hotspur",
      league: "PremierLeague",
      color: ["white", "blue"],
      price: faker.datatype.number({min: 10000, max: 20000}),
      sales: faker.datatype.number(40)
    },
    {
      id: 15,
      team: "Ajax",
      directory: "ajax",
      league: "Eredivisie",
      color: ["red", "white"],
      price: faker.datatype.number({min: 10000, max: 20000}),
      sales: faker.datatype.number(40)
    },
    {
      id: 16,
      team: "Manchester City",
      directory: "manchester-city",
      league: "PremierLeague",
      color: ["blue"],
      price: faker.datatype.number({min: 10000, max: 20000}),
      sales: faker.datatype.number(40)
    },
    {
      id: 17,
      team: "Napoli",
      directory: "napoli",
      league: "SerieA",
      color: ["blue"],
      price: faker.datatype.number({min: 10000, max: 20000}),
      sales: faker.datatype.number(40)
    },
    {
      id: 18,
      team: "Roma",
      directory: "roma",
      league: "SerieA",
      color: ["red", "yellow"],
      price: faker.datatype.number({min: 10000, max: 20000}),
      sales: faker.datatype.number(40)
    },
    {
      id: 19,
      team: "Bayer Leverkusen",
      directory: "bayer-leverkusen",
      league: "Bundesliga",
      color: ["red", "black"],
      price: faker.datatype.number({min: 10000, max: 20000}),
      sales: faker.datatype.number(40)
    },
    {
      id: 20,
      team: "Sevilla",
      directory: "sevilla",
      league: "LaLiga",
      color: ["white", "red"],
      price: faker.datatype.number({min: 10000, max: 20000}),
      sales: faker.datatype.number(40)
    },
    {
      id: 21,
      team: "Lyon",
      directory: "lyon",
      league: "Ligue1",
      color: ["blue", "white", "red"],
      price: faker.datatype.number({min: 10000, max: 20000}),
      sales: faker.datatype.number(40)
    },
    {
      id: 22,
      team: "Everton",
      directory: "everton",
      league: "PremierLeague",
      color: ["blue"],
      price: faker.datatype.number({min: 10000, max: 20000}),
      sales: faker.datatype.number(40)
    },
    {
      id: 23,
      team: "Leicester City",
      directory: "leicester-city",
      league: "PremierLeague",
      color: ["blue"],
      price: faker.datatype.number({min: 10000, max: 20000}),
      sales: faker.datatype.number(40)
    },
    {
      id: 24,
      team: "Wolverhampton",
      directory: "wolverhampton",
      league: "PremierLeague",
      color: ["orange", "black"],
      price: faker.datatype.number({min: 10000, max: 20000}),
      sales: faker.datatype.number(40)
    },
    {
      id: 25,
      team: "Athletic Bilbao",
      directory: "athletic-bilbao",
      league: "LaLiga",
      color: ["red", "white"],
      price: faker.datatype.number({min: 10000, max: 20000}),
      sales: faker.datatype.number(40)
    },
    {
      id: 26,
      team: "Valencia",
      directory: "valencia",
      league: "LaLiga",
      color: ["orange"],
      price: faker.datatype.number({min: 10000, max: 20000}),
      sales: faker.datatype.number(40)
    },
    {
      id: 27,
      team: "Villarreal",
      directory: "villarreal",
      league: "LaLiga",
      color: ["yellow"],
      price: faker.datatype.number({min: 10000, max: 20000}),
      sales: faker.datatype.number(40)
    },
    {
      id: 28,
      team: "Celtic",
      directory: "celtic",
      league: "LaLiga",
      color: ["green", "white"],
      price: faker.datatype.number({min: 10000, max: 20000}),
      sales: faker.datatype.number(40)
    },
    {
      id: 29,
      team: "Porto",
      directory: "porto",
      league: "PrimeiraLiga",
      color: ["blue", "white"],
      price: faker.datatype.number({min: 10000, max: 20000}),
      sales: faker.datatype.number(40)
    },
    {
      id: 30,
      team: "Benfica",
      directory: "benfica",
      league: "PrimeiraLiga",
      color: ["red", "white"],
      price: faker.datatype.number({min: 10000, max: 20000}),
      sales: faker.datatype.number(40)
    }
];

module.exports = {
  products: baseProducts
}
