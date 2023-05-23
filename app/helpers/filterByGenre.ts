import { Genre, TVShow } from "../models/tvshow";

export const filterByGenre = (tvShowsList: TVShow[], genre: Genre): TVShow[] => tvShowsList.filter((tvShow: TVShow) => tvShow.genre.includes(genre))