/*
  Módulo 9 — localStorage
  Exercício 10 — Desafio: controle de gastos
  Nível: Desafio

  Objetivo: Mini-projeto: CRUD simples com totais por categoria.

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

let gastos = carregar("gastos", []); // [{ id, descricao, valor, categoria }]
const nomesCategorias = { alimentacao: "Alimentação", transporte: "Transporte", lazer: "Lazer" };
const formatar = v => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

// TODO 1: Valide o formulário: descrição não vazia, valor > 0, categoria escolhida.
//         Mostre o erro em #erro.
// TODO 2: Adicione o gasto, salve, limpe o form e redesenhe.
// TODO 3: renderizar(): lista os gastos (com botão de remover), mostra o total
//         e, em #categorias, uma linha por categoria com nome, uma barra
//         (style.width proporcional ao total) e o valor.
// TODO 4: Remover usa delegação e filter por id.
// DESAFIO: botão "Nova semana" que pede confirmação na página (não use confirm())
//          e limpa tudo.
