/*
  Módulo 8 — Formulários e validação
  Exercício 05 — E-mail e idade
  Nível: Intermediário

  Objetivo: Funções de regra reutilizáveis (regex e intervalo numérico).

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

const emailValido = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const entre = (n, min, max) => n >= min && n <= max;

// TODO 1: Teste emailValido no console com 4 exemplos (2 válidos, 2 inválidos).
// TODO 2: validarEmail(): erro "Use o formato nome@dominio.com".
// TODO 3: validarIdade(): campo vazio OU fora de 14 a 20 -> erro
//         "A idade deve estar entre 14 e 20". Cuidado: Number("") é 0!
// TODO 4: Valide no submit e também ao SAIR de cada campo (evento "blur").
