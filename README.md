# SkillMatch JS

## Sobre o projeto

O SkillMatch JS é um simulador de compatibilidade entre um candidato e vagas de front-end júnior.

O projeto compara as habilidades do candidato com os requisitos das vagas e mostra:

- percentual de compatibilidade
- habilidades encontradas
- habilidades faltantes
- vaga mais compatível
- recomendação de estudo

## Objetivo

Praticar os principais conceitos do Módulo 01:

- lógica de programação
- JavaScript
- tipos de dados
- condicionais e operadores
- escopo e laços de repetição
- funções e arrow functions
- arrays e métodos de array
- objetos
- classes, herança e this
- callbacks e closures
- Promises e async/await
- GitHub e Kanban

## Como executar

**Opção 1 — Terminal com Node.js:**

1. Abrir o terminal na pasta do projeto
2. Rodar o comando: `node skillmatch.js`

**Opção 2 — Navegador:**

1. Abrir o Google Chrome
2. Pressionar F12 ou Ctrl + Shift + J
3. Abrir a aba Console
4. Copiar o código do arquivo skillmatch.js
5. Colar no console e pressionar Enter

## Estrutura do projeto

```txt
skillmatch-js/
│
├── skillmatch.js
└── README.md
```

## Conceitos aplicados

- Objetos e arrays
- Funções e arrow functions
- Métodos de array: map, filter, reduce
- Classes, herança e this
- Callback e closure
- Promise e async/await
- const e let

## Sobre var, let e const

No JavaScript existem três formas de declarar variáveis:

- `var` — forma antiga, tem escopo de função e pode ser redeclarada. Evitada no código moderno pois pode causar comportamentos inesperados.
- `let` — escopo de bloco, usada quando o valor precisa ser reatribuído.
- `const` — escopo de bloco, usada quando o valor não será reatribuído. Priorizada neste projeto.

## Como a internet funciona

A internet funciona com base no modelo cliente-servidor. O cliente (navegador) faz uma requisição ao servidor, que processa e devolve uma resposta com os dados solicitados.

Neste projeto, a função `simulacaoDehBusca()` simula esse comportamento usando `Promise` e `setTimeout`, representando o delay que ocorreria em uma busca real de vagas em um servidor.

## Extensões utilizadas no VS Code

- Code Runner
- JavaScript (ES6) code snippets

## Versionamento

- `main` — branch principal
- `develop` — branch de desenvolvimento
- `feat/analise-vagas` — implementação do simulador
- `docs/readme` — documentação

## Autor

Luiz Inacio Nascimento - Senai 2026
