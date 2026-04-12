const siteMetadata = {
  libraryUpdated: "2026-04-12",
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

  {
    title: "Anti-Inflammatory Recovery Soup",
    subtitle: "Post-Workout Recovery: heavy training weeks when inflammation is high",
    description:
      "This potent, anti-inflammatory soup is formulated to mitigate the systemic stress and tissue micro-trauma accumulated during high-volume training weeks.",
    href: "./recipes/anti-inflammatory-recovery-soup/",
    tags: ["Post Workout Recovery", "Vegan", "Plant Based", "Anti Inflammatory"],
    featured: false,
  },

  {
    title: "High-Iron Endurance Bowl",
    subtitle: "Training Nutrition: support oxygen-carrying capacity during training block",
    description:
      "This iron-rich bowl is a foundational meal designed to maximize hemoglobin synthesis and oxygen-carrying capacity throughout the half marathon training bl…",
    href: "./recipes/high-iron-endurance-bowl/",
    tags: ["Training Nutrition", "Vegan", "Plant Based", "High Iron"],
    featured: false,
  },

  {
    title: "Hydration and Electrolyte Drink",
    subtitle: "Intra-Workout Hydration: long runs in warm weather",
    description:
      "This all-natural, whole-food based electrolyte drink is specifically formulated to replace sweat losses during long runs in warm weather without the added…",
    href: "./recipes/hydration-and-electrolyte-drink/",
    tags: ["Intra Workout Hydration", "Vegan", "Plant Based", "Hydration"],
    featured: false,
  },

  {
    title: "Mid-Run Fuel",
    subtitle: "Intra-Workout Fuel: portable natural carbs for runs over 75 minutes",
    description:
      "This whole-food, easily transportable alternative to commercial gels delivers a precise blend of natural sugars for immediate intra-run energy.",
    href: "./recipes/mid-run-fuel/",
    tags: ["Intra Workout Fuel", "Vegan", "Plant Based", "Intra Run"],
    featured: false,
  },

  {
    title: "Post-Long-Run Recovery Meal",
    subtitle: "Post-Workout Recovery: within 60 min of finishing a long run",
    description:
      "This high-carbohydrate, moderate-protein meal is strategically designed to maximize the anabolic window immediately following a grueling long run.",
    href: "./recipes/post-long-run-recovery-meal/",
    tags: ["Post Workout Recovery", "Vegan", "Plant Based", "Post Run"],
    featured: false,
  },

  {
    title: "Post-Race Celebration Bowl",
    subtitle: "Post-Race Recovery: the reward meal",
    description:
      "This nutrient-dense, satisfying bowl is the ultimate reward meal following the completion of your half marathon.",
    href: "./recipes/post-race-celebration-bowl/",
    tags: ["Post Race Recovery", "Vegan", "Plant Based", "Post Race"],
    featured: false,
  },

  {
    title: "Pre-Long-Run Breakfast",
    subtitle: "Pre-Workout Fuel: 2-3 hours before a 10+ mile run",
    description:
      "This easily digestible pre-run meal is designed to top off liver and muscle glycogen stores without burdening the digestive tract.",
    href: "./recipes/pre-long-run-breakfast/",
    tags: ["Pre Workout Fuel", "Vegan", "Plant Based", "Pre Run"],
    featured: false,
  },

  {
    title: "Race-Morning Breakfast",
    subtitle: "Pre-Race Fuel: 2-3 hours before the half marathon start",
    description:
      "This race-morning breakfast is the proven, reliable, and easily digestible foundation for your half marathon effort.",
    href: "./recipes/race-morning-breakfast/",
    tags: ["Pre Race Fuel", "Vegan", "Plant Based", "Pre Race"],
    featured: false,
  },

  {
    title: "Race-Week Carb-Loading Dinner",
    subtitle: "Pre-Race Fuel: 3 days before race",
    description:
      "This carbohydrate-dense dinner is specifically formulated for the critical carb-loading phase 72 hours prior to the half marathon.",
    href: "./recipes/race-week-carb-loading-dinner/",
    tags: ["Pre Race Fuel", "Vegan", "Plant Based", "Carb Loading"],
    featured: false,
  },

  {
    title: "Balsamic Brussels Sprouts and Freekeh Bowl",
    subtitle: "Main Dish / Bowl",
    description:
      "This Balsamic Brussels Sprouts and Freekeh Bowl provides a robust, fiber-dense alternative to the Roasted Veggie Quinoa Bowl, utilizing a deeply flavorful…",
    href: "./recipes/balsamic-brussels-sprouts-and-freekeh-bowl/",
    tags: ["Main Dish", "Bowl", "Vegan", "Plant Based"],
    featured: false,
  },

  {
    title: "Black Bean and Sweet Potato Enchilada Skillet",
    subtitle: "Main Dish",
    description:
      "This Black Bean and Sweet Potato Enchilada Skillet is a hearty, one-pan alternative to the Red Lentil Pizza Crust, offering a robust, Mexican-inspired fla…",
    href: "./recipes/black-bean-and-sweet-potato-enchilada-skillet/",
    tags: ["Main Dish", "Vegan", "Plant Based", "Anti Inflammatory"],
    featured: false,
  },

  {
    title: "Broccoli Slaw and Edamame Endurance Salad",
    subtitle: "Salad / Meal Prep",
    description:
      "This Broccoli Slaw and Edamame Endurance Salad provides a crunchy, nutrient-dense alternative to the Kale-Cabbage Power Salad, designed specifically for m…",
    href: "./recipes/broccoli-slaw-and-edamame-endurance-salad/",
    tags: ["Salad", "Meal Prep", "Vegan", "Plant Based"],
    featured: false,
  },

  {
    title: "Ginger-Turmeric Healing Kraut",
    subtitle: "Condiment",
    description:
      "This Ginger-Turmeric Healing Kraut is a vibrant, deeply anti-inflammatory alternative to the Citrus Jalapeño Curtido, functioning as a daily condiment to…",
    href: "./recipes/ginger-turmeric-healing-kraut/",
    tags: ["Condiment", "Vegan", "Plant Based", "Anti Inflammatory"],
    featured: false,
  },

  {
    title: "Matcha Mango Recovery Smoothie",
    subtitle: "Smoothie / Breakfast",
    description:
      "This Matcha Mango Recovery Smoothie provides a vibrant, tropical alternative to the Black Cherry and Chocolate Smoothie, designed specifically for pre- or…",
    href: "./recipes/matcha-mango-recovery-smoothie/",
    tags: ["Smoothie", "Breakfast", "Vegan", "Plant Based"],
    featured: false,
  },

  {
    title: "Miso-Glazed Eggplant and Sorghum Bowl",
    subtitle: "Main Dish / Bowl",
    description:
      "This Miso-Glazed Eggplant and Sorghum Bowl offers a savory, umami-rich alternative to the Roasted Butternut Squash Bowl, utilizing a different roasted veg…",
    href: "./recipes/miso-glazed-eggplant-and-sorghum-bowl/",
    tags: ["Main Dish", "Bowl", "Vegan", "Plant Based"],
    featured: false,
  },

  {
    title: "Savory Chickpea Scramble Recovery Bowl",
    subtitle: "Breakfast / Recovery Meal",
    description:
      "This Savory Chickpea Scramble Recovery Bowl offers a robust, protein-packed alternative to the Tofu-Oat Waffles, designed specifically for post-endurance…",
    href: "./recipes/savory-chickpea-scramble-recovery-bowl/",
    tags: ["Breakfast", "Recovery Meal", "Vegan", "Plant Based"],
    featured: false,
  },

  {
    title: "Smoky Mustard Roasted Radishes",
    subtitle: "Snack / Side Dish",
    description:
      "These Smoky Mustard Roasted Radishes offer a surprisingly sweet, deeply savory alternative to Spicy Roasted Cauliflower Bites.",
    href: "./recipes/smoky-mustard-roasted-radishes/",
    tags: ["Snack", "Side Dish", "Vegan", "Plant Based"],
    featured: false,
  },

  {
    title: "Smoky Split Pea and Farro Soup",
    subtitle: "Stew / Recovery Meal",
    description:
      "This Smoky Split Pea and Farro Soup serves as a hearty, nutrient-dense alternative to the Mushroom-Barley Stew, perfect for post-training recovery.",
    href: "./recipes/smoky-split-pea-and-farro-soup/",
    tags: ["Stew", "Recovery Meal", "Vegan", "Plant Based"],
    featured: false,
  },
  {
    title: "Cocoa Chickpea Protein Power Bar",
    subtitle: "Portable lower-fat bar for training days and quick recovery",
    description:
      "A chickpea, oat, cocoa, and date deck built for steadier glucose, practical portability, and controlled pre- or post-workout support.",
    href: "./recipes/cocoa-chickpea-protein-power-bar/",
    tags: ["Portable Fuel", "Snack", "Lower Fat", "Workout Support"],
    featured: false,
  },

  {
    title: "Vegan Oil-Free Black Bean Protein Bars",
    subtitle: "Dense meal-prep bars for clinic days and endurance blocks",
    description:
      "A black bean, oat, date, and chia bar deck designed for portable satiety, batch prep, and slower energy release than commercial bars.",
    href: "./recipes/black-bean-protein-bars/",
    tags: ["Portable Fuel", "Meal Prep", "Recovery Snack", "High Fiber"],
    featured: false,
  },
  {
    title: "High-Protein Cocoa Chickpea Waffles",
    subtitle: "Chocolate-forward batch waffles for steadier breakfast fuel and recovery",
    description:
      "A chickpea, tofu, oat, and cocoa waffle deck built for meal prep, fiber-forward satiety, and a more glucose-aware alternative to conventional waffles.",
    href: "./recipes/high-protein-cocoa-chickpea-waffles/",
    tags: ["Breakfast", "Meal Prep", "High Protein", "High Fiber"],
    featured: false,
  },
];

const recipeGrid = document.querySelector("#recipe-grid");
const featuredGrid = document.querySelector("#featured-grid");
const tagSummary = document.querySelector("#tag-summary");
const searchForm = document.querySelector(".search-panel");
const searchInput = document.querySelector("#recipe-search");
const emptyState = document.querySelector("#empty-state");
const resultsMeta = document.querySelector("#results-meta");
const recipeCount = document.querySelector("#recipe-count");
const featuredCount = document.querySelector("#featured-count");
const lastUpdated = document.querySelector("#last-updated");

function normalize(value) {
  return String(value).toLowerCase().trim();
}

function getSearchQueryFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("recipe-search") ?? "";
}

function syncSearchQueryToUrl(query) {
  const params = new URLSearchParams(window.location.search);
  const normalizedQuery = query.trim();

  if (normalizedQuery) {
    params.set("recipe-search", normalizedQuery);
  } else {
    params.delete("recipe-search");
  }

  const queryString = params.toString();
  const nextUrl = `${window.location.pathname}${
    queryString ? `?${queryString}` : ""
  }${window.location.hash}`;

  window.history.replaceState({}, "", nextUrl);
}

function recipeMatches(recipe, query) {
  if (!query) {
    return true;
  }

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

  const initialQuery = getSearchQueryFromUrl();
  if (initialQuery) {
    searchInput.value = initialQuery;
    renderRecipeGrid(initialQuery);
  }

  if (searchForm) {
    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const query = searchInput.value;
      syncSearchQueryToUrl(query);
      renderRecipeGrid(query);
    });
  }

  searchInput.addEventListener("input", (event) => {
    const query = event.target.value;
    syncSearchQueryToUrl(query);
    renderRecipeGrid(query);
  });
}

renderFeatured();
renderTagSummary();
renderRecipeGrid();
updateSummary();
initSearch();
