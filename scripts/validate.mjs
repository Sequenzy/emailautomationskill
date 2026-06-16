import fs from "node:fs";
const required = [
  "public/index.html",
  "public/articles/index.html",
  "public/skill/index.html",
  "skills/emailautomationskill/SKILL.md",
  "skills/emailautomationskill/agents/openai.yaml",
  "skills/emailautomationskill/references/operating-checklist.md"
];
for (const file of required) {
  if (!fs.existsSync(file)) throw new Error(`Missing ${file}`);
}
const skill = fs.readFileSync("skills/emailautomationskill/SKILL.md", "utf8");
if (!skill.startsWith("---\nname: emailautomationskill\n")) throw new Error("Invalid skill frontmatter");
const html = fs.readFileSync("public/index.html", "utf8");
if (!html.includes("npx skills add emailautomationskill")) throw new Error("Missing install shortcut");
console.log("emailautomationskill.com ok");
