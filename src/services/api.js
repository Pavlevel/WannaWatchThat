import axios from "axios";
// import SearchBar, { query } from "../components/SearchBar";

const apiUrl = "https://api.themoviedb.org/3";
const apiSearchUrl = "https://api.themoviedb.org/3/search/multi";
const apiKey = import.meta.env.VITE_API_KEY;

export const posterPath = "https://image.tmdb.org/t/p/w500/";

// Trending

export const getTrending = async (page = 1) => {
  const res = await axios.get(
    `${apiUrl}/trending/all/day?api_key=${apiKey}&page=${page}`
  );
  return res?.data;
};

// All (multi)

export const getAllMedia = async (page = 1) => {
  const res = await axios.get(
    `${apiSearchUrl}?query=${query}&api_key=${apiKey}&page=${page}`
  );
  return res?.data;
  // return console.log(res.data);
};

export const getMovies = async (page = 1) => {
  const res = await axios.get(
    `${apiUrl}/discover/movie?api_key=${apiKey}&page=${page}`
  );
  return res?.data;
};

export const getShows = async (page = 1) => {
  const response = await axios.get(
    `${apiUrl}/discover/tv?api_key=${apiKey}&page=${page}`
  );
  return response?.data;
};
