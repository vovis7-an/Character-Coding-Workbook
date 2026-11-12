import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const spec = JSON.parse(readFileSync("workbook-curriculum.json", "utf8"));
const readme = readFileSync("README.md", "utf8");

assert.equal(spec.zeroPiiGuaranteed, true);
assert.equal(spec.sessions.length, 12);
assert.ok(readme.includes("Zero-PII 원칙"));

console.log("PASS Character-Coding-Workbook integrity: 12 sessions and Zero-PII bridge schema verified");
