# Kai Yui Man — Academic Website

A clean, mobile-friendly academic portfolio using **plain HTML, CSS, and JavaScript**. No npm, framework, build command, or paid hosting required.

## ⭐ How to update your website (the easy way)

**For almost all text and projects, edit only `site-content.js`.**

- **Introduction:** edit the `personal` section.
- **Force2Act research text:** edit the `research` section.
- **Future research interests:** edit the `future` section.
- **Experience & education:** add or change an item in `experience` or `education`.
- **Selected projects:** add, remove, or edit an entry under `projects`.
- **Videos:** edit the list under `simulations` and keep the named files in `assets/videos/`.

For example, to add a new project, copy an existing item between `{` and `}` within `projects`, make sure items are separated by commas, and edit the content:

```javascript
{ category: "ROBOT LEARNING", year: "2027", title: "New Project",
  description: "A short, factual project description.",
  tools: "Python · PyTorch · MuJoCo" }
```

To add a new video:

1. Place an MP4 at `assets/videos/my-new-demo.mp4`.
2. (Optional) Put a thumbnail at `assets/videos/my-new-poster.webp`.
3. Add an item to the `simulations` list in `site-content.js`:

```javascript
{ title: "New simulation", description: "A short explanation.",
  video: "assets/videos/my-new-demo.mp4",
  poster: "assets/videos/my-new-poster.webp" }
```

To **remove** a video, delete its `{ ... }` item. If you remove every item (`simulations: []`), the gallery disappears.

To change the design rather than the text, edit `styles.css`.
To change navigation, layout, SEO metadata or the downloadable CV path, edit `index.html`.
Usually **do not edit `script.js`** — it simply displays your content and runs the mobile menu.

### Update your CV

Replace `assets/Kai_Yui_Man_CV.pdf` with a new CV **using exactly the same filename**. The linked document will be updated everywhere on the site.

**Privacy:** the bundled public copy omits your personal phone number. Check any replacement before you publish it.

## Preview locally

From the website folder:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000> in your browser. Save your changes, then refresh the page.

Opening `index.html` directly usually works too, but the small local server is more reliable.

## Publish with GitHub Pages

1. Create a new **public** repository called exactly `Yu1man.github.io` on your GitHub account `Yu1man`.
2. Upload the website's files at the repository root: `index.html`, `styles.css`, `script.js`, `site-content.js`, `.nojekyll`, `README.md`, and the complete `assets/` folder.
3. Go to repository **Settings → Pages → Build and deployment**. Choose **Deploy from a branch**, branch **main**, folder **/(root)**, and save.
4. Open <https://yu1man.github.io/> after deployment completes.

Later, just upload your edited `site-content.js` (or the files you changed) and GitHub Pages will publish the updates. You do not need to recreate the repository.

## Force2Act videos

The three supplied videos are included as separate original-length simulation clips (approximately 6–8 seconds). They are short and small enough for GitHub Pages. The associated `.webp` posters help the gallery load before users press Play.

- **Precision insertion:** visualised alignment / insertion.
- **Object manipulation:** pickup and transfer of a small object.
- **Articulated manipulation:** interacting with an articulated object.

These are **illustrations of simulation episodes**, not controlled side-by-side force/no-force experiments. They do not establish experimental success-rate differences. Real-robot experiments are described separately as ongoing.

**Before publishing the clips**, confirm with your supervisor that the simulation assets and joint/paper materials may be released. Also verify the video titles accurately match the experimental tasks.

## Notes

- No trackers, external fonts, analytics or cookies.
- Do not upload unreleased Force2Act source code, private Appraiseye materials, or third-party assets without permission.
- The It's Lolly card describes research scope, not an assertion of completed deployment; double-check what can be shared.
- Once UCL confirms your MSc award/classification, update `site-content.js` and `assets/Kai_Yui_Man_CV.pdf` as appropriate.
