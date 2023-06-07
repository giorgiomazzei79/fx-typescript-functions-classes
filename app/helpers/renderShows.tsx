import { TVShow } from "../models/tvshow";

export const renderShows = (shows: TVShow[]): React.JSX.Element[] =>
  shows.map((show: TVShow) => (
    <div key={Date.now()}>
      <li>{show.title}</li>
      <li>{show.genre}</li>
      <li>{show.rating}</li>
      <li>{show.status}</li>
      <li>{show.airingDate}</li>
    </div>
  ));
