# Stewardship OS V1.1

Prayer · Toil · Gratitude. A simple offline-capable web app for thirty minutes of prayer, one-exercise EMOM training, and a private daily journal.

## Installation / updating GitHub Pages

1. Export a backup in Journal before updating.
2. Extract this ZIP. Open the `stewardship-os-v1` folder inside it.
3. Upload **the contents** of that folder to the root of your existing `r3s3arch/stewardship-os-v1` repository on the `main` branch, replacing the files of the same names. Keep the `assets` folder.
4. Wait for GitHub Pages deployment, then reload `https://r3s3arch.github.io/stewardship-os-v1/`. If a cached version remains, close and reopen the app or clear site cache (not site data).

**Data protection:** This release uses the same localStorage keys as V1 (`stewardship_os_sanctuary_v1` and `stewardship_os_active_session_v1`). Existing workouts, reflections, and custom exercises remain on the same browser and site origin. Importing a backup **replaces** the local data; do not import unless needed.

## Changes
- 26 categorized default movements, including dips and back extensions. Existing custom entries preserved; missing new defaults merged on startup.
- Repetitions or seconds per minute, with a 59-second maximum for timed intervals.
- Church interior photograph in Prayer, refined overlay, navigation through prayers, updated footer text.
- Custom finish-early dialog, exercise name in completion summary, more detailed history.
- Updated service-worker cache version.

## Notes
- Previous/next prayer buttons preview prayer text independently of the running countdown; the timed stage returns on resume.
- For timed exercises, the optional actual-total field records seconds rather than repetitions.
- The application runs entirely in the browser; use Export Backup periodically.

## V1.2

- Separate category and exercise selection.
- Migrates recognized legacy default exercises into canonical categories and removes duplicate entries.
- Preserves journal, reflections, and unknown custom exercises.
- Shows units on planned workout totals.
- Uses the existing localStorage key; export a backup before updating.
