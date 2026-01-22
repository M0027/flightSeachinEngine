'use client';
import React, { useMemo } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useFlightStore } from '../../store/useFlightStore';
import { applyFilters } from '../../filters/applyFilters';
import { sortFlights } from '../filters/sortFlights';
import { Flight } from '../../types/interfaces';
import{colors} from '../../statics/color';

const FlightBarChart: React.FC = () => {
  const flights = useFlightStore((state) => state.flights);
  const filters = useFlightStore((state) => state.filters);

  const chartData = useMemo(() => {
    const visibleFlights = sortFlights(applyFilters(flights, filters));

    // Group by airline and calculate average price
    const dataMap = new Map<string, { airline: string; price: number; count: number }>();

    visibleFlights.forEach((flight: Flight) => {
      if (dataMap.has(flight.airline)) {
        const existing = dataMap.get(flight.airline)!;
        existing.price += flight.price;
        existing.count += 1;
      } else {
        dataMap.set(flight.airline, { airline: flight.airline, price: flight.price, count: 1 });
      }
    });

    return Array.from(dataMap.values()).map(item => ({
      airline: item.airline,
      price: Math.round(item.price / item.count), // Average price
    }));
  }, [flights, filters]);

  return (
    <div style={{ maxWidth: '780px', width: '100%' }}>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
          <XAxis dataKey="airline" interval={0} angle={-30} textAnchor="end" height={60} />
          <YAxis />
          <Tooltip cursor={{ fill: 'transparent' }} />
          <Bar dataKey="price" fill={colors.primary} animationEasing="ease-in-out" animationDuration={500} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FlightBarChart;
