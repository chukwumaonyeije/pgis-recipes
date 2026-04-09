# PGIS Recipes

PGIS Recipes is a lightweight static website for browsing Marp-exported recipe slide decks through a polished landing page and searchable library.

The project is designed for:

- GitHub storage and version control
- GitHub Pages publishing
- plain HTML, CSS, and JavaScript only
- easy addition of future recipe slide decks without a build step

The design language intentionally echoes the PGIS Marp deck theme: restrained green accents, calm slate neutrals, strong typography, rounded cards, and a presentation-library feel rather than a generic food blog look.

## Canonical repository

GitHub remote:

```bash
git clone https://github.com/chukwumaonyeije/pgis-recipes.git
```

## Recommended repository structure

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

## What lives where

- `index.html`
  The homepage and front door for the recipe library.
- `assets/css/styles.css`
  Shared site styling for layout, typography, cards, hero, search, and footer.
- `assets/js/app.js`
  The recipe metadata array plus the JavaScript that renders cards and handles live search.
- `recipes/<slug>/index.html`
  Individual Marp-exported recipe slideshow files.

## How to add a new recipe slide deck

### Recommended workflow

1. Create a folder under `recipes/` using a clean URL slug.
2. Put the exported Marp HTML file inside that folder as `index.html`.
3. Add a new recipe object to the `recipes` array in `assets/js/app.js`.
4. Commit and push the changes.

### Example

If you create a new deck called `Cinnamon Oat Recovery Bowl`, use a structure like:

```text
recipes/
└─ cinnamon-oat-recovery-bowl/
   └─ index.html
```

Then add an object like this in `assets/js/app.js`:

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

## How to update the homepage library

All homepage cards are rendered from the `recipes` array in `assets/js/app.js`.

Each recipe object supports:

- `title`
- `subtitle`
- `description`
- `href`
- `tags`
- `featured`

The search box filters recipes by:

- title
- subtitle
- description
- tags

## GitHub Pages publishing

This project is intended to publish directly from the `pgis-recipes` repository with no build step.

### Basic setup

1. Push the repository to GitHub.
2. Open the repository on GitHub.
3. Go to `Settings` -> `Pages`.
4. Under `Build and deployment`, choose:
   - `Source: Deploy from a branch`
   - `Branch: main`
   - `Folder: / (root)`
5. Save the settings.
6. Wait for GitHub Pages to publish the site.

If the repository is named `pgis-recipes`, the published URL will typically be:

```text
https://chukwumaonyeije.github.io/pgis-recipes/
```

## Relative-link safety

This site uses relative paths so it works both:

- locally when opened from the repository
- on GitHub Pages under the repository subpath

Examples:

- Homepage stylesheet: `./assets/css/styles.css`
- Homepage script: `./assets/js/app.js`
- Recipe links: `./recipes/red-lentil-pizza-crust/`

To avoid breaking links:

- keep homepage asset references relative
- keep each recipe object `href` relative to the homepage
- avoid leading slash paths like `/assets/...` because those can break on GitHub Pages project sites

## Git workflow

### Clone the repository

```bash
git clone https://github.com/chukwumaonyeije/pgis-recipes.git
cd pgis-recipes
```

### Add files

```bash
git add .
```

### Commit changes

```bash
git commit -m "Add PGIS Recipes homepage and recipe library"
```

### Push updates

```bash
git push origin main
```

## Suggested maintenance workflow

For future recipes, the cleanest pattern is:

1. export the Marp deck directly to `recipes/<slug>/index.html`
2. open `assets/js/app.js`
3. add one metadata object
4. preview locally
5. commit and push

That keeps the project fully static, GitHub Pages compatible, and easy to manage for a beginner developer.
