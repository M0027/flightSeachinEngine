import { Flight  } from "../../types/interfaces";
// export interface Flight {
//   price: number;
//   departureTime: string | Date;
//   // other fields allowed
//   [key: string]: any;


// }


export function sortFlights(flights: Flight[]): Flight[] {
  return [...flights].sort((a, b) => {
    
    // small optimization: if prices are different, return the difference immediately
    if (a.price !== b.price) {
      return a.price - b.price;
    }

    // if prices are the same, sort by departure time
    return new Date(a.departureTime).getTime() -
           new Date(b.departureTime).getTime();
  });
}
