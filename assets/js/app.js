const siteMetadata = {
  libraryUpdated: "2026-04-09",
};

const recipes = [
  {
    title: "High-Protein Tofu–Oat Recovery Waffles",
    subtitle: "Batch-friendly recovery waffles for steady glucose and practical fueling",
    description:
      "A tofu, oat, flax, and chia waffle deck built for meal prep, recovery support, and lower-fat glycemic stability.",
    href: "./recipes/tofu-oat-waffles/",
    tags: ["Recovery Meal", "Breakfast", "High Fiber", "Meal Prep"],
    featured: true,
  },
  {
    title: "5-Day Kale–Cabbage Power Salad",
    subtitle: "Fiber-forward meal-prep salad for metabolic stability across the week",
    description:
      "A chopped kale and cabbage salad deck with legumes and oil-free peanut vinaigrette designed for low-fat, glucose-aware repeatability.",
    href: "./recipes/kale-cabbage-salad/",
    tags: ["Salad", "Meal Prep", "Low Fat", "Glycemic Stability"],
    featured: true,
  },
  {
    title: "Red Lentil Pizza Crust",
    subtitle: "Plant-based recovery meal with spinach pesto and tomato",
    description:
      "A flourless lentil crust deck built around glycemic stability, fiber, and practical post-workout fueling.",
    href: "./recipes/red-lentil-pizza-crust/",
    tags: ["Recovery Meal", "Plant-Based", "High Fiber", "Main Dish"],
    featured: true,
  },
  {
    title: "Instant Pot Mushroom-Barley Stew",
    subtitle: "Fiber-forward recovery stew for colder days",
    description:
      "A savory barley, mushroom, sweet potato, and lima bean stew designed for controlled density and strong meal-prep utility.",
    href: "./recipes/instant-pot-mushroom-barley-stew/",
    tags: ["Stew", "Recovery Meal", "Meal Prep", "Whole Grain"],
    featured: true,
  },
  {
    title: "Citrus Jalapeno Curtido",
    subtitle: "Citrus-forward pickled slaw with minimal glycemic burden",
    description:
      "A bright daily-use condiment built to add acid, crunch, and fiber to bowls, wraps, beans, and roasted vegetables.",
    href: "./recipes/citrus-jalapeno-curtido/",
    tags: ["Condiment", "Very Low Glycemic", "Batch Prep", "Vegetable-Forward"],
    featured: false,
  },
  {
    title: "Roasted Butternut Squash Bowl",
    subtitle: "Warm whole-food bowl with quinoa, kale, and pumpkin seeds",
    description:
      "A cooler-weather bowl that balances squash and quinoa with greens, seeds, and portion-aware sweetness.",
    href: "./recipes/roasted-butternut-squash-bowl/",
    tags: ["Balanced Fuel", "Bowl", "Lunch", "Dinner"],
    featured: false,
  },
  {
    title: "Roasted Veggie Quinoa Bowl",
    subtitle: "Steady-energy bowl with chickpeas and tahini-date sauce",
    description:
      "A disciplined recovery bowl with quinoa, roasted vegetables, chickpeas, and a lightly sweet sauce layer.",
    href: "./recipes/roasted-veggie-quinoa-bowl/",
    tags: ["Steady Energy", "Bowl", "Recovery Meal", "Plant-Based"],
    featured: true,
  },
  {
    title: "Spicy Roasted Cauliflower Bites",
    subtitle: "High-volume snack or side with a flat glucose profile",
    description:
      "A crisp, oil-free cauliflower deck built for flavor, volume, and low-glycemic support before or alongside meals.",
    href: "./recipes/spicy-roasted-cauliflower-bites/",
    tags: ["Snack", "Side Dish", "Very Low Impact", "Flat Curve"],
    featured: false,
  },
  {
    title: "Sweet Black Cherry and Chocolate Smoothie",
    subtitle: "Fast fuel smoothie for breakfast or quick transitions",
    description:
      "A fruit-forward smoothie built from black cherries, cacao, banana, spinach, and flaxseed for convenience without junk.",
    href: "./recipes/sweet-black-cherry-chocolate-smoothie/",
    tags: ["Smoothie", "Breakfast", "Quick Option", "Fast Fuel"],
    featured: false,
  },
];

const recipeGrid = document.querySelector("#recipe-grid");
const featuredGrid = document.querySelector("#featured-grid");
const tagSummary = document.querySelector("#tag-summary");
const searchInput = document.querySelector("#recipe-search");
const emptyState = document.querySelector("#empty-state");
const resultsMeta = document.querySelector("#results-meta");
const recipeCount = document.querySelector("#recipe-count");
const featuredCount = document.querySelector("#featured-count");
const lastUpdated = document.querySelector("#last-updated");

function normalize(value) {
  return String(value).toLowerCase().trim();
}

function recipeMatches(recipe, query) {
  if (!query) return true;

  const haystack = [
    recipe.title,
    recipe.subtitle,
    recipe.description,
    ...recipe.tags,
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(query);
}

function createTagList(tags) {
  const tagList = document.createElement("div");
  tagList.className = "tag-list";

  tags.forEach((tag) => {
    const pill = document.createElement("span");
    pill.className = "tag-pill";
    pill.textContent = tag;
    tagList.appendChild(pill);
  });

  return tagList;
}

function createRecipeCard(recipe) {
  const article = document.createElement("a");
  article.className = "recipe-card";
  article.href = recipe.href;
  article.innerHTML = `
    <span class="card-kicker">Recipe Deck</span>
    <div>
      <h3 class="card-title">${recipe.title}</h3>
      <p class="card-subtitle">${recipe.subtitle}</p>
    </div>
    <p class="recipe-card-description">${recipe.description}</p>
    <div class="card-footer">
      <span>Open slideshow</span>
      <span class="card-arrow" aria-hidden="true">→</span>
    </div>
  `;

  article.insertBefore(
    createTagList(recipe.tags),
    article.querySelector(".card-footer")
  );

  return article;
}

function createFeaturedCard(recipe) {
  const article = document.createElement("a");
  article.className = "featured-card";
  article.href = recipe.href;
  article.innerHTML = `
    <span class="card-kicker">Featured</span>
    <div>
      <h3 class="card-title">${recipe.title}</h3>
      <p class="card-subtitle">${recipe.subtitle}</p>
    </div>
    <p class="featured-card-description">${recipe.description}</p>
    <div class="card-footer">
      <span>View recipe deck</span>
      <span class="card-arrow" aria-hidden="true">→</span>
    </div>
  `;

  article.insertBefore(
    createTagList(recipe.tags),
    article.querySelector(".card-footer")
  );

  return article;
}

function renderFeatured() {
  if (!featuredGrid) return;
  const featuredRecipes = recipes.filter((recipe) => recipe.featured);
  featuredGrid.replaceChildren(...featuredRecipes.map(createFeaturedCard));
}

function renderTagSummary() {
  if (!tagSummary) return;

  const tags = [...new Set(recipes.flatMap((recipe) => recipe.tags))].sort();

  tagSummary.replaceChildren(
    ...tags.map((tag) => {
      const pill = document.createElement("span");
      pill.className = "summary-pill";
      pill.textContent = tag;
      return pill;
    })
  );
}

function renderRecipeGrid(query = "") {
  if (!recipeGrid) return;

  const normalizedQuery = normalize(query);
  const filteredRecipes = recipes.filter((recipe) =>
    recipeMatches(recipe, normalizedQuery)
  );

  recipeGrid.replaceChildren(...filteredRecipes.map(createRecipeCard));

  if (emptyState) {
    emptyState.hidden = filteredRecipes.length > 0;
  }

  if (resultsMeta) {
    resultsMeta.textContent = normalizedQuery
      ? `${filteredRecipes.length} of ${recipes.length} recipes shown`
      : `${recipes.length} recipes available`;
  }
}

function updateSummary() {
  if (recipeCount) {
    recipeCount.textContent = String(recipes.length);
  }

  if (featuredCount) {
    featuredCount.textContent = String(
      recipes.filter((recipe) => recipe.featured).length
    );
  }

  if (lastUpdated) {
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(siteMetadata.libraryUpdated));

    lastUpdated.textContent = formattedDate;
  }
}

function initSearch() {
  if (!searchInput) return;

  searchInput.addEventListener("input", (event) => {
    renderRecipeGrid(event.target.value);
  });
}

renderFeatured();
renderTagSummary();
renderRecipeGrid();
updateSummary();
initSearch();