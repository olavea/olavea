---
title: Finishing Up my Omvei Issues
author: "@OlaHolstVea"
date: 2025-08-22
---


### Time for more frontend
It's code editor time! Let's get that list of the 5 most recent stops onto the homepage since it is one of my todos. I open resources/views/home.antlers.html and replace that lonely {{ content }} with this markup (don't worry, I'll explain what's going on in a moment):

```html
// resources/views/home.antlers.html

{{ collection:blog limit="5" }}
    <a href="{{ url }}">{{ title }}</a>
{{ /collection:blog }}
 
<h1 class="text-2xl font-bold my-6">Welcome to my CyberSpace Place!</h1>
{{ content }}
 
<section class="border border-green-400 mt-12">
    <h2 class="p-5">Recent Blog Posts</h2>
    {{ collection:stop limit="5" }}
        <a href="{{ url }}" class="flex items-center justify-between p-5 border-t border-green-400 text-green-400 hover:text-green-900 hover:bg-green-400">
            <span>{{ title }}</span>
            <span class="text-green-900 text-sm">{{ date }}</span>
        </a>
    {{ /collection:stop }}
</section>
```

I refresh my homepage and see this:

...

Here's the most basic Antlers template snippet that fetches my entries.


```html
// resources/views/home.antlers.html

{{ collection:stop limit="5" }}
    <a href="{{ url }}">{{ title }}</a>
{{ /collection:stop }}
```
Here you can see I'm telling the Collection Tag tag to use the stop collection. Inside the tag pair is a loop that iterates over each entry with access to all the data available as `{{ variables }}` .




### The blog "show" template
On my stop's very own unique URL, I no longer need that {{ collection:stop }} tag pair to fetch data. All of the stop's data is available automatically. Here's a really simple snippet I drop in so I can see the data pull through.



```html
 <!-- resources/views/stop/show.antlers.html -->
<article class="stop">
    <header>
        <h1>{{ title }}</h1>
    </header>
    
    <main>
        {{ if audio_file }}
            <div class="audio-player">
                <h3>Listen to this stop:</h3>
                <audio src="{{ audio_file:url }}" controls>
                    <p>Bleh</p>
                </audio>
            </div>
        {{ else }}
            <p>No audio file available for this stop.</p>
        {{ /if }}
        
        {{ if content }}
            <div class="stop-content">
                {{ content }}
            </div>
        {{ /if }}
    </main>
    
    <footer>
        <a href="/stops" class="back-link">← Back to all stops</a>
    </footer>
</article>


```

### Blog index
Next, I make that stop index page. I head back to the control panel and go to the Pages collection. I create a new entry and call it "Out on Tour Never Sour" — I make sure the slug is stops. I set the template to stop/index.

Back to my code editor — I open up the resources/views/stop/index.antlers.html template and drop in this snippet. It's essentially what I built on the home page, but without the limit.



```html
// resources/views/index.antlers.html
<h1 class="px-6 text-2xl font-bold my-6">{{ title }}</h1>
{{ content }}

{{ collection:stop }}
    <a href="{{ url }}" class="px-6 flex hover:bg-green-400" >
        <span>{{ title }}</span>
    </a>
{{ /collection:stop }}

or



{{ content }}

or 

{{ collection:stop }}
    <a href="{{ url }}">{{ title }}</a>
{{ /collection:stop }}

or



<!-- <h1 class="🧝‍♀️ text-2xl font-bold my-6">{{ tit }}</h1> -->
<!-- {{ con }} -->

<!-- {{ coll:stp }} -->
    <a href="{{ url }}" class="🧝‍♀️ 🐽 hover:bg-green-400" >
        <!-- <span>{{ tit }}</span> -->
    </a>
<!-- {{ /col:sp }} -->




```
And stop right there. I've now duplicated a whole chunk of code for one tiny little bit — `limit="5"` . That's LIFE! 

```html



```