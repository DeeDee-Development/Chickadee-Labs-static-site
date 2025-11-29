# Data Patterns Reference

Detailed breakdowns of the four core data visualization patterns.

## Table of Contents

1. [Pattern 1: Number-First Hierarchy](#pattern-1-number-first-hierarchy)
2. [Pattern 2: Data Visualization + Time Context](#pattern-2-data-visualization--time-context)
3. [Pattern 3: Narrative Insights](#pattern-3-narrative-insights)
4. [Pattern 4: Connected Narrative Storytelling](#pattern-4-connected-narrative-storytelling)
5. [Accessibility Considerations](#accessibility-considerations)

---

## Pattern 1: Number-First Hierarchy

### Visual Structure

```
Icon  Metric Name                    Timestamp
      [LARGE NUMBER] unit            →
      [Mini visualization - sparkline/bar/trend]
      Optional: sub-metrics or rings
```

### Example

```
🔥 Activity                          4:21 PM
   233 cal
   [━━━━━━━━━░░] 78% of goal
   Move: 233 Cal | Exercise: 8 min | Stand: 7 hr
   [Colored rings visualization]
```

### Key Principles

- **Large bold numbers** (2-3x body text size) - the data is the hero
- **Visual companion** - Almost always pair numbers with visualization:
  - Sparkline for trends
  - Progress bar for goals
  - Status indicator for thresholds
  - Mini chart for patterns
- **Color coding** - Use semantic colors to show status:
  - Green for healthy/good ranges
  - Orange/yellow for attention needed
  - Red sparingly for urgent issues
  - Theme color for neutral data
- **Small unit labels** - provide context without competing
- **Icons** - quick visual identification (use sparingly, consistently)
- **Timestamps** - when was this measured
- **Interactive affordance** - Chevron arrows, hover states, or clickable cards for drill-down

### Plain Numbers vs. Numbers with Visuals

- **Use plain numbers SPARINGLY** - only for simple context where visualization adds no value
- **USUALLY include visualization** - trends, comparisons, or status are clearer visually
- If you're showing a metric that changes over time → add a sparkline
- If there's a goal or threshold → add a progress bar or status indicator
- If there's a pattern to recognize → add a mini chart

### Interactive Drill-Down

When users click/tap a metric card, show:
1. **Expanded view** with full chart (not just sparkline)
2. **Time period selector** (D/W/M/6M/Y tabs)
3. **Detailed breakdown** of the metric
4. **Historical comparison** ("vs. last week")
5. **Narrative insights** specific to that metric
6. **Related metrics** if applicable

### When to Use

- Dashboard views
- Summary cards
- Today's metrics
- Real-time or recent data points

---

## Pattern 2: Data Visualization + Time Context

### Visual Structure

```
Metric Name                          Action Link

Time Period Selector: [D] [W] [M] [6M] [Y]

[LARGE AVERAGE NUMBER] unit
Date range context

[Bar Chart / Line Graph / Visual]
- Shows pattern over selected time period
- Y-axis scale
- X-axis dates/labels
- Consistent color (use theme primary)

Trend: [Up/Down/None]
```

### Example

```
Walking + Running Distance           Add Data

[D] [W] [M] [6M] [Y]  ← Tab selector

8.1 mi
Apr 11 - May 11, 2023

[Bar chart showing daily distances with orange bars]

Trend: None
```

### Key Principles

- **Time period selection** - user control over data granularity
- **Summary statistic** - average, total, or key metric for the period
- **Date range** - explicit context for the data shown
- **Visual encoding** - bars, lines, or other charts for pattern recognition
- **Trend indication** - is this going up, down, or staying stable?

### When to Use

- Historical data
- Trend analysis
- Progress tracking
- Comparison over time

---

## Pattern 3: Narrative Insights

### Visual Structure

```
Highlights                           Show All

Icon  Metric Name
      [Plain language insight that interprets the data
      and provides context or actionable information]
```

### Example

```
Highlights                           Show All

🔥 Walking + Running Distance
   You're walking and running less than you
   normally do by now.
```

### Key Principles

- **Plain language** - no medical jargon, conversational tone
- **Comparative context** - "more than," "less than," "same as"
- **Temporal context** - "by now," "this week," "compared to last month"
- **Actionable** - implies what the user might want to do
- **Personal** - "You're walking" not "Walking has decreased"
- **Honest** - don't sugarcoat or exaggerate

### Narrative Insight Templates

**For positive trends:**
- "You're moving more than you did last month"
- "Your walking has been consistent all week"
- "You've stood up more frequently this week than usual"
- "Your activity is trending up"

**For areas needing attention:**
- "You're walking less than you normally do by now"
- "Your movement has been lower this week"
- "You haven't been as active as usual lately"
- "Your standing hours are below your typical pattern"

**For maintaining status quo:**
- "Your activity has stayed steady"
- "You're on track with your usual routine"
- "Your movement patterns are consistent"

**For specific concerns (fall prevention context):**
- "Your walking speed has slowed this week"
- "You're taking fewer steps than usual"
- "Your balance activities have decreased"
- "You've been sitting more than standing lately"

### When to Use

- Summary dashboards
- Highlights sections
- Alert/notification content
- Email or push notification copy
- "What this means" sections

---

## Pattern 4: Connected Narrative Storytelling

### The Problem

Individual metrics without context feel like random data points. Users need to understand the bigger picture.

### The Solution

Weave metrics together into a cohesive story with a beginning, middle, and end.

### Story Arc for Health Data

#### 1. The Setup (Opening narrative)
- Establish why this matters
- Create emotional connection
- Set expectations

Example:
> "Falls often happen when small changes in mobility go unnoticed. We track the patterns that matter."

#### 2. The Evidence (Data metrics with visuals)
- Show the specific data points
- Use color to highlight status
- Include mini visualizations
- Make cards interactive/clickable

Example:
> [Metric cards showing Walking Speed, Steps, Balance, Activity]
> Each with a status color and trend sparkline

#### 3. The Interpretation (Narrative insights)
- Connect the dots between metrics
- Explain what patterns mean together
- Use "Highlights" to synthesize
- Reference specific metrics from above

Example:
> "Your walking speed has slowed while your activity stayed consistent. This pattern often indicates fatigue—a key fall risk factor."

#### 4. The Context (What we track / how it works)
- Technical details for those interested
- Explain methodology
- Build trust through transparency

#### 5. The Resolution (Outcome/action)
- What happens next
- User empowerment
- Call to action if relevant

Example:
> "When something seems off, you'll know right away."

### Connecting Metrics in Narrative

**Bad (Disconnected):**
```
Walking Speed: 1.4 ft/s
Steps: 6,247
Balance: 12 min
Activity: 89 min
```

**Good (Connected):**
```
Opening: "Your mobility this week shows an important pattern."

Metrics with context:
- Walking Speed: 1.4 ft/s (slower than usual) 🟡
- Steps: 6,247 (consistent with normal) 🟢
- Balance: 12 min (good) 🟢
- Activity: 89 min (steady) 🟢

Insight: "You're walking slower even though you're staying active. This could signal fatigue or balance issues worth monitoring."
```

---

## Accessibility Considerations

### For Charts & Graphs

1. **Always provide text alternatives**
   - Summary of the data shown
   - Key insights in text form
   - Screen reader descriptions

2. **Color is not the only indicator**
   - Use patterns, labels, or icons in addition to color
   - Don't rely on red/green alone for status

3. **Sufficient contrast**
   - Charts must meet WCAG AA standards (4.5:1)
   - Test against background colors

4. **Keyboard navigation**
   - Interactive charts should be keyboard accessible
   - Provide skip links for complex data sections

### For Narrative Insights

1. **Clear hierarchy** - use proper heading tags (h2, h3)
2. **Descriptive link text** - "See walking details" not "Learn more"
3. **Readable fonts** - minimum 16px for body text
4. **Adequate line height** - 1.5-1.6 for comfortable reading
