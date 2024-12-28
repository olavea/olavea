---
title: Using a Link is for a Button Gives BAD Accesibility in JavaScript
author: "@OlaHolstVea"
date: 2023-10-26
---

# I Try Not to goof up My Accesibility in JavaScript

- What: Don't goof up perfectly good HTML with JavaScript
- Why: So your webapp or website is usable for for example blind people
- How:

## A Link is NOT a Button

If I'm coding an action within my webapp or website, I use button.
Links are used to change the page.

`<a` means anchor not action



```html
    <a href="#">Save</>
```


```html
<!DOCTYPE html>
<html lang="en">

<body>
  <div class="wrapper">

    <form name="signup">
      <button type="submit">Submit</button>
    </form>
  </div>
  <script src="./forms.js"></script>
</body>

</html>
```


![I try to don't goof up my Accessibility with anchor-link-as-a-button <a href="#">Save</> 👎 <button type="#">Save</button> 👍](https://pbs.twimg.com/media/F9W6McTWkAAdvu3?format=jpg&name=large)

## Day 33 of #100daysofjavascript

Check out [https://wesbos.com/javascript/05-events/accessibility-gotchas-and-keyboard-codes#difference-between-buttons-and-links](https://wesbos.com/javascript/05-events/accessibility-gotchas-and-keyboard-codes#difference-between-buttons-and-links) by
[@wesbos](https://twitter.com/wesbos)
 for an explaination on how `if (email.includes("ola")) {....}` works. I just use it.

Price: $0

I did it to practice JS, because javascript will never die 💪🥳🏴‍☠️


That is a good reason to have valid semantic HTML by giving your inputs proper names.