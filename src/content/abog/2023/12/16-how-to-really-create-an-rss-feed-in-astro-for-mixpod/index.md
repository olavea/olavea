---
title: How to REALLY create an rss feed in astro for mixpod
author: "@OlaHolstVea"
date: 2023-12-15
---



I did;
1. npm install @astrojs/rss

- I’ve configured a site in

```js
// astro.config.mjs
export default defineConfig({
  site: "https://mixpod.app/",
});

```

2. Create a file in src/pages/ [playListID].xml.js

The file  will create an RSS feed at https://mixpod.app//[playListID].xml.

3. I imported the rss() helper from the @astrojs/rss package into my [playListID].xml.js file and exported a function that returns it using the following parameters:

```js


export function GET(context) {
  // get the ID for the playlist
  // const playListID = "playlist1";

    // const playList = DB[playListID];
    // get the ID for the playlist from the URL [playListID].xml.js?

  return rss({
    // `<title>` field in output xml
    title: playList.title,
    // `<description>` field in output xml
    description: playList.description,
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: playList.episodes,
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}

```

4. I created a fake DB
```js
const DB = {
  playlist1: {
    title: "A fabulous MixPod for my friend",
    description: "A humble MixPod",
    episodes: [],
  },
};
```

5. I assign a hard coded "playlist1" string to a playlistID variable


6.  and then generate a XML for that playlist with data from the fake DB.

```js
  const playListID = "playlist1";

  const playList = DB[playListID];

```

The whole file looks like this

```js
// src / pages / [playListID].xml.js

import rss from "@astrojs/rss";

// fake a DB
const DB = {
  playlist1: {
    title: "Playlist One MixPod for my friend",
    description: "A humble MixPod",
    episodes: [],
  },
  playlist2: {
    title: "Playlist Two MixPod for my friend",
    description: "An aweful MixPod",
    episodes: [],
  },
};

export function GET({params}) {
  // get the ID for the playlist
   const playListID = DB[params.playlistID];

//   const playList = DB[playListID];
  // get the ID for the playlist from the URL [playListID].xml.js?

  return rss({
    // `<title>` field in output xml
    title: playListID.title,
    // `<description>` field in output xml
    description: playListID.description,
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: playListID.episodes,
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}


```