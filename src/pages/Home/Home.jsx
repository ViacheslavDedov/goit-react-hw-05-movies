import { Link } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { useFetchTrendingMovies } from 'hooks/useFetchTrendingMovies';

const Home = () => {

  const { items, loading } = useFetchTrendingMovies();
 
  return (
    <main>
      {loading && <Loader />}
      <ul>
        {items.map(({ id, title, name }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title || name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;