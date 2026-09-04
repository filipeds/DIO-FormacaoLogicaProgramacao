const Hero = require("./src/Hero");
const HeroClassifier = require("./src/HeroClassifier");

const herois = [
  new Hero("Aiden", 950),
  new Hero("Bianca", 1500),
  new Hero("Caio", 4200),
  new Hero("Duda", 6300),
  new Hero("Elis", 7800),
  new Hero("Fábio", 8500),
  new Hero("Gaia", 9700),
  new Hero("Hugo", 12000),
];

for (const heroi of herois) {
  const nivel = HeroClassifier.classificar(heroi.xp);
  console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivel}`);
}
