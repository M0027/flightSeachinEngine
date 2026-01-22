import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: Request) {
    
 
    try {
    const { searchParams } = new URL(request.url);

    const dep_iata = searchParams.get("dep_iata");
    const arr_iata = searchParams.get("arr_iata") || searchParams.get("ari_iata");
    const flight_date = searchParams.get("flight_date");
    const limit = searchParams.get("limit") || "50";

    const apiKey = process.env.API_KEY || process.env.AVIATIONSTACK_API_KEY || process.env.NEXT_PUBLIC_API_KEY;
     
    if (!apiKey) {
      const msg = "Missing Aviationstack API key. Please set API_KEY in .env.local";
      console.error(msg);
      return NextResponse.json({ message: msg }, { status: 500 });
    }

    const params: any = {
      access_key: apiKey,
      limit,
    };

    if (dep_iata) params.dep_iata = dep_iata;
    if (arr_iata) params.arr_iata = arr_iata;
    // if (flight_date) params.flight_date = flight_date;

    const response = await axios.get("http://api.aviationstack.com/v1/flights", {
      params,
    });

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error("Erro Aviationstack:", error.response?.data || error.message);
    const status = error.response?.status || 500;
    const payload = process.env.NODE_ENV !== "production" ? { message: "Erro ao consultar Aviationstack", details: error.response?.data } : { message: "Erro ao consultar Aviationstack" };
    return NextResponse.json(payload, { status });
  }
}
