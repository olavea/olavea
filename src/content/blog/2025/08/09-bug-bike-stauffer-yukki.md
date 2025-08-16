---
title: Bug bike Stauffer Yukki
author: "@OlaHolstVea"
date: 2025-08-09
---



`php artisan cfps:import`  gives me

```shell



php artisan cfps:import 


Target class [App\Console\Commands\CallingAllPapers] does not exist
```


use App\Services\CallingAllPapers;
[](https://laracasts.com/discuss/channels/laravel/my-laravel-11-app-give-error-target-class-apphttpmiddlewareapitokenmiddleware-does-not-exist?page=1&replyId=969243)

💪🥳🏴‍☠️

My api call works now because of your answer. Thanks a bunch @tykus !


When I tried to publish THIS blog-post I also caught a bug at netlify's deploy log:  

```shell
8:14:20 AM: Failed during stage 'building site': Build script returned non-zero exit code: 2 (https://ntl.fyi/exit-code-2)
8:14:20 AM: 06:14:20 [ERROR] [vite] x Build failed in 1.59s
8:14:20 AM: [InvalidContentEntryFrontmatterError] [astro:content-imports] blog → 2025/08/09-bug-bike-stauffer-yukki.md frontmatter does not match collection schema.
8:14:20 AM: title: Required
```

Because ALL my frontmatter was missing

```md
---
title: Bug bike Stauffer Yukki
author: "@OlaHolstVea"
date: 2025-08-09
---
```