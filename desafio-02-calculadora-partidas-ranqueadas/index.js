const Player = require("./src/Player");
const RankedCalculator = require("./src/RankedCalculator");

const jogadores = [
  new Player("Aiden", 5, 3),
  new Player("Bianca", 25, 8),
  new Player("Caio", 60, 15),
  new Player("Duda", 95, 25),
  new Player("Elis", 100, 15),
  new Player("Fábio", 105, 8),
  new Player("Gaia", 40, 45),
  new Player("Hugo", 150, 20),
];

for (const jogador of jogadores) {
  const saldoVitorias = RankedCalculator.calcularSaldo(
    jogador.vitorias,
    jogador.derrotas
  );
  const nivel = RankedCalculator.classificar(saldoVitorias);
  console.log(
    `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`
  );
}
