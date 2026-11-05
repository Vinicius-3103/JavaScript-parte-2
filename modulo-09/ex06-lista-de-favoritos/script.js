/*
  Módulo 9 — localStorage
  Exercício 06 — Lista de favoritos
  Nível: Intermediário

  Objetivo: Guardar um array de ids e marcar cards ao recarregar.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

// ---- funções utilitárias (seção 9.4 da apostila) ----
function salvar(chave, valor) {
  localStorage.setItem(chave, JSON.stringify(valor));
}

function carregar(chave, valorPadrao) {
  const texto = localStorage.getItem(chave);
  if (texto === null) return valorPadrao;
  try {
    return JSON.parse(texto);
  } catch {
    return valorPadrao;
  }
}
// -------------------------------------------------------

const filmes = [
  { id: 1, titulo: "Filme A", ano: 2019 },
  { id: 2, titulo: "Filme B", ano: 2021 },
  { id: 3, titulo: "Filme C", ano: 2023 },
  { id: 4, titulo: "Filme D", ano: 2024 }
];

let favoritos = carregar("favoritos", []); // array de ids, ex.: [2, 4]

// TODO 1: renderizar(): cria um card por filme com título, ano e um botão
//         <button class="estrela" data-id="...">⭐</button>. Se o id estiver em
//         "favoritos" (includes), o botão ganha a classe "fav".
// TODO 2: Delegação em #filmes: clicar na estrela adiciona ou remove o id de
//         "favoritos", salva e redesenha.
// TODO 3: Em #resumo, mostre "Favoritos: Filme B, Filme D".
