import React, { useState } from "react";
import axios from "axios";
import John from "../assets/john.png";
import LogoWhite from "../assets/LogoWhite.svg";
import { Link } from "react-router-dom";
import Rotten from "../assets/rotten.svg";
import Imdb from "../assets/imdb.svg";
import SingIn from "../assets/Menu.svg";
import SearchMovies from "../components/SearchMovies";
import FeaturedMovies from "../components/FeaturedMovies";

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    headers: {
      accept: "application/json",
      Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmM2NjQxZTZkNGVhNTkxYzMzZmIyZjU2YTU5M2RkZCIsInN1YiI6IjYwZTBhZTc0MWU5MjI1MDA0NjI2ZWVlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oHMwZbgLwKgCl3dQEnKFaMgPW9yK95q-Q5SQE2bIC_I"
    },
  };

  const searchMovies = async (query) => {
    setLoading(true);
    setError(null);

    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${query}`;
      const response = await axios.get(url, options);
      const movies = response.data.results;

      if (movies.length === 0) {
        setError("No movies found for this search query");
      } else {
        setSearchResults(movies);
      }
    } catch (error) {
      console.error('Error searching for movies:', error);
      setError('An error occurred while fetching movies. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className="hero w-full h-[600px] py-[16px] px-[60px]"
        style={{
          backgroundImage: `url(${John})`,
          backgroundSize: `cover`,
          backgroundPositionY: `20%`,
        }}
      >
        <header className="nav flex items-center justify-between">
          <div className="logo">
            <img src={LogoWhite} alt="" srcset="" />
          </div>

          <SearchMovies onSearchTerms={searchMovies} />

          <div className="user flex items-center gap-2">
            <span className="text-[16px] font-bold text-white">Sign in</span>
            <img src={SingIn} alt="" />
          </div>
        </header>
      </div>

      <section className="px-[120px] py-[96px]">
        <h1 className="text-[36px] font-bold leading-normal">Search Results</h1>

        {loading ? (
          <p className="text-gray-800 text-xl">Loading...</p>
        ) : error ? (
          <p className="text-red-500 text-xl">{error}</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {searchResults.map((movie) => (
              <div data-testid="movie-card" key={movie.id} className="flex flex-col gap-[12px]">
                <Link to={`/movie/${movie.id}`}>
                  <img
                    data-testid="movie-poster"
                    className="w-[250px] h-[370px] object-cover"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                </Link>
                <span
                  data-testid="movie-release-date"
                  className="text-[12px] font-bold text-[#9ca3af]"
                >
                  {movie.release_date}
                </span>

                <Link to={`/movie/${movie.id}`}>
                  <h1 className="text-[18px] font-bold text-[#111827]" data-testid="movie-title">
                    {movie.title}
                  </h1>
                </Link>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img src={Imdb} alt="" srcset="" />
                    <span className="text-[12px] text-[#111827]">97%</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src={Rotten} alt="" srcset="" />
                    <span className="text-[12px] text-[#111827]">
                      {(Math.round(movie.vote_average * 100) / 100).toFixed(1)}/100
                    </span>
                  </div>
                </div>
                <span className="text-[12px] font-bold text-[#9ca3af]">Action, Adventure</span>
              </div>
            ))}
          </div>
        )}
      </section>

      <FeaturedMovies />
    </>
  );
};

export default Home;
