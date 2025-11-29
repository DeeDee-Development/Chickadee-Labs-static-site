---
name: data-inspired-narrative-content
description: Data visualization combined with narrative storytelling for health metrics. Implements Apple Health-inspired patterns for number-first hierarchy, time-series charts, narrative insights, and connected stories. Use when building health dashboards, metric displays, data cards, or combining quantitative data with qualitative interpretation.
---

# Data-Inspired Narrative Content Skill

Inspired by [Apple Health's approach](https://developer.apple.com/design/human-interface-guidelines/healthkit) to making complex health data understandable and actionable.

## Core Philosophy

**Data + Story = Understanding**

Health data alone can be overwhelming. Combine quantitative metrics with qualitative narrative to create meaning and drive action.

### The Three-Layer Approach

1. **The Number** - What happened (quantitative)
2. **The Visual** - The pattern or trend (visual context)
3. **The Story** - What it means (narrative interpretation)

## Four Design Patterns

### Pattern 1: Number-First Hierarchy
Large bold numbers as heroes, paired with mini visualizations (sparklines, progress bars, status indicators).

```
Icon  Metric Name                    Timestamp
      [LARGE NUMBER] unit            →
      [Mini visualization]
```

**Key**: Always pair numbers with visuals - plain numbers are rarely sufficient.

### Pattern 2: Data Visualization + Time Context
Time-series charts with period selectors (D/W/M/6M/Y), summary statistics, and trend indicators.

### Pattern 3: Narrative Insights
Plain language interpretation of data using comparative and temporal context.

**Template**: [Observation] + [Context] + [Implication/Action]

Example: "You're walking slower than usual [observation] this week [context]. This can be an early sign of fatigue [implication]."

### Pattern 4: Connected Narrative Storytelling
Weave metrics together into a cohesive story arc: Setup → Evidence → Interpretation → Context → Resolution.

**See**: [references/patterns.md](references/patterns.md) for detailed pattern documentation.

## Color-Coded Status System

| Status | Color | Use | Tone |
|--------|-------|-----|------|
| Good | Green (`var(--color-success)`) | Healthy, normal range | Encouraging |
| Warning | Orange (`var(--color-primary)`) | Attention needed | Concerned but calm |
| Alert | Red (`#FF3B30`) | Action required (sparingly) | Urgent, not panicked |

## Interactive Data Patterns

Metric cards should be clickable with progressive disclosure:

**Level 1: Summary** - Big number, status dot, sparkline, context text
**Level 2: Expanded** - Full chart, key stats, period selector, narrative insight
**Level 3: Drill-Down** - Historical trends, comparison views, export, alerts

**See**: [references/interactivity.md](references/interactivity.md) for implementation details.

## When to Use Data Visualizations

### Use when:
- Showing trends over time
- Comparing multiple metrics
- Demonstrating product value
- Providing transparency
- Building trust through precision

### Avoid when:
- Explaining concepts (use diagrams/text)
- First-time visitors (don't overwhelm)
- Single data point (just show the number)
- Mobile-critical content (charts hard to read small)

### Page Balance
- **Homepage**: Light touch - maybe one example metric card
- **Features**: Medium presence - show what metrics look like
- **How It Works**: Heavy presence - full dashboard demonstration

## Quick Reference

| Pattern | Use When | Key Elements |
|---------|----------|--------------|
| **Number-First Card** | Single metric, recent data | Icon, Large number, Unit, Timestamp, Sparkline |
| **Time-Series Chart** | Historical trends | Period selector, Chart, Average, Date range |
| **Narrative Insight** | Interpreting data | Plain language, Comparison, Implication |
| **Metric Grid** | Multiple related metrics | 2-4 cards, Consistent format |
| **Highlights Section** | Summary dashboard | Top 2-3 insights, "Show All" link |

## Reference Files

- **[references/patterns.md](references/patterns.md)** - Detailed Pattern 1-4 breakdowns with examples
- **[references/css-examples.md](references/css-examples.md)** - CSS code for typography, colors, layouts
- **[references/implementation.md](references/implementation.md)** - Templates, checklists, testing guidelines
- **[references/interactivity.md](references/interactivity.md)** - Interactive patterns, JavaScript, accessibility

## Related Skills

- [`design-guide`](../design-guide.md) - Visual design system, color themes
- [`content-messaging`](../content-messaging.md) - Writing tone and style

## Resources

- **Design inspiration**: Apple Health app, MyFitnessPal dashboard, Fitbit app
- **Chart libraries**: Chart.js, Recharts, D3.js, ApexCharts
- **Color system**: `src/config/colors.ts`

---

**Remember**: Data tells the "what," narrative tells the "why." Always pair them together.
