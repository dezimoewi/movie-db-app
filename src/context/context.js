

const API_KEY = "7e6a1ec889d282a86311b6babd0a9b70";
const BASE_MOVIE_URL = "https://image.tmdb.org/3";
const MOVIE_URL = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`;

export const fetchMovie= async() => {
    
    const options = {
       method: "GET",
       headers: {
         accept: "application/json",
         Authorization:
           "7e6a1ec889d282a86311b6babd0a9b70",
       },
     };
       try {
           const response = await fetch(MOVIE_URL,options)
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

  //  fetch top search movie
   
const BASE_URL =`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&include_video=false&language=en-US&page=10&sort_by=popularity.desc`;
export const fetchMovieOne= async() => {
    
 const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "7e6a1ec889d282a86311b6babd0a9b70",
    },
  };
    try {
        const response = await fetch(BASE_URL,options)
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

// fetch latest movies


const Base_Url =`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=15&sort_by=popularity.desc`;
export const fetchMovieTwo= async() => {
    
 const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "7e6a1ec889d282a86311b6babd0a9b70",
    },
  };
    try {
        const response = await fetch(Base_Url,options)
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

// fetch romance movies

const Base_url =`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&include_video=false&language=en-US&page=9&sort_by=popularity.desc`;
export const fetchMovieThree= async() => {
    
 const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "7e6a1ec889d282a86311b6babd0a9b70o",
    },
  };
    try {
        const response = await fetch(Base_url,options)
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
