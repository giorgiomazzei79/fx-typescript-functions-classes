"use client"

import {loadShows} from "./helpers/loadShows";
import {renderShows} from "./helpers/renderShows";
import { TVShow } from "./models/tvshow";
import React from 'react';



export default function Home() {
  const shows:TVShow[] = loadShows()
  const [showsState, setShows] = React.useState(shows);
  renderShows(showsState)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        {showsState.map((show:TVShow ) => (
          <div>
          <li key={Date.now()}>{show.title}</li>
          <li key={Date.now()}>{show.genre}</li>
          <li key={Date.now()}>{show.rating}</li>
          <li key={Date.now()}>{show.status}</li>
          <li key={Date.now()}>{show.airingDate}</li>
          </div>
        ))}
      </ul>
    </main>
  )
}
