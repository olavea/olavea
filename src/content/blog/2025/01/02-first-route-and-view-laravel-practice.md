---
title: 02. First Route and View, Laravel Practice #61
author: "@OlaHolstVea"
date: 2025-01-11
photo: https://files.slack.com/files-pri/T0EVBNF70-F06KN4289CG/img_3016.jpg?pub_secret=990673323d
stars: 4
alt: "Mistakes are a powerful skill-building tool, but not if you cling to a closed mindset"
---

```
// routes / web.php

Route::get('/', function () {
    return view('home');
});

Route::get('/about', function () {
    return 'about page';
});



```

Resources /

- Views /
  welcome.blade.php (3.25)

blade
Laravel's templating enging

hello world

a View is the markup in the template of what the user Views

Tivoli
Smuggeled red wine in and drank from this wine glass ![Tivoli and ship](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIy3nKE8srHXmct3l34EPLJORkE0F1ZhA4sQ&s)

Anti-AI magic: Skill-Building and creating

```
Route::get('/', function () {
    return view('home');
});


```
