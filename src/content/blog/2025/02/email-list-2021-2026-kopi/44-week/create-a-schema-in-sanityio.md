---
title: Schema
author: "@OlaHolstVea"
date: 2022-05-08
photo: https://user-images.githubusercontent.com/7642493/140647091-08db0709-eeda-4617-bf10-71d4ead29c74.png
---

Subject:
Create a schema in Sanity.io

# Ship Ahoy Skill Builder!

## My tiny task this Sunday is:

- [ ] Make it doable for my daughter Lillian (6 🏴‍☠️ 👸 ) to:

1. Upload images of Lillian's drawings from my data-machine to my Sanity.io on http://localhost:3333/desk/pizza 🖼️
2. Name images of Lillian's drawings, for example this one:

![Kitten-by-Lillian(6 🏴‍☠️ 👸week-44](https://user-images.githubusercontent.com/7642493/140647091-08db0709-eeda-4617-bf10-71d4ead29c74.png)

## What will I do?

- [ ] Create a schema in Sanity.io
- [ ] Add my schema to schema.js

## Why will I do it?

I was working on my personal website. I got the idea to show images of Lillian's projects and drawings. Why is adding Lillian's projects and drawings to my website making my skill building better? Join us live or check out the recording of our podcast here to find out: [https://www.youtube.com/watch?v=4nWUMgiEpdc](https://www.youtube.com/watch?v=4nWUMgiEpdc)

## How will I do it?

**The Steps**

1. 😼
   In `sanity / schemas` make a new pirate-schema-file: `papasPiratyPizzas.js`
   In `sanity / schemas / schema.js` add `import papasPiratyPizzas from './papasPiratyPizzas';`
   In `sanity / schemas / schema.js` add `papasPiratyPizzas` inside your `.con-😼 ([]),` on line 16

Save and run your code
Look at your localhost

2. 🍕
   Write an object: `export default {};`
   Give it the `type: 'document',`
   Name it `'pizza',`

Save and run your code
Look at your localhost

3. 🗻
   Write an array: `fields: [];`
   Write an object and give it the `type: 'string',` and name it `'name',`

Save and run your code
Go to localhost and look inside BeepBoop

4. 🖼️
   Write an object and give it the `type: 'image',` and name it `'image',`

Save and run your code
Go to localhost and look inside BeepBoop
Finished 🏴‍☠️ 😸 👍

🔧😺👍

Keep your skill-building-submarine afloat this week!
🔧⛵🏴‍☠️

Ola Vea
Gatsby Piraty Captain

P.S.

## Finished code:

```js
//sanity / schemas / papasPiratyPizzas.js

export default {
  name: 'pizza',
  // Type of Pirate Schema
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'image',
      type: 'image',
    },
  ],
};

//sanity / schemas / schema.js

....

import papasPiratyPizzas from './papasPiratyPizzas';

export default createSchema({
  name: 'default',
  // con-😼 is here 🔽
  types: schemaTypes.concat([papasPiratyPizzas]),
});

```
