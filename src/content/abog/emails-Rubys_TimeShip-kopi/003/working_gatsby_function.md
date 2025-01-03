---
title: Gatsby Func
author: "@OlaHolstVea"
date: 2022-05-08
---

Lizabeth and Ruby Reckless climb along a few rooftops. Together they save res-the-cat from a terribly tall tower and knock on Freddie Catsby's glamorously gilded door.

«Hello again my beauties!» Says Freddie Catsby with a toothy smile.

«Iiiiin the mooorning Mr Catsby, here is your cat and coffee sir, can you please show us if our serverless Gatsby function is functioning?» Lizabeth asks with a deep courtsey.

«You KNOW it would be my pleasure. Is this your code?» Says Freddie Catsby.

«Yes.» Says Ruby Reckless.

src / api / time-travel.js

export default function timeTravelHandler(req, res) {
res.send(`You time-travelled to the city of Oslo, in year 2026`)
}

«Good. Good. Your code is telling res-the-cat here to send `You time-travelled to the city of Oslo, in year 2026`. And in localhost you see that res-the-cat has sent your message. So what is your next tiny task?» Asks Freddie Catsby.

«We need to get our landing `year` from the TimeShip browser bar and into our serverless Gatsby function.» Ruby Reckless.

delete below
(// illu)

:8000/api/time-travel

in your browser is your text string

http://localhost:8000/api/time-travel
