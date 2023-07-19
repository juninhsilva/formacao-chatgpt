const fetch = require('node-fetch');

// Mock da função fetch para simular a chamada à API
jest.mock('node-fetch');

// Importação da função getZipCode
const { getZipCode } = require('./suaFuncao');

describe('getZipCode', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('deve retornar o código de CEP corretamente', async () => {
    const mockResponse = {
      results: [
        {
          components: {
            postcode: '12345-678'
          }
        }
      ]
    };

    // Configuração do mock da função fetch para retornar um objeto de resposta simulado
    fetch.mockResolvedValue({
      json: () => Promise.resolve(mockResponse)
    });

    const latitude = 37.7749;
    const longitude = -122.4194;

    const zipCode = await getZipCode(latitude, longitude);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=SUA_CHAVE_DE_API`
    );
    expect(zipCode).toBe('12345-678');
  });

  it('deve retornar null em caso de erro', async () => {
    // Configuração do mock da função fetch para lançar um erro simulado
    fetch.mockRejectedValue(new Error('Erro na chamada à API'));

    const latitude = 37.7749;
    const longitude = -122.4194;

    const zipCode = await getZipCode(latitude, longitude);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=SUA_CHAVE_DE_API`
    );
    expect(zipCode).toBe(null);
  });
});