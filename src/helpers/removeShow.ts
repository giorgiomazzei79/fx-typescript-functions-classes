import { TVShow } from "../models/tvshow";

const removeShow = (tvShowsList: TVShow[], title: string): TVShow[] => {
    return tvShowsList.filter((tvShow: TVShow)=>{
        return tvShow.title === title
    })
}

export default removeShow