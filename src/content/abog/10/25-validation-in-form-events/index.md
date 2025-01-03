---
title: I set up validation in Form Events in JavaScript
author: "@OlaHolstVea"
date: 2023-10-25
---

# I set up validation in Form Events in JavaScript

- What: Validate what kind of email adresses you allow in your form
- Why: Because you want people's best email adress
- How:

## Form Events

I put the email input value in a variable and add `email` and `value` to it

```js
    const email = event.currentTarget.email.value;
```

This is the form file I got off of Wes Bos, minus two inputs:
- name
- checkbox


./forms.html

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>HTML Forms</title>
  <link rel="stylesheet" href="../../base.css">
</head>

<body>
  <div class="wrapper">

    <form name="signup">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" value="wesbos@gmail.com">
      <hr>
      <button type="submit">Submit</button>
    </form>
  </div>
  <script src="./forms.js"></script>
</body>

</html>
```


I put the email variable inside my eventListener

```js
//./forms.js
const signupForm = document.querySelector('[name="email"]')

signupForm.addEventListener('submit', funtion(event)) {
    const email = event.currentTarget.email.value;
}
```



I check whether it contains the name Ola. I don't need my own email.


```js
//./forms.js
const signupForm = document.querySelector('[name="email"]')

signupForm.addEventListener('submit', funtion(event)) {
    const email = event.currentTarget.email.value;
    if (email.includes("ola")) {
        alert("Sorry bro, thats MY email");
        event.preventDefault();
    }

}
```
Now if you refresh the page and enter your on email in the form and hit submit, the page will refresh and the form will submit.

However if you change the name in your email to Ola, you will see an alert and the form will not submit.

![I set up validation in Form Events in JavaScript with if (email.includes("ola")) {....}](https://pbs.twimg.com/media/F9SV_v-WcAAdpq3?format=jpg&name=large)

## Day 33 of #100daysofjavascript

Check out [https://wesbos.com/javascript/05-events/prevent-default-and-form-events](https://wesbos.com/javascript/05-events/prevent-default-and-form-events) by
[@wesbos](https://twitter.com/wesbos)
 for and explaination on how `if (email.includes("ola")) {....}` works. I just use it.

Price: $0

I did it to practice JS, because javascript will never die 💪🥳🏴‍☠️


That is a good reason to have valid semantic HTML by giving your inputs proper names.