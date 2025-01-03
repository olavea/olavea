---
title: I Stopped ... in JavaScript
author: "@OlaHolstVea"
date: 2023-09-23
---

# Stop Your .... in JavaScript

What
Why
How

```js




```

```js



```

```js




```




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









































