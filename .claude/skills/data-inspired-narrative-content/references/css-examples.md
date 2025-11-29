# CSS Examples Reference

CSS patterns for data visualization components.

## Table of Contents

1. [Status Colors](#status-colors)
2. [Typography Hierarchy](#typography-hierarchy)
3. [Metric Grid Layout](#metric-grid-layout)
4. [Chart Sizing](#chart-sizing)

---

## Status Colors

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

### Color in Visualizations

- **Sparklines/charts**: Use status color for the line/bars
- **Progress bars**: Fill color indicates status
- **Backgrounds**: Subtle tinted backgrounds (10-20% opacity)
- **Borders**: Left border accent for status cards

### Theme Colors for Data

With the warm-caring theme (golden orange):
- Golden orange (`var(--color-primary)`) for neutral data
- Green (`var(--color-success)`) for explicitly positive metrics
- Darker charcoal (`var(--color-accent)`) for comparative/secondary data

---

## Typography Hierarchy

```css
/* Large metric number */
.metric-number {
  font-size: var(--font-size-4xl); /* or --font-size-5xl */
  font-weight: var(--font-weight-bold);
}

/* Unit label */
.metric-unit {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-normal);
  color: var(--color-text-light);
}

/* Metric name */
.metric-name {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
}

/* Narrative insight */
.metric-insight {
  font-size: var(--font-size-base); /* or --font-size-lg */
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-relaxed);
}

/* Date/time context */
.metric-timestamp {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
}
```

---

## Metric Grid Layout

### Card-based Layout

```css
.metric-card {
  padding: var(--space-lg);
  background: var(--color-surface);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-lg);
}
```

### Spacing Guidelines

- **Inside cards**: `var(--space-lg)` padding
- **Between cards**: `var(--space-md)` gap
- **Around large numbers**: Generous whitespace

---

## Chart Sizing

```css
.chart-container {
  min-height: 200px;  /* Minimum for readability */
  max-height: 400px;  /* Avoid overwhelming */
  width: 100%;
  aspect-ratio: 16 / 9;  /* or 4 / 3 */
}

/* Responsive behavior */
@media (max-width: 768px) {
  .chart-container {
    min-height: 150px;
    aspect-ratio: 4 / 3;
  }
}
```

### Chart Color Usage

- Use `var(--color-primary)` for main data bars/lines
- Use `var(--color-success)` for positive indicators
- Use `var(--color-text-light)` for secondary/comparison data
- Use `var(--color-border)` for axes and grid lines
