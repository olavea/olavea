---
title: Summing up booking on Whee 🚴‍♀️ 
author: "@OlaHolstVea"
date: 2025-08-16
---


Summing up booking on Whee 🚴‍♀️ #136


Comments from Queen @raae on github


Veldig bra med booking side. Trenger kun booking, ikke booking med id da vi kun skal vise frem kundens siste booking.

Jeg foreslår du hardkoder en booking i en funksjon som heter getNextBooking in AirtableService filen. Så kaller du på den i web.php og sender til viewet booking. Det vil si at det ikke trengs noen command eller ny service.

Senere kan du se på det jeg gjør med å vise frem kundens sykkel, og gjøre det likt.


```php
$bookings = AirtableService::getNextBooking();
```

![](bike-wheel-2025-aug-13-issue-2-getNextBooking.png)
