---
title: Skill-Builder
author: "@OlaHolstVea"
date: 2022-05-08
---

Ship Ahoy Skill Builder!

One of my tiny tasks this week was:
– Start on a gatsby query to get a list of years out of sanity.io for my TimeShip and show them on my website olavea.com

## What did I do?

**The Steps**

1. I checked one of my notebooks and found the two pages about gatsby queries. Gatsby queries is video 18 of the magnificent Master Gatsby course by the wiley Wes Bos.
2. I opened VS Code and found my webiste code.
3. I deleted the code I guessed was the code from Gatsby queries, video 18.
4. I set my timer for 1 hour and 36 minutes and 33 seconds
5. I fired up Wes Bos, Gatsby queries, video 18.
6. I let Wes take me step by step through the first steps. I did exactley what Wes did, stopping the video every few seconds. I stopped at around 16:00 minutes.
7. I repeated 6.
8. The Pirate Princess Lillian (6 🏴‍☠️👸 ) came up and joined me. We watch a movie every Saturday after lunch and she wanted to see if we could find the movie she wanted to see. Flushed away 😺. More about that another time.
9. I sent Lillian (6 🏴‍☠️👸 ) down to play on her own.
10. I repeated 6.
11. I repeated 6. but this time I made minor changes like typing `years` instead of `pizzas`
12. I repeated 11.
13. I repeated 11.
14. Done

## Why did I do it?

This week was wretched for me. A lot of things happened. Almost all the things were good, but they kept piling up on top of each other. I hate that. It became too much for me 😬. I guess you have also had a bad week in your own way some time, so I will not go into the details. The question is "what do you do when you are overwhelmed and feel like 💩?"

I don't know what you do, but this is what I do and it works every time for me. I work on building my skill. Lucily for me my father knew me well when I was a teenager and thus noticed I was overwhelmed this one time back when I was 17. My father told me "Nothing beats building your skill to get you up when you are feeling down."

## How did I do it?

So this Saturday morning I woke up at 6:42, as I always do. I moved through my morning routine slower than a green turtle. I forced myself to climb the steps of the ladder up into the tower of my piraty skill building submarine. I promise you, on a 1-10 of the feel-like-💩-scale I scored a solid 11 😬.

So I started on The Steps 1-14 describe above. And by the time I reached step 8 and The Pirate Princess Lillian (6 🏴‍☠️👸 ) came up and joined me, felt better. Not good. Better.

### The code I deleted looked like this.

```js

// src / pages / pizzas.js
import React from 'react';
import { graphql } from 'gatsby';
import Pizzalist from '../components/PizzaList';

export default function PizzaPage({ data }) {
  console.log(data);
  const pizzas = data.allSanityPizza.nodes;
  return (
    <>
      <Pizzalist pizzas={pizzas} />
    </>
  );
}

export const query = graphql`
  query YearsQuery {
    allSanityPizza {
      nodes {
        name
        id
        slug {
          current
        }
      }
    }
  }
`;

// src / components / PizzaList.js
import React from 'react';

function SinglePizza({ pizzas }) {
  return <p>{pizza.name}</p>;
}

export default function Pizzalist({ pizzas }) {
  return (
    <div>
      {pizzas.map((pizza) => (
        <p>{pizza.name}</p>
      ))}
    </div>
  );
}

```

### The code looked like this after I was done.

```

// src / pages / pizza.js

import React from 'react';
import { graphql } from 'gatsby';
import Yearslist from '../components/YearsList';

export default function YearsPage({ data }) {
  console.log(data);
  const years = data.allSanityPizza.nodes;
  return (
    <>
      <Yearslist years={years} />
    </>
  );
}

export const query = graphql`
  query YearsQuery {
    allSanityPizza {
      nodes {
        name
        id
        slug {
          current
        }
      }
    }
  }
`;

// src / components / YearsList.js
import React from 'react';

function SingleYear({ year }) {
  return <p>{year.name}</p>;
}

export default function Yearslist({ years }) {
  return (
    <div>
      {years.map((year) => (
        <p>{year.name}</p>
      ))}
    </div>
  );
}


```

😬 Feeling like 💩 is temporary, skill building is FOREVER!

Try it for yourself 🔧😺👍.

Keep your skill building submarine afloat this week!
🔧⛵🏴‍☠️

Ola Vea
Gatsby Piraty Captain

P.S.
This is how my notebook look like for Gatsby queries, video 18 of the magnificent Master Gatsby course by the wiley Wes Bos.

<!-- ![notebook Gatsby queries video 18 of the magnificent Master Gatsby course by the wiley Wes Bos](email-list-2021-2026/39-week/Gatsby_queries_week_39.png) -->
