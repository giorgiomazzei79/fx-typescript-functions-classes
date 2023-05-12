import loadShows from "./helpers/loadShows";
import renderShows from "./helpers/renderShows";
import { TVShow } from "./models/tvshow";

const shows:TVShow[] = loadShows()

renderShows(shows)