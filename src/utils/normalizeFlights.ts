/**
 * Normaliza dados da Aviationstack para o modelo interno
 * Exemplo de entrada (cada item em `data`):
 * {
 *  flight_date, flight_status,
 *  departure: {airport, iata, scheduled, estimated},
 *  arrival: {airport, iata, scheduled, estimated},
 *  airline: {name, iata},
 *  flight: {number, iata}
 * }
 */
export function normalizeFlights(flightOffers: any[]) {
  function hashString(str: string) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24);
    }
    return Math.abs(h >>> 0);
  }

  function generateMockPrice(opts: { key: string; durationMin?: number; stops?: number }) {
    const { key, durationMin = 0, stops = 0 } = opts;
    const h = hashString(key);
    const baseMin = 40; // preço mínimo
    const baseMax = 1200; // preço máximo

    const durationFactor = Math.min(Math.round(durationMin / 60) * 18, 300);
    const stopsFactor = stops * 35; // cada parada altera o preço

    const rnd = h % (baseMax - baseMin + 1);
    let price = baseMin + rnd + durationFactor + stopsFactor;

    // arredonda para 5 (aparência mais realista) e mantém um teto
    price = Math.min(Math.max(Math.round(price / 5) * 5, baseMin), baseMax + 500);

    return price;
  }

  return flightOffers.map((item) => {
    const dep = item.departure || {};
    const arr = item.arrival || {};
    const airline = item.airline || {};
    const flight = item.flight || {};

    // Tentativa de calcular duração quando possível
    let duration = "";
    let durationMinutes: number | undefined = undefined;
    try {
      const s = dep.scheduled || dep.estimated || dep.actual;
      const e = arr.scheduled || arr.estimated || arr.actual;
      if (s && e) {
        const sd = new Date(s);
        const ed = new Date(e);
        if (!isNaN(sd.getTime()) && !isNaN(ed.getTime())) {
          const diff = (ed.getTime() - sd.getTime()) / 60000; // minutos
          const hours = Math.floor(diff / 60);
          const minutes = Math.round(diff % 60);
          duration = `${hours}h ${minutes}m`;
          durationMinutes = Math.round(diff);
        }
      }
    } catch (e) {
      duration = "";
    }

    return {
      id: item.flight_status ? `${item.flight_status}-${flight.number || item.flight.iata}` : item.flight?.number || item.flight?.iata || item.flight_date || Math.random().toString(36).slice(2, 9),
      departure: dep.iata || dep.airport || "",
      arrival: arr.iata || arr.airport || "",
      departureTime: dep.scheduled || dep.estimated || dep.actual || "",
      arrivalTime: arr.scheduled || arr.estimated || arr.actual || "",
      duration,
      airline: airline.iata || airline.name || "",
      flightNumber: flight.number || flight.iata || "",
      price: generateMockPrice({
        key: `${item.flight_status || ''}-${flight.number || flight.iata || item.flight_date || ''}-${dep.iata || ''}-${arr.iata || ''}-${dep.scheduled || ''}`,
        durationMin: typeof durationMinutes === 'number' ? durationMinutes : undefined,
        stops: item.number_of_stops ?? 0,
      }),
      stops: item.number_of_stops ?? 0,
      currency: 'USD',
    };
  });
}
