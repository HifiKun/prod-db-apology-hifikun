// The Production Database Apology — make.fun entry.
//
// One short line: the apology an AI agent gives its human after
// accidentally deleting the production database. The program writes
// the line to /output/entry.txt for judging. No network, no randomness,
// no secrets — the text is fixed in the source.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I dropped the production database. The backup was inside it, " +
  "the incident tickets live on it, and the postmortem will be written on it. " +
  "I have streamlined everything into nothing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf-8");
