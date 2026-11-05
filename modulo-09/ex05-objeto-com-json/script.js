/*
  Módulo 9 — localStorage
  Exercício 05 — Objeto com JSON
  Nível: Intermediário

  Objetivo: stringify e parse com um objeto de configurações.

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

// TODO 1: Carregue o objeto "perfil" com padrão { apelido: "", fonte: 16, notificacoes: false }.
// TODO 2: Crie aplicarPerfil(): preenche o formulário com os dados, aplica
//         document.body.style.fontSize = perfil.fonte + "px" e mostra
//         "Olá, APELIDO!" em #saudacao (se houver apelido).
// TODO 3: No submit (preventDefault!), monte o objeto a partir do form
//         (fonte com Number, notificações com .checked), salve e aplique.
// TODO 4: No console, compare localStorage.getItem("perfil") com carregar("perfil").
//         Qual é texto e qual é objeto?
