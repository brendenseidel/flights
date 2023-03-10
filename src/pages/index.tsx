import Head from "next/head";
import useFetchData from '@/hooks/use-fetch-data'
import { ApiResponseFlightTracker } from "@/types/api-response-flight-tracker";

export default function Home() {
  const {
    data,
    loading,
  } = useFetchData();

  return (
    <>
      <Head>
        <title>Flights</title>
        <meta name="description" content="Flight tracker" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main>
        <div>
          {loading && <div>Loading</div>}
          {!loading && (
            <div>
              <h2>Current Flights</h2>
              {data.map((flight: ApiResponseFlightTracker) => (<p key={flight.hex}>{flight.hex}</p>))}
            </div>
          )}
        </div>
      </main>


    </>
  );
}