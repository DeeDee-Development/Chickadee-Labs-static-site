# Interactivity Reference

Interactive patterns for clickable, expandable data visualizations with progressive disclosure.

## Table of Contents

1. [Core Principle](#core-principle)
2. [Expandable Metric Cards](#expandable-metric-cards)
3. [Progressive Disclosure Levels](#progressive-disclosure-levels)
4. [Chart Types for Health Data](#chart-types-for-health-data)
5. [JavaScript Patterns](#javascript-patterns)
6. [Accessibility Requirements](#accessibility-requirements)
7. [Mobile Optimization](#mobile-optimization)
8. [Performance Considerations](#performance-considerations)

---

## Core Principle

**Static data is boring. Interactive data tells a story.**

Every metric card should be clickable. Every visualization should reveal more detail on demand.

---

## Expandable Metric Cards

### HTML Structure

```html
<div class="metric-card clickable" data-status="warning" data-metric="metric-id">
  <!-- Summary View -->
  <div class="metric-summary">
    [Mini visualization + number]
    <button class="metric-expand-btn">View Details</button>
  </div>

  <!-- Detail View (hidden by default) -->
  <div class="metric-detail" hidden>
    <button class="detail-close-btn">×</button>
    [Full chart + stats + insights]
  </div>
</div>
```

### Interaction Behavior

- Click "View Details" → expands to full width
- Auto-closes other expanded cards
- Click × to collapse
- Smooth animations (150-300ms)

---

## Progressive Disclosure Levels

### Level 1: Summary
- Big number (hero)
- Status indicator (color + dot)
- Mini visualization (sparkline/progress bar)
- Context text (timestamp, brief label)

### Level 2: Expanded Detail
- Full chart (line/bar)
- 3-4 key stats
- Period selector (Week/Month/6M)
- Narrative insight

### Level 3: Full Drill-Down
- Historical trends
- Comparison views
- Export data option
- Alert/notification settings

---

## Chart Types for Health Data

| Chart Type | Use For | Example Metrics |
|------------|---------|-----------------|
| **Line chart** | Trends over time | Walking speed, heart rate |
| **Bar chart** | Daily comparisons | Steps, active minutes |
| **Progress bar** | Goal completion | % of daily target |
| **Sparkline** | Quick trend preview | Any metric in summary view |

---

## JavaScript Patterns

### Key Functions

```javascript
expandCard(card)     // Show detail view, hide summary
collapseCard(card)   // Show summary, hide detail
togglePeriod(period) // Update chart data for timeframe
```

### Events to Handle

- Click expand button
- Click close button
- Click period selector
- Keyboard: Enter to expand, Esc to close
- Future: Hover on data points, touch gestures

---

## Accessibility Requirements

### Keyboard Navigation

- **Tab**: Navigate between metric cards
- **Enter/Space**: Expand focused card
- **Esc**: Collapse expanded card
- Focus should move to detail view on expand
- Focus should return to summary on collapse

### ARIA Labels

```html
<button class="metric-expand-btn"
        aria-expanded="false"
        aria-controls="metric-detail-id">
  View Details
</button>

<div class="metric-detail"
     id="metric-detail-id"
     role="region"
     aria-label="Walking speed details">
  ...
</div>
```

### Screen Reader Announcements

- Announce when card expands/collapses
- Provide text summaries of chart data
- Describe trends in words ("increasing over past week")

### Visual Accessibility

- Don't rely on color alone for status
- Use icons or patterns alongside colors
- Maintain 4.5:1 contrast ratio
- Provide visible focus indicators

---

## Mobile Optimization

### Touch Targets

- Minimum 44px × 44px for interactive elements
- Adequate spacing between targets

### Gestures (Future)

- Swipe left/right between metrics
- Pull down to refresh data
- Pinch to zoom charts

### Responsive Patterns

- Full-width cards on mobile
- Simplified detail views on small screens
- Consider bottom sheet pattern for expanded details
- Charts should be readable at mobile widths

---

## Performance Considerations

### Lazy Loading

- Load chart data only when card expands
- Defer rendering of off-screen charts
- Use placeholder/skeleton states

### Animation Efficiency

- Use CSS transforms (not layout properties)
- Prefer `opacity` and `transform` animations
- Use `will-change` sparingly

### Event Handling

- Debounce resize events
- Throttle scroll-based interactions
- Cache rendered chart instances

### Progressive Enhancement

- Core content works without JavaScript
- Charts enhance the experience but aren't required
- Provide static fallbacks for complex visualizations

---

## Implementation Roadmap

### Currently Implemented
- Click to expand cards
- Close button
- Period selector tabs
- Auto-collapse other cards
- Smooth scroll to view

### Next Priorities
1. Hover tooltips on chart points
2. Draggable time range selector
3. Export/share functionality
4. Mobile swipe gestures
5. Real-time data updates
6. Advanced chart types (heatmaps, scatter)
7. Comparison mode (side-by-side metrics)
8. Annotation system (mark events on timeline)

---

## Inspiration Sources

Study these apps for interaction patterns:
- Apple Health app (iOS)
- Fitbit dashboard
- Oura Ring app
- Whoop analytics
- Strava activity views
- Google Fit
