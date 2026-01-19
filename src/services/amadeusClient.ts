import axios from "axios";

let accessToken: string | null = null;
let tokenExpiration: number | null = null;

/**
 * Busca token OAuth via API Route
 */
async function getAccessToken() {
  if (accessToken && tokenExpiration && Date.now() < tokenExpiration) {
    return accessToken;
  }

  const response = await axios.post("/api/amadeus/token");

  accessToken = response.data.access_token;
  tokenExpiration = Date.now() + response.data.expires_in * 1000;

  return accessToken;
}

export const amadeusClient = axios.create({
  baseURL: "https://test.api.amadeus.com",
});

/**
 * Interceptor de Request
 * Injeta token automaticamente
 */
amadeusClient.interceptors.request.use(
  async (config) => {
    const token = await getAccessToken();
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * Interceptor de Response
 * Tratamento básico de erros
 */
amadeusClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error(
        "Erro Amadeus:",
        error.response.status,
        error.response.data
      );
    } else {
      console.error("Erro de rede ou servidor indisponível");
    }

    return Promise.reject(error);
  }
);
