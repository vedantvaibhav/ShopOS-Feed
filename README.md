# Jammie — prototype, flows and design system

A clickable prototype of Jammie (formerly ShopOS Feed), the map of its flows, and
the design system it is built from. No build step, no framework, no dependencies.

## What is here

| Page | What it is |
| --- | --- |
| `app.html` | The prototype. Starts at onboarding (`#/start`); `#/feed` opens the feed directly. |
| `flows.html` | Every flow as a row of live screens, a flow chart, and a checklist of each action. |
| `design-system.html` | The design system as a docs site: a sidebar of Foundations (colour, type, shape, layout, motion), Brand (characters, 3D icons, line icons) and Components (buttons, controls, every card), one page at a time. Copy MD and Download skill sit top right. |
| `index.html` | The front door. It sends you straight to `app.html`. |
| `feed-v1.html` | The earlier ShopOS Feed prototype, kept as it was. |

The three Jammie pages link to each other: the flow map and the design system from
their headers, the prototype from its Demo button.

## The skill

`skill/jammie-design/SKILL.md` is the same system written as rules an agent can follow.
The design system's Download skill button hands out this file, and Copy MD copies its
body. Change it whenever a token or component changes.

## Run it locally

Any static server works. From this folder:

    python3 -m http.server 5173

Then open:

- http://localhost:5173/ (opens the prototype)
- http://localhost:5173/app.html
- http://localhost:5173/flows.html
- http://localhost:5173/design-system.html

## What the prototype covers

Onboarding (store link, sign-in, the read, three taps, the passport, then the feed),
a demo front door with all four live demo stores (Comet, Arata, Gully Labs, LEGO®
India: pick one, see its profile, open its feed), the feed, Saved, Work and its library, Command centre with reports, costs and
questions, Memory with its brand book and every tile's panel, Connectors with the
connect flow, Updates, and your account (details, team, look and sound).
The floating Demo button, bottom left, holds only light or dark and the links to the
flow map and design system.

The store on screen comes from `?store=comet|arata|gully|lego` in the address, else the
one picked last. Each store's data is in `STORES` in `data.js`; its pictures are in
`assets/jammie/v3/demo/<store>/`.
`flows.html` lists every flow and every action, and says which ones are simulated.

## Handy links into the prototype

- `app.html?theme=dark#/feed` shows a screen dark without saving the choice.
- `app.html?still#/taps` freezes motion, which is how the flow map shows screens.
- `app.html#/feed?i=3` opens the feed on a given card.
- `app.html#/new?on=command` opens a panel over a given page.

## Editing

- `app.html`: the screens. Styles at the top, the shell in the middle, the `SCREENS`
  table and behaviour at the bottom.
- `assets/jammie/v3/jammie.css`: tokens and the shared components.
- `assets/jammie/v3/data.js`: the demo ideas and the card renderers (`fcard`, `scard`,
  `story`, `dcard`, `ltile`), shared by the prototype and the design system.
- `assets/jammie/v3/icons.js`: the line icons.

The stylesheet and scripts are linked with `?v=N`. Raise the number in all three
pages when you change them, so a browser does not serve an old copy.

## Deploying to Vercel

It is a static site, so there is nothing to configure:

    npx vercel

Or push to GitHub and import the repo at vercel.com: framework preset "Other",
no build command, output directory `.`.
