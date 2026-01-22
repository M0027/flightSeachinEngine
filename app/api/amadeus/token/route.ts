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
        console.log("Erro real do Amadeus:", error.response?.data || error.message);
        return NextResponse.json(
            { message: "Erro ao obter token Amadeus" },
            { status: 500 }
        );
    }
}
