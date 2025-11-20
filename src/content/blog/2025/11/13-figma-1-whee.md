---
title: TheftController
author: "@OlaHolstVea"
date: 2025-10-21
---

## Using PHP Enums for Talk Types
Instead of database enums, we use PHP enums for flexibility.

Example enum:

```php

enum TalkType: string
{
    case Lightning = 'lightning';
    case Standard = 'standard';
    case Keynote = 'keynote';
}
```



```php

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Server side validation
        // request()->validate([
        //     'what_happened' => 'nullable',
        // ]);

        // Create a row in our database
        $theft = Theft::create([
            'photos_taken' => request('photos_taken'),
        ]);

        return redirect('/thefts/{id}/edit');
    }
```


```php
<!-- Template form at  -->
<div>
    @csrf
    <div>
        <!-- need a variable in title -->

        <div>
            <div>
                <div>
                    <input 
                        type="radio" 
                        id="photos_taken" 
                        name="photos_taken" 
                        value="no" 
                    />
                    <label for="photos_taken">Jeg tok bilder</label>
                </div>        
                    @error("photos_taken")
                        <p>{{ $message }}</p>
                    @enderror
                </div>
            </div>
        </div>
    </div>
    <div>
        <a href="/thefts/{{ $theft->id }}">Cancel</a>
        <!-- need a variable in button -->
        <button type="submit">Ok, gå videre</button>
    </div>
</div>
            
```

```php

return new class extends Migration
{
    /**
     * Run the migrations.
     *      Customer_id = kkjjjh ?
     * photos_taken
     */
    public function up(): void
    {
        Schema::create('thefts', function (Blueprint $table) {
            $table->id();
            $table->boolean('photos_taken')->default(true);
            $table->boolean('find_my_activated')->default(false);
            $table->text('find_my_not_working')->nullable();
            $table->boolean('called_police')->nullable();
            $table->boolean('bike_found')->nullable();
            $table->boolean('whee_report')->nullable();
            $table->boolean('police_report')->nullable();
            $table->boolean('terminate_whee')->nullable();
            $table->boolean('new_bike')->nullable();
            // $table->string('archive_report')->default('false');
            $table->timestamps();
        });
    }

```

```php
<p>Min Side</p>
<p>Trinn 2 av 3</p>
<h2>2. Sjekk hvor sykkelen er</h2>


<a
    href="#"
    class="text-black-40 hover:text-red-40 text-sm font-medium transition-colors"
>
    Åpne: Hvor er/find my -> objekter.
</a>

<p>Velg Whee! - ditt navn</p>
<a
    href="/thefts/create"
    class="text-black-40 hover:text-red-40 text-sm font-medium transition-colors"
>
    Tilbake
</a>

<br />
<a
    href="/thefts/3-callcops"
    class="text-black-40 hover:text-red-40 text-sm font-medium transition-colors"
>
    Ok, gå videre
</a>
<br />
<a
    href="/thefts/#"
    class="text-black-40 hover:text-red-40 text-sm font-medium transition-colors"
>
    Det, går ikke
</a>
```



```php
Route::get('/bet', function (S $s) {
    $returnUrl = route('user.payments.index');
    $port = $s->createBillPortaSess(
        $u->s_cu_d,
        $returnUrl
    );

    return redirect($port);
})


    $returnUrl = route('user.payments.index');
    $portalUrl = $stripeService->createBillingPortalSession(
        $user->stripe_customer_id,
        $returnUrl
    );

    return redirect($portalUrl);

    // x
Route::get('/bet', function (StripeService $stripeService) {
    $returnUrl = route('user.payments.index');

    $portalUrl = $stripeService->createBillingPortalSession(
        $user->stripe_customer_id,
        $returnUrl
    );

    return redirect($portalUrl);
})
```


```php
// db / migrations / create_thefts_table  ✅

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('thefts', function (Blueprint $table) {
            $table->id();
            $table->text('what_happened')->nullable();
            $table->text('where_happened')->nullable();
            $table->string('file_paths')->nullable();
            // $table->string('archive_report')->default('false');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('thefts');
    }
};

<?php
// App\Models/ Theft ✅
namespace App\Models; 

use Illuminate\Database\Eloquent\Model; 

class Theft extends Model 
{
    // deleted this for now: , 'archive_report' 
    protected $fillable = ['what_happened', 'where_happened', 'file_paths'];


    protected $casts = [
        'file_paths' => 'array', // Laravel will JSON encode/decode automatically
    ];
}


// routes/web.php
<?php

use App\Http\Controllers\TheftController;
use Illuminate\Support\Facades\Route;

// Set Norwegian verbs for resource routes
Route::resourceVerbs([
    'create' => 'opprett',
    'edit' => 'rediger',
]);

//  ✅
// Read a list of our user's Theft reports, by what_happened 
Route::get('/thefts', [TheftController::class, 'index']);

// Create View a Theft Form and create a theft report, in ep (16)
Route::get('/thefts/create', [TheftController::class, 'create']);

// Store a Theft report in the database
Route::post('/theft', [TheftController::class, 'store']);

// Show our user's Theft report
Route::get('/thefts/{id}', [TheftController::class, 'show']);

// Edit form for our user's Theft report
Route::get('/thefts/{id}/edit', [TheftController::class, 'edit']);

// Update our user's Theft report in the database
Route::patch('/thefts/{id}', [TheftController::class, 'update']);

// Destroy our user's Theft report in the database
Route::delete('/thefts/{id}', [TheftController::class, 'destroy']);

// TheftController

<?php

namespace App\Http\Controllers;

use App\Models\Theft;
use Illuminate\Http\Request;

class TheftController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('thefts.index', [
            'thefts' => Theft::all()
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
    public function store(Request $request)
    {

        // Server side validation 
        // 'image_upload' => 'file|image|max:2000',
        request()->validate([
            'what_happened' => 'required',
            'where_happened' => 'nullable',
            'image_upload' => 'max:2000',
            
        ]); 
            
        $image_array = [];
        if ($request->hasFile('image_upload')) {
            foreach ($request->file('image_upload') as $file) {

                // Store the file in the Pub / images directory
                $filePath = $file->store('images', 'public');
                // Add file Path to our array
                $image_array[] = $filePath;
            }
        }
        // Create a row in our database
        $theft = Theft::create([
            'what_happened' => request('what_happened'),
            'where_happened' => request('where_happened'),
            'file_paths' => $image_array,
            // $request->file('image_upload')->store('images', 'public'),
        ]);
        
        return redirect('/thefts/'. $theft->id);      

    }

    /**
     * Display the specified resource.
     */
    public function show(Theft $theft, $id)
    {
        $theft = Theft::findOrFail($id);
        $files = $theft->file_paths;
        
        if ($theft) {        
            return view('thefts.show', ['theft' => $theft, 'files' => $files]);
        }

        return redirect('/thefts');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Theft $theft, $id)
    {
        $theft = Theft::find($id);
    
        if ($theft) {        
            return view('thefts.edit', ['theft' => $theft]);
        }

        return redirect('/thefts');
        }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Theft $theft, $id)
    {
        // Server side validation 
        // 'image_upload' => 'file|image|max:2000', 
        $validated = $request->validate([
            'what_happened' => '',
            'where_happened' => '',
            'image_upload' => '',
        ]); 
        
        
        $image_array = [];
        if ($request->hasFile('image_upload')) {
            foreach ($request->file('image_upload') as $file) {

                // Store the file in the Pub / images directory
                $filePath = $file->store('images', 'public');
                // Add file Path to our array
                $image_array[] = $filePath; // pluss one here
            }
        }

        // authenticate (on hold)
        
        $theft = Theft::findOrFail($id);
    
        $theft->what_happened = request('what_happened');
        $theft->where_happened = request('where_happened');
        // $theft->archive_report = request('archive_report');
        $theft->file_paths = $image_array;
        $theft->save($validated);
    
        return redirect('/thefts/'. $theft->id);        
    }

    /**
     * Wait with: Remove the specified resource from storage.
     */
    public function destroy(Theft $theft, $id)
    {
        $gateway = Theft::find($id);
        // Research dirty delete
        
        if ($gateway) {        
            return view('thefts.show', ['gateway' => $gateway]);
        }
    
        return redirect('/thefts');
        
    }
}


```





```php
// create.blade.php
    <!-- Theft form at http://whee-laravel.test/thefts/create  -->
    <form method="POST" action="/theft" enctype="multipart/form-data">
        <h2>Start sykkeltyv respons  🦾👮 -> 🚴‍♀️</h2>
        @include('thefts.template')
    </form>

// edit.blade.php

    <!-- Theft form at http://whee-laravel.test/thefts/{id}/edit  -->
<form method="POST" action="/thefts/{{ $theft->id }}" enctype="multipart/form-data">
    <h2>Oppdater sykkeltyv respons  🦾👮 -> 🚴‍♀️</h2>
    
    @method('PATCH')
    @include('thefts.template')

</form>


// index.blade.php
 <!-- View a list of Thefts, by what_happened at /thefts -->
<div>
    <ul>
        @foreach ($thefts as $theft)
            <li class="hover:underline ">
                <a href="/thefts/{{ $theft['id'] }}">
                    {{ $theft['what_happened'] }}. 
                </a>
            </li>
        @endforeach    
    </ul>
</div>

// show.blade.php
<h2>
    <strong>Hva skjedde?</strong> 
</h2>

<p>{{ $theft['what_happened'] }} </p>

<p>{{ $theft['where_happened'] }} </p>

<div>
    
            
    
    @foreach ($files as $file)
        @if($file)    
            <img src="{{ asset($file) }}" alt="image" />
        @endif    

        
    @endforeach    
    
</div>

<p>Gi oss gjerne mer informasjon</p>

<a href="/thefts/{{ $theft->id }}/edit">Oppdater din tyverirapport</a>

// template.blade.php

<!-- Template form at  -->
    <div>
    @csrf 
        <div>
            <!-- need a variable in title -->
        
        

            <div>
                <div>
                    <label for="title">Hva skjedde?</label>
                    <div>
                        <div>
                            <input
                                placeholder="🥔 Potet på 🛴  " 
                                type="text" 
                                name="what_happened" 
                                id="what_happened"
                                value="{{ old('what_happened', $theft->what_happened ?? '' )}}" 
                            >
                        </div>
                        @error('what_happened')
                            <p>{{ $message }}</p>
                        @enderror
                    </div>
                </div>

                <div>
                    <label for="title">Hvor skjedde?</label>
                    <div>
                        <div>
                            <input
                                placeholder="🥔 Potet på 🛴  " 
                                type="text" 
                                name="where_happened" 
                                id="where_happened" 
                                value="{{ $theft->where_happened }}" 
                            >
                        </div>
                        @error('where_happened')
                            <p>{{ $message }}</p>
                        @enderror
                    </div>
                </div>

                <div>
                    <label for="image_upload">Oppdater bilde</label>
                    <div>
                        <div>
                            <!-- How to dirty-dont-delete-images-on-empty-edit ? -->
                            <input
                                type="file" 
                                name="image_upload[]" 
                                id="image_upload" 
                                accept="image/*"
                                multiple
                            >
                        </div>
                        @error('image_upload')
                            <p>{{ $message }}</p>
                        @enderror
                    
                    
                    </div>
                </div>
                <!-- <div>
                    <label for="archive_report">Archive this theft report</label>
                    <div>
                        <div>
                            <input
                                placeholder="false 🦹" 
                                type="boolean" 
                                name="archive_report" 
                                id="archive_report" 
                                value="{{ $theft->archive_report }}" 
                            >
                        </div>
                        @error('archive_report')
                            <p>{{ $message }}</p>
                        @enderror
                    </div>
                </div> -->
            
        </div>
        </div>
    <div>
        <a href="/thefts/{{ $theft->id }}">Cancel</a>
                    <!-- need a variable in button -->
        <button type="submit">Lagre</button>
    </div>
    


// public.blade.php
                <nav class="flex items-center gap-x-4">
                    <a
                        href="/thefts/create"
                        class="text-sm font-medium text-black-40 hover:text-red-40 transition-colors"
                    >
                        Sykkeltyveri 
                    </a>
                </nav>



```


```php
// app \ Policies / TheftPolicy
<?php

namespace App\Policies;

use App\Models\Theft;
use App\Models\User;

class TheftPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        // All authenticated users can view thefts (controller filters to their own)
        return true;
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Theft $theft): bool
    {
        // Users can only view their own thefts
        return $user->id === $theft->user_id;
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        // All authenticated users can create thefts
        return true;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Theft $theft): bool
    {
        // Users can only update their own thefts
        return $user->id === $theft->user_id;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Theft $theft): bool
    {
        // Users can only delete their own thefts
        return $user->id === $theft->user_id;
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Theft $theft): bool
    {
        // Users can only restore their own thefts
        return $user->id === $theft->user_id;
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Theft $theft): bool
    {
        // Users can only permanently delete their own thefts
        return $user->id === $theft->user_id;
    }
}

```



```php

```


