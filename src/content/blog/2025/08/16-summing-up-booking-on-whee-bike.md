---
title: Summing up booking on Whee 🚴‍♀️ 
author: "@OlaHolstVea"
date: 2025-08-16
---


Summing up booking on Whee 🚴‍♀️ #136


Comment from Queen @raae on github


Veldig bra med booking side. Trenger kun booking, ikke booking med id da vi kun skal vise frem kundens siste booking.

Jeg foreslår du hardkoder en booking i en funksjon som heter getNextBooking in AirtableService filen. Så kaller du på den i web.php og sender til viewet booking. Det vil si at det ikke trengs noen command eller ny service.

Senere kan du se på det jeg gjør med å vise frem kundens sykkel, og gjøre det likt.


```php
$bookings = AirtableService::getNextBooking();
```

![](bike-wheel-2025-aug-13-issue-2-getNextBooking.png)


Comment from Queen @raae on github

Veldig bra, nå vis frem kun en booking i dashboard. Altså hardkode en booking, ikke en liste av bookings og send den inn til view dashboard og så vis den frem der. Bonus, lenke til den bookingens side på booking/{id} som allerede fungerer.

Bra bruk gjort med  `AirtableService::getNextBooking`. 

For å fullføre:
- [x] Rydd opp, dvs. fjerne `booking/{id}` og `bokn/{id}`
- [x] Flytt `/book` under auth på samme måte som `/dashboard` sånn at kun innloggede får tilgang til å endre
- [x] Flytte booking info i dashboardet under account info, trenger ikke style

![](https://github.com/user-attachments/assets/e31fef33-49e6-4d0d-ba38-543438af1680)


Comment from Queen @raae on github

Slett command og call all papers service så er den good to go!