---
title: Async
author: "@OlaHolstVea"
date: 2022-05-08
---

Subject:
Try async rendering with react 18 Ward-style

Ship Ahoy Skill Builder!

## One of my tiny tasks this week was:

– Try async rendering with react 18 Ward-style

I tried to get a pokemon out of `/pokeapi.co/` and show it on my website `olavea.com`. Did it work?

## One of your tiny tasks this week can be:

– Go click "thumps up" on Ward's video and write an emoji comment. (My emoji comment is ⛵ 😺 👍 ). Because "thumps up" and comments are good for SEO. And we want Ward's video to get views from other skill builders like us.

## What did I do?

**The Steps**

1. I opened my red notebook and found the four pages about «What React 18+ Unlocks for gatsby». «What React 18+ Unlocks for gatsby» is a video I watched many times on our family road trip. A video by the Great and Powerful Pirate Ward Peeters. Staff Software Engineer and Tech Lead at Gatsby.
2. I did gatsby new in the terminal.
3. I installed no new packages or any other non-code bullsh\*t. (Pardon my french, I grew up on a pirate ship 😺.)
4. I opened VS Code and found my new gatsby project.
5. I set my timer for 1 hour and 36 minutes and 33 seconds.
6. I typed the code from my notes.
7. I deleted my new code.
8. I repeated 6 and 7.
9. I watched Ward's demo of async rendering starting at timecode 10:56. (See link in P.S.).
10. I let Ward take me step by step through his code. I did exactly what Ward did, stopping the video every few seconds. For example installing new packages.
11. I did gatsby develop and got a gruesome error 😬, see later i P.S.
12. I repeated 10 but this time I made minor changes to see if I could fix the gruesome error.
13. I realized this probably wouldn't work for me, so I stopped.
14. Done.

## Why did I do it?

Stretching a little outside of your comfort zone is skill building. You can stretch outside of your comfort zone, but it is painful for the brain and that is good 😬 👍 . Don't try to "make it work", because "making it work" is, .... well, work and not skill building. Stop and feel your pain, pain is ok. Avoiding trying to escape the pain is darkly dangerous, more about that in another email. Now you need to tell yourself the pain is worth it. You can use a little mirror like I do and tell your mirror-self:

> OK, fine I'll take the pain. Not sure I buy Ola's whole "it's all worth it, you'll see, trust me" thing, but I'll give it a little more of my emotional energy 😬.

## How did I do it?

So this Sunday morning I woke up at 6:42, as I always do. I did my morning routine and climbed the ladder up into the tower of my piraty skill building submarine.

I started on the Steps 1-14 describe above. And by the time I reached step 13 I realized this probably wouldn't work for me. I leaned over my little un-magical mirror I have duct taped to my standing desk right beside my keyboard and said:

> OK, fine, the pain is worth it, you'll see, trust me 😬 👍 .

😬 Feeling pain is temporary, skill building is FOREVER!

Try it for yourself 🔧😺👍.

Keep your skill-building-submarine afloat this week!
🔧⛵🏴‍☠️

Ola Vea
Gatsby Piraty Captain

P.S.

## One of your tiny tasks this week can be:

– Go click "thumps up" on Ward's video and write an emoji comment. (My emoji comment is ⛵ 😺 👍 ). Because "thumps up" and comments are good for SEO. And we want Ward's video to get views from other skill builders like us.

Ward's video with his pokemon demo
[This is Ward's video with the time code 10:56, where he starts his pokemon demo](https://youtu.be/xPM7MhoaZY4?t=656)

Screenshot of Ward's video
![Ward thinks about async rendering with react 18](email-list-2021-2026/40-week/ward-async-rendering.png)

Screenshot of my error
![Error in function Cannot read properties of undefined (reading 'name')](Pokemon-TimeShip-4.png)

### My code looked like this

```
// src / pages / index.js

    // hidden code
    // my code is on line 142

      <React.Suspense fallback="Loading pokemon....">
        <Pokemon name="pikachu" />
      </React.Suspense>

    // hidden code


// src / components / pokemon.js
import * as React from "react";
import fetch from "isomorphic-fetch";

function Pokemon({ data }) {
    return (<div>
        <h2>#{data.id} {data.name}</h2>
        <img src={data.sprites.front_default} width="600" heigth="600" alt="pokemon" />
    </div>)
}


export default React.lazy(async ({ name }) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await res.json();

    return {
        default: () => <Pokemon data={data} />
    }
})
```
