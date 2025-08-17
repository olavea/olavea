---
title: API
author: "@OlaHolstVea"
date: 2025-08-09
---
added 
`['cfps']`
to the dd()

```php
    public function handle(CallingAllPapers $cfps)
    {
        foreach ($cfps->conferences()['cfps'] as $conference) {
            $this->importConference($conference)
        }
    }
```

Created a class that says for a conference with a unique id, the 'cfp_uri' import it and dd() the 'cfp_uri' #2

## make-more-art

```shell

```
[Integration with an External API for Conferences](https://laracasts.com/series/lets-build-a-saas-in-laravel/episodes/10)

**What:** Airtable Api to get 'time' and 'location'

**What for:** See Bike service info

**Who for:** Customers

**How to:**





```shell

php artisan cfps:import

95 => array:17 [
      "name" => "AgentCon Helsinki"
      "uri" => "https://sessionize.com/agentcon-helsinki-2025"
      "dateCfpStart" => "2025-05-31T21:00:00+00:00"
      "dateCfpEnd" => "2025-08-10T20:59:00+00:00"
      "location" => "Helsinki, Finland"
      "latitude" => 60.1695
      "longitude" => 24.9354
      "description" => ""
      "dateEventStart" => "2025-09-30T21:00:00+00:00"
      "dateEventEnd" => "2025-09-30T21:00:00+00:00"
      "iconUri" => ""
      "eventUri" => "https://globalai.community/chapters/helsinki/events/agentcon-2025-helsinki"
      "timezone" => "Europe/Helsinki"
      "tags" => array:1 [ …1]
      "sources" => array:1 [ …1]
      "lastChange" => "2025-08-09T03:06:22+00:00"
      "_rel" => array:1 [ …1]
    ]

```