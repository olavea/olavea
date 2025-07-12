---
title: I made a Gateway class inside the App\Models\Job namespace
author: "@OlaHolstVea"
date: 2025-07-11
---


## It Works!

**What:** I made a Gateway class inside the App\Models\Job; namespace

**What for:** 
**Who for:** 

**How to:** 


![](./galleon-laravel-july-9-works.png)





```
class Gateway {
    public static function all(): array
    {
        return [
            [ 
                'name' => 'airtable WorkOS'   
            ],
            [
                'name' => 'google drive WorkOS'   
            ]

        ]
    };
}
```