import { TVShowInterface } from "../models/tvshow";
import { TVShow } from "../models/tvshow";
import { compare } from "./compare";

export enum Order {
  ASC = "asc",
  DESC = "desc",
}

export interface RenderParamsInterface {
  key: keyof TVShowInterface;
  order: Order;
}

export const defaultRenderParams: RenderParamsInterface = {
  key: "_rating",
  order: Order.DESC,
};

export const sortShows = (
  renderParams: RenderParamsInterface
): ((a: TVShow, b: TVShow) => number) => {
  return function (a: TVShow, b: TVShow) {
    const orderModifier = renderParams.order === Order.ASC ? 1 : -1;
    return compare(a, b, renderParams.key) * orderModifier;
  };
};

export const renderShows = (
  shows: TVShow[],
  renderParams: RenderParamsInterface
): React.JSX.Element[] => {
  const clonedShows = [...shows];
  return clonedShows
    .sort(sortShows(renderParams))
    .map((show: TVShow, i: number) => (
      <div key={i}>
        <li>{show.title}</li>
        <li>{show.genre}</li>
        <li>{show.rating}</li>
        <li>{show.status}</li>
        <li>{show.airingDate}</li>
        <br />
      </div>
    ));
};
