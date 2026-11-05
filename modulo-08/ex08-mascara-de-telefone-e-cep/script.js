/*
  Módulo 8 — Formulários e validação
  Exercício 08 — Máscara de telefone e CEP
  Nível: Intermediário

  Objetivo: Manipular o valor do campo enquanto o usuário digita.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

// TODO 1: No "input" do #tel, deixe só dígitos (valor.replace(/\D/g, "")),
//         limite a 11 dígitos (slice) e formate como (27) 99999-9999
//         conforme a quantidade de dígitos digitados (veja a seção 8.7).
// TODO 2: Faça o mesmo para o CEP: 8 dígitos, formato 29000-000.
// TODO 3: Ao sair do campo ("blur"), se o telefone tiver menos de 11 dígitos,
//         adicione a classe "invalido" na .campo; senão, "valido".
