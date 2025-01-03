---
title: A Cat and Hat
author: "@OlaHolstVea"
date: 2022-05-08
---

«Who is the best neighbour to

help res-the-cat send your Pirate Princess and your message out of your Gatsby function and into Ruby's TimeShip? Aaare yooou reeeady tooo a rrriiiiddleee!» Says Sailing Master Ward Peters.

«Yes!» Shouts Ruby, dancing like a butterfly.

«Who. Was a piratical rockstar-as-a-youngster AND also serves the best barbeque burger on Our Bridge?» Asks Sailing Master Ward Peters.

«Freddie Caaatsbyyy....?» Says Lizabeth.

«No! No!» Croaks Kiwi.

«Aha! Captain Json» Says Ruby, already climbing along the rooftops.

«Excellent! See you at Freddie's Friday Show!» Says Sailing Master Ward Peters with a tip of his hat.

A few rooftops up London Bridge, at Eat With Json.

«Boop! Captain Json! Oooh! THAT smells heavenly» Says Ruby.

«Ah Ruby! You look like you have brought me a tasty programming problem. Let's see it!» Says Captain Json.

«Here! I need to
next tiny task is to get our Pirate Princess variable and our message variable to res-the-cat inside our Gatsby function.» Says Ruby.

«Hmm.... I see.... Ok. So you need to add code.... I'll give you a hint. I'll put res-the-cat and Kiwi on my .json( hat like this. Pretend that Kiwi holds the message variable and the Pirate Princess variable. How would you code that?! Hmmm....» Says Captain Json.

«Ahoy! .... Like that?» Says Ruby.

res.json({ message: message, princess: PIRATE_PRINCESS })

«Yes! And now, if your TimeShip lands in the wrong city or year you will not find a Pirate Princess and thus res-the-cat should only send the message. Now code it! YARR! Look who's here? Lizabeth! My favourite Princess. Welcoooome! And if you taste this new burger and tell me HOW it tastes different to the regular burger, I would be honored to give you my .json( hat. as a gift.» Says Captain Json.

«Deal! Munch-Munch-Munch!» Says Lizabeth.

«Finished! Look!» Says Ruby.

src / api / time-travel.js

const PIRATE*PRINCESS = {
 age: "* \_ \_",
 hairColor: "blond",
}

export default function timeTravelHandler(req, res) {
  const { city, year } = req.query
  const message = `You time-
    -travelled to the city of ${city},
    in year ${year}`

if (city === "oslo" && year === "2026") {
   res.json({ message: message, princess: PIRATE_PRINCESS })
 } else {
   res.send(message)
 }
}

«Now run it!» Says Captain Json.

( // browser)

http://localhost:8000/api/time-travel/?city=oslo&?year=2026 result {"message":"You time-travelled to the city of oslo, in year 2026","princess":{ age: "\_ \_ \_", "hairColor":"blond"}}

«Here I ask for the wrong year.» Says Ruby.

http://localhost:8000/api/time-travel/?city=oslo&year=2023 result “You time-travelled to the city of oslo, in year 2023”

«Your Gatsby function is LOOKING sharp!» Says Captain Json.

«Shall we get my whole TimeShip deployed?» Says Ruby.

«Yes! We. Shall. Ruby!» Says Captain Json climbing the rooftops towards Ruby's pink and yellow TimeShip on Lizabeths rooftop.
