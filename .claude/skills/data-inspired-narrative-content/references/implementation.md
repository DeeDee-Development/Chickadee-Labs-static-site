# Implementation Reference

Templates, checklists, and testing guidelines for data-driven content.

## Table of Contents

1. [Content Structure Template](#content-structure-template)
2. [Example Application](#example-application)
3. [Content Voice Guidelines](#content-voice-guidelines)
4. [Testing Checklist](#testing-checklist)
5. [Implementation Checklist](#implementation-checklist)

---

## Content Structure Template

### The Complete Data Story

```
Section Header
Brief intro sentence explaining why this matters

[Visual: Chart/Graph/Metric Display]
↓
Key Metric
Large number with context
↓
Narrative Insight
What this means in plain language
↓
Optional: What We Track / How It Works
Technical details for those who want them
↓
Call to Action (if relevant)
What the user can do next
```

---

## Example Application

### "How We Prevent Falls"

**Before (Text-only approach):**
```
How We Prevent Falls

We monitor your walking speed, step count, balance,
and activity levels to identify early warning signs
of fall risk.
```

**After (Data-inspired narrative approach):**
```
How We Prevent Falls

Falls often happen when small changes in mobility go unnoticed.
We track the patterns that matter.

[Visualization: Four key metrics with sample data]

Walking Speed               Steps Per Day
1.4 ft/s                   6,247 steps
Your pace this week        Today's total

Balance Time               Active Minutes
12 min                     89 min
Standing activities        Total movement

---

Highlights                             See Details

🚶 Walking Speed
   You're walking slower than your usual pace.
   This can be an early sign of fatigue or balance issues.

📊 Activity Levels
   Your movement has been consistent this month—
   keep it up!

---

What We Track:
• Walking speed - slowing pace can indicate balance issues
• Daily steps - sudden decreases may signal concern
• Standing time - helps maintain strength and stability
• Movement patterns - irregularities can predict fall risk

When something seems off, you'll know right away.
```

---

## Content Voice Guidelines

### Tone Principles

**Direct + Reassuring + Educational**

**Do:**
- "You're walking slower than usual"
- "Your activity has stayed steady this week"
- "This can be an early sign of balance issues"
- "Your movement patterns look good"

**Don't:**
- "Gait velocity has decreased 15%" (too technical)
- "Wow! Amazing job crushing it!" (too enthusiastic)
- "You failed to meet your activity goal" (too harsh)
- "Potential fall risk detected" (too alarming without context)

### Writing Data Insights Formula

**[Observation] + [Context] + [Implication/Action]**

Examples:

"You're walking slower than usual [observation] this week [context]. This can be an early sign of fatigue [implication]."

"Your activity has been consistent [observation] compared to last month [context]. Keep up the good routine [action]."

"You're taking fewer steps [observation] than you normally do by now [context]. Time to get moving [action]."

---

## Testing Checklist

Ask yourself:

1. **Is the most important number obvious in 2 seconds?**
   - If not, make it bigger or remove competing elements

2. **Can someone understand the insight without the chart?**
   - Narrative should stand alone
   - Chart should reinforce, not replace

3. **Would my mom understand this?**
   - No medical jargon
   - No unexplained technical terms

4. **Does this create appropriate emotion?**
   - Reassuring for good news
   - Concerned but not alarming for issues
   - Empowering, not guilt-inducing

5. **Is there a clear next step or takeaway?**
   - What should the user think or do?
   - Even if it's just "keep doing what you're doing"

---

## Implementation Checklist

When creating data-heavy content:

- [ ] Large, bold numbers for primary metrics
- [ ] Small, subtle unit labels
- [ ] Icons for quick visual identification (consistent with brand)
- [ ] Timestamps or date ranges for context
- [ ] Charts use theme colors (`var(--color-primary)`)
- [ ] Each metric has a narrative insight in plain language
- [ ] Insights use "you" and present tense
- [ ] Comparative context (vs. usual, vs. last week, etc.)
- [ ] Adequate whitespace between elements
- [ ] Mobile-responsive layout
- [ ] Text alternatives for all visualizations
- [ ] WCAG AA color contrast compliance
- [ ] Clear hierarchy with proper heading tags
- [ ] Actionable takeaway or next step
