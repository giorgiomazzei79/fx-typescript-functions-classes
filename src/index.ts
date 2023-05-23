import {loadShows} from "../app/helpers/loadShows";
import {renderShows} from "../app/helpers/renderShows";
import { TVShow } from "../app/models/tvshow";

const shows:TVShow[] = loadShows()

renderShows(shows)