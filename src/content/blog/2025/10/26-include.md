---
title: TheftController
author: "@OlaHolstVea"
date: 2025-10-21
---
```php
// TheftController

/**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('thefts.create', ['theft' => new Theft]);
    }

theft-dirty-dont-delete-images-on-empty-edit-28

Added a template to duplicate in the edit and create forms

Added an empty theft in the create method in the TheftController to make the template work

value="{{ $theft->where_happened }}" 


value="{{ $theft->archive_report }}" 

@include('thefts.template')



value="{{ old('what_happened', $theft->what_happened ?? '' }}" 

```


```php


```



```php
php artisan make:controller TheftController --model=Theft --resource

<?php

namespace App\Http\Controllers;

use App\Models\Theft;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class TheftController extends Controller
{

    /**
     * Create a new controller instance.
     */
    // public function __construct()
    // {
    //     $this->authorizeResource(Theft::class, 'theft');
    // }
    /**
     * Display a listing of the resource.
     */
    // public function index()
    // {
    //     $thefts = $this->user()->thefts()->latest()->get();
    //     return view('user.thefts.index', ['thefts' => $thefts]);
    // }

    /**
     * Show the form for creating a new resource.
     */
    // public function create()
    // {
    //     return view('user.thefts.create');
    // }

    /**
     * Store a newly created resource in storage.
     */
    // public function store(Request $request)
    // {
    //     // Validate the uploaded file
    //     $fields = $request->validate([
    //         'what_happened' => 'required',
    //         'image_upload' => 'file|image|max:20000',
    //     ]);

    //     // Handle image upload
    //     $imageFields = $this->handleImageUpload($request);
    //     $fields = array_merge($fields, $imageFields);

    //     // Associate the theft with the authenticated user
    //     $fields['user_id'] = Auth::id();
    //     Theft::create($fields);

    //     return redirect()->route('user.thefts.index');
    // }

    /**
     * Display the specified resource.
     */
    // public function show(Theft $theft)
    // {
    //     return view('user.thefts.show', ['theft' => $theft]);
    // }

    /**
     * Show the form for editing the specified resource.
     */
    // public function edit(Theft $theft)
    // {
    //     return view('user.thefts.edit', ['theft' => $theft]);
    // }

    /**
     * Update the specified resource in storage.
     */
    // public function update(Request $request, Theft $theft)
    // {
    //     // Validate the uploaded file
    //     $fields = $request->validate([
    //         'what_happened' => 'required',
    //         'image_upload' => 'nullable|file|image|max:20000',
    //     ]);

    //     // Handle image upload (pass existing theft for old image deletion)
    //     $imageFields = $this->handleImageUpload($request, $theft);
    //     $fields = array_merge($fields, $imageFields);

    //     // If no new image uploaded, keep existing image
    //     if (!$request->hasFile('image_upload')) {
    //         unset($fields['image_upload']);
    //     }

    //     $theft->update($fields);

    //     return redirect()->route('user.thefts.show', $theft)->with('success', 'Tyveri oppdatert!');
    // }

    /**
     * Handle image upload for theft reports.
     *
     * @param Request $request
     * @param Theft|null $theft The existing theft (for updates) or null (for new thefts)
     * @return array Updated fields array with image path if uploaded
     */
    // private function handleImageUpload(Request $request, ?Theft $theft = null): array
    // {
    //     $fields = [];

    //     if ($request->hasFile('image_upload')) {
    //         $file = $request->file('image_upload');
    //         if ($file->isValid()) {
    //             // Delete old image if updating an existing theft
    //             if ($theft && $theft->image_upload && Storage::disk('public')->exists($theft->image_upload)) {
    //                 Storage::disk('public')->delete($theft->image_upload);
    //             }

    //             $path = $file->store('images', 'public');
    //             $fields['image_upload'] = $path;
    //         }
    //     }

    //     return $fields;
    // }
    // public function handlePdfDownload()
    // {
    //     // generate a PDF with a composer package
    //     // download PDF on click, the download PDF button
    //     // request
    //     // store on the server
    //     // redirect to the pdf url
    // }
}

```

```php

// web.php
<?php

use App\Http\Controllers\AuthController;
use App\Models\Theft;
use Illuminate\Support\Facades\Route;
use App\Services\AirtableService;
use Illuminate\Http\Request;

Route::get('/', function () {
    return view('welcome');
})->name('home');

// View a Theft Form and create a theft report, in ep (16)
Route::get('/thefts/create', function () {
    return view('thefts.create');
});

// Store a Theft Response in the database 
// We should move this into a controller named _ _ _ _ 
Route::post('/theft', function (Request $request) {
    
    // validating the uploaded file
    $fields = $request->validate([
        'what_happened' => 'required',
        'image_upload' => 'file|image|max:20000',
    ]);

    // store the uploaded file using Laravel's storage system
    if ($request->image_upload) {
        $path = $request->file('image_upload')->store('images', 'public');
        $fields = array_merge($fields, ['image_upload' => $path]);
    }
    Theft::create([
        'what_happened' => request('what_happened'),
        'image_upload' => request('image_upload'),
    ]);

    return redirect('/theft');
});

Route::get('/thefts/update', function () {
    // This is where a user should edit her Theft Response, for example add photos
    // So we should move image_upload stuff here, but first get it into the controller?
    // and in the end move the whole Theft response into Protected Routes
    return view('thefts.update');
});

// Route::get('/thefts', function ($id) {
//     dd($id);
//     // return view('thefts.show');
// });

// Authentication views
Route::get('/auth/logg-inn', function () {
    return view('auth.login');
})->name('login');

Route::get('/auth/logg-inn/engangskode', function () {
    return view('auth.verify-otp');
})->name('verify-otp');

// Authentication API routes
Route::post('/auth/send-otp', [AuthController::class, 'sendOtp']);
Route::post('/auth/verify-otp', [AuthController::class, 'verifyOtp']);
Route::post('/auth/logout', [AuthController::class, 'logout'])->middleware('auth');

// Protected Routes
Route::middleware('auth')->group(function () {
    Route::get('/min-side', function () {
        $booking = AirtableService::getNextBooking();
        return view('dashboard', ['booking' => $booking]);
    })->name('dashboard');

    Route::get('/booking', function () {
        $booking = AirtableService::getNextBooking();
        return view('booking', ['booking' => $booking]);
    })->name('booking');
});


// Ahoy! Show below, in ep (16) 01:56
// Wildcard routes should come after specific routes like jobs/create to avoid conflicts
Route::get('/thefts/{id}', function ($id) {
    $gateway = Theft::find($id);
    
    return view('thefts.show', ['gateway' => $gateway]);
});


```


```php
// Theft
<?php

namespace App\Models; 

use Illuminate\Database\Eloquent\Model; 

class Theft extends Model 
{
    protected $fillable = ['what_happened', 'image_upload'];
}

```

```php
// create_thefts_table
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
            $table->text('what_happened');
            $table->string('image_upload')->nullable();
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


```


```php

    <!-- Theft form at http://whee-laravel.test/thefts/create  -->
    <form method="POST" action="/theft" enctype="multipart/form-data">
    @csrf 

    <div>
        <div>
        <h2>Start en sykkeltyv respons  🦾👮 -> 🚴‍♀️</h2>
        <p>Vi trenger en kort beskrivelse av hva som skjedde.</p>

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
                            >
                        </div>
                        @error('what_happened')
                            <p>{{ $message }}</p>
                        @enderror
                    </div>
                </div>
                <div>
                    <label for="image_upload">Last opp bilde</label>
                    <div>
                        <div>
                            <input
                                type="file" 
                                name="image_upload" 
                                id="image_upload" 
                                accept="image/*"
                            >
                        </div>
                        @error('image_upload')
                            <p>{{ $message }}</p>
                        @enderror
                    
                    
                    </div>
            
                
                </div>
            
        </div>
        </div>



    <div>
        <button type="button">Cancel</button>
        <button type="submit">Save</button>
    </div>
    </form>




```