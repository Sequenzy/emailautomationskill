---
name: emailautomationskill
description: "Use when Codex, Hermes, OpenClaw, Claude Code, Cowork, or another AI agent needs to plan, review, implement, audit, or improve email work focused on behavioral triggers, lifecycle journeys, automation governance, and operational safeguards. Triggers include requests about trigger inventory, automation QA, journey optimization, stale-flow cleanup, event-driven lifecycle fixes, and governance reviews."
---

# Email Automation Skill

Treat automation as production infrastructure. Triggers, exits, exclusions, and approval gates matter as much as copy.

## When To Use

Use this skill for behavioral triggers, lifecycle journeys, automation governance, and operational safeguards. It is designed for agent workflows where email work must be specific, reviewable, and safe across planning, drafting, implementation, QA, or operational handoff.

## Operating Workflow

1. Identify whether the automation is behavioral, lifecycle, transactional, reactivation, operational, or sales-assisted.
2. Write the journey contract: trigger, eligibility, first action, waits, branches, exits, suppression, and success event.
3. Check data freshness and event reliability before recommending new branches or personalization.
4. Audit overlapping automations for duplicate sends, contradictory offers, and frequency-cap pressure.
5. Propose governance rules: naming, ownership, change log, test contacts, rollback, and scheduled review cadence.
6. Require explicit approval for activation, deactivation, imports, suppression edits, and any production journey change.

## Review Criteria

- The trigger reflects behavior, not vague intent.
- Exits remove contacts when the journey is no longer relevant.
- Fallbacks exist for missing data and delayed events.
- Automation changes include test cases and rollback notes.
- Governance keeps future agents from editing a live journey blindly.

## Output Pattern

Return automation contracts, trigger inventories, QA plans, overlap audits, governance checklists, and journey optimization recommendations. Keep recommendations concrete. Separate analysis from live-system actions, and require explicit approval before sending email, importing contacts, changing DNS, altering suppression rules, or editing production automations.
