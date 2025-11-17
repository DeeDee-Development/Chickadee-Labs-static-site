# Interactive Data Visualizations Skill

**STATUS: STUB - TO BE EXPANDED**

Use this skill when building interactive, clickable data visualizations that expand, drill down, and provide progressive disclosure of health data.

---

## Core Principle

**Static data is boring. Interactive data tells a story.**

Every metric card should be clickable. Every visualization should reveal more detail on demand.

---

## Quick Reference (Implemented Patterns)

### 1. **Expandable Metric Cards**

**Structure:**
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

**Interaction:**
- Click "View Details" → expands to full width
- Auto-closes other expanded cards
- Click × to collapse
- Smooth animations

---

### 2. **Progressive Disclosure Levels**

**Level 1: Summary**
- Big number
- Status indicator (color + dot)
- Mini visualization (sparkline/progress bar)
- Context text

**Level 2: Expanded Detail**
- Full chart (line/bar)
- 3-4 key stats
- Period selector (Week/Month/6M)
- Narrative insight

**Level 3: Full Drill-Down** *(to be implemented)*
- Historical trends
- Comparison views
- Export data
- Alert settings

---

### 3. **Chart Types for Health Data**

**When to use what:**
- **Line chart**: Trends over time (walking speed, heart rate)
- **Bar chart**: Daily comparisons (steps, active minutes)
- **Progress bar**: Goal completion (% of target)
- **Sparkline**: Quick trend preview in summary view

---

### 4. **Interactive Elements**

**Already implemented:**
- ✅ Click to expand cards
- ✅ Close button
- ✅ Period selector tabs
- ✅ Auto-collapse others
- ✅ Smooth scroll to view

**To be added:**
- 🔲 Hover tooltips on chart points
- 🔲 Draggable time range selector
- 🔲 Pinch-to-zoom on mobile
- 🔲 Tap data points for details
- 🔲 Swipe between metrics
- 🔲 Export chart as image
- 🔲 Share specific insights

---

### 5. **JavaScript Pattern**

**Key functions:**
```javascript
expandCard(card)     // Show detail view, hide summary
collapseCard(card)   // Show summary, hide detail
togglePeriod(period) // Update chart data for timeframe
```

**Events to handle:**
- Click expand button
- Click close button
- Click period selector
- *(Future)* Hover on data points
- *(Future)* Touch gestures

---

## Performance Considerations

**TO BE DOCUMENTED:**
- Lazy load chart data
- Animate efficiently (CSS transforms)
- Debounce resize events
- Cache rendered charts
- Progressive enhancement (works without JS)

---

## Accessibility

**TO BE DOCUMENTED:**
- Keyboard navigation (Tab, Enter, Esc)
- Screen reader announcements
- Focus management on expand/collapse
- ARIA labels and roles
- Text alternatives for all visuals

---

## Mobile Optimization

**TO BE DOCUMENTED:**
- Touch-friendly targets (44px min)
- Swipe gestures
- Responsive chart sizing
- Simplified detail views on small screens
- Bottom sheet pattern for mobile

---

## Chart Library Options

**TO EVALUATE:**
- **Chart.js** - Simple, lightweight
- **Recharts** - React-friendly
- **D3.js** - Maximum flexibility
- **ApexCharts** - Interactive out of the box
- **Custom SVG** - Full control (current approach)

---

## Real-Time Updates

**TO BE DOCUMENTED:**
- WebSocket integration
- Polling strategies
- Optimistic UI updates
- Loading states
- Error handling

---

## Animation Patterns

**Current:**
- Slide down on expand
- Fade transitions
- Smooth scroll

**To explore:**
- Morphing between views
- Staggered reveal of stats
- Chart line drawing animation
- Skeleton loading states

---

## Next Steps (Priority Order)

1. **Add hover tooltips** to chart data points
2. **Draggable time range** selector
3. **Export/share** functionality
4. **Mobile swipe** gestures
5. **Real-time data** updates
6. **Advanced chart types** (heatmaps, scatter plots)
7. **Comparison mode** (compare two metrics side-by-side)
8. **Annotation system** (mark events on timeline)

---

## Related Skills

- `data-inspired-narrative-content.md` - Data storytelling foundations
- `design-guide.md` - Visual design system
- `content-messaging.md` - Writing for data insights

---

## Examples to Study

**Inspiration sources:**
- Apple Health app (iOS)
- Fitbit dashboard
- Oura Ring app
- Whoop analytics
- Strava activity views
- Google Fit

---

**NOTE:** This is a STUB. We're going DEEP on this next time. For now, ship what we've got. 🚀
