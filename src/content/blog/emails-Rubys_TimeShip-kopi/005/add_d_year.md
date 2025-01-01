---
title: Add Year
author: "@OlaHolstVea"
date: 2022-05-08
---

«You said your next task is landing year, how do you plan to code it?» Says Captain Swizec.

«I'll put landing year inside the piraty parrot braces with city, like this.» Says Ruby typing away.

src / api / time-travel.js

export default function timeTravelHandler(req, res) {
const { city, year } = req.query;

res.send(`You time-travelled to the city of ${city}, in year ${year}`)
}

«Now go to your browser adress bar and write
http://localhost:8000/api/time-travel?city=oslo&year=2026
Yess! Like that!» Says Captain Swizec.

«Excellent work Ruby!

for our next tiny task we'll move on to a neighbour who has goats AND horses in his rooftop garden ON Our Bridge! No, wait for it! We need to find a way to add a Pirate Princess to your TimeShip code Ruby. Thousand thanks Captain Swizec and bye.» Says Lizabeth and climbs after Ruby along the rooftops.

«Good bye.» Says Captain Swizec.

«Go! Help! Help!» Croaks Kiwi.

«You want to help them MORE? Even though they call you pirate-parrot behind your back?» Says Captain Swizec.

«YARR! A trip! A trip! Kiwi wants a trip!» Croaks Kiwi.

«Ok. Bring me a gift from the future. Bye bye bird!» Says Captain Swizec.
