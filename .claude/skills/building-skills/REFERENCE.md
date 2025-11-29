# Building Skills - Quick Reference

## Conversation History Mining

### Problem Indicator Search Phrases

**High-Signal Indicators:**
Search your conversation history or logs for these patterns:
- "I apologize" - General errors
- "didn't work" - Failed attempts
- "misunderstood" - Comprehension failures
- "let me try again" - Iteration/retry
- "forgot to" - Omission errors

**Domain-Specific Phrases:**
Search for your project's common problem areas:
- Error messages specific to your stack
- Library/framework names causing issues
- Architectural concepts being misunderstood

## Subagent Prompt Templates

### Template: Research Subagent

```
Your task is to conduct comprehensive web research on [FEATURE/TOPIC].

IMPORTANT: You are a research subagent. DO NOT write code, DO NOT make commits.
Your ONLY job is to search and gather information.

Perform multiple web searches (at least 5-7 different searches) with different
query angles:
- "[TOPIC] documentation"
- "[TOPIC] best practices"
- "[TOPIC] examples github"
- "[TOPIC] troubleshooting"
- "[TOPIC] architecture"
- "[TOPIC] limitations"

After gathering information, compile a comprehensive report including:
- What [TOPIC] is and core concepts
- How it works (technical architecture)
- Implementation guide with patterns
- Real-world examples and use cases
- Common mistakes and gotchas
- Limitations and constraints

Return ALL findings in your final report - be thorough and detailed.
```

### Template: Explore Subagent

```
Your task is to explore [DIRECTORY_PATH] and surface useful patterns.

IMPORTANT: You are an exploration subagent. DO NOT write code, DO NOT make commits.
Your ONLY job is to explore and report findings.

Thoroughness level: MEDIUM

Target areas:
1. [Specific file/pattern 1]
2. [Specific file/pattern 2]
3. [Specific file/pattern 3]

Key questions to answer:
- [Question 1]
- [Question 2]
- [Question 3]

Focus on:
- File structure and organization
- Code patterns and conventions
- Interfaces and boundaries
- Common implementation approaches

Return a concise report highlighting:
- Number and types of [items] found
- Best examples of each pattern
- Concrete techniques we can apply
- Actionable insights
- File references with paths

Keep it focused on ACTIONABLE insights. No lengthy code copying.
```

### Template: Testing Subagent

```
Your task is to test Claude Code Skills triggering.

IMPORTANT: You are a testing subagent. Run tests and report findings concisely.

CRITICAL: Keep response BRIEF (~400 words max). Focus only on test results.

Run these prompts using `claude -p "prompt"`:

### Test 1: [Skill Name]
"""
[Full prompt that should trigger Skill]
"""
Check for: [What to look for in response]

### Test 2: [Skill Name]
"""
[Full prompt that should trigger Skill]
"""
Check for: [What to look for in response]

...

## Report Format

For each test:
- **Triggered?** Yes/No
- **Evidence:** [Quote or "Generic only"]
- **Result:** ✓ Fixed / ✗ Broken

### Summary
- **Trigger rate:** [X/Y] working
- **Status:** Ready / Needs work
```

## SKILL.md Template

```markdown
---
name: skill-name
description: What it does AND when to use it. 150-250 characters. Third person. Include 5+ trigger keywords.
---

# Skill Name

## Overview

[1-2 sentence explanation of what this Skill teaches Claude to do better]

## Core Capabilities

- [Capability 1: concise one-liner]
- [Capability 2: concise one-liner]
- [Capability 3: concise one-liner]

## Input Requirements

[What Claude needs from you to use this Skill effectively]
- Data format expectations
- Context needed
- Assumptions made

## Output Format

[What Claude will produce when using this Skill]
- File types
- Structure
- Quality standards

## Example Usage

[3-4 realistic prompts showing how to trigger the Skill]

**Example 1:**
```
Prompt: "[Sample prompt showing typical usage]"
Expected: [Brief description of what Claude should do]
```

...

## Workflow: [Multi-step process name]

Copy this checklist:

```
Progress:
- [ ] Step 1
- [ ] Step 2
- [ ] Step 3
```

**Step 1:** [Detailed guidance]

[Additional steps...]

## Quick Reference

[Brief lookup table or reference info]

See [REFERENCE.md](REFERENCE.md) for comprehensive patterns.
```

## REFERENCE.md Template

```markdown
# [Skill Name] - Quick Reference

## Quick Lookup Tables

| Category | Key Point 1 | Key Point 2 | Notes |
|----------|------------|------------|-------|
| Concept 1 | Value | Value | Details |

## Decision Trees

```
Should you use this pattern?
  ├─ If [condition]: Use [approach 1]
  ├─ If [condition]: Use [approach 2]
  └─ Default: [approach 3]
```

## Code Examples

### Pattern 1: [Name]
```[language]
[Example code with comments]
```

### Pattern 2: [Name]
```[language]
[Example code with comments]
```

## Common Mistakes

### Mistake 1: [Description]
**Why it's wrong:** [Explanation]
**Fix:** [Correct approach]
**Files affected:** [File paths]

## File References

| Concept | File Location | Notes |
|---------|--------------|-------|
| [Concept] | `/path/to/file` | [What it contains] |

## Checklists

### Pre-[Action] Checklist
- [ ] Item 1
- [ ] Item 2
- [ ] Item 3

## Anti-Patterns

✗ **Don't do this:** [Anti-pattern]
- **Why:** [Explanation]

✓ **Do this instead:** [Better pattern]
- **Why:** [Explanation]

## Version History

- **v1.0 (2025-01-XX):** Initial creation
```

## Trigger Keyword Strategy

### High-Confidence Triggers

**Action verbs** (most reliable):
- "I'm adding", "I'm creating", "I'm implementing"
- "I'm editing", "I'm modifying", "I'm refactoring"
- "I'm debugging", "I'm testing", "I'm deploying"

**Domain terms** (very specific):
- Exact file names relevant to your project
- Exact class/component names
- Library/framework names

**Problem phrases**:
- "Should I check X first?" (process question)
- "How do I avoid Y?" (prevention question)
- "Why does this break?" (debugging question)

### Description Formula

```
[Verb] [what it does] [for what purpose]. Use when [situation 1], [situation 2], or [situation 3].
```

**Example:**
```
Implements efficient API query patterns with proper error handling.
Use when fetching data, handling pagination, or debugging API failures.
```

**Keywords in above:**
- "API query patterns" (domain concept)
- "error handling" (pattern)
- "fetching data, pagination" (specific actions)
- "API failures" (problem phrase)

## Testing Checklist

### Discovery Test
```bash
claude -p "What Skills are available?"
```
- [ ] Skill name appears in list
- [ ] Description shows correct phrasing
- [ ] All Skills found

### Trigger Tests (3-4 per Skill)
```bash
claude -p "[Test prompt that should trigger Skill]"
```
- [ ] Skill-specific content appears
- [ ] Guidance is accurate
- [ ] File references are correct
- [ ] Examples are relevant

### Quality Tests
- [ ] No trailing whitespace in output
- [ ] Progressive disclosure working (SKILL.md → REFERENCE.md)
- [ ] Workflows are complete and checkboxed
- [ ] File paths use forward slashes

## Skill Decision Matrix

| Problem Type | Skill Scope | Complexity | Location | Effort |
|-------------|------------|-----------|----------|--------|
| Universal pattern | Cross-project | Low-Medium | ~/.claude/skills/ | 2-3 hrs |
| Project-specific | Single project | Medium | .claude/skills/ | 3-4 hrs |
| Architecture | System-wide | High | .claude/skills/ (shared) | 4-6 hrs |
| Tool usage | General | Low | ~/.claude/skills/ | 1-2 hrs |
| Domain-specific | Vertical | Medium-High | .claude/skills/ | 3-5 hrs |

## Validation Log Template

Create a validation log file:

```markdown
# Skills Validation Log

## Session: [Date/ID]

### Skill Used: [Skill Name]
- **Trigger prompt:** [What user said]
- **Triggered:** Yes/No
- **Useful:** Yes/No/Partial
- **Issues:** [Any problems or gaps]
- **Feedback:** [What worked, what didn't]

### Patterns Observed
- [Observation 1]
- [Observation 2]

### Suggested Improvements
- [Improvement 1]
- [Improvement 2]
```

## Key Files Reference

**Repository Structure:**
```
~/.claude/skills/                    # Personal Skills
.claude/skills/                      # Project Skills (git-tracked)
```

## Success Metrics

**Skill Quality:**
- ✓ Addresses real recurring issue (3+ occurrences)
- ✓ 80%+ trigger rate on test prompts
- ✓ Accurate, actionable guidance
- ✓ Proper file references
- ✓ Progressive disclosure working

**Usage Metrics (after 1-2 weeks):**
- How many times was Skill triggered?
- Did it help prevent the problem?
- Any false positives?
- User feedback: helpful/not helpful?

**Team Adoption:**
- Do team members use the Skills?
- Has it reduced repeated mistakes?
- Are new Skills being requested?

## Debugging Skills That Don't Trigger

### Diagnosis Steps

**Step 1: Verify Skill Installed**
```bash
ls ~/.claude/skills/skill-name/SKILL.md         # Personal
ls .claude/skills/skill-name/SKILL.md          # Project
claude -p "What Skills are available?"         # Discovery test
```

**Step 2: Check Description Match**
- Does description include keywords from your prompt?
- Compare your prompt to description word-by-word

**Step 3: Test with Exact Description Keywords**
```bash
# If description says "queries API for data"
claude -p "Query API for data"  # Should trigger
```

**Step 4: Check for Skill Conflicts**
- Multiple Skills with similar descriptions?
- Check if a different Skill is triggering instead
- Review all Skill descriptions for overlap

### Common Trigger Failures

| Problem | Cause | Fix |
|---------|-------|-----|
| Skill never triggers | Description too vague | Add 5+ specific keywords matching common phrasings |
| Wrong Skill triggers | Overlapping descriptions | Narrow each description, make triggers distinct |
| Inconsistent triggering | Phrasing variations | Add synonyms for key terms |
| Triggers on wrong prompts | Description too broad | Add "Use when [specific scenarios]" constraints |

### Description Debugging Template

```markdown
Test Prompt: "[What user would actually say]"
Current Description: "[Current YAML description]"
Keyword Match Analysis:
- User said: ["word1", "word2", "word3"]
- Description has: ["term1", "term2", "term3"]
- Missing: ["word1", "word3"]
Solution: Add missing keywords to description
```

### Emergency Fix Pattern

If Skill not triggering in production:
1. Update description with missing keywords
2. Test with `claude -p` (3-4 test prompts)
3. Verify 80%+ trigger rate
4. Deploy updated Skill
5. Monitor for 24 hours
6. Document in validation log

## Token Budget Management

### Token Costs by Phase

| Phase | Activities | Token Cost | Cumulative |
|-------|-----------|-----------|-----------|
| Phase 1 | Research (web, docs, exploration) | ~20k | 20k |
| Phase 2 | Analysis (history mining, exploration) | ~20k | 40k |
| Phase 3 | Design (architecture, templates) | ~5k | 45k |
| Phase 4 | Implementation (writing Skills) | ~30k | 75k |
| Phase 5 | Testing (trigger validation) | ~10k | 85k |
| Phase 6 | Iteration (description updates) | ~5k | 90k |

**Total for 2 Skills**: ~90k tokens
**Estimated per Skill**: ~45k tokens (includes all overhead)

### Budget Strategy

**Conservative** (stay under 60%):
- Create 2 Skills per session
- Stop at Phase 5, defer iteration to new session

**Moderate** (60-80%):
- Create 2-3 Skills per session
- Complete all phases including iteration

**Aggressive** (80-95%):
- Create 3-4 Skills per session
- Risk hitting limits
- Only if Skills are similar (shared research)

### When to Split Session

**Defer to new session if:**
- Context > 60% and Phase 4 not started
- Context > 75% and Phase 5 not started
- Complex Skill requiring extensive templates
- Multiple Skills with different domains

**Session Split Pattern:**
- Session 1: Phases 1-3 (research, analysis, design)
- Session 2: Phases 4-6 (implementation, testing, iteration)

### Token Optimization Tips

1. **Brief subagent responses**: Add "keep response under 500 words" to prompts
2. **Lazy file reading**: Read only relevant sections, not entire files
3. **Template reuse**: Copy previous SKILL.md/REFERENCE.md, modify instead of writing from scratch
4. **Batch operations**: Test multiple Skills in one subagent call

## Anti-Patterns in Skills Creation

### Anti-Pattern 1: The Kitchen Sink Skill
❌ **Problem**: Skill tries to address 5+ different issues in one
- Result: 2000+ line SKILL.md, overwhelming, never triggers properly

✓ **Solution**: One Skill per capability
- Break into focused, single-purpose Skills
- Each < 600 lines SKILL.md
- Each has distinct triggers

### Anti-Pattern 2: The Generic Advice Skill
❌ **Problem**: Only provides generic guidance, no project-specific patterns
- Example: "Always check for errors" without showing HOW
- Result: Unhelpful, users already know general principles

✓ **Solution**: Concrete file references and real patterns
- Reference actual files from your project
- Show exact code examples
- Use real file paths and line numbers

### Anti-Pattern 3: The Undiscoverable Skill
❌ **Problem**: Description doesn't match how users phrase requests
- Result: 0% trigger rate, Skill never used

✓ **Solution**: Use natural language from actual problem sessions
- Mine conversation history for exact phrases users say
- Test with real prompts BEFORE building full Skill
- Add synonyms for key terms

### Anti-Pattern 4: The Novel Without Chapters
❌ **Problem**: Everything in SKILL.md, no progressive disclosure
- Result: Overwhelming, slow to navigate, burns tokens

✓ **Solution**: SKILL.md = TOC, REFERENCE.md = content
- SKILL.md: Overview + workflows (< 600 lines)
- REFERENCE.md: Tables + examples + code (800-1200 lines)

### Anti-Pattern 5: The Untested Description
❌ **Problem**: Write full Skill, then discover description doesn't trigger
- Result: 2-3 hours wasted, full rewrite needed

✓ **Solution**: Test description in Phase 3, before Phase 4
- Cost: 5 minutes testing vs 3 hours rework
- Test with `claude -p "[sample prompt]"`

### Anti-Pattern 6: The Stale File Reference
❌ **Problem**: References files that moved, renamed, or deleted
- Result: Confusing, misleading, breaks trust

✓ **Solution**: Verify file references before deployment
- Use `grep` to confirm code still exists
- Include function names, not just line numbers
- Re-verify references periodically

### Anti-Pattern 7: The Overlapping Skills
❌ **Problem**: Multiple Skills addressing same issue
- Result: Unclear which to use, redundant content

✓ **Solution**: Map issue coverage, consolidate if > 70% overlap
- Clarify boundaries between similar Skills
- Cross-reference related Skills
- Keep < 30% overlap between any two Skills

---

## Version History

### v2.0.0 (2025-11-28)
- Generalized from DeeDee-specific to universal skill-building methodology
- Removed project-specific references and examples
- Preserved all templates and reusable patterns

### v1.0.0 (Original)
- Initial reference guide for DeeDee skill creation
