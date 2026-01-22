import { NextResponse } from "next/server";
import axios from "axios";

export async function POST() {


    try {
        const response = await axios.post(
            `${process.env.AMADEUS_BASE_URL}/v1/security/oauth2/token`,
            new URLSearchParams({
                grant_type: "client_credentials",
                client_id: process.env.AMADEUS_API_KEY!,
                client_secret: process.env.AMADEUS_API_SECRET!,
            }),
            {
                // Amadeus API exige este header
                // Amadeus API requires this header
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );

        return NextResponse.json(response.data);
    } catch (error: any) {
        const amadeusError = error.response?.data;
        console.error("Erro real do Amadeus:", amadeusError || error.message);

        const statusCode = error.response?.status || 500;

        // Em desenvolvimento retornamos o payload do Amadeus para ajudar a debugar.
        // Em produção, devolvemos uma mensagem genérica para não vazar detalhes.
        const payload =
            process.env.NODE_ENV !== "production"
                ? { message: "Erro ao obter token Amadeus", amadeusError }
                : { message: "Erro ao obter token Amadeus" };

        return NextResponse.json(payload, { status: statusCode });
    }
}
