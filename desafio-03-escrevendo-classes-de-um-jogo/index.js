const Hero = require("./src/Hero");

const herois = [
  new Hero("Aiden", 28, "guerreiro"),
  new Hero("Bianca", 24, "mago"),
  new Hero("Caio", 31, "monge"),
  new Hero("Duda", 22, "ninja"),
];

for (const heroi of herois) {
  heroi.atacar();
}
