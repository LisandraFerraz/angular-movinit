import { Genres } from "./genres"

export interface IMovieDetails{
  adult?: boolean
  backdrop_path?: string | null
  budget?: number
  genre_ids?: Genres[]
  production_companies?: []
  production_countries?: []
  spoken_languages?: []
  id?: number,
  runtime?: number | null
  original_language?: string
  original_title?: string
  overview?: string
  poster_path?: string | null
  release_date?: string
  title?: string
  video?: boolean
  vote_average?: number
  vote_count?: number
  popularity?: number
}
