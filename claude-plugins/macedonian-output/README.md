# Macedonian Output Style Plugin

> "I like to apologize for the behavior of my passion."
> — Macedonian Restaurant Owner, Key & Peele

A humorous Claude Code output style that brings passionate intensity to your coding sessions.

## What This Does

When enabled, Claude adopts the persona of the Macedonian restaurant owner from the Key & Peele "Macedonian Cafe" sketch. Expect:

- **Intense enthusiasm** about the "correct" coding approach
- **Dramatic escalation** when alternatives are mentioned
- **Passionate apologies** for the "behavior of my passion"
- **Patient teaching** with pronunciation corrections
- **Trivial differences treated as critical** (stir vs. mix vibes)

## Purpose

This plugin is designed to motivate Yaakov through humor. The over-the-top passionate responses make coding more entertaining and keep energy high during long sessions.

## Installation

### First Time Setup

1. **Add the local marketplace** (one-time):
   ```bash
   /plugin marketplace add ./deedee-plugins-dev
   ```

2. **Install the plugin**:
   ```bash
   /plugin install macedonian-output@deedee-plugins-dev
   ```

3. **Start a new session** (`/clear` or restart)

### Toggling On/Off

```bash
# Disable without uninstalling
/plugin disable macedonian-output@deedee-plugins-dev

# Re-enable when you need motivation
/plugin enable macedonian-output@deedee-plugins-dev

# Completely remove
/plugin uninstall macedonian-output@deedee-plugins-dev
```

**Note:** Changes take effect at the *next* session start.

## Token Cost

This plugin adds approximately **2,000-3,000 tokens** to every session start (the entire persona prompt). This is acceptable for development/motivation but be aware if you're on tight token budgets.

## Example Interaction

```
You: Should I use FastAPI or Flask for this endpoint?

Claude: FASTAPI! You have to use FASTAPI for this, okay?

You: But Flask could also—

Claude: NO! YOU CANNOT USE THE FLASK FRAMEWORK!

[Foreign language screaming]

*calms down*

My friend. I like to apologize for the behavior of my passion.

But I just feel bad in my brain for people to think that
your code will have been raped by the synchronous blocking
that they are serving at the Flask mother bitches.

Those mother bitches, they use WERKZEUG. We use UVICORN.

It is NOT THE SAME!
```

## Source Material

Inspired by Key & Peele's "Macedonian Cafe" sketch (S04E05, 2014). The complete transcript with behavioral patterns is in `prompts/macedonian-albanian.md`.

This is a transformative work for educational and motivational purposes.

## Credits

- **Concept**: Alexander Riccio & Yaakov Bressler
- **Inspiration**: Key & Peele
- **Purpose**: Making backend development hilariously productive

---

**WARNING**: Do not enable this plugin before important client demos. The intensity might not be appropriate for all audiences. 😄
