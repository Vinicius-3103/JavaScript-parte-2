/*
  Módulo 4 — Funções
  Exercício 03 — Calculadora de média
  Nível: Básico

  Objetivo: Função com vários parâmetros e return.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

// TODO 1: Crie calcularMedia(n1, n2, n3) que devolve a média das três notas.
// TODO 2: Crie situacao(media) que devolve "Aprovado(a)" se media >= 6,
//         senão "Reprovado(a)". Use return antecipado, sem else.
// TODO 3: Use as duas funções para mostrar em #resultado:
//         "Média: 7.2 — Aprovado(a)"   (dica: media.toFixed(1))
function calcularMedia(n1, n2, n3){
  return (n1 + n2 + n3) /3;
}



function situacao(media) {
  if (media >= 6){
    return "Aprovado(a)";
  }
  return "Reprovado(a)";
}

const media = calcularMedia(7, 8, 6);
const textoSituacao = situacao(media);
const resultado = document.querySelector("#resultado");
resultado.textContent = `Média: ${media.toFixed(1)} — ${textoSituacao}`;
