import axios from "axios";
import { amadeusClient } from "./api";
import { airports } from "../statics/airports";

// Cache do token e expiração
// Token cache and expiration
let accessToken: string | null = null;
let tokenExpiration: number | null = null;

/**
 * Busca token OAuth via API Route
 * fecth token from API Route
 */
async function getAccessToken() {
  if (accessToken && tokenExpiration && Date.now() < tokenExpiration) {
    return accessToken;
  }

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const response = await axios.post(`${baseUrl}/api/amadeus/token`);

  accessToken = response.data.access_token;
  tokenExpiration = Date.now() + response.data.expires_in * 1000;

  console.log("token de access:", accessToken)
  return accessToken;
}


(async () => {
  const token = await getAccessToken();
  console.log("token de access:", token);
})();



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
      const resp = error.response;
      const config = error.config || {};
      console.error("Erro Amadeus:", {
        status: resp.status,
        url: config.url,
        method: config.method,
        params: config.params,
        requestData: config.data,
        responseData: resp.data,
        responseHeaders: resp.headers,
      });

      // Para erros 5xx do Amadeus, pode ser transitório (SYSTEM ERROR).
      // Recomenda-se retry com backoff no nível que faz sentido para sua aplicação.
    } else {
      console.error("Erro de rede ou servidor indisponível", error.message);
    }

    return Promise.reject(error);
  }
);


/**
 * Busca voos usando Amadeus Flight Offers
 * Search flights using Amadeus Flight Offers API
 */
export async function searchFlights({
  origin,
  destination,
  departureDate,
  adults = 1,
}: {
  origin: string;
  destination: string;
  departureDate: string;
  adults?: number;
}) {
  // Validações básicas para evitar 400 do provedor
  const iataRegex = /^[A-Z]{3}$/;

  if (!origin || !destination) {
    throw new Error("origin e destination são obrigatórios");
  }

  if (!iataRegex.test(origin) || !iataRegex.test(destination)) {
    throw new Error("origin/destination devem ser códigos IATA de 3 letras (AAA)");
  }

  // opcional: validar contra lista local de aeroportos se disponível
  const originExists = airports.some((a) => a.code === origin);
  const destinationExists = airports.some((a) => a.code === destination);

  if (!originExists || !destinationExists) {
    throw new Error("origin ou destination não encontrado na lista local de aeroportos");
  }

  // validar data
  if (!/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(departureDate)) {
    throw new Error("departureDate deve usar o formato YYYY-MM-DD");
  }

  const dep = new Date(departureDate + "T00:00:00Z");
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (isNaN(dep.getTime())) {
    throw new Error("departureDate inválida");
  }

  if (dep < today) {
    throw new Error("departureDate não pode ser no passado");
  }

  if (!Number.isInteger(adults) || adults < 1) {
    throw new Error("adults deve ser inteiro >= 1");
  }

  try {
    const response = await amadeusClient.get("/v2/shopping/flight-offers", {
      params: {
        originLocationCode: origin,
        destinationLocationCode: destination,
        departureDate,
        adults,
        max: 10, // Limite para teste
      },
    });

    return response.data;
  } catch (error: any) {
    console.error("Erro ao buscar voos (Amadeus):", error.response?.data || error.message);
    // Propagar erro para que o hook `useFlights` trate e atualize estado de erro
    throw error;
  }
}

