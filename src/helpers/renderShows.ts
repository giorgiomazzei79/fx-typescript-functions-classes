import { TVShow } from "../models/tvshow"

export const renderShows = (shows: TVShow[]): void => {
    shows.forEach((show: TVShow, index, array): void => {
        console.log(`Show ${index} :`)
        console.log(`title - ${show.title}`)
        console.log(`genre - ${show.genre}`)
        console.log(`rating - ${show.rating}`)
        console.log(`status - ${show.status}`)
        console.log(`airingDate - ${show.airingDate}`)
        if (index < array.length-1) {
            console.log("<----------------->")
        }
    });
}