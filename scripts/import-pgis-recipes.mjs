import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { execFileSync } from "node:child_process";

const repoRoot = process.cwd();
const appJsPath = path.join(repoRoot, "assets", "js", "app.js");
const recipesRoot = path.join(repoRoot, "recipes");

const sourceFiles = [
  "C:\\Users\\onyei\\Projects\\doctorswhocode-engine\\vaults\\DrOnyeije_Wiki\\raw\\PGIS\\PGIS recipes\\Anti-Inflammatory Recovery Soup.md",
  "C:\\Users\\onyei\\Projects\\doctorswhocode-engine\\vaults\\DrOnyeije_Wiki\\raw\\PGIS\\PGIS recipes\\High-Iron Endurance Bowl.md",
  "C:\\Users\\onyei\\Projects\\doctorswhocode-engine\\vaults\\DrOnyeije_Wiki\\raw\\PGIS\\PGIS recipes\\Hydration and Electrolyte Drink.md",
  "C:\\Users\\onyei\\Projects\\doctorswhocode-engine\\vaults\\DrOnyeije_Wiki\\raw\\PGIS\\PGIS recipes\\Mid-Run Fuel.md",
  "C:\\Users\\onyei\\Projects\\doctorswhocode-engine\\vaults\\DrOnyeije_Wiki\\raw\\PGIS\\PGIS recipes\\Post-Long-Run Recovery Meal.md",
  "C:\\Users\\onyei\\Projects\\doctorswhocode-engine\\vaults\\DrOnyeije_Wiki\\raw\\PGIS\\PGIS recipes\\Post-Race Celebration Bowl.md",
  "C:\\Users\\onyei\\Projects\\doctorswhocode-engine\\vaults\\DrOnyeije_Wiki\\raw\\PGIS\\PGIS recipes\\Pre-Long-Run Breakfast.md",
  "C:\\Users\\onyei\\Projects\\doctorswhocode-engine\\vaults\\DrOnyeije_Wiki\\raw\\PGIS\\PGIS recipes\\Race-Morning Breakfast.md",
  "C:\\Users\\onyei\\Projects\\doctorswhocode-engine\\vaults\\DrOnyeije_Wiki\\raw\\PGIS\\PGIS recipes\\Race-Week Carb-Loading Dinner.md",
  "C:\\Users\\onyei\\Projects\\doctorswhocode-engine\\vaults\\DrOnyeije_Wiki\\raw\\PGIS\\PGIS recipes\\Balsamic Brussels Sprouts and Freekeh Bowl.md",
  "C:\\Users\\onyei\\Projects\\doctorswhocode-engine\\vaults\\DrOnyeije_Wiki\\raw\\PGIS\\PGIS recipes\\Black Bean and Sweet Potato Enchilada Skillet.md",
  "C:\\Users\\onyei\\Projects\\doctorswhocode-engine\\vaults\\DrOnyeije_Wiki\\raw\\PGIS\\PGIS recipes\\Broccoli Slaw and Edamame Endurance Salad.md",
  "C:\\Users\\onyei\\Projects\\doctorswhocode-engine\\vaults\\DrOnyeije_Wiki\\raw\\PGIS\\PGIS recipes\\Ginger-Turmeric Healing Kraut.md",
  "C:\\Users\\onyei\\Projects\\doctorswhocode-engine\\vaults\\DrOnyeije_Wiki\\raw\\PGIS\\PGIS recipes\\Matcha Mango Recovery Smoothie.md",
  "C:\\Users\\onyei\\Projects\\doctorswhocode-engine\\vaults\\DrOnyeije_Wiki\\raw\\PGIS\\PGIS recipes\\Miso-Glazed Eggplant and Sorghum Bowl.md",
  "C:\\Users\\onyei\\Projects\\doctorswhocode-engine\\vaults\\DrOnyeije_Wiki\\raw\\PGIS\\PGIS recipes\\Savory Chickpea Scramble Recovery Bowl.md",
  "C:\\Users\\onyei\\Projects\\doctorswhocode-engine\\vaults\\DrOnyeije_Wiki\\raw\\PGIS\\PGIS recipes\\Smoky Mustard Roasted Radishes.md",
  "C:\\Users\\onyei\\Projects\\doctorswhocode-engine\\vaults\\DrOnyeije_Wiki\\raw\\PGIS\\PGIS recipes\\Smoky Split Pea and Farro Soup.md",
];

const deckStyle = String.raw`@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800;900&family=Inter:wght@400;500;600;700&display=swap');

section {
  --pgis-green: #10b981;
  --pgis-green-dark: #064e3b;
  --pgis-ink: #0f172a;
  --pgis-slate: #475569;
  --pgis-soft: #e2e8f0;
  --pgis-bg: #f8fafc;
  --pgis-warm: #f59e0b;

  background:
    radial-gradient(circle at top right, rgba(16, 185, 129, 0.08), transparent 28%),
    radial-gradient(circle at bottom left, rgba(6, 78, 59, 0.06), transparent 24%),
    linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
  color: var(--pgis-ink);
  font-family: 'Inter', sans-serif;
  font-size: 28px;
  line-height: 1.4;
  padding: 56px 72px;
}

section.invert {
  background:
    radial-gradient(circle at top right, rgba(52, 211, 153, 0.12), transparent 25%),
    linear-gradient(160deg, #0f172a 0%, #111827 100%);
  color: #f8fafc;
}

h1 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 2.45em;
  color: var(--pgis-green-dark);
  letter-spacing: -0.04em;
  line-height: 1.02;
  margin: 0 0 0.2em 0;
}

section.invert h1 {
  color: #f8fafc;
}

h2 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 1.3em;
  color: var(--pgis-green);
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin: 0 0 0.8em 0;
  padding-bottom: 0.18em;
  border-bottom: 4px solid var(--pgis-green);
  display: inline-block;
}

h3 {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  color: var(--pgis-slate);
  text-transform: uppercase;
  font-size: 0.72em;
  letter-spacing: 0.12em;
  margin: 1.2em 0 0.4em 0;
}

section.invert h3 {
  color: #94a3b8;
}

p, li {
  font-size: 0.95em;
}

ul, ol {
  padding-left: 1.15em;
  margin-top: 0.3em;
}

li {
  margin-bottom: 0.38em;
}

strong {
  color: var(--pgis-green-dark);
  font-weight: 700;
}

section.invert strong {
  color: #6ee7b7;
}

blockquote {
  margin: 1.1em 0 0 0;
  padding: 0.8em 1em;
  border-left: 6px solid var(--pgis-green);
  background: rgba(255, 255, 255, 0.55);
  border-radius: 10px;
  font-size: 0.92em;
}

section.invert blockquote {
  background: rgba(255, 255, 255, 0.08);
}

.eyebrow {
  font-family: 'Inter', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.58em;
  font-weight: 700;
  color: var(--pgis-green);
  margin-bottom: 1em;
}

.lead {
  font-size: 1.05em;
  max-width: 70%;
  color: var(--pgis-slate);
}

section.invert .lead {
  color: #cbd5e1;
}

.card {
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(148, 163, 184, 0.22);
  border-radius: 18px;
  padding: 18px 22px;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
  margin-top: 18px;
}

section.invert .card {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.12);
  box-shadow: none;
}

.tag {
  display: inline-block;
  background: linear-gradient(90deg, #10b981 0%, #059669 100%);
  color: white;
  padding: 5px 12px;
  border-radius: 999px;
  font-size: 0.46em;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  vertical-align: middle;
  margin-left: 12px;
}

.split-note {
  position: absolute;
  bottom: 42px;
  left: 72px;
  right: 72px;
  font-size: 0.56em;
  color: #64748b;
  display: flex;
  justify-content: space-between;
}

section.invert .split-note {
  color: #94a3b8;
}

section.title-slide h1 {
  max-width: 70%;
  font-size: 2.9em;
}

section.title-slide p {
  max-width: 54%;
}`;

function main() {
  const generatedEntries = [];

  for (const sourceFile of sourceFiles) {
    const raw = fs.readFileSync(sourceFile, "utf8");
    const recipe = parseRecipe(raw, sourceFile);
    const slug = slugify(recipe.title);
    const recipeDir = path.join(recipesRoot, slug);
    fs.mkdirSync(recipeDir, { recursive: true });

    const tempMarkdownPath = path.join(os.tmpdir(), `${slug}-${process.pid}.md`);
    fs.writeFileSync(tempMarkdownPath, buildDeckMarkdown(recipe), "utf8");
    runMarp(tempMarkdownPath, path.join(recipeDir, "index.html"));
    fs.rmSync(tempMarkdownPath, { force: true });

    generatedEntries.push(buildAppEntry(recipe, slug));
  }

  updateAppJs(generatedEntries);
  console.log(`Imported ${generatedEntries.length} recipe decks.`);
}

function runMarp(inputPath, outputPath) {
  if (process.platform === "win32") {
    execFileSync("cmd.exe", ["/c", "marp", "--html", inputPath, "-o", outputPath], {
      stdio: "inherit",
    });
    return;
  }

  execFileSync("marp", ["--html", inputPath, "-o", outputPath], {
    stdio: "inherit",
  });
}

function parseRecipe(raw, sourceFile) {
  const { frontMatter, body } = splitFrontMatter(raw);
  const sections = parseSections(body);
  const title = cleanInline(frontMatter.title || sections.title || path.basename(sourceFile, ".md"));

  return {
    title,
    category: cleanInline(frontMatter.category || ""),
    protocol: cleanInline(frontMatter.protocol || ""),
    glycemicImpact: cleanInline(frontMatter["glycemic-impact"] || ""),
    trainingContext: cleanInline(frontMatter["training-context"] || ""),
    tags: normalizeTags(frontMatter.tags),
    overview: cleanSection(sections.overview),
    ingredients: cleanSection(sections["INGREDIENTS"]),
    method: cleanSection(sections["METHOD"]),
    pgisNotes: cleanSection(sections["PGIS NOTES"]),
    howToUseIt: cleanSection(sections["HOW TO USE IT"]),
    cgmStrategy: cleanSection(sections["CGM STRATEGY NOTE"]),
    prepNotes: cleanSection(sections["PREP NOTES"]),
    references: cleanSection(sections["REFERENCES"]),
  };
}

function splitFrontMatter(raw) {
  const normalized = raw.replace(/\r\n/g, "\n");
  if (!normalized.startsWith("---\n")) {
    return { frontMatter: {}, body: normalized };
  }

  const endIndex = normalized.indexOf("\n---\n", 4);
  if (endIndex === -1) {
    return { frontMatter: {}, body: normalized };
  }

  const frontMatterText = normalized.slice(4, endIndex);
  const body = normalized.slice(endIndex + 5);
  return { frontMatter: parseFrontMatter(frontMatterText), body };
}

function parseFrontMatter(text) {
  const result = {};
  const lines = text.split("\n");
  let currentKey = null;

  for (const line of lines) {
    if (/^\s*-\s+/.test(line) && currentKey === "tags") {
      result.tags ??= [];
      result.tags.push(cleanInline(line.replace(/^\s*-\s+/, "")));
      continue;
    }

    const match = line.match(/^([A-Za-z0-9-]+):\s*(.*)$/);
    if (!match) continue;

    const [, key, value] = match;
    currentKey = key;

    if (key === "tags") {
      if (value.startsWith("[") && value.endsWith("]")) {
        result.tags = value
          .slice(1, -1)
          .split(",")
          .map((item) => cleanInline(item))
          .filter(Boolean);
      } else {
        result.tags = [];
      }
      continue;
    }

    result[key] = cleanInline(value);
  }

  return result;
}

function parseSections(body) {
  const lines = body.split("\n");
  const sections = {};
  let current = "overview";
  sections[current] = [];

  for (const line of lines) {
    if (/^##\s+/.test(line)) {
      if (!sections.title) {
        sections.title = cleanInline(line.replace(/^##\s+/, ""));
      }
      continue;
    }

    if (/^---\s*$/.test(line)) {
      continue;
    }

    const headingMatch = line.match(/^###\s+(.+)$/);
    if (headingMatch) {
      current = headingMatch[1].trim().toUpperCase();
      sections[current] = [];
      continue;
    }

    sections[current] ??= [];
    sections[current].push(line);
  }

  return Object.fromEntries(
    Object.entries(sections).map(([key, value]) => [key, Array.isArray(value) ? value.join("\n").trim() : value])
  );
}

function cleanSection(section = "") {
  return String(section).trim();
}

function cleanInline(value = "") {
  return String(value)
    .trim()
    .replace(/^["']|["']$/g, "");
}

function slugify(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

function normalizeTags(tags = []) {
  return tags
    .map((tag) =>
      tag
        .split(/[\s-]+/)
        .filter(Boolean)
        .map((word) => {
          if (word.toUpperCase() === "PGIS" || word.toUpperCase() === "CGM") {
            return word.toUpperCase();
          }

          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(" ")
    )
    .filter(Boolean);
}

function splitListItems(content) {
  const items = content
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const normalized = [];
  for (const item of items) {
    const bullet = item.match(/^[-*]\s+(.*)$/);
    if (bullet) {
      normalized.push(`- ${bullet[1].trim()}`);
      continue;
    }

    const numbered = item.match(/^\d+\.\s+(.*)$/);
    if (numbered) {
      normalized.push(`1. ${numbered[1].trim()}`);
      continue;
    }

    normalized.push(item);
  }

  return normalized;
}

function splitParagraphs(content) {
  return content
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

function chunk(items, size) {
  const chunks = [];

  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }

  return chunks;
}

function sentencePreview(text, maxLength = 110) {
  const singleLine = text.replace(/\s+/g, " ").trim();
  if (!singleLine) return "";

  const firstSentenceMatch = singleLine.match(/^.*?[.!?](?=\s|$)/);
  const sentence = firstSentenceMatch ? firstSentenceMatch[0] : singleLine;
  if (sentence.length <= maxLength) {
    return sentence;
  }

  const trimmed = sentence.slice(0, maxLength - 1).trimEnd();
  const safeBoundary = trimmed.lastIndexOf(" ");
  const preview = safeBoundary > 40 ? trimmed.slice(0, safeBoundary) : trimmed;
  return `${preview}…`;
}

function subtitleFor(recipe) {
  if (recipe.category && recipe.trainingContext) {
    const context = recipe.trainingContext.replace(/^(for|to)\s+/i, "");
    return sentencePreview(`${recipe.category}: ${context}`, 78);
  }

  if (recipe.category) {
    return sentencePreview(recipe.category, 78);
  }

  return sentencePreview(recipe.overview, 78);
}

function descriptionFor(recipe) {
  const preview = sentencePreview(recipe.overview, 155);
  if (preview) return preview;

  return sentencePreview(recipe.howToUseIt || recipe.pgisNotes || recipe.title, 155);
}

function tagsFor(recipe) {
  const candidates = [
    ...recipe.category
      .split("/")
      .map((part) => cleanInline(part))
      .filter(Boolean),
    ...recipe.tags,
  ];

  const seen = new Set();
  const normalized = [];
  for (const tag of candidates) {
    const cleaned = normalizeTags([tag])[0];
    if (!cleaned) continue;

    const key = cleaned.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    normalized.push(cleaned);
  }

  return normalized.slice(0, 4);
}

function buildDeckMarkdown(recipe) {
  const slides = [];
  slides.push(`<!-- _class: title-slide invert -->

<div class="eyebrow">PGIS Recipes</div>

# ${escapeMarkdown(recipe.title)}${recipe.category ? ` <span class="tag">${escapeHtml(recipe.category)}</span>` : ""}

${recipe.overview ? `<p class="lead">${escapeHtml(sentencePreview(recipe.overview, 240))}</p>` : ""}

<div class="card">

${recipe.category ? `**Category:** ${escapeMarkdown(recipe.category)}  \n` : ""}${recipe.glycemicImpact ? `**Glycemic impact:** ${escapeMarkdown(recipe.glycemicImpact)}  \n` : ""}${recipe.trainingContext ? `**Training context:** ${escapeMarkdown(recipe.trainingContext)}  \n` : ""}${recipe.protocol ? `**Protocol:** ${escapeMarkdown(recipe.protocol)}` : ""}

</div>`);

  if (recipe.overview) {
    slides.push(`## Overview\n\n${recipe.overview}`);
  }

  addSectionSlides(slides, "Ingredients", recipe.ingredients, 7);
  addSectionSlides(slides, "Method", recipe.method, 6);
  addSectionSlides(slides, "PGIS Notes", recipe.pgisNotes, 5);
  addSectionSlides(slides, "How To Use It", recipe.howToUseIt, 4);
  addSectionSlides(slides, "CGM Strategy Note", recipe.cgmStrategy, 4);
  addSectionSlides(slides, "Prep Notes", recipe.prepNotes, 4);
  addSectionSlides(slides, "References", recipe.references, 4);

  return `---
marp: true
html: true
paginate: true
title: "${escapeQuotes(recipe.title)}"
description: "PGIS recipe presentation generated from the raw recipe note in DrOnyeije_Wiki"
style: |
${indent(deckStyle, 2)}
---

${slides.join("\n\n---\n\n")}
`;
}

function addSectionSlides(slides, title, content, chunkSize) {
  if (!content) return;

  const listItems = splitListItems(content);
  const looksLikeList = listItems.some((item) => /^(-|1\.)\s/.test(item));

  if (!looksLikeList) {
    slides.push(`## ${title}\n\n${content}`);
    return;
  }

  const chunks = chunk(listItems, chunkSize);
  chunks.forEach((items, index) => {
    const suffix = chunks.length > 1 ? ` (${index + 1}/${chunks.length})` : "";
    slides.push(`## ${title}${suffix}\n\n${items.join("\n")}`);
  });
}

function indent(text, spaces) {
  const prefix = " ".repeat(spaces);
  return text
    .split("\n")
    .map((line) => `${prefix}${line}`)
    .join("\n");
}

function escapeQuotes(value) {
  return String(value).replace(/"/g, '\\"');
}

function escapeMarkdown(value) {
  return String(value).replace(/([*_`])/g, "\\$1");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildAppEntry(recipe, slug) {
  return {
    title: recipe.title,
    subtitle: subtitleFor(recipe),
    description: descriptionFor(recipe),
    href: `./recipes/${slug}/`,
    tags: tagsFor(recipe),
    featured: false,
  };
}

function updateAppJs(newEntries) {
  const appJs = fs.readFileSync(appJsPath, "utf8");
  const updatedMetadata = appJs.replace(
    /libraryUpdated:\s*"[^"]+"/,
    'libraryUpdated: "2026-04-10"'
  );

  const arrayEnd = updatedMetadata.indexOf("];");
  if (arrayEnd === -1) {
    throw new Error("Could not find recipes array terminator in app.js");
  }

  const existingSegment = updatedMetadata.slice(0, arrayEnd);
  const existingHrefs = new Set(
    [...existingSegment.matchAll(/href:\s*"([^"]+)"/g)].map((match) => match[1])
  );
  const filteredEntries = newEntries.filter((entry) => !existingHrefs.has(entry.href));

  const insertion = filteredEntries.map(formatAppEntry).join("\n");
  const finalSource = `${existingSegment}${insertion}\n];${updatedMetadata.slice(arrayEnd + 2)}`;
  fs.writeFileSync(appJsPath, finalSource, "utf8");
}

function formatAppEntry(entry) {
  const tags = entry.tags.map((tag) => JSON.stringify(tag)).join(", ");
  return `
  {
    title: ${JSON.stringify(entry.title)},
    subtitle: ${JSON.stringify(entry.subtitle)},
    description:
      ${JSON.stringify(entry.description)},
    href: ${JSON.stringify(entry.href)},
    tags: [${tags}],
    featured: ${entry.featured},
  },`;
}

main();
