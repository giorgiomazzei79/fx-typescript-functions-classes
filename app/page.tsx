"use client"

import {loadShows} from "./helpers/loadShows";
import {renderShows} from "./helpers/renderShows";
import { TVShow } from "./models/tvshow";
import React from 'react';



export default function Home() {
  const shows:TVShow[] = loadShows()
  const [showsState, setShows] = React.useState(shows);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        {renderShows(showsState)}
      </ul>
    </main>
  )
}
