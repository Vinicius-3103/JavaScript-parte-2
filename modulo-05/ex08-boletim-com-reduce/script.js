/*
  Módulo 5 — Arrays e objetos
  Exercício 08 — Boletim com reduce
  Nível: Intermediário

  Objetivo: Calcular totais e médias de um array de objetos.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

const alunos = [
  { nome: "Ana", notas: [8, 7, 9] },
  { nome: "Bruno", notas: [5, 4, 6] },
  { nome: "Carla", notas: [10, 9, 9.5] },
  { nome: "Davi", notas: [6, 6, 5] }
];

// TODO 1: Crie media(notas) que usa reduce para somar e divide por notas.length.
// TODO 2: Para cada aluno, adicione uma linha na tabela (média com 1 casa).
//         Linhas de reprovados (média < 6) recebem a classe "reprovado".
// TODO 3: Mostre a média geral da turma em #geral.
// TODO 4: Descubra o aluno com maior média e mostre em #melhor.
//         Dica: copie e ordene com [...alunos].sort(...)
const tabela = document.querySelector("#tabela");
function media(notas) {
  const soma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
  return soma / notas.length;
}

alunos.forEach(aluno => {
  const mediaAluno = media(aluno.notas);
  const linha = document.createElement("tr");
  if (mediaAluno < 6) {
    linha.classList.add("reprovado");
  }
  linha.innerHTML = `<td>${aluno.nome}</td><td>${mediaAluno.toFixed(1)}</td>`;
  tabela.appendChild(linha);
});

const mediaGeral = media(alunos.flatMap(aluno => aluno.notas));
document.querySelector("#geral").textContent = mediaGeral.toFixed(1);

const melhorAluno = [...alunos].sort((a, b) => media(b.notas) - media(a.notas))[0];
document.querySelector("#melhor").textContent = `${melhorAluno.nome} — ${media(melhorAluno.notas).toFixed(1)}`; 