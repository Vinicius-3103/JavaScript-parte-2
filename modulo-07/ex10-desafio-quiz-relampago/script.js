/*
  Módulo 7 — Eventos
  Exercício 10 — Desafio: quiz relâmpago
  Nível: Desafio

  Objetivo: Mini-projeto: estado, botões criados dinamicamente e setTimeout.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

const perguntas = [
  { pergunta: "Qual método adiciona no FIM de um array?", opcoes: ["push", "shift", "pop"], correta: 0 },
  { pergunta: "Qual é mais seguro para texto do usuário?", opcoes: ["innerHTML", "textContent", "outerHTML"], correta: 1 },
  { pergunta: "O que filter devolve?", opcoes: ["Um item", "undefined", "Um array"], correta: 2 },
  { pergunta: "Qual evento dispara a cada tecla num campo?", opcoes: ["change", "input", "submit"], correta: 1 },
  { pergunta: "Como impedir o form de recarregar a página?", opcoes: ["e.stop()", "return false", "e.preventDefault()"], correta: 2 }
];

let indice = 0;
let pontos = 0;

// TODO 1: mostrarPergunta(): preenche #progresso ("Pergunta 1 de 5"), #pergunta
//         e cria um <button> por opção em #opcoes (limpe antes!).
//         Guarde o índice da opção em data-indice.
// TODO 2: Delegação em #opcoes: ao clicar, pinte o botão com "certa" ou "errada",
//         some ponto se acertou, desabilite todos os botões e, depois de 1 s
//         (setTimeout), avance para a próxima pergunta.
// TODO 3: Ao acabar, esconda #quiz (hidden = true), mostre #fim e a pontuação.
// TODO 4: #reiniciar zera tudo e recomeça.
