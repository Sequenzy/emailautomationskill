# Email Automation Skill

emailautomationskill.com

Audit automated journeys before they quietly drift out of control.

A skill for behavioral triggers, lifecycle automation, stale-branch cleanup, and governance routines that keep agents away from unsafe live changes.

## Install

```bash
npx skills add emailautomationskill
```

## Operating Data

- **18**: automation failure modes
- **6**: governance checks
- **1**: explicit launch gate

## Automation health map

1. Trigger
2. Eligibility
3. Delay
4. Message
5. Exit

## Scenarios

### Trigger inventory

List every behavior, field, and event that can start or alter a journey.

### Automation QA

Catch loops, stale branches, missing exits, and conflicting messages.

### Journey optimization

Prioritize one measurable improvement instead of rewriting the whole system.

## Operating Proof

- **Best for**: Teams with automations that grew faster than their documentation
- **Primary artifact**: Journey audit with risks, fixes, and approval gates
- **Stop condition**: Any production automation edit or subscriber-state mutation

## Agent Resources

- Markdown index: /index.md
- Skill discovery JSON: /.well-known/skills/index.json
- Raw SKILL.md: /skills/emailautomationskill/SKILL.md
- Articles: /articles/
