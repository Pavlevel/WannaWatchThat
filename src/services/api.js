import axios from "axios";

const apiUrl = "https://api.themoviedb.org/3";
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
    `${apiUrl}/search/multi?api_key=${apiKey}&page=${page}`
  );
  return res?.data;
};

export const getMovies = async (page = 1) => {
  const res = await axios.get(
    `${apiUrl}/discover/movie?api_key=${apiKey}&page=${page}`
  );
  return res?.data;
};