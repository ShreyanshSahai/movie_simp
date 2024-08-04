const API_KEY = process.env.NEXT_PUBLIC_API_KEY
    ? process.env.NEXT_PUBLIC_API_KEY
    : "3de4e7027a06501e676bb5e2c31afae5";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
    ? rocess.env.NEXT_PUBLIC_BASE_URL
    : "https://api.themoviedb.org/3";
export const getTendingMovies = async () => {
    const res = await fetch(
        `${BASE_URL}/trending/movie/day?language=en-US&api_key=${API_KEY}`
    );
    const data = await res.json();
    return data.results;
};
export const getMovies = async (query) => {
    const res = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );
    const data = await res.json();
    return data.results;
};
export const getMovieDetails = async (id) => {
    const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    const data = await res.json();
    return data;
};
export const getSimilarMovies = async (id) => {
    const res = await fetch(
        `${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`
    );
    const data = await res.json();
    return data.results;
};