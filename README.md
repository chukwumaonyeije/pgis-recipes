# PGIS Recipes

PGIS Recipes is a lightweight static website for browsing recipe slide decks built with Marp and published through GitHub Pages.

It is designed as a calm, presentation-oriented front door for recipe experimentation that sits inside the broader PGIS ecosystem: food, glucose awareness, practical behavior design, recovery, and performance-oriented metabolic thinking.

## Live project

- Repository: [chukwumaonyeije/pgis-recipes](https://github.com/chukwumaonyeije/pgis-recipes)
- Expected GitHub Pages URL: [https://chukwumaonyeije.github.io/pgis-recipes/](https://chukwumaonyeije.github.io/pgis-recipes/)

## What is PGIS?

PGIS stands for **Performance Glycemic Intelligence System**.

In this project, PGIS is a practical framework for thinking about:

- how meals affect glucose response
- how food supports recovery, satiety, and daily energy quality
- how to make healthy eating more usable in real life
- how to turn nutrition into repeatable, testable workflows rather than vague advice

PGIS Recipes is not meant to be a generic recipe blog. It is meant to be a **curated presentation library** of recipes, meal ideas, and food protocols that can be explored through short teaching decks.

## How this repo fits the PGIS ecosystem

This repository is one part of a broader PGIS idea space on GitHub.

Related PGIS work includes:

- [PGIS-Breathe](https://github.com/chukwumaonyeije/PGIS-Breathe)  
  A related PGIS project focused on breathing workflows, guided protocols, and product thinking around metabolic and physiologic self-regulation.

This repo focuses specifically on the **nutrition and recipe-library side** of the ecosystem:

- recipe slide decks
- food experimentation
- glucose-aware meal ideas
- practical healthy eating
- presentation-based knowledge organization

## Why this project exists

The goal is to take exported Marp recipe presentations and turn them into a polished static library website that:

- lives in GitHub for storage and version control
- publishes through GitHub Pages
- remains easy to maintain without a build step
- feels visually consistent with the PGIS Marp deck aesthetic
- makes it easy to add future recipe decks over time

## Design principles

The site is intentionally:

- static
- lightweight
- beginner-maintainable
- GitHub Pages compatible
- presentation-library oriented rather than blog oriented

The visual language is meant to feel:

- clean
- calm
- modern
- slightly academic
- physician-builder adjacent
- thoughtful rather than flashy

## Tech stack

- HTML
- CSS
- vanilla JavaScript
- GitHub
- GitHub Pages
- Marp-exported HTML slide decks

No framework, build step, backend, or server-side runtime is required.

## Repository structure

```text
pgis-recipes/
├─ index.html
├─ README.md
├─ assets/
│  ├─ css/
│  │  └─ styles.css
│  ├─ js/
│  │  └─ app.js
│  └─ images/
└─ recipes/
   ├─ red-lentil-pizza-crust/
   │  └─ index.html
   ├─ instant-pot-mushroom-barley-stew/
   │  └─ index.html
   ├─ citrus-jalapeno-curtido/
   │  └─ index.html
   ├─ roasted-butternut-squash-bowl/
   │  └─ index.html
   ├─ roasted-veggie-quinoa-bowl/
   │  └─ index.html
   ├─ spicy-roasted-cauliflower-bites/
   │  └─ index.html
   └─ sweet-black-cherry-chocolate-smoothie/
      └─ index.html
```

## What each part does

- `index.html`
  The homepage and public front door for the recipe library.
- `assets/css/styles.css`
  Shared visual system for layout, typography, hero, cards, search, and footer.
- `assets/js/app.js`
  The recipe metadata array and rendering logic for featured recipes, recipe cards, tags, and live search.
- `recipes/<slug>/index.html`
  Individual Marp-exported recipe slideshow files.

## How the homepage works

The homepage is data-driven through a simple JavaScript array in `assets/js/app.js`.

Each recipe object includes:

- `title`
- `subtitle`
- `description`
- `href`
- `tags`
- `featured`

The homepage then uses that metadata to render:

- the featured recipe section
- the searchable recipe card library
- tag pills
- the empty state when search returns no matches

## Clone the repository

```bash
git clone https://github.com/chukwumaonyeije/pgis-recipes.git
cd pgis-recipes
```

## How to add a new recipe deck

The cleanest maintenance pattern is:

1. Export the Marp deck as HTML.
2. Create a new folder inside `recipes/` using a clean URL slug.
3. Save the exported HTML file into that folder as `index.html`.
4. Add a new metadata object to the `recipes` array in `assets/js/app.js`.
5. Commit and push the change.

### Example

```text
recipes/
└─ cinnamon-oat-recovery-bowl/
   └─ index.html
```

Then add a matching object to `assets/js/app.js`:

```js
{
  title: "Cinnamon Oat Recovery Bowl",
  subtitle: "Warm breakfast bowl with steady-energy intent",
  description:
    "An oat-based PGIS breakfast deck focused on satiety, practical prep, and glucose-aware recovery fueling.",
  href: "./recipes/cinnamon-oat-recovery-bowl/",
  tags: ["Breakfast", "Recovery Meal", "Whole Grain"],
  featured: false,
}
```

## Updating the recipe library safely

To avoid breaking GitHub Pages links:

- keep homepage asset paths relative
- keep each recipe `href` relative to `index.html`
- avoid root-relative paths like `/assets/...`
- keep recipe HTML pages inside `recipes/<slug>/index.html`

Examples used in this project:

- `./assets/css/styles.css`
- `./assets/js/app.js`
- `./recipes/red-lentil-pizza-crust/`

## Git workflow

### Stage changes

```bash
git add .
```

### Commit changes

```bash
git commit -m "Update PGIS Recipes library"
```

### Push updates

```bash
git push origin main
```

## Publish with GitHub Pages

This repository is intended to deploy directly from the `main` branch with no build step.

1. Open the repository on GitHub.
2. Go to `Settings` -> `Pages`.
3. Under `Build and deployment`, select:
   - `Source: Deploy from a branch`
   - `Branch: main`
   - `Folder: / (root)`
4. Save.
5. Wait for GitHub Pages to publish the site.

## Recommended long-term workflow

As the PGIS ecosystem grows, this repo can serve as the recipe and food-library surface while related repositories handle adjacent parts of the system.

For example:

- `pgis-recipes` for recipe decks and nutrition presentation assets
- `PGIS-Breathe` for breathing workflows and product experimentation

That separation keeps each repository focused while still making the ecosystem legible.

## Project intent

The broader tone of this project is:

> practical, thoughtful, data-aware, presentation-based recipe experimentation for metabolic health and performance

That tone should shape future additions to both the code and the content.
