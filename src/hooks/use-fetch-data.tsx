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
        // const { data: response } = await axios.get(`${process.env.API_PATH}`);
        const { data: response }: any  = await axios.get('http://localhost:3001/response');
        console.log(response)
        response.forEach((flight: unknown) => ApiResponseFlightTracker.parse(flight));
        setData(response);
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