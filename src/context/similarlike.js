const API_KEY ="7e6a1ec889d282a86311b6babd0a9b70"


const BASE_MOVIE_URL =`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=6&sort_by=popularity.desc`;
export const fetchMovieLike= async() => {
    
 const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "7e6a1ec889d282a86311b6babd0a9b70",
    },
  };
    try {
        const response = await fetch(BASE_MOVIE_URL,options)
        if (!response.ok) {
            throw new Error('Failed to fetch meals')
        }
        const data = await response.json()
        console.log(data.results)
         return data.results
       
 }
 
 catch (error) {
        console.error('Failed to fetch movie', error)
    }
}
export default fetchMovieLike