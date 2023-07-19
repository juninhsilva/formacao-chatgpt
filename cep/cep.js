//implemente a lógica da função abaixo em Javascript

//passa as coordenadas de longitude e latitude e retorna código de cep do local
function getZipCOde(latitude, longitude){}

/*Para implementar a lógica da função getZipCode em JavaScript, você precisará usar uma API de serviço de CEP para obter o código de CEP com base nas coordenadas de latitude e longitude fornecidas. Existem várias APIs disponíveis para essa finalidade. Neste exemplo, usaremos a API do OpenCage Geocoder, que requer uma chave de API para acesso.

Aqui está a implementação da função getZipCode usando a API do OpenCage Geocoder:

javascript

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
/*

Explicação:

    A função getZipCode recebe as coordenadas de latitude e longitude como parâmetros.
    É necessário substituir 'SUA_CHAVE_DE_API' pela sua chave de API válida do OpenCage Geocoder.
    Construímos a URL da API usando as coordenadas fornecidas e a chave de API.
    Usamos a função fetch para fazer uma chamada assíncrona à API e aguardamos a resposta usando a palavra-chave await.
    Convertemos a resposta em um objeto JSON usando o método json().
    Verificamos se existem resultados retornados pela API.
    Se houver resultados, extraímos o código de CEP da propriedade components.postcode do primeiro resultado e o retornamos.
    Se não houver resultados, lançamos um erro.
    Se ocorrer algum erro durante a chamada à API ou processamento da resposta, o erro será capturado no bloco catch, e uma mensagem de erro será exibida no console. A função retorna null em caso de erro.

Você pode testar a função getZipCode passando as coordenadas de latitude e longitude desejadas, por exemplo:
*/

//javascript

const latitude = 37.7749;
const longitude = -122.4194;

getZipCode(latitude, longitude)
  .then(zipCode => {
    console.log(zipCode);
  })
  .catch(error => {
    console.error(error);
  });
/*
Certifique-se de substituir 'SUA_CHAVE_DE_API' pela sua chave de API válida do OpenCage Geocoder. Observe também que essa função usa a sintaxe de async/await para lidar com a chamada assíncrona à API, portanto, é necessário executá-la em um ambiente compatível com essa sintaxe ou fazer ajustes para usar Promises.
*/