---
name: jammie-design
description: Jammie's design system — tokens, type, the Jammie character, 3D icons, line icons and the shared cards (feed card, saved card, story ring, Command centre card, memory tile, rows). Use when building or reviewing any Jammie screen, so it uses the existing tokens and components instead of inventing new ones.
---

# Jammie design system

Jammie is calm, soft and tactile: white pages, one clean red, felt-textured art, and no hairlines. Separation comes from soft fills and gaps, never from rules or outlines.

Source of truth: `assets/jammie/v3/jammie.css` (tokens and components), `assets/jammie/v3/data.js` (card renderers), `assets/jammie/v3/icons.js` (line icons). Live reference: `design-system.html`. Every name below exists in those files. A name not listed here does not exist: an unlisted token, variant or component is a bug, not an option.

## Rules that apply everywhere

- Colours come from tokens only. Never write a hex value in a component. The only exceptions are white text on pictures (`#fff`) and the felt art itself.
- No orange or yellow anywhere in the UI. The accent is red (`--jam`).
- No hairlines between things. A list is soft blocks with a 3px gap (`.rows`), a section is spaced 32px from the next, a column is a tinted panel. A 1px line is allowed only on inputs, chips and the edge under the top bar once the page has scrolled.
- No helper paragraphs on cards: a picture, a title, one line at most, one action.
- Jammie (the red dollop) is the only character in the product.
- One `b-jam` button per view. Two red buttons means the screen has no main action.

## Colour

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `--jam` | #E93A4C | same | The accent: the main button, picks, the Jam action, story rings, anything that needs you |
| `--jam-2` | #E0245E | same | Only inside the `b-jam` gradient |
| `--on-jam` | #FFFFFF | same | Text on red |
| `--bg` | #FFFFFF | #0F0F0F | The page |
| `--card` | #FFFFFF | #181818 | Anything raised: sheets, toasts, the side panel's blocks |
| `--s2` | #F7F7F7 | #232323 | Soft fill: list blocks, tiles, picture placeholders, soft buttons |
| `--s3` | #EBEBEB | #2E2E2E | Hover on a soft fill |
| `--line` | #DDDDDD | #343434 | Input and chip borders only |
| `--line-soft` | #EBEBEB | #242424 | The scrolled-page edge, avatar rings |
| `--fg` | #222222 | #F7F7F7 | Text |
| `--fg-2` | #6A6A6A | #A6A6A6 | Quiet text: meta lines, labels, inactive tabs |
| `--fg-3` | #B0B0B0 | #6A6A6A | Disabled, placeholder |
| `--on` | #555555 | #BDBDBD | A switch that is on. Picked states are grey or red, never full black |
| `--good` | #12855A | #4AD6A0 | A number that moved the right way |
| `--colbg` / `--tile` | `--s2` / `--bg` | `--card` / `--s2` | A Command centre column, and a card on it |
| `--floor` | #F3EFE9 | #1C1917 | Behind the page when a side panel is open |

```
Which background?
 ├── The page → --bg
 ├── Raised over the page (sheet, toast, popup) → --card + --shadow-3
 ├── A block in a list, a tile, a placeholder → --s2 (hover --s3)
 └── A Command centre column → --colbg, its cards → --tile
Which text colour?
 ├── Titles and body → --fg
 ├── Meta, labels, counts → --fg-2
 └── Needs you, or a drop → --jam; a rise → --good
```

Command centre columns each carry one accent in `--acc` for their bars and meter: `#7C5CFC`, `#17A673`, `#2F6BFF`, `#0FA3B1`, `#E0245E`. Use these five only, one per column.

## Type

One typeface: Figtree (`--font`), weights 400, 500, 600 and 700. Titles are 600 (`--h-weight`) with `--h-track` (-0.005em).

| Role | Size | Weight | Where |
| --- | --- | --- | --- |
| Display | 48px (`--h-size`) | 600 | Onboarding headlines only |
| Page title | 19px | 600 | Top bar, panel header |
| Lead | 22px | 600 | First line inside a panel |
| Section | 18px | 600 | A section title on a page |
| Card title | 15.5–18px | 600 | Saved card 15.5, feed card 18 |
| Body | 15.5px (`--body-size`) | 400 | Everything else, line-height 1.5 |
| Small | 13.5–14px | 400 | Meta lines, under a row's title |
| Label | 12px | 600 | Pills, field labels, story names |

Never go below 11px (story names and action labels on a phone). Inputs are 16px on a phone, or iOS zooms the page.

## Shape, depth and motion

- Radius: cards 18px (`--r-card`), the feed card 24px (`--r-feed`), saved card pictures 20px (16px on a phone), buttons 10px (`--r-btn`), chips, pills and segments fully round (`--r-pill`).
- Shadow: `--shadow-1` for a picked segment, `--shadow-2` for the New button, `--shadow-3` for sheets and toasts. Cards on the page carry no shadow.
- Spacing: 8px steps. 16px gutters on a phone, 24px on desktop, 32px around a centred page column (max 1040px, 720px when narrow).
- Shell: a 60px rail, a 64px top bar that never moves, a 440px side panel (a sheet from the foot under 860px).
- A page’s own actions (shuffle and settings on the feed, the three dots on Command centre) sit in the top bar, before the bell. A page inside another (Library, Brand book) gets a back arrow before its title.
- Nothing opens as a popup in the middle. What is a popup elsewhere (connecting a tool, settings, a report, one number opened up) is a side panel: `{ title, back, body, foot }`. A panel that leads from another carries `back`.
- Teammates are named in words only. Jammie is the only character drawn.
- Motion: one curve, `--ease` (cubic-bezier(.2,0,0,1)). Pages fade up 8px in 0.28s, panels arrive in 0.32s with all their contents at once. Nothing appears after its container has landed. Respect `prefers-reduced-motion`.

## Jammie

The red felt dollop with two identical eyes, no mouth, short legs. Poses: wave, walk, back, cheer, sleep, search, worry, sit (`pose-*.png`, small copies `pose-*-sm.png` for anything under 64px). Loops: idle, wave, cheer, sit (`anim/*.mp4`, on white, `mix-blend-mode:multiply`; dark theme shows the still).

- Waiting → search. Empty → sleep. Error → worry. Done, saved → cheer. Greeting → wave.
- Jammie stands on a soft ground shadow (`.ground`) and is never cropped.
- The other characters (`char-*.png`) are a guideline for later. They never appear in the product.

## 3D icons

Felt objects (`el-*.png`): megaphone, clapper, bag, heart, bell, magnifier, chart, sparkle, instagram, meta, google, email, shopify, analytics, slack, book, passport, stamp. Use them for empty states, connectors and onboarding picks: one object per tile, 18% padding, `filter:var(--felt)`. Never in buttons, rows or the rail; those take line icons.

## Line icons

`<i data-ico="name"></i>` then `jammieIcons()`. 20px, stroke `--ico-w` (1.75). Names: home search heart share bookmark bell user menu globe filter star spark plus minus close check arrow up down calendar store megaphone film chart message settings link play image download more team lock back clock refresh book send sound mute moon jam eye. Add `.draw` to the button so the line traces in on hover; icons never move or scale.

## Buttons

Use a button for an action. Moving to another page is an `<a>` with the same classes.

Variants: `b-jam`, `b-ink`, `b-out`, `b-line`, `b-soft`, `b-text`, `b-round`; size `b-sm`. Nothing else exists.

- `b-jam` — the one main action on the view (Add your store, Let’s jam). One per view.
- `b-ink` — the main action inside a sheet or form (Continue).
- `b-out` — the second choice beside a main action (Not now).
- `b-soft` — the default for everything else.
- `b-line` — a quiet action inside a card.
- `b-text` — a way out (We don’t use Shopify).
- `b-round` — an icon-only button. Needs `aria-label`.

```html
<!-- Correct -->
<button class="btn b-jam">Add your store</button> <button class="btn b-out">Not now</button>
<!-- Incorrect: two red buttons, and b-primary does not exist -->
<button class="btn b-jam">Save</button> <button class="btn b-primary">Share</button>
```

## Chips, segments and switches

- `.chip` — a pick from several (onboarding taps, filters). Picked is `.on`, which is red.
- `.seg` — switching views of the same thing, 2–4 options (Light / Dark).
- `.switch` — a setting that is on or off, with `role="switch"` and `aria-checked`.

## Cards

```
What are you showing?
 ├── One idea, full height, in the feed → fcard
 ├── Ideas in a grid (Saved) → scard
 ├── A short story at the top of the feed → story ring
 ├── A number with a trend (Command centre) → dcard inside a .dcol
 ├── A fact Jammie knows (Memory) → ltile
 └── A setting or a link in a list → .rows of .rowi
```

### Feed card — `J.fcard(idea)`
One 5:8 picture that fills the height under the stories, 24px radius. Its title and one line sit on the picture over a soft blur at the foot. A pill top left names who made it (Reel maker, Creative director); pills top right carry Start here, Initial draft, a rival tag, `1/8` and sound. Carousels slide sideways with the next frame's edge showing. The actions hang outside it on the right (`.acts`): Keep, Share, Later, Less, Why, More (feedback, assign, a note), then Jam as the one red circle, last.

### Saved card — `J.scard(idea, { href, note })`
The picture is the card (4:5, 20px radius), a kind pill top left, a filled heart top right that removes it. The title (two lines max) and `makes · Kept` sit under the picture, not in a box with it. Grid: 4 columns, 32px rows and 24px columns apart; 2 columns on a phone.

```html
<!-- Correct: picture, then the words -->
<div class="ideas">${J.scard(idea, { href: '#/feed?i=1', note: 'Kept' })}</div>
<!-- Incorrect: a bordered box with the words and a button inside it (the old icard, removed) -->
<article class="icard">…<a class="btn b-line">Open</a></article>
```

### Story ring — `J.story(name, img, { href, seen })`
A round picture in a 2.5px red ring that turns grey (`.seen`) once watched, name under it. Six across the feed card's width, sized by `--st` (44–72px). Opens full screen with progress bars, taps on either side, and a 5s move to the next.

### Command centre card — `J.dcard({ label, value, delta, dir, line, bars, meter, mini, acts, need })`
Answers one question: `label` is "what · over how long", then the number, one line, then actions as soft pills, with at most one `b-jam` last. `bars` or `meter` take the column's `--acc`. `need: true` tints it red and says Needs you. Columns are 340px, 260–680px when dragged, 8px gaps between cards.

### Memory tile — `J.ltile(big, line, isText)`
A soft block, 96px min height: a big number (24px) or a few words (`isText`, 16px), one quiet line under it. Three across, two on a phone.

### Rows — `.rows` > `.rowi`
Soft blocks with a 3px gap; the first and last take the card radius. Bold title, quiet line under it, an icon on the right. Only a row you can press lights up on hover.

## Phone (under 860px)

- A 56px top bar with the logo on the feed and the bell on the right; the six story rings under it, sized to fit the width.
- The tab bar, as Airbnb does it: 60px, Feed, Command, New (+), Saved, You (a round profile), each a fifth of the width with an 11px word under a 24px icon. The one you are on is red (`--jam`); your profile gets a red ring. It slides away while you scroll down a page and comes back when you scroll up. Memory and Connectors live in the You sheet.
- Nothing is cut at the edge or ends in dots on a phone. Page tabs become an icon over a short word (Team, Finance, Marketing, Stock, Stove) with a 2px line under the one you are on, and follow what you scroll to. Command centre shows exactly one column a screen. Titles and lines wrap.
- No popups in the middle of the screen. Sign-in, panels and choices are sheets that rise from the foot, with a handle, over a shade with a 4px blur.
- Touch targets, as YouTube sizes them: icon buttons 48px (icon 24px), buttons 48px, small buttons, chips and segments 44px, page tabs 48px, rows 56px min, story rings 44–64px.
- The feed picture runs edge to edge. Its actions are 48px circles on a soft dark blur with a 12px label, Jam a 52px red circle last. On a phone under 700px tall the labels go; all seven icons stay.
- Fields use 16px text, or iOS zooms the page.

## States

Wait, empty, error and done use Jammie's pose (120px) and one title, no paragraph: Reading your store (search), Nothing new yet (sleep), That didn't work + Try again (worry), Kept. It is in Saved. as a toast with the small cheer pose.

Toasts always appear in one place: top right, 8px under the top bar, 24px from the right edge (16px on a phone), stacked downward. They slide in from the right and leave after 3s. Never centre a toast or put it at the bottom.
