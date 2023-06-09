"use client"

import React from 'react';
import {loadShows} from "./helpers/loadShows";
import {RenderParamsInterface, defaultRenderParams, renderShows, sortShows} from "./helpers/renderShows";
import { TVShow } from "./models/tvshow";



export default function Home() {
  const shows:TVShow[] = loadShows()
  const renderParams: RenderParamsInterface = defaultRenderParams
  const initiallySortedShows:TVShow[] = shows.sort(sortShows(renderParams))
  const [showsState, setShows] = React.useState(initiallySortedShows);
  const [renderParamsState, setRenderParams] = React.useState(renderParams);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        {renderShows(showsState, renderParamsState)}
      </ul>
    </main>
  )
}
