# Stewardship OS · V1.0

A simple, offline-capable prayer, EMOM workout, and daily reflection app.

## Installation on GitHub Pages

1. Download and unzip the package.
2. Open your GitHub repository and **create a NEW branch** (recommended) for V1. Do not delete your previous version.
3. Upload **all** files from inside the `stewardship-os-v1` folder to the **root of the published branch**, preserving the `assets` folder. `index.html` must be at the root.
4. In repository **Settings → Pages**, choose **Deploy from a branch**, select the new branch and `/ (root)`, then save.
5. Open the GitHub Pages URL after deployment completes. Refresh once if the older app remains visible.
6. To install as an app: open the URL in a supported mobile browser and use **Add to Home Screen** or **Install app**.

**Important:** GitHub Pages only publishes one configured branch per repository at a time. If you want to keep the previous version publicly accessible while testing, use a separate test repository or test the new branch locally before changing Pages settings.

## Local testing

From the folder containing `index.html`, run:

```bash
python -m http.server 8000
```

Open `http://localhost:8000`. The app can also be previewed by opening `index.html` directly, but service workers and offline installation require HTTP/HTTPS.

## How it works

- **Prayer:** 30-minute timer with six five-minute sections; pause, resume, restart, optional chime. Prayer remains available without completing a workout.
- **Toil:** select/create/edit/delete exercises, choose reps per minute and total minutes, optional load and five-second prep, EMOM timer, pause/resume, end early. An interrupted workout is recovered after page reload where browser storage remains intact.
- **Completion:** review full elapsed rounds, optionally correct actual total repetitions, add optional note, then save. A session stopped early counts only fully elapsed rounds; you can correct the actual total.
- **Journal:** workout history, repeat workout, edit actual total reps, delete entry; dated autosaved reflections; JSON export/import.

## Privacy and limitations

Data is saved in the current browser's localStorage, **not synchronized** between devices. Export backups periodically. Importing a backup **replaces** existing local data. A private/incognito window or clearing site data may erase records.

Timers use clock deadlines to remain accurate if the page is backgrounded. **Mobile operating systems can silence or delay chimes when the app is locked or backgrounded.** Keep the app open and screen awake if minute cues are essential. Chimes may require an initial tap and are not guaranteed on every device.

The bundled Christ artwork is an **original icon-inspired vector illustration**, not a reproduction of a historically authenticated Orthodox icon. It works entirely offline. If you prefer a specific canonical icon, replace `assets/christ-icon.svg` with appropriately licensed artwork and update the background reference in `styles.css`.

Prayer text includes traditional short prayers and original prayers. Scripture references are short excerpts and are not presented as a complete liturgical prayer rule.

Fonts load from Google Fonts when online and fall back to Georgia/Arial offline. All essential functionality works offline after the app is cached.

## Updating the app

Replace the code files, and change the `CACHE` name in `sw.js` for future releases. **Do not change** the `KEY` storage constant in `app.js` without a migration, or previous entries will appear missing. Export a backup before any update.
