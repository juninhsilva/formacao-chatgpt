/*
Faça uma documentação para o código Javascript abaixo
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

/**
 * Função para extrair e obter o número máximo de uma string.
 *
 * @param {string} code - A string da qual os números serão extraídos.
 * @returns {number | null} - O número máximo encontrado na string ou null se nenhum número for encontrado.
 */
function obterNumeros(code) {
    // Expressão regular para encontrar todos os números na string.
    const regex = /\d+/g;
  
    // Encontra todos os números na string que correspondem à expressão regular.
    const numerosEncontrados = code.match(regex);
  
    // Verifica se foram encontrados números na string.
    if (numerosEncontrados) {
      // Converte os números encontrados em uma matriz de números.
      const numeros = numerosEncontrados.map(Number);
  
      // Encontra o número máximo na matriz de números usando a função reduce.
      const numeroMaximo = numeros.reduce((max, num) => Math.max(max, num), 0);
  
      // Retorna o número máximo encontrado na string.
      return numeroMaximo;
    }
    
    // Retorna null se nenhum número for encontrado na string.
    return null;
  }

  