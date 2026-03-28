# React + Vite

## Novara Group10 Project Summary

**Project:** Novara (Group10 React landing page)

**Brief Description:** A responsive single-page React app built with Vite, featuring a hero section, form section, image section, table section, video section, and footer.

**Components and Responsibilities:**
- `Hero` (built by Obasa David Temitope)
- `VideoSection` (built by Obasa David Temitope)
- `FormSection` (built by Daang Barnabas Tangame)
- `ImageSection` (built by Ayo)
- `TableSection` (built by Oluwasemilore Adedibu)
- `Footer`

**Team Contributors:**
- Obasa David Temitope (Hero and VideoSection)
- Daang Barnabas Tangame (FormSection)
- Ayo (ImageSection)
- Oluwasemilore Adedibu (TableSection)

**How to run locally:**
1. `npm install`
2. `npm run dev`
3. Open the local URL shown in terminal (usually `http://localhost:5173`).

**Live Deployment:**
- [Add your deployed app URL here]


## Team Build Guide (for all sections)

### 1) Component structure and naming
- Keep each section in `src/Components/<sectionName>/` with `<SectionName>.jsx` and `<SectionName>.css`.
- Export a default component from the JSX file.
- Use clear names: `Hero`, `VideoSection`, `TableSection`, etc.

### 2) Adding assets (images, icons, videos)
- Put shared assets in `src/assets/` and import from components using relative paths (e.g. `import earthImage from '../../assets/earth.png';`).
- Avoid `./assets/...` unless an `assets` folder exists in that same directory.
- If an asset is missing, Vite fails during import analysis; double-check file names and extensions.

### 3) Styling and layout
- Keep section styles local to each component in the same folder.
- Use class names that match your JSX and keep styles simple and responsive just like the mock-up.
- Use container classes and flex/grid patterns for layout.
- For consistent design, copy style patterns from existing sections.

### 4) Interactions and scroll behavior
- For buttons that scroll, use `document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' })` and ensure `id` values are set on target sections.

### 5) Build and run checks
- Run `npm run dev` and open the app at the local URL to verify changes.
- If Vite reports `Failed to resolve import`, inspect the path and file location carefully.
- Run `npm run build` before final submission to catch bundling errors.

### 6) Best practices for a polished look
- Keep text concise, use heading hierarchy, and ensure good spacing.
- Use the color palette and button styles given in the mock-up.
- Keep images sized for web and avoid huge assets.
- Use responsive media queries in CSS for mobile/tablet layouts.

### 7) Quick troubleshooting
- If a component is blank, check browser console for runtime errors.
- If an image/video doesn’t display, verify `import` path and file exists.
- If layout breaks, inspect CSS class names and ensure JSX classes match.

---

### Quick team checklist before commit
1. Confirm component file is in correct folder.
2. Confirm CSS file is imported (e.g. `import './Hero.css';`).
3. Confirm asset imports use correct relative path and extension.
4. Confirm there are no unresolved import errors in terminal.
5. Run app and verify section appears visually as expected.

Happy building!