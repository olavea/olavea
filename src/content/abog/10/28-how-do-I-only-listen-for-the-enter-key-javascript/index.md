---
title: How do I only listen for the enter key in JavaScript?
author: "@OlaHolstVea"
date: 2023-10-28
---


## How do I only listen for the enter key in JavaScript?

JavaScript
```js

const photo = document.querySelector('photo');

function handlePhotoClick(event) {
    if (event.type === 'click' || event.key === 'enter') {
        console.log('.');
    }
}
```

## Day 36 of #100daysofjavascript

Check out [https://wesbos.com/javascript/05-events/accessibility-gotchas-and-keyboard-codes](https://wesbos.com/javascript/05-events/accessibility-gotchas-and-keyboard-codes) by
[@wesbos](https://twitter.com/wesbos)
 for an explaination on how this works. I just use it.

Price: $0

I did it to practice JS, because javascript will never die 💪🥳🏴‍☠️
