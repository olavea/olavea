---
title: I Attach a Handler For Each Button in JavaScript
author: "@OlaHolstVea"
date: 2023-10-22
---

## I Loop Over Every Button and Attach a Handler For Each Button With JavaScript

![I Loop Over Every Button and Attach a Handler For Each Button With JavaScript](https://pbs.twimg.com/media/F9CPUHfWgAAHZs-?format=jpg&name=large)

```js
const buyButtons = document.querySelectorAll(".button.buy");

// Loop over every buyButton and attach a handler for each button

function handleBuyButtonClick(event) {
  console.log("You break it, you buy it")
}
buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener("click", handleBuyButtonClick);
})

```

## I Stop This Event From Bubbling Up

```js
const buyButtons = document.querySelectorAll(".button.buy");

function handleBuyButtonClick(event) {
  const button = event.target;
  // Stop this event from bubbling up
  event.stopPropagation();
}
buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener("click", handleBuyButtonClick);
})

```

## Day 22 of #100daysofjavascript

Check out [https://wesbos.com/javascript](https://wesbos.com/javascript) by
[@wesbos](https://twitter.com/wesbos)
 for more JavaScript
Price: $0

Because #javascript will never die 💪🥳🏴‍☠️