import { TVShow, tvShowInitializerInterface, Genre, Status } from "../models/tvshow"
import tvShows from '../../json/tvShows.json';

export const loadShows = (): TVShow[] => {

    const tvShowsList = tvShows.map(tvShow => {

        let genre: Genre

        switch (tvShow.genre) {
            case "Crime":
                genre = Genre.Crime
                break;
            case "Fantasy":
                genre = Genre.Fantasy
                break;
            case "Comedy":
                genre = Genre.Comedy
                break;
            case "Sci-Fi":
                genre = Genre.SciFi
                break;
            case "Action":
                genre = Genre.Action
                break;
            default:
                genre = Genre.Action
                break;
        }

        let status: Status

        switch (tvShow.status) {
            case "Ongoing":
                status = Status.Ongoing
                break;
            case "Completed":
                status = Status.Completed
                break;
            case "Canceled":
                status = Status.Canceled
                break;
            default:
                status = Status.Canceled
                break;
        }

        const normalisedshow: tvShowInitializerInterface = {
            title: tvShow.title,
            genre,
            rating: tvShow.rating,
            status,
            airingDate: tvShow.airingDate
        }

        return new TVShow(normalisedshow)
    })

    return tvShowsList
}