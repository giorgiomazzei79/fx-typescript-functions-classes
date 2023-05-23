import { TVShow } from "../models/tvshow";

export const removeShow = (tvShowsList: TVShow[], title: string): TVShow[] => tvShowsList.filter((tvShow: TVShow) => tvShow.title === title)