/**
 * When using an enum you don't need to use an array syntax. You can just use the enum directly as a type.
 */
export interface TVShowInterface {
    _title: string
    _genre: Genre
    _rating: number
    _status: Status
    _airingDate: string
}

export class TVShow implements TVShowInterface {

    _title: string
    _genre: Genre
    _rating: number
    _status: Status
    _airingDate: string

    constructor(tvShowInitializer: tvShowInitializerInterface) {
        this._title = tvShowInitializer.title,
        this._genre = tvShowInitializer.genre,
        this._rating = tvShowInitializer.rating;
        this._status = tvShowInitializer.status;
        this._airingDate = tvShowInitializer.airingDate;
    }

    public get title() {
        return this._title;
    }

    public set title(title: string) {
        this._title = title;
    }

    public get genre() {
        return this._genre;
    }

    public set genre(genre: Genre) {
        this._genre = genre;
    }

    public get rating() {
        return this._rating;
    }

    public set rating(rating: number) {
        this._rating = rating;
    }

    public get status() {
        return this._status;
    }

    public set status(status: Status) {
        this._status = status;
    }

    public get airingDate() {
        return this._airingDate;
    }

    public set airingDate(airingDate: string) {
        this._airingDate = airingDate;
    }
}

export enum Genre {
    Crime = "Crime",
    Fantasy = "Fantasy",
    Comedy = "Comedy",
    SciFi = "Sci-Fi",
    Action = "Action",
}

export enum Status {
    Ongoing = "Ongoing",
    Completed = "Completed",
    Canceled = "Canceled",
}

/**
 * Later on we'll learn how to convert this type of interface into something similar to TVShowInterface without
 * having to write the same code twice.
 */
export interface tvShowInitializerInterface {
    title: string
    genre: Genre; //enum
    rating: number
    status: Status; //enum
    airingDate: string
}