---
title: Audio Player my MIME types needs validation
author: "@OlaHolstVea"
date: 2025-08-05
---

```
<!-- It works with blade -->
<!-- routes/web.php -->
Route::get('/stops', function () {
    return view('stop.index');
});


<!-- resources/views/stops/index.blade.php -->
<p>Yo Brow</p>

```



```
<!-- resources/views/stops/show.antlers.html -->
<article class="stop">
    <header>
        <h1>{{ title }}</h1>
    </header>
    
    <main>
        {{ if audio_file }}
            <div class="audio-player">
                <h3>Listen to this stop:</h3>
                <audio src="{{ audio_file:url }}" controls>
                    
                    <p>Your browser doesn't support HTML5 audio. 
                       <a href="{{ audio_file:url }}" download>Download the audio file</a>
                    </p>
                    
                </audio>
                
                <div class="audio-meta">
                    <p><strong>File:</strong> {{ audio_file:filename }}</p>
                    <p><strong>Size:</strong> {{ audio_file:size }}</p>
                    <p><strong>Duration:</strong> {{ audio_file:duration ?? 'Unknown' }}</p>
                </div>
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