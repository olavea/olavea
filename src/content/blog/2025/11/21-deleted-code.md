---
title: Deleted Code
author: "@OlaHolstVea"
date: 2025-11-21
---

```php


<!-- View a list of Thefts, by what_happened at /thefts/index -->
<div>
    <ul>
        @foreach ($thefts as $theft)
            <li class="hover:underline">
                <a href="/thefts/{{ $theft["id"] }}">{{ $theft["what_happened"] }}.</a>
            </li>
        @endforeach
    </ul>
</div>
```


```php
<!-- View a list of Thefts, by what_happened at /thefts/show -->

<h2>
    <strong>Hva skjedde?</strong>
</h2>

<p>Gi oss gjerne mer informasjon</p>

<a href="/thefts/{{ $theft->id }}/edit">Oppdater din tyverirapport</a>



```




```php
//   /thefts/{id}/2-find
<br />
        <a href="/thefts/{{ $theft->id }}/3-callcops">Ring politiet</a>


```



```php
         <button form="thief-hunt-form">  
                    Politiet sa ja til sykkeltyvjakt 🥳
         </button>

// ...

<form method="POST" action="/thefts/{{ $theft->id }}/3-callcops-hunting" id="thief-hunt-form" class="hidden">
        @csrf
        @method('PATCH')
        <div>
            <label for="police_is_hunting">police_is_hunting </label>
            <!-- Should be 
            police_say_no -->
            <br />
            <input 
                type="string" 
                id="police_is_hunting" 
                name="police_is_hunting" 
                value="police_is_hunting" 
            />
            
        </div>        
        <div>
            @error("called_police")
                <p>{{ $message }}</p>
            @enderror
        </div>
</form>      


```



```php

// in pirate ... /layout
<!DOCTYPE html>
<html class="h-full bg-emerald-400" lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" 
        content="width=device-width, initial-scale=1">
        <!-- @vite('resources/css/app.css') -->
    <title>pirate uploads</title>
    <link rel="icon" href="favicon.svg">
    
    <!-- @vite(['resources/js/app.js', 'resources/css/app.css']) -->
</head>

```