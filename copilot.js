/*

Crie uma função que retorne somente os números de uma sequência de caracteres alfanuméricos

{REGRAS}

> Linguagem: Javascript
> Input: code:string
> Output: numberId:number
> Aplique boas práticas de Clean Code

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
/*

Explicação:

    A função obterNumeros recebe uma sequência de caracteres alfanuméricos chamada code.
    Utilizamos uma expressão regular (/\d+/g) para encontrar todas as ocorrências de um ou mais dígitos numéricos na sequência.
    A função match é usada para encontrar todas as correspondências da expressão regular na sequência code e retorna um array contendo os números encontrados.
    Verificamos se numerosEncontrados é um array válido.
    Se houver números encontrados, usamos o método map para converter cada elemento do array de strings para números usando Number.
    Em seguida, usamos o método reduce para encontrar o número máximo no array de números.
    Por fim, retornamos o número máximo encontrado (numeroId) ou null se nenhum número for encontrado.

Você pode testar a função chamando-a com uma sequência de caracteres alfanuméricos, por exemplo:

*/

javascript

const code = "abc123xyz456";
const numberId = obterNumeros(code);
console.log(numberId); // Output: 456
/*
Lembre-se de que a função retornará o número máximo encontrado na sequência. Se você precisar de um comportamento diferente, como retornar uma lista de todos os números encontrados, por favor, avise-me para que eu possa ajustar a função.
*/