import { TVShow, tvShowInitializerInterface } from '../models/tvshow'

type AddShow = {
    (tvShowsList: TVShow[], show: TVShow): TVShow[],
    (tvShowsList: TVShow[], tvShowInitializer: tvShowInitializerInterface): TVShow[]
}

export const addShow: AddShow = (tvShowsList, show) => {
    if (show instanceof TVShow) {
        return [...tvShowsList, show]
    }
    const newShow = new TVShow(show)
    return [...tvShowsList, newShow]
}