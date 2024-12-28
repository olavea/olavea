---
title: I Stopped My Event From Bubbling Up in JavaScript
author: "@OlaHolstVea"
date: 2023-09-25
---

# Stop Your Event From Bubbling Up in JavaScript

Today I stopped my event from bubbling up in JavaScript using `.stopPropagtion`. `.stopPropagtion` is a method and I put it inside my event handler function like this

```js
function ⏸️(event) {
    event.stopPropagtion
}

```

## `.stopPropagtion` is Great to Stop Your Event From Bubbling up

Here is a little more of the context.

!( a sketchnote of `.stopPropagtion` to Stop Your Event From Bubbling up)[https://pbs.twimg.com/media/F9MnHpOWkAAoHIg?format=jpg&name=large]

```js

const buyButtons = document.querySelectorAll('button.buy')

function handleBuyButtonClick(event) {
    const button = event.target
        //  Stop Event From Bubbling up
    event.stopPropagtion
}
```

I just wanted my `buyButton.addEventListener` to fire when you click on one of my buttons and none of the other suff to fire.

```js

const buyButtons = document.querySelectorAll('button.buy')

function handleBuyButtonClick(event) {
    const button = event.target;
    //  Stop Event From Bubbling up
    event.stopPropagation;
}

buyButtons.forEach(function(buyButton) {
    buyButton.addEventListener('click', handleBuyButtonClick)
})
```

## Day 33 of #100daysofjavascript

Check out [https://wesbos.com/javascript/05-events/targets-bubbling-propagation-and-capture#propagation](https://wesbos.com/javascript/05-events/targets-bubbling-propagation-and-capture#propagation) by
[@wesbos](https://twitter.com/wesbos)
 for and explaination on how `.stopPropagtion` works. I just use the method.

Price: $0

I did it to practice, because #javascript will never die 💪🥳🏴‍☠️