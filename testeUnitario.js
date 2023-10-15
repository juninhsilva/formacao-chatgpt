/*
implemente testes unitários para a função abaixo:

(REGRAS)

> LINGUAGEM: Javascript
> Utilize a biblioteca JEST
> Crie ao menos 3 testes unitários

*/

function obterNumeros(code) {
  const regex = /\d+/g;
  const numerosEncontrados = code.match(regex);
  
  if (numerosEncontrados) {
    const numeros = numerosEncontrados.map(Number);
    const numeroId = numeros.reduce((max, num) => Math.max(max, num), 0);
    return numeroId;
  }
  
  return null;
}