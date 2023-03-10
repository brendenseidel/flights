// use-fetch-data.js
import { useEffect, useState} from 'react';
import axios from 'axios';
import { ApiResponseFlightTracker } from '@/types/api-response-flight-tracker';

const useFetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('hello')
        const { data: response } = await axios.get(process.env.NEXT_PUBLIC_API_URL as string);
        const flightData = response.response ? response.response : response;
        flightData.forEach((flight: unknown) => ApiResponseFlightTracker.parse(flight));
        setData(flightData);
      } catch (error) {
        console.error(error)
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    data,
    loading,
  };
};

export default useFetchData;