import { Genres } from "./genres"

export interface TrendingMovies{
  adult: boolean
  backdrop_path: string | null
  genre_ids: Genres[]
  id: number,
  original_language: string
  original_title: string
  overview: string
  poster_path: string | null
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
  popularity: number
}
