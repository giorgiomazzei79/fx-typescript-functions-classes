class TVShow {
    
    _title: string
    _genre: [Genre]
    _rating: number
    _status: [Status]
    _airingDate: string

    constructor(tvShowInitializer: tvShowInterface) {
        this._title = tvShowInitializer.title,
        this._genre = [tvShowInitializer.genre],
        this._rating = tvShowInitializer.rating; 
        this._status = [tvShowInitializer.status];
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

    public set genre(genre: [Genre]) {
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

    public set status(status: [Status]) {
        this._status = status;
    }

    public get airingDate() {
        return this._airingDate;
    }

    public set airingDate(airingDate: string) {
        this._airingDate = airingDate;
    }
  }

  enum Genre {
    Crime = "Crime",
    Fantasy = "Fantasy",
    Comedy = "Comedy",
    SciFi = "Sci-Fi",
    Action = "Action",
  }

  enum Status {
    Ongoing = "Ongoing", 
    Completed = "Completed", 
    Canceled = "Canceled",
  }

  interface tvShowInterface {
    title: string
    genre: Genre; //enum
    rating: number 
    status: Status; //enum
    airingDate: string
  }