# StoryCast

An accessible, framework-free microsite showcasing audio and video
storytelling — built with semantic HTML5, Sass, CSS Grid/Flexbox, and a
container-queried media card. Target: **WCAG 2.1 AA**.

## Requirements

Open the folder in VS Code with the **Live Sass Compiler** extension
(settings are pre-configured in `.vscode/settings.json`).

- Click **Watch Sass** in the status bar → saves to `css/main.css`.
- Or compile once from a terminal:

  ```powershell
  npx --yes sass scss/main.scss css/main.css --style=expanded
  ```

Then open `index.html` in a browser (or use Live Server).

## Structure

```
storycast/
├── index.html            Home
├── story.html            Story detail
├── about.html            About / Access
├── scss/                 Sass sources (partials + tokens)
│   ├── main.scss         entry point (@use everything, in order)
│   ├── _tokens.scss      breakpoints, container widths, radii, durations
│   ├── _colors.scss      color palette (with contrast notes)
│   ├── _typography.scss  font stack, modular scale, leading
│   ├── _spacing.scss     4px-based spacing scale
│   ├── _mixins.scss      focus-ring, container-query, visually-hidden
│   ├── _base.scss        reset, root type, skip link, focus, reduced motion
│   ├── _layout.scss      containers, story grid, buttons, badges, forms
│   ├── _header.scss      site header + responsive nav
│   ├── _media-card.scss  container-queried media card
│   ├── _transcript.scss  transcript panel
│   └── _footer.scss      site footer
├── css/                  compiled output (main.css)
├── js/main.js            progressive-enhancement nav toggle
├── media/                your audio/video + WebVTT captions (add here)
└── img/                  thumbnails (placeholder.svg included)
```

## Information architecture

```
                 [Home  index.html]
                 /                \
   [Story  story.html]      [About / Access  about.html]
        │
        └── related-story cards link back into story.html
```

- **Home** — introduces StoryCast, lists featured stories, routes to the rest.
- **Story** — one story: media player + captions, transcript, related stories.
- **About / Access** — mission, accessibility features, how to get involved.

## Accessibility checklist

- [ ] Captions (WebVTT) for every video; transcript for every audio story.
- [ ] Contrast: body text ≥ 4.5:1, large text / UI ≥ 3:1 (record values here).
- [ ] Keyboard: skip link, visible focus, operable video/audio/details/nav.
- [ ] Screen-reader landmark + heading outline verified.
- [ ] 200% zoom and 320px width: no horizontal scroll.
- [ ] `prefers-reduced-motion` respected.

## Media notes

Add your files to `media/` and update the `<source>` / `<track>` paths in
`story.html`. Captions should be `.vtt`; keep videos ≤ 720p and use a
`poster` image.
