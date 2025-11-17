# Data-Inspired Narrative Content Skill

Use this skill when creating content that combines health data visualization with narrative storytelling.

Inspired by [Apple Health's approach](https://developer.apple.com/design/human-interface-guidelines/healthkit) to making complex health data understandable and actionable through visual design and plain language insights.

## Core Philosophy

**Data + Story = Understanding**

Health data alone can be overwhelming. Combine quantitative metrics with qualitative narrative to create meaning and drive action.

### The Three-Layer Approach

1. **The Number** - What happened (quantitative)
2. **The Visual** - The pattern or trend (visual context)
3. **The Story** - What it means (narrative interpretation)

## Design Patterns from Apple Health

### Pattern 1: Number-First Hierarchy (with Visual Context)

**Visual Structure**:
```
Icon  Metric Name                    Timestamp
      [LARGE NUMBER] unit            →
      [Mini visualization - sparkline/bar/trend]
      Optional: sub-metrics or rings
```

**Example**:
```
🔥 Activity                          4:21 PM
   233 cal
   [━━━━━━━━━░░] 78% of goal
   Move: 233 Cal | Exercise: 8 min | Stand: 7 hr
   [Colored rings visualization]
```

**Key Principles**:
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

**IMPORTANT - Plain Numbers vs. Numbers with Visuals**:
- **Use plain numbers SPARINGLY** - only for simple context where visualization adds no value
- **USUALLY include visualization** - trends, comparisons, or status are clearer visually
- If you're showing a metric that changes over time → add a sparkline
- If there's a goal or threshold → add a progress bar or status indicator
- If there's a pattern to recognize → add a mini chart

**Interactive Drill-Down**:
When users click/tap a metric card, show:
1. **Expanded view** with full chart (not just sparkline)
2. **Time period selector** (D/W/M/6M/Y tabs)
3. **Detailed breakdown** of the metric
4. **Historical comparison** ("vs. last week")
5. **Narrative insights** specific to that metric
6. **Related metrics** if applicable

**When to Use**:
- Dashboard views
- Summary cards
- Today's metrics
- Real-time or recent data points

---

### Pattern 2: Data Visualization + Time Context

**Visual Structure**:
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

**Example**:
```
Walking + Running Distance           Add Data

[D] [W] [M] [6M] [Y]  ← Tab selector

8.1 mi
Apr 11 - May 11, 2023

[Bar chart showing daily distances with orange bars]

Trend: None
```

**Key Principles**:
- **Time period selection** - user control over data granularity
- **Summary statistic** - average, total, or key metric for the period
- **Date range** - explicit context for the data shown
- **Visual encoding** - bars, lines, or other charts for pattern recognition
- **Trend indication** - is this going up, down, or staying stable?

**When to Use**:
- Historical data
- Trend analysis
- Progress tracking
- Comparison over time

---

### Pattern 3: Narrative Insights (The Most Important Pattern)

**Visual Structure**:
```
Highlights                           Show All

Icon  Metric Name
      [Plain language insight that interprets the data
      and provides context or actionable information]
```

**Example**:
```
Highlights                           Show All

🔥 Walking + Running Distance
   You're walking and running less than you
   normally do by now.
```

**Key Principles**:
- **Plain language** - no medical jargon, conversational tone
- **Comparative context** - "more than," "less than," "same as"
- **Temporal context** - "by now," "this week," "compared to last month"
- **Actionable** - implies what the user might want to do
- **Personal** - "You're walking" not "Walking has decreased"
- **Honest** - don't sugarcoat or exaggerate

**Narrative Insight Templates**:

For positive trends:
- "You're moving more than you did last month"
- "Your walking has been consistent all week"
- "You've stood up more frequently this week than usual"
- "Your activity is trending up"

For areas needing attention:
- "You're walking less than you normally do by now"
- "Your movement has been lower this week"
- "You haven't been as active as usual lately"
- "Your standing hours are below your typical pattern"

For maintaining status quo:
- "Your activity has stayed steady"
- "You're on track with your usual routine"
- "Your movement patterns are consistent"

For specific concerns (fall prevention context):
- "Your walking speed has slowed this week"
- "You're taking fewer steps than usual"
- "Your balance activities have decreased"
- "You've been sitting more than standing lately"

**When to Use**:
- Summary dashboards
- Highlights sections
- Alert/notification content
- Email or push notification copy
- "What this means" sections

---

## Pattern 4: Connected Narrative Storytelling

**The Problem**: Individual metrics without context feel like random data points. Users need to understand the bigger picture.

**The Solution**: Weave metrics together into a cohesive story with a beginning, middle, and end.

### Story Arc for Health Data

**1. The Setup** (Opening narrative)
- Establish why this matters
- Create emotional connection
- Set expectations

**Example**:
> "Falls often happen when small changes in mobility go unnoticed. We track the patterns that matter."

**2. The Evidence** (Data metrics with visuals)
- Show the specific data points
- Use color to highlight status
- Include mini visualizations
- Make cards interactive/clickable

**Example**:
> [Metric cards showing Walking Speed, Steps, Balance, Activity]
> Each with a status color and trend sparkline

**3. The Interpretation** (Narrative insights)
- Connect the dots between metrics
- Explain what patterns mean together
- Use "Highlights" to synthesize
- Reference specific metrics from above

**Example**:
> "Your walking speed has slowed while your activity stayed consistent. This pattern often indicates fatigue—a key fall risk factor."

**4. The Context** (What we track / how it works)
- Technical details for those interested
- Explain methodology
- Build trust through transparency

**5. The Resolution** (Outcome/action)
- What happens next
- User empowerment
- Call to action if relevant

**Example**:
> "When something seems off, you'll know right away."

### Connecting Metrics in Narrative

**Bad** (Disconnected):
```
Walking Speed: 1.4 ft/s
Steps: 6,247
Balance: 12 min
Activity: 89 min
```

**Good** (Connected):
```
Opening: "Your mobility this week shows an important pattern."

Metrics with context:
- Walking Speed: 1.4 ft/s (slower than usual) 🟡
- Steps: 6,247 (consistent with normal) 🟢
- Balance: 12 min (good) 🟢
- Activity: 89 min (steady) 🟢

Insight: "You're walking slower even though you're staying active. This could signal fatigue or balance issues worth monitoring."
```

### Color-Coded Status System

**CRITICAL IMPORTANCE**: Color provides instant understanding of data status.

**Three-Color System** (Traffic Light):
- 🟢 **Green** - Healthy, normal, good range
  - Use: `var(--color-success)` or green from theme
  - Message tone: Encouraging, positive
  - Example: "Looking good!" "On track!" "Healthy range"

- 🟡 **Yellow/Orange** - Attention needed, warning, concerning trend
  - Use: `#F5A623` (golden orange) or `var(--color-primary)` for warm themes
  - Message tone: Observational, concerned but calm
  - Example: "Slower than usual" "Worth monitoring" "Check this out"

- 🔴 **Red** - Alert, action required, critical (USE SPARINGLY)
  - Use: `#FF3B30` or similar
  - Message tone: Urgent but not panicked
  - Example: "Needs attention" "Significant change" "Contact support"

**Implementation Guidelines**:
```css
/* Status colors for metrics */
.metric-status-good {
  color: var(--color-success);  /* Green */
}

.metric-status-warning {
  color: var(--color-primary);  /* Orange/Yellow */
}

.metric-status-alert {
  color: #FF3B30;  /* Red - use sparingly */
}

/* Visual indicators */
.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
}
```

**Color in Visualizations**:
- **Sparklines/charts**: Use status color for the line/bars
- **Progress bars**: Fill color indicates status
- **Backgrounds**: Subtle tinted backgrounds (10-20% opacity)
- **Borders**: Left border accent for status cards

---

## Content Structure for Data-Heavy Sections

### Template: The Complete Data Story

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

### Example Application: "How We Prevent Falls"

**Before (Text-only approach)**:
```
How We Prevent Falls

We monitor your walking speed, step count, balance,
and activity levels to identify early warning signs
of fall risk.
```

**After (Data-inspired narrative approach)**:
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

## Design Guidelines for Data Visualizations

### Color Usage

**Use your theme's primary color for data visualizations**:
- `var(--color-primary)` for main data bars/lines
- `var(--color-success)` for positive indicators
- `var(--color-text-light)` for secondary/comparison data
- `var(--color-border)` for axes and grid lines

**Semantic Color Coding** (use sparingly):
- Green: Positive, on track, healthy range
- Orange/Yellow: Attention needed, warning
- Red: Alert, action required (avoid overuse - anxiety!)

**Chickadee Health Context**:
With the warm-caring theme (golden orange), use:
- Golden orange (`var(--color-primary)`) for neutral data
- Green for explicitly positive metrics
- Darker charcoal (`var(--color-accent)`) for comparative/secondary data

### Typography Hierarchy for Data

```css
Large metric number:    var(--font-size-4xl) or --font-size-5xl
                       font-weight: var(--font-weight-bold)

Unit label:            var(--font-size-sm)
                       font-weight: var(--font-weight-normal)
                       color: var(--color-text-light)

Metric name:           var(--font-size-lg)
                       font-weight: var(--font-weight-semibold)

Narrative insight:     var(--font-size-base) or --font-size-lg
                       font-weight: var(--font-weight-normal)
                       line-height: var(--line-height-relaxed)

Date/time context:     var(--font-size-sm)
                       color: var(--color-text-light)
```

### Spacing & Layout

**Card-based layout for metrics**:
- Each metric gets its own card or distinct section
- Padding: `var(--space-lg)` inside cards
- Gap between cards: `var(--space-md)`
- Generous whitespace around large numbers

**Chart sizing**:
- Minimum height: 200px for readability
- Maximum height: 400px (avoid overwhelming)
- Responsive: full width on mobile, constrained on desktop
- Aspect ratio: 16:9 or 4:3 for most charts

**Grid layouts for multiple metrics**:
```css
.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-lg);
}
```

---

## When to Use Data-Heavy Design

### ✅ Use data visualizations when:

1. **Showing trends over time** - patterns are easier to see visually
2. **Comparing multiple metrics** - side-by-side numbers tell a story
3. **Demonstrating product value** - "here's what you'll see"
4. **Providing transparency** - "this is exactly what we track"
5. **Creating urgency** - "your data shows X, which means Y"
6. **Building trust** - "we're scientific and precise"

### ❌ Avoid data visualizations when:

1. **Explaining concepts** - use simple diagrams or text instead
2. **First-time visitors** - don't overwhelm before they understand value
3. **Single data point** - just show the number, don't force a chart
4. **Complex technical details** - simplify or skip
5. **Mobile-first critical content** - charts can be hard to read on small screens

### The Balance

**Homepage**: Light data touch
- Maybe one example metric card
- Focus on the value proposition first
- Data as proof point, not hero

**Features page**: Medium data presence
- Show what metrics look like
- Use example data to tell the story
- Balance visuals with narrative

**"How It Works" page**: Heavy data presence
- This is where you can show the full dashboard
- Explain each metric in detail
- Use data to demonstrate capability

---

## Accessibility Considerations

### For Charts & Graphs:

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

### For Narrative Insights:

1. **Clear hierarchy** - use proper heading tags (h2, h3)
2. **Descriptive link text** - "See walking details" not "Learn more"
3. **Readable fonts** - minimum 16px for body text
4. **Adequate line height** - 1.5-1.6 for comfortable reading

---

## Content Voice for Data Narratives

### Tone Principles (from content-messaging skill)

**Direct + Reassuring + Educational**

**Do**:
- ✅ "You're walking slower than usual"
- ✅ "Your activity has stayed steady this week"
- ✅ "This can be an early sign of balance issues"
- ✅ "Your movement patterns look good"

**Don't**:
- ❌ "Gait velocity has decreased 15%" (too technical)
- ❌ "Wow! Amazing job crushing it!" (too enthusiastic)
- ❌ "You failed to meet your activity goal" (too harsh)
- ❌ "Potential fall risk detected" (too alarming without context)

### Writing Data Insights

**Formula**: [Observation] + [Context] + [Implication/Action]

**Examples**:

"You're walking slower than usual [observation] this week [context]. This can be an early sign of fatigue [implication]."

"Your activity has been consistent [observation] compared to last month [context]. Keep up the good routine [action]."

"You're taking fewer steps [observation] than you normally do by now [context]. Time to get moving [action]."

---

## Testing Your Data Content

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

---

## Quick Reference: Data Content Patterns

| Pattern | Use When | Key Elements |
|---------|----------|--------------|
| **Number-First Card** | Single metric, recent data | Icon, Large number, Unit, Timestamp |
| **Time-Series Chart** | Historical trends | Period selector, Chart, Average, Date range |
| **Narrative Insight** | Interpreting data | Plain language, Comparison, Implication |
| **Metric Grid** | Multiple related metrics | 2-4 cards, Consistent format, Brief labels |
| **Highlights Section** | Summary dashboard | Top 2-3 insights, "Show All" link |

---

## Resources

- **Design inspiration**: Apple Health app, MyFitnessPal dashboard, Fitbit app
- **Chart libraries** (if needed): Chart.js, Recharts, D3.js
- **Related skills**: `design-guide.md`, `content-messaging.md`
- **Color system**: `src/config/colors.ts`

---

Remember: **Data tells the "what," narrative tells the "why."** Always pair them together for maximum impact and understanding.
