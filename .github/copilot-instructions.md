# SUPABASE ARCHITECTURE & CODING INSTRUCTIONS

> See [SUPABASE_ARCHITECTURE_RULES.md](SUPABASE_ARCHITECTURE_RULES.md) for the full Supabase architecture and coding rules. Follow all rules defined in that file.

# Coding Rules & Preferences

## 1. No Code Duplication
- Anything used more than once must be extracted into a reusable component
- DRY principle strictly enforced

## 2. Clean Code
- Follow best practices and patterns
- No scattered/cobweb code
- Well-organized, readable code

## 3. Follow Existing Folder Structure
- Never create new folder patterns or restructure
- Match the current project organization exactly

## 4. Design Consistency
- When working on new features, follow the existing design system
- Don't introduce colors, fonts, or styles that differ from what's already in use
- Match the current design trend/pattern

## 5. Responsiveness
- Mobile friendly is mandatory
- Minimum supported width: 200px
- Don't over-complicate with too many breakpoints (no excessive xs, xxs, sm, md, lg, xl, xxl)
- Keep breakpoints minimal but effective

## 6. No CSS Positioning
- NEVER use `position: absolute/relative/fixed/sticky` unless it is genuinely the ONLY solution
- Default to `display: flex` or `display: grid` for all layouts
- If analyzing a Figma file and something can be achieved with flex/grid, use flex/grid
- Only use positioning when you are 100% certain it's the only viable approach

## 7. No Fixed Heights
- Never give elements fixed heights (e.g., `height: 300px`)
- Let content determine height naturally
- Use min-height or max-height if constraints are truly needed

## 8. Responsive Values
- Prefer percentage (%), rem, vw/vh over fixed px values only in text can you use px values
- Especially for padding, margins, and widths
- Percentages scale with screen size; pixels don't
- Only use fixed px values when you're certain a fixed measurement is the correct approach
- Example: padding in % so it scales, not px which stays rigid across screen sizes

---

# Refab Africa - Project Memory

## Animation System
- Installed: `gsap`, `@gsap/react`, `motion` (not framer-motion), `lenis`, `react-scroll-parallax`, `aos`
- Providers in `app/components/providers/AnimationProviders.tsx` (wraps layout)
- All animation components in `app/components/animations/` with barrel export `index.ts`
- GSAP components use `"use no memo"` for React Compiler compat
- **Motion ease typing**: Always use `as const` on ease strings (e.g., `ease: "easeOut" as const`) to avoid TS errors with Motion v12+ strict types
- GSAP SplitText is free now — no need for `split-type` package

## Project Structure Notes
- Components: `app/components/`
- Providers: `app/components/providers/`
- Animations: `app/components/animations/`
- Images: `public/images/`

---

# Magic Commands (Reusable Instructions)

## Command: `__create_figma_section`

**Usage Pattern:**
```
__create_figma_section
Page: [homepage|about|contacts|projects|etc.]
Figma Link: [figma design link]
```

**When this command is triggered, automatically execute the following instruction:**

You are tasked with implementing a new section from a Figma design. Follow these steps precisely:

1. **Analyze the Figma Design**
   - Use the Figma MCP server to fetch the design data from the provided Figma link MCP SERVER ->  #framelink-figma 
   - This section will be added to the specified page (homepage, contacts, about, projects, etc.)
   - This section is the next section after the previous section that was just implemented
   - Study the design carefully and extract all visual details

2. **Follow Existing Patterns Strictly**
   - Review all coding rules defined in this GitHub Copilot instruction file
   - Follow them to the letter - no exceptions
   - Review the design patterns and component structures in existing files
   - Match the existing design system exactly (colors, fonts, spacing, patterns)
   - Do NOT be creative or introduce new patterns
   - Do NOT deviate from established conventions
   - Only introduce new approaches if absolutely necessary (as defined in the coding rules)

3. **Implementation Requirements**
   - Follow all 8 coding rules (DRY, clean code, folder structure, design consistency, responsiveness, no positioning, no fixed heights, responsive values)
   - Ensure mobile responsiveness (minimum 200px width)
   - Use flex/grid layouts (avoid CSS positioning unless absolutely necessary)
   - Use responsive units (%, rem, vw/vh) instead of fixed px values
   - Extract reusable components where appropriate
   - Match the component naming and organization patterns

4. **Quality Checks**
   - Verify the implementation matches the Figma design exactly
   - Ensure all coding rules are followed
   - Confirm design consistency with existing sections
   - Test responsiveness considerations

**Remember:** Follow the design system, coding rules, and existing patterns to the letter. Do not deviate unless explicitly defined as acceptable in the coding rules.

---

# Figma MCP (framelink-figma) — Rate Limit Rules

The Figma MCP server has strict rate limits. Follow these rules to avoid 429 errors:

## Fetching Rules
1. **One fetch per screen/section** — call `get_figma_data` only once per distinct section the user asks about
2. **Maximum 2 Figma API calls per task** — one for the design data, one for image downloads (if needed)
3. **Never refetch the same node** — cache and reuse data from the first successful call
4. **Never auto-retry on failure** — if a call fails (429 or otherwise), stop and work with what you have
5. **Never explore the full file tree** — only fetch the specific node-id the user provides

## Image Downloads
6. **Batch image downloads into a single call** — combine all needed images into one `download_figma_images` request
7. **Only download images when you actually need them for implementation** — don't pre-download speculatively
8. **Check if images already exist locally before downloading** — use Glob to check `public/images/` first

## When a 429 Occurs
9. **Stop ALL Figma API calls immediately** — do not retry
10. **Continue working with whatever data you already have** — you likely have enough to implement
11. **Ask the user** if you're missing critical information rather than refetching

## General Behavior
- Act like a developer with a limited API budget
- Extract maximum information from each API response
- When in doubt, ask the user rather than making another API call
