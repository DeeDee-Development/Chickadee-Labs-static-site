---
name: building-skills
description: Creates Claude Code Skills using a structured 6-phase workflow. Use when building skills, writing SKILL.md, designing skill architecture, or testing skill triggers. DO NOT use for general Claude Code docs or one-off tasks.
---

# Building Claude Code Skills

## Overview

This Skill captures the complete methodology for creating high-impact Claude Code Skills that address real problems in your development workflow. It combines research, analysis, design, implementation, testing, and iteration into a structured 6-phase workflow.

**Philosophy**: Skills prevent problems before they happen by packaging expertise, patterns, and architectural knowledge into reusable, discoverable capabilities.

## When to Create Skills

Create a new Skill when you identify:

✓ **Recurring issue pattern** - Same problem appears in 3+ sessions/conversations
✓ **Clear solution** - You know the right way to do it
✓ **Reusable knowledge** - Applies to similar future tasks
✓ **Documentation exists** - Can reference or create reference material
✓ **Testable outcome** - Can validate with example prompts

Don't create Skills for:

✗ One-off problems (too narrow)
✗ Exploratory/research tasks (use subagents instead)
✗ Vague or undefined issues
✗ Temporary workarounds
✗ Personal preferences (too subjective)

## The 6-Phase Workflow

Copy this checklist:

```
Skills Creation:
- [ ] Phase 1: Research problem space
- [ ] Phase 2: Analyze codebase patterns
- [ ] Phase 3: Design Skill architecture
- [ ] Phase 4: Implement SKILL.md + REFERENCE.md
- [ ] Phase 5: Test triggering and content
- [ ] Phase 6: Refine based on validation
```

### Phase 1: Research Problem Space

**Duration:** 1-2 hours

**Objective:** Understand what you need to teach Claude about this problem

**Steps:**
1. Identify recurring issue pattern
   - Review conversation history for repeated problems
   - Search for problem indicators ("I apologize", "didn't work", etc.)
   - Find sessions with repeated patterns

2. Research official documentation
   - Launch research subagent with WebSearch
   - Gather 5-7 different search angles
   - Compile comprehensive findings report
   - See REFERENCE.md: Research Subagent Template

3. Explore local examples (if applicable)
   - Launch Explore subagent to examine codebase
   - Look for existing patterns, implementations, best practices
   - Document file references and architecture
   - See REFERENCE.md: Explore Subagent Template

4. Document findings
   - Create research notes in your project docs
   - Include: problem description, root causes, solutions, file references

### Phase 2: Analyze Codebase Patterns

**Duration:** 1-2 hours

**Objective:** Understand HOW the problem manifests in your code

**Steps:**
1. Run targeted codebase explorations
   - Use Explore subagent (medium thoroughness)
   - Look for hotspots, common mistakes, established patterns
   - Focus on: file structure, interfaces, decision points
   - See REFERENCE.md: Exploration Patterns

2. Identify root causes
   - Why do developers make this mistake?
   - What's missing from current approach?
   - What architectural truth is misunderstood?

3. Extract actionable patterns
   - What patterns prevent the problem?
   - What's the "right way" vs "wrong way"?
   - Can it be tested/validated?

4. Map issue coverage
   - Which issue categories does this Skill address?
   - Are there overlaps with existing Skills?
   - What gaps remain?

### Phase 3: Design Skill Architecture

**Duration:** 30-60 minutes

**Objective:** Plan SKILL.md structure and REFERENCE.md organization

**Steps:**
1. Define Skill scope
   - One clear capability per Skill
   - 3-5 core concepts maximum
   - Explicit boundaries (what's in, what's out)

2. Write description (critical!) and TEST it
   - Explain WHAT it does AND WHEN to use it
   - Include specific trigger keywords
   - Third-person POV, under 1,024 characters (optimal: 150-250)
   - Structure: WHAT + HOW (distinguishing features) + WHEN (use cases)
   - Example: "Implements efficient API query patterns using async/await. Use when fetching data, handling pagination, or debugging API errors."
   - **CRITICAL**: Test description with 3-4 example prompts BEFORE Phase 4
   - Ask: "Would this description trigger on [example prompt]?"
   - Adjust keywords if trigger rate < 80%
   - **Lesson**: Testing description early saves hours of rework

3. Plan SKILL.md content
   - Concise overview (1 paragraph)
   - Core capabilities (bulleted)
   - Input requirements
   - Output format
   - Example usage (3-4 prompts)
   - Brief workflow if multi-step
   - Progressive disclosure: point to REFERENCE.md for details

4. Plan REFERENCE.md organization
   - Quick reference tables (thresholds, patterns)
   - Decision trees (if/then logic)
   - Code examples or templates
   - Common mistakes
   - File references from codebase
   - Checklists for workflows

5. Identify resources to bundle
   - Existing documentation to reference
   - Scripts to include
   - Templates to provide
   - Examples to show

### Phase 4: Implement SKILL.md + REFERENCE.md

**Duration:** 2-3 hours

**Objective:** Write the Skill files

**Steps:**
1. Create directory structure
   ```bash
   .claude/skills/skill-name/
   ├── SKILL.md
   └── REFERENCE.md
   ```

2. Write SKILL.md
   - YAML frontmatter (name, description)
   - Overview section
   - Capabilities listed
   - Example usage prompts (real scenarios)
   - Workflow checklist (if applicable)
   - Reference sections pointing to REFERENCE.md
   - Target: 400-600 lines (concise)
   - See REFERENCE.md: SKILL.md Template

3. Write REFERENCE.md
   - Quick lookup tables
   - Decision trees (ASCII diagrams)
   - Code examples
   - Common mistakes + solutions
   - File references (with paths)
   - Checklists
   - Target: 800-1200 lines (comprehensive)
   - See REFERENCE.md: REFERENCE.md Template

4. Follow conventions
   - No trailing whitespace
   - Unix-style paths (forward slashes)
   - Third-person descriptions
   - Progressive disclosure: SKILL.md points to REFERENCE.md
   - File references over full content copying

### Phase 5: Test Triggering and Content

**Duration:** 1-2 hours

**Objective:** Verify Skill works as expected

**Steps:**
1. Test Discovery
   ```bash
   claude -p "What Skills are available?"
   ```
   - Verify Skill appears in list
   - Check description looks good

2. Test Triggering
   - Run 3-5 prompts that SHOULD trigger the Skill
   - Look for Skill-specific content in responses
   - If not triggering: description keywords may need adjustment
   - See REFERENCE.md: Test Prompts by Skill Type

3. Test Content Quality
   - Is guidance accurate?
   - Are examples helpful?
   - Are file references correct?
   - Is progressive disclosure working?

4. Iterate on description if needed
   - Add missing trigger keywords
   - Broaden "when to use" section
   - Re-test with updated description
   - Target: 100% trigger rate on test prompts

5. Document findings
   - Record test results, any issues found
   - Note improvements made

### Phase 6: Refine Based on Validation

**Duration:** Ongoing (1-2 weeks)

**Objective:** Improve based on real usage

**Steps:**
1. Deploy and monitor
   - Use Skill naturally in development
   - Keep notes on what works and what doesn't
   - Collect feedback from team members

2. Monitor trigger rate
   - Does Skill trigger when expected?
   - Any false positives (triggered incorrectly)?
   - Any false negatives (should have triggered but didn't)?

3. Gather usage feedback
   - Was guidance helpful?
   - Missing any patterns?
   - Any inaccuracies?
   - What could be clearer?

4. Iterate
   - Update descriptions for better discovery
   - Add missing examples or patterns
   - Fix any incorrect guidance
   - Clarify confusing sections

5. Plan follow-up Skills
   - What patterns emerged in usage?
   - What related problems appeared?
   - Opportunities for new Skills?

## Skill Location Decisions

**Personal Skills** (`~/.claude/skills/`)
- Use for: General development patterns, tool usage, cross-project skills
- Share method: Copy to other machines manually or via script
- Examples: "Using Claude Code Tools", "Safe Refactoring Patterns"

**Project Skills** (`.claude/skills/`)
- Use for: Project-specific patterns, architecture, business logic
- Share method: Git-tracked, automatic for team
- Examples: "Project API Patterns", "Component Architecture"

**Decision:** If applies only to this project → Project Skill. If reusable across projects → Personal Skill.

## Quality Checklist

Before declaring a Skill complete:

**Content Quality:**
- [ ] Description includes what + when to use
- [ ] Examples are realistic and relevant
- [ ] File references are accurate (use find/grep to verify)
- [ ] Progressive disclosure working (SKILL.md → REFERENCE.md)
- [ ] No trailing whitespace
- [ ] Workflows have clear steps with checkboxes

**Trigger Quality:**
- [ ] Skill triggers on 80%+ of relevant prompts
- [ ] No false positives (wrong Skill triggering)
- [ ] Description has 5+ distinct trigger keywords
- [ ] Tested with 3-5 example prompts

**Pattern Quality:**
- [ ] Addresses real recurring issue (3+ occurrences)
- [ ] Solutions are practical and tested
- [ ] Architectural truth documented (if applicable)
- [ ] Anti-patterns explained
- [ ] File structure matches reality

## Common Pitfalls (Lessons Learned)

**Critical mistakes to avoid:**

### 1. Building Before Testing Description
✗ **Mistake**: Created full Skills (400-600 lines each), then discovered descriptions didn't trigger
✓ **Fix**: Test description with example prompts in Phase 3, before Phase 4
**Cost**: 2-3 hours of rework vs 5 minutes of testing

### 2. Ignoring Token Budget
✗ **Mistake**: Didn't track context usage, hit token limits near end
✓ **Fix**: Monitor tokens after each phase, defer to new session if > 60%
**Phase costs**: Research (20k), Analysis (20k), Design (5k), Implementation (30k), Testing (10k)

### 3. Personal vs Project Decision Too Late
✗ **Mistake**: Decided location in Phase 4 (implementation), had to move files
✓ **Fix**: Make location decision in Phase 3 (design)
**Criteria**: Project-only → `.claude/skills/`, reusable → `~/.claude/skills/`

### 4. Not Checking for Skill Overlap
✗ **Mistake**: Created Skills with overlapping concerns
✓ **Fix**: Map issue coverage in Phase 3, consolidate if > 50% overlap

### 5. Vague "When to Use" Guidance
✗ **Mistake**: Description said "Use when working with code" (too broad)
✓ **Fix**: Include 3-5 specific scenarios with exact terminology
**Pattern**: "Use when [scenario 1], [scenario 2], or [scenario 3]"

### 6. Forgetting Progressive Disclosure
✗ **Mistake**: Put all content in SKILL.md (800+ lines), overwhelming
✓ **Fix**: SKILL.md = overview + workflows, REFERENCE.md = details + tables
**Target**: SKILL.md < 500 lines (optimal), REFERENCE.md = comprehensive
**Token efficiency**: Skills load SKILL.md first, reference files only when needed

### 7. No Real-World File References
✗ **Mistake**: Generic advice like "check your configuration"
✓ **Fix**: Specific file paths: "See src/config/settings.ts:45"
**Impact**: Concrete references = 3x more useful

## Managing Existing Skills

### Updating Skills

**When to update:**
- New patterns discovered in usage
- Description triggers inadequately
- Missing examples or edge cases
- Incorrect/outdated guidance
- Team feedback suggests improvements

**Update process:**
1. Document the issue
2. Update SKILL.md or REFERENCE.md
3. Re-test triggering if description changed
4. Commit changes (if project Skill)
5. Notify team (if project Skill)

### Skill Optimization Best Practices

**From research on 18+ skills:**

**Description optimization:**
- **Formula**: WHAT (capability) + HOW (distinguishing features) + WHEN (use cases)
- **Character limit**: 1,024 max (optimal: 150-250 for clarity)
- **Third person voice**: "Implements...", "Provides...", not "Implement", "Provide"
- **Keyword density**: 5-10 distinct trigger phrases, avoid repetition
- **Test activation**: Verify 80%+ trigger rate with real-world phrases

**Structure optimization:**
- **Line count targets**: SKILL.md < 500 lines, mandatory refactor at 700+ lines
- **Progressive disclosure**: Extract to REFERENCE.md, EXAMPLES.md, PATTERNS.md as needed
- **1-level depth max**: SKILL.md → reference files, not deeper nesting
- **Token efficiency**: Main skill loads first, reference files on-demand only

**Co-activation patterns:**
- Document which skills should activate together
- Helps Claude orchestrate multi-skill workflows

### Versioning Skills

**Approach:** Document versions in SKILL.md content (at end of file)
```markdown
## Version History
### v1.1.0 (2025-11-09)
- Optimized description (834 → 499 chars)
- Fixed character limit guidance (200 → 1024)
### v1.0.0 (2025-XX-XX)
- Initial creation
```

**Not in frontmatter** - Claude Code doesn't support version field in YAML

### Deprecating/Archiving Skills

**When to deprecate:**
- Problem no longer occurs (pattern fixed in codebase)
- Superseded by better Skill
- Architecture changed (obsolete)

**Archive process:**
1. Move to `.claude/skills/archived/`
2. Update SKILL.md with deprecation notice
3. Document replacement Skill (if any)
4. Keep for historical reference

### Handling Overlapping Skills

**If 2 Skills overlap:**
1. Measure overlap: Do they address same issues? Same triggers?
2. If > 70% overlap: Consolidate into single Skill
3. If 30-70% overlap: Clarify boundaries, update descriptions
4. If < 30% overlap: Keep separate, cross-reference

## Automation Patterns

This Skill enables you to automate future Skill creation:

**Quick start:** Launch research subagent → analyze findings → design Skill → create files → test

**Re-usable prompts:** See REFERENCE.md for copy-paste subagent prompts

**Templates:** See REFERENCE.md for SKILL.md and REFERENCE.md templates

**Testing:** Run validation subagent with trigger test prompts

**Iteration:** Update descriptions, re-test, deploy

## Related Skills

When building skills, these complementary skills may be useful:

- **skill-creator**: Official Anthropic skill creation methodology (install via plugin)

## Next Steps

1. Identify next recurring issue from your development workflow
2. Follow Phase 1-2 to research and analyze
3. Use REFERENCE.md templates for Phases 3-4
4. Run testing subagent for Phase 5
5. Deploy and iterate (Phase 6)

See REFERENCE.md for detailed templates, decision trees, and copy-paste prompts for all phases.

---

## Version History

### v2.0.0 (2025-11-28)
- **Generalized** from DeeDee-specific to universal skill-building methodology
- Removed all project-specific references (HealthKit, Swift, iOS, etc.)
- Updated examples to be technology-agnostic
- Renamed from `building-deedee-skills` to `building-skills`
- Preserved core 6-phase workflow methodology

### v1.1.0 (2025-11-09)
- Optimized description for better discovery and clarity
- Added "Skill Optimization Best Practices" section
- Added "Related Skills" cross-references

### v1.0.0 (Original)
- Initial skill implementation with 6-phase workflow
