---
name: taptap-elements
description: This skill should be used when creating or editing UI components in the Taptap/Promptos Gatsby project. It provides guidance on reusing text style components from the elements folder for consistent typography and styling across all pages.
---

# Taptap Elements Style Guide

## Purpose

This skill ensures consistent text styling and typography across the Taptap/Promptos Gatsby application by mandating reuse of pre-built text components from the `src/elements/` folder. All text-based UI components should use elements from this folder rather than creating inline styled elements.

## When to Use This Skill

Use this skill when:
- Creating new pages or components that display text content
- Modifying existing pages to add or update text elements
- Reviewing code for styling consistency
- Implementing new text-based UI components

## Available Elements Components

The `src/elements/` folder contains the following reusable text components:

### Headings
- **H1.tsx**: Extra large, bold heading (text-4xl md:text-5xl lg:text-6xl) with dark mode support
- **H2.tsx**: Large bold heading (text-4xl) with dark mode support
- **H3.tsx**: Medium heading for section subtitles

### Body Text
- **P.tsx**: Standard paragraph (text-lg lg:text-xl) with proper spacing and dark mode support
- **P1.tsx**: Alternative paragraph style variant

### Lists
- **OL.tsx**: Ordered list with proper indentation and spacing
- **OL1.tsx**: Alternative ordered list style variant
- **UL.tsx**: Unordered list with proper indentation and spacing
- **UL1.tsx**: Alternative unordered list style variant

### Emphasis
- **STRONG.tsx**: Bold text for emphasis with dark mode support

## Usage Guidelines

### Import Elements

Always import text components from the elements folder:

```tsx
import H1 from "../elements/H1";
import H2 from "../elements/H2";
import H3 from "../elements/H3";
import P from "../elements/P";
import STRONG from "../elements/STRONG";
import OL from "../elements/OL";
import UL from "../elements/UL";
```

### Replace Inline Styled Elements

**DO NOT** create inline styled text elements:

```tsx
// ❌ AVOID
<h1 className="text-4xl font-bold">Title</h1>
<p className="text-lg text-gray-500">Paragraph text</p>
<strong className="font-bold">Emphasis</strong>
```

**DO** use elements components:

```tsx
// ✅ CORRECT
<H1>Title</H1>
<P>Paragraph text</P>
<STRONG>Emphasis</STRONG>
```

### Component Composition

Elements components can be nested and composed together:

```tsx
<H2>Section Title</H2>
<P>
  This is a paragraph with <STRONG>emphasized text</STRONG> inside it.
</P>
<P>
  <OL>First item</OL>
  <OL>Second item</OL>
  <OL>Third item</OL>
</P>
```

## Styling System

All elements components use Tailwind CSS with a consistent design system:
- Dark mode support via `dark:` classes
- Consistent spacing (margins, padding)
- Responsive breakpoints (md:, lg:)
- Color palette: gray-900, gray-500, gray-400, etc.
- Font weights: font-extrabold, font-bold, font-normal

## Code Review Checklist

When reviewing or creating text-based components, verify:

1. [ ] Are all headings (h1, h2, h3) replaced with H1, H2, or H3 from elements?
2. [ ] Are all paragraphs using P or P1 from elements?
3. [ ] Is emphasized text using STRONG from elements?
4. [ ] Are ordered/unordered lists using OL/OL1 or UL/UL1 from elements?
5. [ ] Are there no inline className-based text styles for typography?
6. [ ] Are all text components properly imported from the elements folder?
7. [ ] Does the component maintain dark mode compatibility?

## Creating New Elements

If a new text style is needed that doesn't exist in the elements folder:
1. Create a new component in `src/elements/` following the existing pattern
2. Use Tailwind CSS classes consistent with existing elements
3. Include dark mode support (`dark:text-gray-100`, etc.)
4. Follow the naming convention: UPPERCASE for semantic elements (P, H1, STRONG)
5. Export as default function with PropsWithChildren type

## Examples

### Example 1: About Page Structure

```tsx
import H2 from "../elements/H2";
import P from "../elements/P";
import OL from "../elements/OL";
import STRONG from "../elements/STRONG";

const AboutPage = () => {
  return (
    <PageLayout>
      <PageContainer>
        <H2>Promptos: Transform Your Photos with AI</H2>
        <P><STRONG>AI Photo Editor – Edit, Create, and Share with Prompts!</STRONG></P>
        <P>Bring your photos to life with the power of AI!</P>
        <P><STRONG>Features You'll Love:</STRONG></P>
        <P>
          <OL>AI-powered editing</OL>
          <OL>Prompt-based creativity</OL>
          <OL>Artistic styles and effects</OL>
        </P>
      </PageContainer>
    </PageLayout>
  );
};
```

### Example 2: Tutorial Page with Steps

```tsx
import H2 from "../elements/H2";
import H3 from "../elements/H3";
import P from "../elements/P";
import STRONG from "../elements/STRONG";

const TutorialPage = () => {
  return (
    <div>
      <H2>QR Code Tutorial</H2>
      <div className="step-container">
        <H3>Install the App</H3>
        <P>If you haven't installed Promptos yet, download it from your preferred app store.</P>
      </div>
      <div className="tip-box">
        <P><STRONG>Pro Tip:</STRONG> Make sure you have the Promptos app installed.</P>
      </div>
    </div>
  );
};
```

## Exception Cases

Direct use of className for text styling is acceptable only when:
1. Creating non-typographic UI elements (buttons, cards, containers)
2. Implementing interactive elements (hover states, animations)
3. Styling layout containers (flex, grid, spacing)
4. Working with third-party components that require inline styles

Typography-specific classes (text-*, font-*, leading-*, tracking-*) should always use elements components.
