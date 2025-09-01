---
title: Adding QR ti Omway 
author: "@OlaHolstVea"
date: 2025-08-28
---





### Step-by-step implementation todos

- **Dependencies**
  - Install packages:
    - `composer require endroid/qr-code:^4.8 intervention/image:^2.7`
  - Commit `composer.json` and `composer.lock`.

- **Config and storage**
  - Create `config/qr-codes.php` with defaults:
    - base_url, storage_disk (`local`), base_path (`qr-codes/`), sizes (100, 200, 400), formats (png, svg), error_correction.
  - Ensure directory exists: `storage/app/qr-codes` (git-ignored).

- **Service**
  - Implement `app/Services/QrCodeService.php`:
    - `urlForStop($entry)` → builds full URL (`config('app.url') . '/stops/{slug}'`).
    - `pathFor($slug, $size, $format)` → deterministic storage path.
    - `generateForStop($entry, $size = 200, $format = 'png', $ecLevel = 'medium')` → writes file if missing or forced.
    - `exists($slug, $size, $format)` and `deleteAllFor($slug)` for cleanup.
    - `temporaryDownloadUrl($path, $minutes = 5)` using signed route.

- **Download controller and routes**
  - Add `app/Http/Controllers/QrCodeController.php`:
    - `download(Request $r)` → validate signature, stream file from storage.
  - Add route to `routes/web.php`:
    - Signed route `qr-codes.download` with params: `slug,size,format,filename`.
    - Middleware: `signed`.

- **Custom Fieldtype (backend)**
  - Implement `app/Fieldtypes/QrCodeGenerator.php`:
    - `indexComponent()` → `qr_code_generator-fieldtype`.
    - `preload()` returns:
      - `url` (encoded target URL),
      - current `sizes`, `formats`,
      - `generated` flags per size/format,
      - signed `download_urls`.
    - Option params: `width`, `height`, `format`, `error_correction`, `sizes`.
    - Hook into `preProcess`/`process` as passthrough (field stores no data).
  - Register fieldtype in `app/Providers/AppServiceProvider.php` (boot):
    - `Statamic::fieldType(QrCodeGenerator::class)`.

Jeg kom meg hit

- **Custom Fieldtype (CP Vue)**
  - Create `resources/js/components/fieldtypes/QrCodeField.vue`:
    - Show preview (default size/format).
    - Buttons: Generate/regenerate, PNG/SVG, size selector.
    - Download action requests signed URLs from preload payload.
  - Register in `resources/js/cp.js`:
    - `Statamic.$components.register('qr_code_generator-fieldtype', require('./components/fieldtypes/QrCodeField.vue').default);`
  - Add minimal styles in `resources/css/cp.css` if needed.
  - Rebuild assets: `npm run build` or `npm run dev` (Herd serves site).

- **Blueprint integration**
  - Update `resources/blueprints/collections/stop/stop.yaml`:
    - Add a new section/fieldset (sidebar preferred) with:
      - `handle: qr_code`
      - `type: qr_code_generator`
      - options: `width: 200`, `height: 200`, `format: png`, `error_correction: medium`, `sizes: [100,200,400]`.
  - Save; ensure it appears in CP.

- **Generation triggers**
  - Ensure field UI can invoke generation:
    - Add Statamic CP JSON endpoint or use existing preload + action route:
      - Create route: `POST /cp/qr-codes/generate` (CP auth middleware) to call `QrCodeService::generateForStop`.
    - Alternatively, generate lazily on first download; cache result.
  - Add listener to regenerate on slug change:
    - In `AppServiceProvider::boot`, listen to `EntrySaved`:
      - If collection is `stop` and slug changed, call `deleteAllFor(oldSlug)` and regenerate for new slug (default size/format).

- **Security**
  - Downloads via signed routes only.
  - CP generation endpoint behind `cp.auth` middleware and CSRF.

- **Cleanup**
  - Listen to `EntryDeleted` for `stop` collection:
    - Remove `storage/app/qr-codes/{slug}/*`.

- **Views (optional for preview outside CP)**
  - If needed for site preview, add Antlers snippet to show QR image from a public proxy route or inline `<img src="{{ signed_download_url }}">`.

- **Asset container (optional)**
  - If you later want QR codes as Assets, add a private container in `content/assets` and adjust disk/path. For now, keep in `storage/app/qr-codes`.

- **Testing checklist**
  - Create/edit a stop; see QR field in sidebar.
  - Generate PNG/SVG at 100/200/400; files appear under `storage/app/qr-codes/{slug}/`.
  - Download works via signed link; link expires.
  - Change slug; old files removed, new files generated/downloadable.
  - Delete stop; files cleaned up.

- **Print-ready (phase 2)**
  - In `QrCodeService`, add method to compose PNG with title using `intervention/image` and output A6/A5 templates.
  - Add extra download options in field UI: “With title”, “A6/A5”.

- **Docs**
  - Add `ai/task-26-qr-codes.md` progress notes.
  - Create short creator guide in `resources/views/qr-codes/README.md` or `docs/`.

- **Follow-ups**
  - Bulk generation: CP utility page listing `stop` entries with “Generate all”.
  - Analytics: simple DB/table or logs of downloads keyed by slug.

- **Acceptance checks**
  - QR scans to `https://{your-herd-domain}/stops/{slug}`.
  - PNG/SVG render sharply at all sizes.
  - Regeneration on slug change verified.
  - Access to files only through signed links.

- **Nice-to-have config keys (add to `config/qr-codes.php`)**
  - `default_format`, `default_size`, `error_correction`, `margin`, `label_font_path`, `label_font_size`, `download_link_ttl_minutes`.