---
title: creating an HTML element
author: "@OlaHolstVea"
date: 2023-10-15
photo: https://pbs.twimg.com/media/F8eBLSCW8AE81TY?format=jpg&name=large
alt: "Wes Bos"
---

# creating an HTML element

Today I created an HTML element with `document.createElement()` .

```js
const myParagraph = document.createElement("p");
console.log(myParagraph);
```

![DOM](https://pbs.twimg.com/media/F8eBLSCW8AE81TY?format=jpg&name=large)

And later I used an API called appendChild to add `myParagraph` to the page.

![DOM](https://pbs.twimg.com/media/F8eBLSDWcAE6KBI?format=jpg&name=large)

Wes Bos told me to be careful because:

> Everytime you use appendChild() you are modifying the DOM, which causes something called a reflow in the browser, which tells the browser that something has changed and that the browser needs to repaint the HTML.

![DOM](https://pbs.twimg.com/media/F8YjGUuXsAAUYis?format=jpg&name=large)

## Day 25 of #100daysofjavascript

Check out [https://wesbos.com/javascript](https://wesbos.com/javascript) by
[@wesbos](https://twitter.com/wesbos)
for more JavaScript
Price: $0

Because #javascript will never die 💪🥳🏴‍☠️

P.S.
Lillian Makes Lemonade for her stand

![Lillian Makes less Lemonade for her stand](https://pbs.twimg.com/media/F5luuH7XgAAI6gb?format=webp&name=900x900)

typos

This is a big problem when
This was a big problem when
