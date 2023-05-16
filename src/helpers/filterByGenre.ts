import { Genre, TVShow } from "../models/tvshow";

export const filterByGenre = (tvShowsList: TVShow[], genre: Genre):TVShow[]  => {
 return tvShowsList.filter((tvShow: TVShow)=>{
        return tvShow.genre.includes(genre)
    })
}