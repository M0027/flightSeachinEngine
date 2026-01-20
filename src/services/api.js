import axios from "axios";

export const amadeusClient = axios.create({
  baseURL: process.env.AMADEUS_BASE_URL || "https://test.api.amadeus.com",
});