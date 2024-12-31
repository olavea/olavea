---
title: Add City
author: "@OlaHolstVea"
date: 2022-05-08
---

«Who can help you ask for your landing year from your TimeShip browser adress bar and into your serverless Gatsby function? Aaare yooou reeeadyyy tooo rrriiiiddle!?» Says Freddie Catsby.

«Ready!» Says Ruby and Lizabeth.

«She hunts criminals by night,
by daylight sleeps tight.

Hanging upside down,
is not famous in town.

She's not a pink unicorn,
hides from Ozzy Osbourne.

Who is she?» Asks Freddie Catsby.

«Sleeps by day, hanging upside down? Hmm... I KNOW! Byyyeee!» Says Ruby Reckless and climbs along the rooftops homewards.

«Aha! She is req-the-lazy-bat!» Says Lizabeth.

«Good guessing you beautiful people! Give req-the-bat my regards. And here Lizabeth, take res-the-cat as a good bye gift.» Says Freddie Catsby.

«Thank you sooo much Freddie, but what do you mean 'good bye'? Where are YOU going? Don't you have your Thursday show at the Tower of London?» Says Lizabeth.

«Oh YOU are going to the Tower of London before Thursday. At least that is the rumour on Our Bridge. Queen murderous Mary is going to gruesomly jail you on trumped up treason charges Sooner than Thursday.» Says Freddie Catsby.

«Oh! Ok, we'll have to hurry up then. So we can escape on our TimeShip test trip, but wait, I see super spy Fulvia "The Fox" Renard rakishly prowling up our Bridge. Do you think she has already found fake proof against me?» Says Lizabeth.

«Yes I do, you must hurry. And never underestimate Fulvia's ability to outfox you, I've seen her work, she is GOOD. Here give me a hug.» Says Freddie Catsby.

«Bye now Freddie!» Says Lizabeth.

Back at Lizabeth's rooftop Ruby Reckless types with req-the-bat on her shoulder.

«Hack! Hack-Hack-Hack!» Says Ruby's keyboard.

«Now go to your browser adress bar. Write
?year=2026 after
/api/time-travel/»
Says Lizabeth.

«Aye! Aye! Captain Lizabeth. I get `You time-travelled to the city of oslo, in year 2026` great!» Says Ruby Reckless.

«It works!? Let me see the code please.» Says Lizabeth.

src / api / time-travel.js

export default function timeTravelHandler(req, res) {
const { year } = req.query;
res.send(`You time-travelled to the city of oslo, in year ${year}`)
}

«Is req-the-bat asking for our landing
year from your TimeShip browser bar and giving the
year to
res-the-cat
inside our serverless Gatsby function?» Says Lizabeth.

«YESSS!» Says Ruby Reckless.

«Good work! Our next tiny task is deploying.» Says Lizabeth.
