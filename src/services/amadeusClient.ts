import axios from "axios";
import { amadeusClient } from "./api";

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
  } catch (error) {
    console.error("Erro ao buscar voos:", error);
    return null;
  }
}

