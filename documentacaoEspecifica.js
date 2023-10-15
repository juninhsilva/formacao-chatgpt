/*
Crie uma documentação para o código abaixo baseando-se na documentação abaixo
*/

async function getZipCode(latitude, longitude) {
    const apiKey = 'SUA_CHAVE_DE_API'; // Substitua 'SUA_CHAVE_DE_API' pela sua chave de API do OpenCage Geocoder
    
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${apiKey}`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.results.length > 0) {
        const zipCode = data.results[0].components.postcode;
        return zipCode;
      } else {
        throw new Error('Não foi possível obter o código de CEP.');
      }
    } catch (error) {
      console.error('Ocorreu um erro:', error.message);
      return null;
    }
  }

  /**
 * Função assíncrona para obter o código de CEP com base em coordenadas de latitude e longitude.
 *
 * @param {number} latitude - A latitude das coordenadas geográficas.
 * @param {number} longitude - A longitude das coordenadas geográficas.
 * @returns {Promise<string | null>} - Uma Promise que resolve com o código de CEP ou null se não for possível obter o código de CEP.
 * @throws {Error} - Lança um erro se não for possível obter o código de CEP.
 *
 * @example
 * const apiKey = 'SUA_CHAVE_DE_API'; // Substitua 'SUA_CHAVE_DE_API' pela sua chave de API do OpenCage Geocoder
 * const latitude = 12.34;
 * const longitude = 56.78;
 *
 * getZipCode(latitude, longitude)
 *   .then((zipCode) => {
 *     console.log(`O código de CEP é: ${zipCode}`);
 *   })
 *   .catch((error) => {
 *     console.error(`Ocorreu um erro: ${error.message}`);
 *   });
 */
async function getZipCode(latitude, longitude) {
    // Sua chave de API do OpenCage Geocoder para acessar o serviço de geocodificação.
    const apiKey = 'SUA_CHAVE_DE_API';
  
    // Constrói a URL para a consulta usando a latitude, longitude e a chave de API.
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${apiKey}`;
  
    try {
      // Faz uma solicitação assíncrona para a API de geocodificação.
      const response = await fetch(url);
  
      // Analisa a resposta como JSON.
      const data = await response.json();
  
      // Verifica se a resposta contém resultados.
      if (data.results.length > 0) {
        // Extrai o código de CEP da primeira entrada nos resultados.
        const zipCode = data.results[0].components.postcode;
        return zipCode;
      } else {
        // Lança um erro se não houver resultados na resposta.
        throw new Error('Não foi possível obter o código de CEP.');
      }
    } catch (error) {
      // Registra um erro e retorna null em caso de erro na solicitação.
      console.error('Ocorreu um erro:', error.message);
      return null;
    }
  }

  /**
 * Função assíncrona para obter o código de CEP com base em coordenadas de latitude e longitude.
 *
 * @since      1.0.0
 * @access     private
 *
 * @param {number} latitude - A latitude das coordenadas geográficas.
 * @param {number} longitude - A longitude das coordenadas geográficas.
 * @returns {Promise<string | null>} - Uma Promise que resolve com o código de CEP ou null se não for possível obter o código de CEP.
 * @throws {Error} - Lança um erro se não for possível obter o código de CEP.
 *
 * @param {string} apiKey - A chave de API do OpenCage Geocoder. Substitua 'SUA_CHAVE_DE_API' pela sua chave de API antes de usar.
 * @param {string} url - A URL para fazer a solicitação de geocodificação.
 * @param {Response} response - A resposta da solicitação à API.
 * @param {Object} data - Os dados JSON retornados pela API de geocodificação.
 * @param {string} zipCode - O código de CEP obtido a partir dos resultados.
 *
 * @return {string | null} - O código de CEP encontrado na resposta ou null se nenhum código de CEP for encontrado.
 *
 * @example
 * const apiKey = 'SUA_CHAVE_DE_API'; // Substitua 'SUA_CHAVE_DE_API' pela sua chave de API do OpenCage Geocoder
 * const latitude = 12.34;
 * const longitude = 56.78;
 *
 * try {
 *   const code = await getZipCode(latitude, longitude);
 *   if (code) {
 *     console.log(`O código de CEP é: ${code}`);
 *   } else {
 *     console.error('Não foi possível obter o código de CEP.');
 *   }
 * } catch (error) {
 *   console.error(`Ocorreu um erro: ${error.message}`);
 * }
 */
async function getZipCode(latitude, longitude) {
    // Sua chave de API do OpenCage Geocoder para acessar o serviço de geocodificação.
    const apiKey = 'SUA_CHAVE_DE_API';
  
    // Constrói a URL para a consulta usando a latitude, longitude e a chave de API.
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${apiKey}`;
  
    try {
      // Faz uma solicitação assíncrona para a API de geocodificação.
      const response = await fetch(url);
  
      // Analisa a resposta como JSON.
      const data = await response.json();
  
      // Verifica se a resposta contém resultados.
      if (data.results.length > 0) {
        // Extrai o código de CEP da primeira entrada nos resultados.
        const zipCode = data.results[0].components.postcode;
        return zipCode;
      } else {
        // Lança um erro se não houver resultados na resposta.
        throw new Error('Não foi possível obter o código de CEP.');
      }
    } catch (error) {
      // Registra um erro e retorna null em caso de erro na solicitação.
      console.error('Ocorreu um erro:', error.message);
      return null;
    }
  }
  