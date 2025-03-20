const API_KEY = "7e6a1ec889d282a86311b6babd0a9b70";

const BASE_MOVIE_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
export const fetchMovieDetails = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "7e6a1ec889d282a86311b6babd0a9b70",
    },
  };
  try {
    const response = await fetch(BASE_MOVIE_URL, options);
    if (!response.ok) {
      throw new Error("Failed to fetch meals");
    }
    const data = await response.json();
    console.log(data.results);
    return data.results;
  } catch (error) {
    console.error("Failed to fetch movie", error);
  }
};

 export async function fetchById(id) {
  const url = `
https://api.themoviedb.org/3/find/${id}`;
const options = {method: 'GET', headers: {accept: 'application/json'}};

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Failed to fetch meals");
    }
    const data = await response.json();
    console.log(data.results);
    return data.results;
  } catch (error) {
    console.error("Failed to fetch movie", error);
  }
}
