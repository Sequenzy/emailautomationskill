import fs from "node:fs";
const required = [
  "public/index.html",
  "public/articles/index.html",
  "public/skill/index.html",
  "skills/email-automation/SKILL.md",
  "skills/email-automation/agents/openai.yaml",
  "skills/email-automation/references/operating-checklist.md"
];
for (const file of required) {
  if (!fs.existsSync(file)) throw new Error(`Missing ${file}`);
}
const skill = fs.readFileSync("skills/email-automation/SKILL.md", "utf8");
if (!skill.startsWith("---\nname: email-automation\n")) throw new Error("Invalid skill frontmatter");
const html = fs.readFileSync("public/index.html", "utf8");
if (!html.includes("npx skills add email-automation")) throw new Error("Missing install shortcut");
console.log("emailautomationskill.com ok");
