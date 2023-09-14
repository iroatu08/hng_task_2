/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Logo from "../assets/Logo.svg";
import Home from "../assets/Home.svg";
import Movies from "../assets/Movie Projector.svg";
import Series from "../assets/TV Show.svg";
import Upcoming from "../assets/Calendar.svg";
import Logout from "../assets/Logout.svg";
import { Link } from "react-router-dom";
// import Poster from "../assets/Rectangle 29.png"

const MovieDetails = () => {
  const { id } = useParams();

  const [movieDetail, setMovieDetail] = useState({});
  const [loading, setLoading] = useState();

  const options = {
    headers: {
      accept: "application/json",
      Authorization: process.env.REACT_APP_API_KEY
    },
  };

  useEffect(() => {
    async function getMovieDetails() {
      setLoading(true);
      try {
        const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
        const response = await axios.get(url, options);

        setMovieDetail(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    }

    getMovieDetails();
  }, [id]);

  return (
    <div className="w-full flex items-center">
      <div className="sidebar py-[52px]  w-[15%] h-screen  overflow-y-auto  border rounded-r-[45px] ">
        <div className="logo pb-20 px-[20px]">
          <Link to="/">
            <img src={Logo} alt="" srcset="" />
          </Link>
        </div>

        <div className="nav_links pb-20">
          <ul className="flex flex-col gap-10">
            <li className="flex items-center gap-2 px-[20px] py-[16px]">
              <img src={Home} alt="" srcset="" />
              <span className="font-poppins text-[#666] text-[20px]">Home</span>
            </li>
            <li className="flex items-center gap-2 bg-[#BE123C1A] px-[20px] py-[16px]">
              <img src={Movies} alt="" srcset="" />
              <span className="font-poppins text-[#BE123C] text-[20px] px-[20px] py-[16px]">
                Movies
              </span>
            </li>
            <li className="flex items-center gap-2 px-[20px] py-[16px]">
              <img src={Series} alt="" srcset="" />
              <span className="font-poppins text-[#666] text-[20px]">
                Series
              </span>
            </li>
            <li className="flex items-center gap-2 px-[20px] py-[16px]">
              <img src={Upcoming} alt="" srcset="" />
              <span className="font-poppins text-[#666] text-[20px]">
                Upcoming
              </span>
            </li>
          </ul>
        </div>

        <div className=" mx-[20px] flex flex-col gap-[16px] rounded-[20px] bg-[#F8E7EB66]/20 border border-[#BE123CB2] px-[16px] pt-[42px] pb-[20px]">
          <h1 className="font-poppins text-[15px] text-[#333333CC]">
            Play movie quizes and earn free tickets
          </h1>

          <p className="text-[#666] text-[12px] font-popppins">
            50k people are playing now
          </p>

          <button className="bg-[#BE123C33] text-[#BE123C] py-[6px] px-[17px] font-poppins text-[12px] rounded-[30px]">
            Start playing
          </button>
        </div>

        <div className="logout ">
          <ul className="pt-20">
            <li className="flex items-center gap-2 px-[20px] py-[16px]">
              <img src={Logout} alt="" srcset="" />
              <span className="font-poppins text-[#666] text-[20px]">
                Logout
              </span>
            </li>
          </ul>
        </div>
      </div>

      {loading ? (
        <p className="text-[24px]">Loading...</p>
      ) : movieDetail ? (
        <div className="main flex-1 px-[20px] h-screen overflow-y-auto space-y-5">
          <div className="poster">
            <img
              data-testid="movie-poster"
              className="w-full h-[400px] rounded-[20px] object-cover"
              src={
                "https://image.tmdb.org/t/p/w500" + movieDetail.backdrop_path
              }
              alt={movieDetail.path}
            />
          </div>

          <div className="px-4 space-y-5">
            <div>
              <ul className="list-disc flex items-center gap-4">
                <l1 data-testid="movie-title" className="">
                  {movieDetail.title}
                </l1>{" "}
                •
                <l1 data-testid="movie-release-date">
                  {movieDetail.release_date}
                </l1>{" "}
                •<l1 data-testid="movie-runtime">{movieDetail.runtime} Mins</l1>
              </ul>
            </div>

            <p data-testid="movie-overview">{movieDetail.overview}</p>
          </div>
        </div>
      ) : (
        <p className="text-[24px]">Movie details not found...</p>
      )}
    </div>
  );
};

export default MovieDetails;
