/*
Refatore o código abaixo aplicando os conceitos de Clean Code e Single Responsability

(REGRAS)
> Linguagem Javascript
> Cire um código que seja testável
> Implemente ao menos um teste unitário ulitizando JEST

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

  // REFATORADO

  // Função para extrair números de uma string
function extrairNumeros(code) {
    const regex = /\d+/g;
    const numerosEncontrados = code.match(regex);
    return numerosEncontrados ? numerosEncontrados.map(Number) : [];
  }
  
  // Função para obter o número máximo de uma matriz de números
  function obterNumeroMaximo(numeros) {
    return numeros.reduce((max, num) => Math.max(max, num), 0);
  }
  
  // Função principal que chama as funções auxiliares
  function obterNumeroMaximoDaString(code) {
    const numeros = extrairNumeros(code);
    if (numeros.length > 0) {
      return obterNumeroMaximo(numeros);
    }
    return null;
  }
  
  module.exports = { extrairNumeros, obterNumeroMaximo, obterNumeroMaximoDaString };


// TESTE UNITÁRIO
const {
    extrairNumeros,
    obterNumeroMaximo,
    obterNumeroMaximoDaString,
  } = require('./seuarquivo'); // Substitua 'seuarquivo' pelo nome do seu arquivo
  
  describe('obterNumeroMaximoDaString', () => {
    it('deve retornar o número máximo da string', () => {
      const code = 'abc123xyz456def789';
      expect(obterNumeroMaximoDaString(code)).toBe(789);
    });
  
    it('deve retornar null para uma string sem números', () => {
      const code = 'abcxyz';
      expect(obterNumeroMaximoDaString(code)).toBeNull();
    });
  
    it('deve lidar com números negativos', () => {
      const code = 'abc-123xyz-456def-789';
      expect(obterNumeroMaximoDaString(code)).toBe(-123);
    });
  
    it('deve lidar com números decimais', () => {
      const code = 'abc12.3xyz4.56def7.89';
      expect(obterNumeroMaximoDaString(code)).toBe(12.3);
    });
  });
  