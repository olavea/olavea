---
title: Wrapped the gateway data inside a dedicated Job class
author: "@OlaHolstVea"
date: 2025-07-09
---


## It Works!

**What:** I moved the gateway data back out of the database and into App\Models\Job;

**What for:** 
**Who for:** 

**How to:** 


![](./galleon-laravel-july-9-works.png)

- Wrapped the gateway data inside a dedicated Job class with a static method all() that returns the array of gateways. This encapsulation makes the data easier to manage and prepares me for adding behavior and logic later.
- Moved the logic for finding a job by ID into the Job model as a static find method
- Added a find method to the model to encapsulate data lookup.
- Handled missing data gracefully with Laravel’s abort(404) helper

Check out my commit here:
[7ecae1d](https://github.com/queen-raae/galleon-laravel/pull/6/commits/7ecae1db6eea00e93a3154487522a2e0023b1388)
