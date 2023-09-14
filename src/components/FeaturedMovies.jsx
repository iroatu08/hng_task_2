/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Rotten from "../assets/rotten.svg";
import Imdb from "../assets/imdb.svg";
import { Link } from "react-router-dom";
import axios from "axios";


const FeaturedMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState();
    const [error, setError] = useState(null);
  
    const options = {
      headers: {
        accept: "application/json",
        Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmM2NjQxZTZkNGVhNTkxYzMzZmIyZjU2YTU5M2RkZCIsInN1YiI6IjYwZTBhZTc0MWU5MjI1MDA0NjI2ZWVlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oHMwZbgLwKgCl3dQEnKFaMgPW9yK95q-Q5SQE2bIC_I"
      },
    };
  

    useEffect(() => {
        const getMovieRequest = async () => {
          setLoading(true);
          try {
            const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`;
            const response = await axios.get(url, options);
            const top10Movies = response.data.results.slice(0, 10);
            if (top10Movies.length === 0) {
              setError("No movies found.");
            } else {
              setMovies(top10Movies);
            }
            console.log(top10Movies);
          } catch (error) {
            console.error("Error fetching top movies:", error);
            setError("An error occurred while fetching search results.");
          } finally {
            setLoading(false);
            setError(null);
          }
        };
        getMovieRequest();
        
      }, []);

      
  return (
    <div className="px-[120px] py-[96px]">
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-[36px] font-bold leading-normal">
          Featured Movies
        </h1>

        <span className="text-[18px] leading-[24px] text-[#BE123C]">
          See more {">"}{" "}
        </span>
      </div>

      {loading ? (
        <p className="text-[24px]">Loading...</p>
      ) : error ? (
        <p className="text-[24px]">Error: {error}</p>
      ) : (
        <div className="overflow-x-auto">
          <div className="grid grid-cols-4 gap-6">
            {movies.map((movie, index) => (
              <>
                <div
                  data-testid="movie-card"
                  key={movie.id}
                  className="flex flex-col gap-[12px]"
                >
                  <Link to={`/movie/${movie.id}`}>
                    <img
                      data-testid="movie-poster"
                      className="w-[250px] h-[370px] object-cover"
                      src={
                        "https://image.tmdb.org/t/p/w500" +
                        movie.poster_path
                      }
                      alt={movie.path}
                    />
                  </Link>
                  <span
                    data-testid="movie-release-date"
                    className="text-[12px] font-bold text-[#9ca3af]"
                  >
                    {movie.release_date}
                  </span>

                  <Link to={`/movie/${movie.id}`}>
                    <h1
                      className="text-[18px] font-bold text-[#111827]"
                      data-testid="movie-title"
                    >
                      {movie.title}
                    </h1>
                  </Link>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img src={Imdb} alt="" srcset="" />
                      <span className="text-[12px] text-[#111827]">
                        97%
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <img src={Rotten} alt="" srcset="" />
                      <span className="text-[12px] text-[#111827]">
                        {(
                          Math.round(movie.vote_average * 100) / 100
                        ).toFixed(1)}
                        /100
                      </span>
                    </div>
                  </div>
                  <span className="text-[12px] font-bold text-[#9ca3af]">
                    Action, Adventure {}
                  </span>
                </div>
              </>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
  )
}

export default FeaturedMovies