import { createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;


export const tmdbApi = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.themoviedb.org/3'}),
    endpoints: (builder) => ({
        //* Get movies by [type]
        getMovies: builder.query({
            query: (page = 1) => `/movie/popular?page=${page}&api_key=${tmdbApiKey}`,
        }),
    }),
}) ;

export const {useGetMoviesQuery} = tmdbApi;