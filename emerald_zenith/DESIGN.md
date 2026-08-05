---
name: Emerald Zenith
colors:
  surface: '#f7f9ff'
  surface-dim: '#d8dae0'
  surface-bright: '#f7f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3f9'
  surface-container: '#eceef4'
  surface-container-high: '#e6e8ee'
  surface-container-highest: '#e0e2e8'
  on-surface: '#181c20'
  on-surface-variant: '#3d4a3f'
  inverse-surface: '#2d3135'
  inverse-on-surface: '#eff1f7'
  outline: '#6d7b6e'
  outline-variant: '#bccabc'
  surface-tint: '#006d38'
  primary: '#006d38'
  on-primary: '#ffffff'
  primary-container: '#00a859'
  on-primary-container: '#003317'
  inverse-primary: '#59df89'
  secondary: '#216b45'
  on-secondary: '#ffffff'
  secondary-container: '#a8f3c3'
  on-secondary-container: '#28714b'
  tertiary: '#a93249'
  on-tertiary: '#ffffff'
  tertiary-container: '#ed657a'
  on-tertiary-container: '#5d001b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#77fca3'
  primary-fixed-dim: '#59df89'
  on-primary-fixed: '#00210d'
  on-primary-fixed-variant: '#005228'
  secondary-fixed: '#a8f3c3'
  secondary-fixed-dim: '#8dd6a8'
  on-secondary-fixed: '#002110'
  on-secondary-fixed-variant: '#005230'
  tertiary-fixed: '#ffdadc'
  tertiary-fixed-dim: '#ffb2b9'
  on-tertiary-fixed: '#400010'
  on-tertiary-fixed-variant: '#891833'
  background: '#f7f9ff'
  on-background: '#181c20'
  surface-variant: '#e0e2e8'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max-width: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

The design system is engineered for a high-net-worth audience, blending the rigor of financial consulting with the tranquility of wealth security. The brand personality is **Intellectual, Secure, and Visionary**, reflecting a deep understanding of the Vietnamese economic landscape.

### Visual Style: Corporate Glassmorphism
The aesthetic direction is a refined hybrid of **Corporate Modern** and **Glassmorphism**. It utilizes high-density whitespace and a structured grid to convey professional authority, while incorporating translucent, blurred layers (frosted glass) for data visualization and results. This creates a "breathable" interface that feels both substantial and technologically advanced. 

The artistic illustrations provided in the reference (Images 1-10) serve as "Atmospheric Anchors." They should be used as full-bleed background textures with low opacity or as large-scale section markers to provide a narrative journey—from the search for clarity (mountain/telescope) to the fruition of wealth (harvest/sunlight).

## Colors

The palette is anchored in shades of green that symbolize both growth and institutional stability.

*   **Emerald Prestige (#00A859):** The primary driver for action and branding.
*   **Forest Authority (#0A5C38):** Used for deep backgrounds, heavy typography, and elements requiring significant visual weight.
*   **Tropical Signal (#00CB6E):** A vibrant accent for positive trends, highlights, and secondary interactions.
*   **Platinum Mist (#E8EAF0):** The foundational canvas color, providing a premium alternative to pure white.
*   **Ivory Cloud (#F5F6FA):** The surface color for primary cards and content containers.

**Color Application:**
*   Use Emerald Prestige for primary buttons and active states.
*   Reserve Forest Authority for global navigation and header text to maintain a professional "anchor."
*   Maintain a high contrast ratio for readability, ensuring financial data is never obscured by the background palette.

## Typography

The system exclusively utilizes **Inter** to ensure maximum legibility for complex financial data across all devices. 

### Hierarchy & Usage
*   **Display & Headlines:** Use Semi-Bold (600) or Bold (700) weights with tighter letter spacing to create a commanding, editorial feel.
*   **Body Text:** Optimized for long-form consulting reports. Use the `body-lg` (18px) for executive summaries to reduce eye strain.
*   **Numerical Data:** Ensure tabular figures are used (monospaced numbers) for financial tables to allow for easy vertical alignment and comparison.
*   **Mobile Scaling:** Headlines scale down significantly to maintain a professional, non-aggressive appearance on smaller viewports.

## Layout & Spacing

The layout philosophy follows a **Fixed-Fluid Hybrid** model. Content is contained within a 1280px max-width grid on desktop to ensure readability for high-earners who often view data on large, high-resolution monitors.

### Grid & Rhythm
*   **Desktop:** 12-column grid with 24px gutters. Use generous 64px outside margins to frame the content as a "premium gallery."
*   **Tablet:** 8-column grid with 24px gutters.
*   **Mobile:** 4-column grid with 16px gutters and 20px margins.
*   **Vertical Rhythm:** All spacing increments must be multiples of 8px. Use 80px - 120px padding between major sections to maintain the "Peace" in the brand identity—avoiding cluttered, "cheap" layouts.

## Elevation & Depth

This design system uses a sophisticated layering technique to separate information types:

1.  **Base Layer:** Platinum Mist (#E8EAF0) background with low-opacity artistic illustrations (from the reference set) serving as atmospheric depth.
2.  **Surface Layer:** Ivory Cloud (#F5F6FA) cards with subtle, 1px borders in a slightly darker neutral shade. No heavy shadows; use a soft 12% opacity Forest Authority tint for ambient depth.
3.  **Glass Layer (Results & Insights):** For financial projections and "result cards," use a backdrop-blur (20px) with 70% opacity Ivory Cloud. This "Glassmorphism" effect signifies the clarity and modern insight provided by the tool.
4.  **Interactive Layer:** Active elements use a slight vertical lift (4px offset) and a localized glow using the Tropical Signal color (#00CB6E) to guide the user's eye.

## Shapes

The shape language is **Rounded**, reflecting a modern, approachable luxury. 

*   **Standard Cards:** 16px (1rem) corner radius.
*   **Buttons & Inputs:** 8px (0.5rem) corner radius to maintain a professional, structured edge.
*   **Feature Containers:** Large glassmorphic panels can use up to 24px (1.5rem) radius to feel like high-end hardware or premium stationary.
*   **Iconography:** Use line-based icons with slightly rounded caps and joins to match the typography's friendly but precise nature.

## Components

### Buttons
*   **Primary:** Emerald Prestige background, white text. No gradient, but a subtle inner-glow on hover.
*   **Secondary:** Ghost style with a 1.5px Forest Authority border and matching text.
*   **Tertiary:** Text-only with an underline that appears on hover, using Tropical Signal.

### Cards & Result Panels
Cards are the primary vehicle for consulting data. 
*   **Standard Card:** Ivory Cloud background, 1px border (#D1D5DB), 16px radius.
*   **Insight Panel:** Glassmorphic (70% opacity Ivory Cloud, 20px blur), Emerald Prestige left-accent border (4px width).

### Inputs & Selectors
*   **Fields:** Background should be white (#FFFFFF) to pop against the Platinum Mist page background. Use a 1px Forest Authority border on focus.
*   **Checkboxes/Radios:** Use Emerald Prestige for the selected state. Icons inside should be crisp and minimal.

### Data Visualization
*   Charts should utilize the primary green palette (Forest to Tropical) with a neutral grey for baseline data. 
*   Use the "Ivory Cloud" for tooltips with a backdrop-blur to ensure they stand out over complex charts.

### Logo Usage
The logo (extracted from Image 11) should be placed in the top-left of the navigation bar. On scroll, it may shrink in size, but must remain in the Emerald Prestige color to maintain brand authority.