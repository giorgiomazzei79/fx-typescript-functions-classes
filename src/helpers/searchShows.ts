import { Genre, Status, TVShow } from "../models/tvshow";

type SearchShow = {
    (tvShowsList: TVShow[], title: string): TVShow[],
    (tvShowsList: TVShow[], genre: Genre): TVShow[],
    (tvShowsList: TVShow[], status: Status): TVShow[]
}

export const searchShows: SearchShow  = (tvShowsList, param) => {
    if(typeof param === "string"){
        return tvShowsList.filter((tvShow: TVShow) => param === tvShow.title)
    }
    if(Object.values(Genre).includes(param)){
        tvShowsList.filter((tvShow: TVShow) => tvShow.genre.includes(param))
    }
    if(Object.values(Status).includes(param)){
        tvShowsList.filter((tvShow: TVShow) => tvShow.status.includes(param))
    }
    return []
}