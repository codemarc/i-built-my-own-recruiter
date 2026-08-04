/**
 * Sync book/*.md → src/content/docs/ with Starlight frontmatter.
 * book/ stays the GitHub-first source of truth (no frontmatter required there).
 */
import { mkdir, readdir, readFile, writeFile, rm } from "node:fs/promises";
import { join, basename } from "node:path";

const ROOT = join(import.meta.dir, "../..");
const BOOK_DIR = join(ROOT, "book");
const OUT_DIR = join(import.meta.dir, "../src/content/docs/book");

const SIDEBAR_LABELS: Record<string, string> = {
  "00-preface.md": "0 · Preface",
  "01-the-problem-with-job-boards.md": "1 · Job Boards",
  "02-define-your-dealbreakers.md": "2 · Dealbreakers",
  "03-define-what-great-looks-like.md": "3 · What Great Looks Like",
  "04-building-the-scoring-rubric.md": "4 · Scoring Rubric",
  "05-automating-the-daily-sweep.md": "5 · Daily Sweep",
  "06-machine-format-human-format.md": "6 · Report Formats",
  "07-from-match-to-message.md": "7 · Outreach",
  "08-resume-tailoring-at-scale.md": "8 · Resume Tailoring",
  "09-teaching-the-system-to-remember.md": "9 · Memory",
  "10-when-the-market-goes-quiet.md": "10 · Thin Sweep",
  "11-what-the-recruiter-cant-do.md": "11 · Limits",
  "12-fork-it.md": "12 · Fork It",
  "13-closing-paying-it-forward.md": "13 · Closing",
};

function extractTitle(body: string): string {
  const match = body.match(/^#\s+(.+)$/m);
  if (!match) return "Untitled";
  return match[1].replace(/^\d+\.\s+/, "").trim();
}

function stripFirstH1(body: string): string {
  return body.replace(/^#\s+.+\n+/, "");
}

/** Rewrite sibling .md links to Starlight slugs. */
function rewriteLinks(body: string): string {
  return body
    .replace(/\]\(\.\.\/templates\//g, "](https://github.com/codemarc/i-built-my-own-recruiter/tree/main/templates/")
    .replace(/\]\(\.\.\/examples\//g, "](https://github.com/codemarc/i-built-my-own-recruiter/tree/main/examples/")
    .replace(/\]\(([\w-]+)\.md\)/g, "](/recruiter/book/$1/)");
}

async function main() {
  const files = (await readdir(BOOK_DIR))
    .filter((f) => f.endsWith(".md"))
    .sort();

  await rm(OUT_DIR, { recursive: true, force: true });
  await mkdir(OUT_DIR, { recursive: true });

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const raw = await readFile(join(BOOK_DIR, file), "utf8");
    const title = extractTitle(raw);
    const label = SIDEBAR_LABELS[file] ?? title;
    const body = rewriteLinks(stripFirstH1(raw));
    const slug = basename(file, ".md");

    const frontmatter = `---
title: ${JSON.stringify(title)}
description: ${JSON.stringify(`Chapter from I Built My Own Recruiter — ${title}`)}
sidebar:
  order: ${i}
  label: ${JSON.stringify(label)}
---

`;

    await writeFile(join(OUT_DIR, `${slug}.md`), frontmatter + body, "utf8");
    console.log(`synced ${file} → ${slug}.md`);
  }

  console.log(`Done. ${files.length} chapters synced.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
