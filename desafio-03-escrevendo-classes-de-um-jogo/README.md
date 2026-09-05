# Escrevendo as Classes de um Jogo

Desafio da trilha **Formação Lógica de Programação** (DIO): criar uma classe genérica
`Hero` que representa um herói de aventura, com um método `atacar` cuja descrição do
ataque varia de acordo com o tipo do herói.

## Regras de ataque

| Tipo | Ataque |
|---|---|
| mago | usou magia |
| guerreiro | usou espada |
| monge | usou artes marciais |
| ninja | usou shuriken |

## Conceitos aplicados

- Variáveis
- Operadores (comparação)
- Laços de repetição (`for`)
- Estruturas de decisão (`if`/`else if`)
- Funções (método `atacar`)
- Classes e objetos (`Hero`)

## Estrutura

```
index.js       # ponto de entrada: cria os heróis e chama o método atacar de cada um
src/Hero.js     # classe Hero (nome, idade, tipo) com o método atacar
```

## Como executar

```bash
node index.js
```

### Saída esperada

```
o guerreiro atacou usando espada
o mago atacou usando magia
o monge atacou usando artes marciais
o ninja atacou usando shuriken
```
