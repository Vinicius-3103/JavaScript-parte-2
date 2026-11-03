/*
  Módulo 5 — Arrays e objetos
  Exercício 10 — Desafio: playlist da turma
  Nível: Desafio

  Objetivo: Mini-projeto: filtrar, ordenar e somar dados reais.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

const musicas = [
  { titulo: "Música A", genero: "pop", segundos: 210, votos: 18 },
  { titulo: "Música B", genero: "rock", segundos: 260, votos: 25 },
  { titulo: "Música C", genero: "funk", segundos: 185, votos: 31 },
  { titulo: "Música D", genero: "pop", segundos: 198, votos: 9 },
  { titulo: "Música E", genero: "rock", segundos: 305, votos: 14 },
  { titulo: "Música F", genero: "funk", segundos: 172, votos: 22 }
];

// TODO 1: Crie formatarTempo(segundos) -> "3:30" (dica: Math.floor e %,
//         e padStart(2, "0") para os segundos).
// TODO 2: Crie renderizar() que:
//         - filtra pelo gênero escolhido no select ("todos" mostra tudo);
//         - se o checkbox estiver marcado, ordena por votos (maior primeiro);
//         - mostra cada música como <li>: "Título — 3:30 — 18 votos";
//         - mostra em #duracao a duração total da lista exibida.
// TODO 3: Chame renderizar() no início e nos eventos "change" do select
//         e do checkbox.
const selectGenero = document.querySelector("#genero");
const checkboxOrdenar = document.querySelector("#ordenar");
const ul = document.querySelector("#musicas");
const duracaoTotal = document.querySelector("#duracao");

function formatarTempo(segundos) {
  const minutos = Math.floor(segundos / 60);
  const segundosRestantes = segundos % 60;
  return `${minutos}:${segundosRestantes.toString().padStart(2, "0")}`;
}

function renderizar() {
  let generoSelecionado = selectGenero.value;
  let ordenarPorVotos = checkboxOrdenar.checked;

  let musicasFiltradas = generoSelecionado === "todos" ? musicas : musicas.filter(m => m.genero === generoSelecionado);

  if (ordenarPorVotos) {
    musicasFiltradas.sort((a, b) => b.votos - a.votos);
  }

  ul.innerHTML = "";
  let duracaoTotalSegundos = 0;

  for (let musica of musicasFiltradas) {
    ul.innerHTML += `<li>${musica.titulo} — ${formatarTempo(musica.segundos)} — ${musica.votos} votos</li>`;
    duracaoTotalSegundos += musica.segundos;
  }

  duracaoTotal.textContent = formatarTempo(duracaoTotalSegundos);
}

renderizar();

selectGenero.addEventListener("change", renderizar);
checkboxOrdenar.addEventListener("change", renderizar); 

