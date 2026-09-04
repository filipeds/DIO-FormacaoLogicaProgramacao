# Calculadora de Partidas Ranqueadas

Desafio da trilha **Formação Lógica de Programação** (DIO): a partir da quantidade de
vitórias e derrotas de um jogador, calcula o saldo de partidas ranqueadas
(`vitórias - derrotas`) e determina o nível correspondente.

## Regras de classificação

O nível é definido a partir do **saldo** (vitórias - derrotas):

| Saldo | Nível |
|---|---|
| < 10 | Ferro |
| 11 – 20 | Bronze |
| 21 – 50 | Prata |
| 51 – 80 | Ouro |
| 81 – 90 | Diamante |
| 91 – 100 | Lendário |
| ≥ 101 | Imortal |

## Conceitos aplicados

- Variáveis
- Operadores (aritméticos e de comparação)
- Laços de repetição (`for`)
- Estruturas de decisão (`if`/`else if`)
- Funções (métodos estáticos que calculam o saldo e classificam o nível)

## Estrutura

```
index.js                    # ponto de entrada: monta a lista de jogadores e imprime os resultados
src/Player.js                 # classe que representa um jogador (nome, vitorias, derrotas)
src/RankedCalculator.js        # classe com a função de cálculo do saldo e a lógica de decisão do nível
```

## Como executar

```bash
node index.js
```

### Saída esperada

```
O Herói tem de saldo de 2 está no nível de Ferro
O Herói tem de saldo de 17 está no nível de Bronze
O Herói tem de saldo de 45 está no nível de Prata
O Herói tem de saldo de 70 está no nível de Ouro
O Herói tem de saldo de 85 está no nível de Diamante
O Herói tem de saldo de 97 está no nível de Lendário
O Herói tem de saldo de -5 está no nível de Ferro
O Herói tem de saldo de 130 está no nível de Imortal
```
