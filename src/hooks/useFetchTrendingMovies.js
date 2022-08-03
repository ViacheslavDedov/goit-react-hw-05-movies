import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/moviesApi';

export const useFetchTrendingMovies = () => { 
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
    const fetchTrendingMovies = async () => {
      setLoading(true);
      try {
        const itemsData = await getTrendingMovies();
        setItems(itemsData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTrendingMovies();
    }, []);
    return { items, loading };
}