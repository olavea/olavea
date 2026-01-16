---
title: Whee! Laravel Skill building 
author: "@OlaHolstVea"
date: 2026-01-16
---



Follow these steps to keep working:

1. Make sure to checkout branck `add-a-link-in-min-side`
2. Do `php artisan migrate:fresh --seed`
3. Do `php artisan view:clear`
4. Do `npm run build`
5. Log in again


```php
// TheftController
<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\Http\Request;

class TheftController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('thefts.index', [
            'thefts' => Job::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('thefts.create', ['theft' => new Theft]);
    }

    /**
     * Store a newly created resource in storage.
     */
    // public function store(Request $request)
    // {
    //     request()->validate([
    //         'bike_thief_hunt_started' => '',
    //     ]);
    //     // Create a new row in our database
    //     $theft = Job::create([
    //         'bike_thief_hunt_started' => request('bike_thief_hunt_started'),
    //     ]);

    //     return redirect()->route('user.thefts.wizard', [
    //         'theft' => $theft->id,
    //         'step' => 'take-photos',
    //     ]);
    // }

    /**
     * Display the specified resource.
     */
    public function show(Theft $theft, $id)
    {
        $theft = Job::findOrFail($id);

        if ($theft) {
            return view('thefts.show', ['theft' => $theft]);
        }

        return redirect()->route('user.thefts.index');
    }

    /**
     * Wait with: Remove the specified resource from storage.
     */
    public function destroy(Theft $theft, $id)
    {
        $gateway = Job::find($id);
        // Research dirty delete

        if ($gateway) {
            return view('thefts.show', ['gateway' => $gateway]);
        }

        return redirect()->route('user.thefts.index');

    }
}


```


```php
// TheftWizardController
<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\Http\Request;

class TheftWizardController extends Controller
{
    private array $steps = [
        'take-photos' => [
            'view' => 'thefts.take-photos',
            'field' => 'photos_taken',
            'validation' => ['photos_taken' => 'nullable|string'],
            'next' => 'find-my',
        ],
        'find-my' => [
            'view' => 'thefts.find-my',
            'field' => 'find_my_activated',
            'validation' => ['find_my_activated' => 'nullable|string'],
            'next' => 'call-police',
        ],
        'find-my-no' => [
            'view' => 'thefts.find-my-no',
            'field' => 'find_my_activated',
            'validation' => ['find_my_activated' => 'nullable|string'],
            'next' => 'call-police',
        ],
        'call-police' => [
            'view' => 'thefts.call-police',
            'field' => 'police_say_no',
            'validation' => ['police_say_no' => 'nullable|string'],
            'next' => 'whee-report',
        ],
        'whee-report' => [
            'view' => 'thefts.whee-report',
            'field' => 'whee_report',
            'validation' => ['whee_report' => 'nullable|string'],
            'next' => 'police-report',
        ],
        'police-report' => [
            'view' => 'thefts.police-report',
            'field' => 'police_report',
            'validation' => ['police_report' => 'nullable|string'],
            'next' => 'thanks',
        ],
        'thanks' => [
            'view' => 'thefts.thanks',
            'field' => null,
            'validation' => [],
            'next' => null,
        ],
        'bike-found' => [
            'view' => 'thefts.bike-found',
            'field' => 'bike_found',
            'validation' => ['bike_found' => 'nullable|string'],
            'next' => null,
        ],
    ];

    public function show(Job $theft, string $step)
    {
        if (! isset($this->steps[$step])) {
            abort(404);
        }

        $stepConfig = $this->steps[$step];

        return view($stepConfig['view'], [
            'theft' => $theft,
            'step' => $step,
            'stepConfig' => $stepConfig,
            'allSteps' => array_keys($this->steps),
        ]);
    }

    public function update(Request $request, Job $theft, string $step)
    {
        if (! isset($this->steps[$step])) {
            abort(404);
        }

        $stepConfig = $this->steps[$step];

        // Validate if validation rules exist
        if (! empty($stepConfig['validation'])) {
            $request->validate($stepConfig['validation']);
        }

        // Save data if field is specified
        if ($stepConfig['field']) {
            $theft->update([
                $stepConfig['field'] => $request->input($stepConfig['field']),
            ]);
        }

        // Determine next step
        $nextStep = $this->getNextStep($step, $request);

        if ($nextStep) {
            return redirect()->route('thefts.wizard', [
                'theft' => $theft->id,
                'step' => $nextStep,
            ]);
        }

        // Final step - redirect to home
        return redirect('/');
    }

    private function getNextStep(string $currentStep, Request $request): ?string
    {
        $config = $this->steps[$currentStep];

        // Handle conditional branching for find-my step
        if ($currentStep === 'find-my') {
            // Check if user clicked "Det går ikke" link - this goes to find-my-no
            // For now, default to call-police, but find-my-no can be accessed directly
            return $config['next'];
        }

        return $config['next'];
    }
}

```


```php
// CallingAllPapers Matt Stauffer
<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class CallingAllPapers
{
    protected string $baseUrl = 'https://api.callingallpapers.com/v1';

    
    public function getCFPs(): array
    {
        return Http::get('/')->json;
        // $this->call('get', 'cfp');
    }
}

```


```php
// edit.blade.php
<p>yo</p>
<!-- <x-blehout>
    <x-slot:heading>
        Meld tyveri
    </x-slot:heading>

    Theft form at http://whee-laravel.test/thefts/{id}/edit  
    <form method="POST" action="/thefts/edit" enctype="multipart/form-data">
        @method("PATCH")
        @csrf
        <div class="space-y-12">    
            
            <h2 class="text-lg font-semibold">1. Ta bilder av åstedet</h2>

            <p>Ta bilder av hvor sykkelen sto, rester av lås eller annet som ligger igjen, brutt dørlås eller annet som kan virke relevant.</p>




            
            <div>
               
                <br />
                <input 
                    type="hidden" 
                    id="salary" 
                    name="salary" 
                    value="photos_taken" 
                />
                
            </div>        
                @error("salary")
                    <p>{{ $message }}</p>
                @enderror
            </div>
            <div class="ml-10 flex items-baseline space-x-4">
               
                
                <button 
                    type="submit" 
                    class="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-emerald-800 bg-white border-2 border-emerald-800 shadow-lg dark:shadow-lg dark:shadow-emerald-700 leading-5 rounded-md hover:bg-yellow-400 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-emerald-800 transition ease-in-out duration-150 dark:bg-yellow-100 dark:border-emerald-800 dark:text-emerald-800 dark:focus:border-blue-700 dark:active:bg-yellow-100 dark:active:text-emerald-800"
                >
                    Ok, gå videre
                </button>                
                
                
            </div>
            <div>
                

                <br />

                <br />
                <a class="underline text-orange-600" href="/thefts/2-find">Hopp over</a>
            </div>
            

            
            <p>2. Sjekk hvor sykkelen er</p>

            <p>3. Varsle og anmelde</p>
        </div>    
    </form>    
</x-blehout> -->

```


```php
<?php

// use App\Models\Gateway;
use App\Models\Job;
// use App\Http\Resources\BookmarkResource; // what, structured response
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Arr;

Route::patch('/ook/{id}/edit', function ($id)
{
    $💾 = Job::findOrFail($id);
    $💾->title = 'CircusVillain';
    $💾->save();
});

Route::get('ooki', function ()
{
    // 1. Grab the token
    // Get the Authorization header
    $authHeader = request()->header('Authorization');
    // Split the Authorization header into parts
    $parts = $authHeader ? explode(" ", $authHeader) : [];
    // Get the token from the second part of the Authorization header
    $token = isset($parts[1]) ? trim($parts[1]) : null;
    dd($token);
    // If the token is not found, return an error
    if ($token) {
        return response()->json(['error' => $token], 401);
    }
    // Get the dodo 🦤 data from the callingallpapers External API for Conferences
    // Make a CircusVillain variable
    $🦤 = Http::withToken()->get('https://api.callingallpapers.com/v1/cfp');

    if (!$🦤) {
        return response()->json(['error' => '🫖'], 418);    
    }
    // Get the penguin 🐧 json response 
    $🐧 = $🦤->json();
    // Get the array of arrays
    $🛡️🛡️🛡️ = $🐧['cfps'];
    // Pick one array
    $🛡️ = $🛡️🛡️🛡️['30'];    
    // Get the CircusVillain name from the one array
    $🦹‍♀️ = $🛡️['name'];
    // dd($🦹‍♀️);
    return response()->json(['Our CircusVillain is' => $🦹‍♀️], 201);

});
Route::post('/ook/{id}', function ($id)
{
        // 1. Grab the token
    // Get the Authorization header
    $authHeader = request()->header('Authorization');
    
    // Split the Authorization header into parts
    $parts = $authHeader ? explode(" ", $authHeader) : [];
    
    // Get the token from the second part of the Authorization header
    $token = isset($parts[1]) ? trim($parts[1]) : null;
    
    // If the token is not found, return an error
    if (!$token) {
        return response()->json(['error' => 'Unauthorized'], 401);
    }
    // 2. Verify the token
    // Get the profile from the Outseta API
    // Get the dodo 🦤 data from the API ape 🐵
    $🦤 = Http::withToken($token)->get('https://snippets.outseta.com/api/v1/profile?fields=*')->json();
    
    // if no dodo you get a 🫖
    if (!$🦤) {
        return response()->json(['error' => '🫖'], 418);
    }
    // dd($🦤);
    // Get the CircusVillain Uid from the one array
    $🦹‍♀️ = $🦤['Uid'];
    
    // save the reaction on the framer site 
    // and the CircusVillain Uid to the database
    $💾 = Job::findOrFail($id);
    // $💾->salary = request('action_type');
    $💾->salary = 33;
    $💾->title = $🦹‍♀️;
    $💾->save();
    return response()->json($💾, 201);
});
Route::get('/ook', function ($id)
{
    // $🦤 = Http::get('https://api.callingallpapers.com/v1/cfp');
    // $🦤 = Http::withToken('eyJ0-g')->get('https://snippets.outseta.com/api/v1/profile?fields=*')->json();
    // $🦤 = Http::withToken('🔑')->get('https://snippets.outseta.com/api/v1/profile?fields=*')->json();
    $🔑 = 'eyJ0-g';
    $🔑 = 'eyJ0-g';
    $🔑 = 'eyJ0-g';
    // Get the dodo 🦤 data from the API ape 🐵
    $🦤 = Http::withToken($🔑)->get('https://snippets.outseta.com/api/v1/profile?fields=*')->json();
    
    // if no dodo you get a 🫖
    if (!$🦤) {
        return response()->json(['error' => '🫖'], 4181);
    }
    // dd($🦤);
    // Get the CircusVillain Uid from the one array
    $🦹‍♀️ = $🦤['Uid'];
    dd($🦹‍♀️);

    // save the reaction on the framer site 
    // and the CircusVillain Uid
    // Job::findOrFail($id);
    // $💾->shipmate_id = $🦹‍♀️
    // $💾->
});

```


```php
<?php

use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Route;
use App\Models\Job;
use Illuminate\Support\Facades\Http;



Route::get('ook', function ()
{
    $baseUrl = 'https://api.callingallpapers.com/v1/';

    return Http::get($this->$baseUrl . 'cfp')->json();


});


Route::get('/', function () {
    return view('home');
});

// Route::post('/', function ()
// {
//     // m
// });

// Create
// Route::get('/jobs/create', function () {
    
//     // request()->validate([
//     //     'title' => ['required', 'min:3'],
//     //     'salary' => ['required'],
//     // ]);

//     return view('jobs.create');
// });

// Route::post('/jobs', function () 
// {
//     // Job::create([
//     //     'title' => request('title'),
//     //     'salary' => request('salary'),
//     // ]);

//     return redirect('/jobs');
// });

// Route::get('/thefts', function () {
//     return view('thefts.index', [
//         'jobs' => Job::all()
           
//     ]);
// });

Route::get('/thefts/create', function () 
{
    return view('thefts.create');
});

Route::post('/thefts', function () 
{
    // validate
    // authorize
    $theft = Job::create([
        'title' => request('title'),
        'salary' => request('salary'),
    ]);
    return redirect('/thefts/edit');
});

Route::get('/thefts/{id}', function ($id) {
    $jobs = Job::findOrFail($id);
    
    return view('thefts.show', ['job' => $jobs]);
});

Route::get('/thefts/edit', function () 
{
    // $theft = Job::findOrFail($id);
    // if ($theft) {
    //     return view('thefts.edit', ['theft' => $theft]);
    // }
    return 'meh';
    // return view('thefts.edit');
});

Route::patch('/thefts/edit', function ()
{
    // $theft = Job::findOrFail($id);
    // $theft->salary = request('salary');
    // $theft->save();
    return redirect('/thefts/2-find');
});

Route::get('/thefts/2-find', function () 
{
    // $theft = Job::findOrFail($id);

    // if ($theft) {
    //     return view('thefts.2-find', ['theft' => $theft]);
    // }
    return view('thefts.2-find');
});

Route::patch('/thefts/2-find', function () 
{
    // $theft = Job::findOrFail($id);
    // $theft->salary = request('salary');
    // $theft->save();
    return redirect('/thefts/3-callcops');
});

Route::get('/thefts/2-find-not', function () 
{
    // $theft = Job::findOrFail($id);

    // if ($theft) {
    //     return view('thefts.2-find-not', ['theft' => $theft]);
    // }
    return view('thefts.2-find-not');
});

Route::patch('/thefts/2-find-not', function () 
{
    // $theft = Job::findOrFail($id);
    // $theft->salary = request('salary');
    // $theft->save();
    return redirect('/thefts/3-callcops');
});



Route::get('thefts/3-callcops', function () 
{
    // $theft = Job::findOrFail($id);

    // if ($theft) {
    //     return view('thefts.3-callcops', ['theft' => $theft]);
    // }
    return view('thefts.3-callcops');
});

Route::patch('thefts/3-callcops', function () 
{
    // $theft = Job::findOrFail($id);
    // $theft->salary = request('salary');
    // $theft->save();
    return redirect('thefts/3-wheereport');
});

Route::get('thefts/3-wheereport', function () 
{
    // $theft = Job::findOrFail($id);

    // if ($theft) {
    //     return view('thefts.3-wheereport', ['theft' => $theft]);

    // };
            return view('thefts.3-wheereport');
});

Route::patch('/thefts/3-wheereport', function ()
{
    // $theft = Job::findOrFail($id);
    // $theft->salary = request('salary');
    // $theft->save();
    return redirect('thefts/4-policereport');
});

Route::get('thefts/4-policereport', function () 
{
    // $theft = Job::findOrFail($id);

    // if ($theft) {
    //     return view('thefts.4-policereport', ['theft' => $theft]);

    // }
    return view('thefts.4-policereport');
});

Route::patch('thefts/4-policereport', function ()
{
    // $theft = Job::findOrFail($id);
    // $theft->salary = request('salary');
    // $theft->save();
    return redirect('thefts/5-thanks');
});


Route::get('thefts/5-bike-found', function () 
{
    // $theft = Job::findOrFail($id);

    // if ($theft) {
    //     return view('thefts.5-bike-found');
    // }
    return view('thefts.5-bike-found');
});

Route::patch('thefts/5-bike-found', function ()
{
    // $theft = Job::findOrFail($id);
    // $theft->salary = request('salary');
    // $theft->save();
    return redirect('thefts/5-thanks');
});

Route::get('thefts/5-thanks', function () 
{
    // $theft = Job::findOrFail($id);

    // if ($theft) {
    //     return view('thefts.5-thanks');
    // }
    return view('thefts.5-thanks');
});


// jobs below

// Route::get('/jobs', function () {
//     // $jobs = Job::with('employer')->simplePaginate(3);

//     return view('jobs.index', [
//         'jobs' => Job::all()
           
//     ]);
// });



// Store
// Route::post('/jobs', function () {
    
//     request()->validate([
//         'title' => ['required', 'min:3'],
//         'salary' => ['required'],
//     ]);
//     Job::create([
//         'title' => request('title'),
//         'salary' => request('salary'),
//     ]);
//     return redirect('/jobs');
// });
// Ahoy Show below, in ep (16) 01:56
// Route::get('/jobs/{id}', function ($id) {
//     $jobs = Job::findOrFail($id);
    
//     return view('jobs.show', ['job' => $jobs]);
// });

// Route::get('/upload', function () {
//     return view('upload');
// });


// route::get('/jobs/{id}/edit', function ($id) 
// {
//     $jobs = Job::findOrFail($id);

//     return view('jobs.edit', ['job' => $jobs]);
// });

// Route::patch('/jobs/{id}', function ($id) 
// {
//     $jobs = Job::findOrFail($id);

//     $jobs->title = request('title');
//     $jobs->save();
//     return redirect('/jobs/'.$jobs->id);
// });

// Route::get('/', function () {
    //     return view('home', [
    //         'jobs' => [
    //             [
    //                 'id' => 1,
    //                 'title' => 'Barbeque Party at Berglunds', 
    //                 'salary' => 'The party started with chilled prosecco in tall glasses and hard cheese with little spicy biscuits. With the patriarch of Berglunds I discussed our mutual satisfation with the personal attention our young ladies get from strong teachers at private and creative schools. The grilled meat and grilled vegetables were delicious. And a powerful red wine. But the triumphant high point: dessert! Crusty Blackberry Pie with icecreams and vanilla sauce.'
    //             ],
    //             [
    //                 'id' => 2,
    //                 'title' => 'The Dev Pirate Princess 🏴‍☠️👸 Redesigns Our POW! Website!',
    //                 'salary' => '«I am bored» Said the Pirate Princess. «You wanna help me redesign our POW! website?» Captain Ola Said. «YES!» Said the little Pirate. «Let us play around with background colors in Tailwind.» Captain Ola Said. She looked for "bg" in Visual Studio Code. Then guessed the english spelling of "orange" and "yellow", which where the colors she most frequently chose.'
    //             ],
    //             [
    //                 'id' => 3,
    //                 'title' => 'Whisper of the Heart, Studio Ghibli',
    //                 'salary' => 'Finding a Chonky Cat riding a train, Shizuku follows it to discover an antique shop run by Shirō. Shizuku is ecstatic about finding "a place where stories begin".'
    //             ],
    //             [
    //                 'id' => 4,
    //                 'title' => 'My favourite Robin Hood movie',
    //                 'salary' => 'I remember watching that Robin Hood movie in the cinema with my dad. MAN I loved that movie. I drew Robin Hood EVERY day for months in day care. And I drew that hypnist snake Hiss also. I drew Hiss with his spiralling eyes. I wish I had some of those drawings today to show The Pirate Princess.'
    //             ],
    //             [
    //                 'id' => 5,
    //                 'title' => 'Hacking around the christmas tree it is a hacky holidaaay',
    //                 'salary' => 'The Pirate Princess and Captain Ola Vea drags the christmas tree home on the skateboard. 🛹 Singing christmas songs slightly too loud and slightly off key. 🔑🎵'
    //             ],
    //             [
    //                 'id' => 6,
    //                 'title' => 'We all 3 went to the Structured Content Conference and got ideas 💡',
    //                 'salary' => 'Lillian (7 🏴‍☠️👸) is drawing a tall tale about two girls who find a hidden key to a dangerous door that leads to a forest with a monster filled labyrith.'
    //             ]   
    //         ]
               
    //     ]);
    // });
    

// // edit 02:00
// Route::get('/jobs/{id}/edit', function ($id) {
//     $jobs = [
//         [
//             'id' => 1,
//             'title' => 'Barbeque Party at Berglunds', 
//             'salary' => 'The party started with chilled prosecco in tall glasses and hard cheese with little spicy biscuits. With the patriarch of Berglunds I discussed our mutual satisfation with the personal attention our young ladies get from strong teachers at private and creative schools. The grilled meat and grilled vegetables were delicious. And a powerful red wine. But the triumphant high point: dessert! Crusty Blackberry Pie with icecreams and vanilla sauce.'
//         ],
//         [
//             'id' => 2,
//             'title' => 'The Dev Pirate Princess 🏴‍☠️👸 Redesigns Our POW! Website!',
//             'salary' => '«I am bored» Said the Pirate Princess. «You wanna help me redesign our POW! website?» Captain Ola Said. «YES!» Said the little Pirate. «Let us play around with background colors in Tailwind.» Captain Ola Said. She looked for "bg" in Visual Studio Code. Then guessed the english spelling of "orange" and "yellow", which where the colors she most frequently chose.'
//         ],
//         [
//             'id' => 3,
//             'title' => 'Whisper of the Heart, Studio Ghibli',
//             'salary' => 'Finding a Chonky Cat riding a train, Shizuku follows it to discover an antique shop run by Shirō. Shizuku is ecstatic about finding "a place where stories begin".'
//         ],
//         [
//             'id' => 4,
//             'title' => 'My favourite Robin Hood movie',
//             'salary' => 'I remember watching that Robin Hood movie in the cinema with my dad. MAN I loved that movie. I drew Robin Hood EVERY day for months in day care. And I drew that hypnist snake Hiss also. I drew Hiss with his spiralling eyes. I wish I had some of those drawings today to show The Pirate Princess.'
//         ],
//         [
//             'id' => 5,
//             'title' => 'Hacking around the christmas tree it is a hacky holidaaay',
//             'salary' => 'The Pirate Princess and Captain Ola Vea drags the christmas tree home on the skateboard. 🛹 Singing christmas songs slightly too loud and slightly off key. 🔑🎵'
//         ],
//         [
//             'id' => 6,
//             'title' => 'We all 3 went to the Structured Content Conference and got ideas 💡',
//             'salary' => 'Lillian (7 🏴‍☠️👸) is drawing a tall tale about two girls who find a hidden key to a dangerous door that leads to a forest with a monster filled labyrith.'
//         ]   
//     ];
//     $job = Arr::first($jobs, fn($job) => $job['id'] == $id);

    
//     return view('jobs.edit', ['job' => $job]);
// });

// update
// Route::patch('/jobs/{id}', function ($id) {
//     $jobs = [
//         [
//             'id' => 1,
//             'title' => 'Barbeque Party at Berglunds', 
//             'salary' => 'The party started with chilled prosecco in tall glasses and hard cheese with little spicy biscuits. With the patriarch of Berglunds I discussed our mutual satisfation with the personal attention our young ladies get from strong teachers at private and creative schools. The grilled meat and grilled vegetables were delicious. And a powerful red wine. But the triumphant high point: dessert! Crusty Blackberry Pie with icecreams and vanilla sauce.'
//         ],
//         [
//             'id' => 2,
//             'title' => 'The Dev Pirate Princess 🏴‍☠️👸 Redesigns Our POW! Website!',
//             'salary' => '«I am bored» Said the Pirate Princess. «You wanna help me redesign our POW! website?» Captain Ola Said. «YES!» Said the little Pirate. «Let us play around with background colors in Tailwind.» Captain Ola Said. She looked for "bg" in Visual Studio Code. Then guessed the english spelling of "orange" and "yellow", which where the colors she most frequently chose.'
//         ],
//         [
//             'id' => 3,
//             'title' => 'Whisper of the Heart, Studio Ghibli',
//             'salary' => 'Finding a Chonky Cat riding a train, Shizuku follows it to discover an antique shop run by Shirō. Shizuku is ecstatic about finding "a place where stories begin".'
//         ],
//         [
//             'id' => 4,
//             'title' => 'My favourite Robin Hood movie',
//             'salary' => 'I remember watching that Robin Hood movie in the cinema with my dad. MAN I loved that movie. I drew Robin Hood EVERY day for months in day care. And I drew that hypnist snake Hiss also. I drew Hiss with his spiralling eyes. I wish I had some of those drawings today to show The Pirate Princess.'
//         ],
//         [
//             'id' => 5,
//             'title' => 'Hacking around the christmas tree it is a hacky holidaaay',
//             'salary' => 'The Pirate Princess and Captain Ola Vea drags the christmas tree home on the skateboard. 🛹 Singing christmas songs slightly too loud and slightly off key. 🔑🎵'
//         ],
//         [
//             'id' => 6,
//             'title' => 'We all 3 went to the Structured Content Conference and got ideas 💡',
//             'salary' => 'Lillian (7 🏴‍☠️👸) is drawing a tall tale about two girls who find a hidden key to a dangerous door that leads to a forest with a monster filled labyrith.'
//         ]   
//     ];
//     $job = Arr::first($jobs, fn($job) => $job['id'] == $id);

//     // validate request 7:
        
//     request()->validate([
//         'title' => ['required', 'min:3'],
//         'salary' => ['required'],
//     ]);
//     // authorize (on hold ...)
    
    
//     // update the job
//     // and persist
//     $job = Job::findOrFail($id);
//     $job->update([    
//         'title' => request('title'),
//         'salary' => request('salary'),
//     ]);



//     //  . $job->id)
//     // redirect to job page  . $job['id'] og  , '/1'
//     return redirect('/jobs/' . $job['id']);


   
// });

// destroy
// Route::delete('/jobs/{id}', function ($id) {
//     $jobs = [
//         [
//             'id' => 1,
//             'title' => 'Barbeque Party at Berglunds', 
//             'salary' => 'The party started with chilled prosecco in tall glasses and hard cheese with little spicy biscuits. With the patriarch of Berglunds I discussed our mutual satisfation with the personal attention our young ladies get from strong teachers at private and creative schools. The grilled meat and grilled vegetables were delicious. And a powerful red wine. But the triumphant high point: dessert! Crusty Blackberry Pie with icecreams and vanilla sauce.'
//         ],
//         [
//             'id' => 2,
//             'title' => 'The Dev Pirate Princess 🏴‍☠️👸 Redesigns Our POW! Website!',
//             'salary' => '«I am bored» Said the Pirate Princess. «You wanna help me redesign our POW! website?» Captain Ola Said. «YES!» Said the little Pirate. «Let us play around with background colors in Tailwind.» Captain Ola Said. She looked for "bg" in Visual Studio Code. Then guessed the english spelling of "orange" and "yellow", which where the colors she most frequently chose.'
//         ],
//         [
//             'id' => 3,
//             'title' => 'Whisper of the Heart, Studio Ghibli',
//             'salary' => 'Finding a Chonky Cat riding a train, Shizuku follows it to discover an antique shop run by Shirō. Shizuku is ecstatic about finding "a place where stories begin".'
//         ],
//         [
//             'id' => 4,
//             'title' => 'My favourite Robin Hood movie',
//             'salary' => 'I remember watching that Robin Hood movie in the cinema with my dad. MAN I loved that movie. I drew Robin Hood EVERY day for months in day care. And I drew that hypnist snake Hiss also. I drew Hiss with his spiralling eyes. I wish I had some of those drawings today to show The Pirate Princess.'
//         ],
//         [
//             'id' => 5,
//             'title' => 'Hacking around the christmas tree it is a hacky holidaaay',
//             'salary' => 'The Pirate Princess and Captain Ola Vea drags the christmas tree home on the skateboard. 🛹 Singing christmas songs slightly too loud and slightly off key. 🔑🎵'
//         ],
//         [
//             'id' => 6,
//             'title' => 'We all 3 went to the Structured Content Conference and got ideas 💡',
//             'salary' => 'Lillian (7 🏴‍☠️👸) is drawing a tall tale about two girls who find a hidden key to a dangerous door that leads to a forest with a monster filled labyrith.'
//         ]   
//     ];

// });

// Destroy
// Route::delete('/jobs/{id}', function ($id) {
//     // authorize (On hold...)

//     // delete the job
//     // $job = Job::findOrFail($id);
//     // $job->delete();
//     Job::findOrFail($id)->delete();

//     // redirect to jobs page 

//     return redirect('/jobs');
// });    

```


```php


```


```php


```


```php


```


```php


```


```php


```