import { useEffect } from "react";
import MovieListing from "../../components/movieListing/MovieListing";
import MovieApi from "../../common/apis/MovieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

const Home = () => {
  const movieText = "Harry";
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await MovieApi.get(
        `?apiKey=${APIKey}&s=${movieText}&type=movie`
      ).catch((err) => console.log("Error Message:", err));
      console.log("API response:", response);
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
