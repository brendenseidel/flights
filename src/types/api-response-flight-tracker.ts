// https://airlabs.co/docs/flights

import { z } from "zod";

export const ApiResponseFlightTracker = z.object({
  hex: z.string(),
  reg_number: z.string(),
  flag: z.string(),
  lat: z.number(),
  lng: z.number(),
  alt: z.number(),
  dir: z.number(),
  speed: z.number(),
  v_speed: z.number().optional(),
  squawk: z.string().optional(),
  airline_icao: z.string(),
  airline_iata: z.string(),
  aircraft_icao: z.string(),
  flight_icao: z.string().optional(),
  flight_iata: z.string().optional(),
  flight_number: z.string().optional(),
  dep_icao: z.string().optional(),
  dep_iata: z.string().optional(),
  arr_icao: z.string().optional(),
  arr_iata: z.string().optional(),
  updated: z.number(),
  status: z.string()
})

export type ApiResponseFlightTracker = z.infer<typeof ApiResponseFlightTracker>