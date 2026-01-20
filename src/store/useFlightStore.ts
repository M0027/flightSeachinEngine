import { create } from "zustand";
import {SearchParams}  from "../types/interfaces";
import { Filters } from "../types/interfaces";


interface FlightStore {
  searchParams: SearchParams;
  flights: any[];
  filters: Filters;
  loading: boolean;
  error: string | null;

  // actions
  setSearchParams: (params: SearchParams) => void;
  setFlights: (flights: any[]) => void;
  setFilters: (filters: Filters) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useFlightStore = create<FlightStore>((set) => ({
  searchParams: { origin: "", destination: "", departureDate: "" },
  flights: [],
  filters: {},
  loading: false,
  error: null,

  setSearchParams: (params) => set({ searchParams: params }),
  setFlights: (flights) => set({ flights }),
  setFilters: (filters) => set({ filters }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
