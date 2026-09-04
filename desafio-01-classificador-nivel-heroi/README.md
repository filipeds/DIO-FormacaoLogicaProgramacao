# Classificador de Nível de Herói

Desafio da trilha **Formação Lógica de Programação** (DIO): a partir do nome e da
quantidade de experiência (XP) de um herói, o programa determina seu nível.

## Regras de classificação

| XP | Nível |
|---|---|
| < 1.000 | Ferro |
| 1.001 – 2.000 | Bronze |
| 2.001 – 5.000 | Prata |
| 5.001 – 7.000 | Ouro |
| 7.001 – 8.000 | Platina |
| 8.001 – 9.000 | Ascendente |
| 9.001 – 10.000 | Imortal |
| ≥ 10.001 | Radiante |

## Conceitos aplicados

- Variáveis
- Operadores (comparação)
- Laços de repetição (`for`)
- Estruturas de decisão (`if`/`else if`)

## Estrutura

```
index.js                 # ponto de entrada: monta a lista de heróis e imprime os resultados
src/Hero.js               # classe que representa um herói (nome, xp)
src/HeroClassifier.js      # classe com a lógica de decisão que converte XP em nível
```

## Como executar

```bash
node index.js
```

### Saída esperada

```
O Herói de nome Aiden está no nível de Ferro
O Herói de nome Bianca está no nível de Bronze
O Herói de nome Caio está no nível de Prata
O Herói de nome Duda está no nível de Ouro
O Herói de nome Elis está no nível de Platina
O Herói de nome Fábio está no nível de Ascendente
O Herói de nome Gaia está no nível de Imortal
O Herói de nome Hugo está no nível de Radiante
```
