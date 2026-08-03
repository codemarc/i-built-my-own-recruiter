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
  "03-building-the-scoring-rubric.md": "3 · Scoring Rubric",
  "04-automating-the-daily-sweep.md": "4 · Daily Sweep",
  "05-machine-format-human-format.md": "5 · Report Formats",
  "06-from-match-to-message.md": "6 · Outreach",
  "07-resume-tailoring-at-scale.md": "7 · Resume Tailoring",
  "08-teaching-the-system-to-remember.md": "8 · Memory",
  "09-when-the-market-goes-quiet.md": "9 · Thin Sweep",
  "10-what-the-recruiter-cant-do.md": "10 · Limits",
  "11-fork-it.md": "11 · Fork It",
  "12-closing-paying-it-forward.md": "12 · Closing",
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
    .replace(/\]\(([\w-]+)\.md\)/g, "](/book/$1/)");
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
