import axios from "axios";
import { airports } from "../statics/airports";

/**
 * Busca voos usando Aviationstack via rota interna do Next.js
 * A rota `app/api/aviationstack/flights` usa a `API_KEY` do .env no servidor.
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
  const iataRegex = /^[A-Z]{3}$/;

  if (!origin || !destination) {
    throw new Error("origin e destination são obrigatórios");
  }

  if (!iataRegex.test(origin) || !iataRegex.test(destination)) {
    throw new Error("origin/destination devem ser códigos IATA de 3 letras (AAA)");
  }

  const originExists = airports.some((a) => a.code === origin);
  const destinationExists = airports.some((a) => a.code === destination);

  if (!originExists || !destinationExists) {
    throw new Error("origin ou destination não encontrado na lista local de aeroportos");
  }

  if (!/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(departureDate)) {
    throw new Error("departureDate deve usar o formato YYYY-MM-DD");
  }

  try {
    const baseUrl = typeof window !== "undefined" ? window.location.origin : process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

    const response = await axios.get(`${baseUrl}/api/aviationstack/flights`, {
      params: {
        dep_iata: origin,
        arr_iata: destination,
        flight_date: departureDate,
        limit: 50,
      },
    });

    // aviationstack responde com { data: [...] }
    return { data: response.data.data || [] };
  } catch (error: any) {
    console.error("Erro ao buscar voos (Aviationstack):", error.response?.data || error.message);
    throw error;
  }
}

