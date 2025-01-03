---
title: JavaScript
author: "@OlaHolstVea"
date: 2023-10-20
---

# Adding a layout.css File
CSS = 💪
I tried out adding a layout.css file with
img { max-width: 100%}
To get rid of my Big Bad image

My Big Bad image

![my Big Bad image](https://pbs.twimg.com/media/F84qW8hXYAAC8-P?format=jpg&name=4096x4096)


I tried out adding a layout.css file with

```css
img { max-width: 100%}
```
And importing it into my Layout.js

```js
import "./layout.css";
```


![layout.css file](https://pbs.twimg.com/media/F84qaYEWUAA_7_p?format=png&name=small)

My 100% image

![My 100% image](https://pbs.twimg.com/media/F84qbjaXIAAwCxV?format=jpg&name=large)

P.S

And importing Layout into my gatsby-ssr.js and gatsby-browser.js, like this:


```js
import React from 'react';
import Layout from './src/components/Layout';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
```



## Day 30 💪🥳🏴‍☠️ of #100daysofjavascript

