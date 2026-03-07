# Tailwind CSS to Pure CSS Reference Guide

This document maps all Tailwind CSS utilities used in this portfolio to their pure CSS equivalents. Use this as a learning resource to understand how Tailwind abstracts CSS.

---

## Table of Contents
1. [Design System (CSS Variables)](#1-design-system-css-variables)
2. [Layout & Display](#2-layout--display)
3. [Flexbox](#3-flexbox)
4. [Grid](#4-grid)
5. [Spacing (Margin & Padding)](#5-spacing-margin--padding)
6. [Sizing (Width & Height)](#6-sizing-width--height)
7. [Typography](#7-typography)
8. [Colors](#8-colors)
9. [Backgrounds](#9-backgrounds)
10. [Borders](#10-borders)
11. [Effects (Shadows, Blur, Opacity)](#11-effects-shadows-blur-opacity)
12. [Transforms](#12-transforms)
13. [Transitions & Animations](#13-transitions--animations)
14. [Responsive Design](#14-responsive-design)
15. [Pseudo-classes & States](#15-pseudo-classes--states)
16. [Custom Components](#16-custom-components)

---

## 1. Design System (CSS Variables)

Tailwind uses CSS custom properties (variables) under the hood. Here's how your theme is defined:

### Color Variables (HSL Format)

```css
:root {
  /* Background & Foreground */
  --background: 222 47% 6%;           /* Deep dark blue - main background */
  --foreground: 210 40% 98%;          /* Almost white - main text */
  
  /* Card Surfaces */
  --card: 222 47% 8%;                 /* Slightly lighter than background */
  --card-foreground: 210 40% 98%;     /* Text on cards */
  
  /* Primary Brand Color (Cyan) */
  --primary: 180 100% 50%;            /* Bright cyan */
  --primary-foreground: 222 47% 6%;   /* Dark text on primary */
  
  /* Secondary Brand Color (Purple) */
  --secondary: 270 100% 65%;          /* Vibrant purple */
  --secondary-foreground: 210 40% 98%;
  
  /* Muted/Subtle Elements */
  --muted: 222 30% 15%;               /* Muted background */
  --muted-foreground: 215 20% 65%;    /* Muted text (gray) */
  
  /* Accent (same as primary) */
  --accent: 180 100% 50%;
  --accent-foreground: 222 47% 6%;
  
  /* Destructive/Error */
  --destructive: 0 84% 60%;           /* Red */
  --destructive-foreground: 210 40% 98%;
  
  /* Borders & Inputs */
  --border: 222 30% 18%;              /* Subtle border color */
  --input: 222 30% 18%;
  --ring: 180 100% 50%;               /* Focus ring color */
  
  /* Border Radius */
  --radius: 0.75rem;                  /* 12px default radius */
}
```

### Using HSL Variables in CSS

```css
/* Tailwind: bg-background */
.pure-css-equivalent {
  background-color: hsl(var(--background));
}

/* Tailwind: text-foreground */
.pure-css-equivalent {
  color: hsl(var(--foreground));
}

/* Tailwind: bg-primary/20 (20% opacity) */
.pure-css-equivalent {
  background-color: hsl(var(--primary) / 0.2);
}
```

---

## 2. Layout & Display

| Tailwind Class | Pure CSS |
|----------------|----------|
| `block` | `display: block;` |
| `inline-block` | `display: inline-block;` |
| `inline` | `display: inline;` |
| `flex` | `display: flex;` |
| `inline-flex` | `display: inline-flex;` |
| `grid` | `display: grid;` |
| `hidden` | `display: none;` |
| `relative` | `position: relative;` |
| `absolute` | `position: absolute;` |
| `fixed` | `position: fixed;` |
| `sticky` | `position: sticky;` |
| `inset-0` | `top: 0; right: 0; bottom: 0; left: 0;` |
| `top-0` | `top: 0;` |
| `left-0` | `left: 0;` |
| `right-0` | `right: 0;` |
| `bottom-0` | `bottom: 0;` |
| `z-10` | `z-index: 10;` |
| `z-50` | `z-index: 50;` |
| `overflow-hidden` | `overflow: hidden;` |
| `overflow-auto` | `overflow: auto;` |

---

## 3. Flexbox

| Tailwind Class | Pure CSS |
|----------------|----------|
| `flex` | `display: flex;` |
| `flex-col` | `flex-direction: column;` |
| `flex-row` | `flex-direction: row;` |
| `flex-wrap` | `flex-wrap: wrap;` |
| `flex-nowrap` | `flex-wrap: nowrap;` |
| `items-center` | `align-items: center;` |
| `items-start` | `align-items: flex-start;` |
| `items-end` | `align-items: flex-end;` |
| `justify-center` | `justify-content: center;` |
| `justify-between` | `justify-content: space-between;` |
| `justify-start` | `justify-content: flex-start;` |
| `justify-end` | `justify-content: flex-end;` |
| `gap-2` | `gap: 0.5rem; /* 8px */` |
| `gap-4` | `gap: 1rem; /* 16px */` |
| `gap-6` | `gap: 1.5rem; /* 24px */` |
| `gap-8` | `gap: 2rem; /* 32px */` |
| `flex-1` | `flex: 1 1 0%;` |
| `flex-shrink-0` | `flex-shrink: 0;` |
| `flex-grow` | `flex-grow: 1;` |

### Example: Centered Flex Container

```css
/* Tailwind: flex items-center justify-center gap-4 */
.centered-flex {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
```

---

## 4. Grid

| Tailwind Class | Pure CSS |
|----------------|----------|
| `grid` | `display: grid;` |
| `grid-cols-1` | `grid-template-columns: repeat(1, minmax(0, 1fr));` |
| `grid-cols-2` | `grid-template-columns: repeat(2, minmax(0, 1fr));` |
| `grid-cols-3` | `grid-template-columns: repeat(3, minmax(0, 1fr));` |
| `col-span-2` | `grid-column: span 2 / span 2;` |
| `row-span-2` | `grid-row: span 2 / span 2;` |

### Example: Responsive Grid

```css
/* Tailwind: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 */
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 2rem;
}

@media (min-width: 768px) {
  .responsive-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .responsive-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
```

---

## 5. Spacing (Margin & Padding)

Tailwind uses a spacing scale based on `0.25rem` (4px) increments.

### Spacing Scale

| Unit | Value | Pixels |
|------|-------|--------|
| `0` | `0` | 0px |
| `1` | `0.25rem` | 4px |
| `2` | `0.5rem` | 8px |
| `3` | `0.75rem` | 12px |
| `4` | `1rem` | 16px |
| `5` | `1.25rem` | 20px |
| `6` | `1.5rem` | 24px |
| `8` | `2rem` | 32px |
| `10` | `2.5rem` | 40px |
| `12` | `3rem` | 48px |
| `16` | `4rem` | 64px |
| `20` | `5rem` | 80px |
| `24` | `6rem` | 96px |
| `32` | `8rem` | 128px |

### Padding Examples

| Tailwind Class | Pure CSS |
|----------------|----------|
| `p-4` | `padding: 1rem;` |
| `px-4` | `padding-left: 1rem; padding-right: 1rem;` |
| `py-4` | `padding-top: 1rem; padding-bottom: 1rem;` |
| `pt-4` | `padding-top: 1rem;` |
| `pb-4` | `padding-bottom: 1rem;` |
| `pl-4` | `padding-left: 1rem;` |
| `pr-4` | `padding-right: 1rem;` |

### Margin Examples

| Tailwind Class | Pure CSS |
|----------------|----------|
| `m-4` | `margin: 1rem;` |
| `mx-auto` | `margin-left: auto; margin-right: auto;` |
| `my-4` | `margin-top: 1rem; margin-bottom: 1rem;` |
| `mt-4` | `margin-top: 1rem;` |
| `mb-4` | `margin-bottom: 1rem;` |
| `-mt-4` | `margin-top: -1rem;` (negative margin) |

---

## 6. Sizing (Width & Height)

### Width

| Tailwind Class | Pure CSS |
|----------------|----------|
| `w-full` | `width: 100%;` |
| `w-auto` | `width: auto;` |
| `w-screen` | `width: 100vw;` |
| `w-1/2` | `width: 50%;` |
| `w-1/3` | `width: 33.333333%;` |
| `w-2/3` | `width: 66.666667%;` |
| `w-4` | `width: 1rem;` |
| `w-8` | `width: 2rem;` |
| `w-12` | `width: 3rem;` |
| `w-16` | `width: 4rem;` |
| `w-96` | `width: 24rem;` |
| `max-w-7xl` | `max-width: 80rem; /* 1280px */` |
| `max-w-2xl` | `max-width: 42rem; /* 672px */` |
| `min-w-0` | `min-width: 0;` |

### Height

| Tailwind Class | Pure CSS |
|----------------|----------|
| `h-full` | `height: 100%;` |
| `h-screen` | `height: 100vh;` |
| `min-h-screen` | `min-height: 100vh;` |
| `h-48` | `height: 12rem; /* 192px */` |
| `h-2` | `height: 0.5rem; /* 8px */` |
| `h-0.5` | `height: 0.125rem; /* 2px */` |

---

## 7. Typography

### Font Size

| Tailwind Class | Pure CSS |
|----------------|----------|
| `text-xs` | `font-size: 0.75rem; line-height: 1rem;` |
| `text-sm` | `font-size: 0.875rem; line-height: 1.25rem;` |
| `text-base` | `font-size: 1rem; line-height: 1.5rem;` |
| `text-lg` | `font-size: 1.125rem; line-height: 1.75rem;` |
| `text-xl` | `font-size: 1.25rem; line-height: 1.75rem;` |
| `text-2xl` | `font-size: 1.5rem; line-height: 2rem;` |
| `text-3xl` | `font-size: 1.875rem; line-height: 2.25rem;` |
| `text-4xl` | `font-size: 2.25rem; line-height: 2.5rem;` |
| `text-5xl` | `font-size: 3rem; line-height: 1;` |
| `text-6xl` | `font-size: 3.75rem; line-height: 1;` |
| `text-7xl` | `font-size: 4.5rem; line-height: 1;` |

### Font Weight

| Tailwind Class | Pure CSS |
|----------------|----------|
| `font-thin` | `font-weight: 100;` |
| `font-light` | `font-weight: 300;` |
| `font-normal` | `font-weight: 400;` |
| `font-medium` | `font-weight: 500;` |
| `font-semibold` | `font-weight: 600;` |
| `font-bold` | `font-weight: 700;` |
| `font-extrabold` | `font-weight: 800;` |

### Text Alignment

| Tailwind Class | Pure CSS |
|----------------|----------|
| `text-left` | `text-align: left;` |
| `text-center` | `text-align: center;` |
| `text-right` | `text-align: right;` |

### Other Typography

| Tailwind Class | Pure CSS |
|----------------|----------|
| `uppercase` | `text-transform: uppercase;` |
| `lowercase` | `text-transform: lowercase;` |
| `capitalize` | `text-transform: capitalize;` |
| `tracking-widest` | `letter-spacing: 0.1em;` |
| `tracking-wide` | `letter-spacing: 0.025em;` |
| `leading-tight` | `line-height: 1.25;` |
| `leading-relaxed` | `line-height: 1.625;` |
| `line-clamp-2` | `display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;` |
| `antialiased` | `-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;` |

---

## 8. Colors

### Text Colors

| Tailwind Class | Pure CSS |
|----------------|----------|
| `text-foreground` | `color: hsl(var(--foreground));` |
| `text-primary` | `color: hsl(var(--primary));` |
| `text-secondary` | `color: hsl(var(--secondary));` |
| `text-muted-foreground` | `color: hsl(var(--muted-foreground));` |
| `text-primary-foreground` | `color: hsl(var(--primary-foreground));` |
| `text-green-500` | `color: rgb(34 197 94);` |
| `text-amber-500` | `color: rgb(245 158 11);` |

### Background Colors

| Tailwind Class | Pure CSS |
|----------------|----------|
| `bg-background` | `background-color: hsl(var(--background));` |
| `bg-card` | `background-color: hsl(var(--card));` |
| `bg-muted` | `background-color: hsl(var(--muted));` |
| `bg-primary` | `background-color: hsl(var(--primary));` |
| `bg-secondary` | `background-color: hsl(var(--secondary));` |
| `bg-primary/10` | `background-color: hsl(var(--primary) / 0.1);` |
| `bg-primary/20` | `background-color: hsl(var(--primary) / 0.2);` |
| `bg-card/50` | `background-color: hsl(var(--card) / 0.5);` |
| `bg-card/80` | `background-color: hsl(var(--card) / 0.8);` |
| `bg-transparent` | `background-color: transparent;` |

---

## 9. Backgrounds

### Gradients

```css
/* Tailwind: bg-gradient-to-r from-primary to-secondary */
.gradient-lr {
  background-image: linear-gradient(to right, hsl(var(--primary)), hsl(var(--secondary)));
}

/* Tailwind: bg-gradient-to-t from-card via-transparent to-transparent */
.gradient-overlay {
  background-image: linear-gradient(to top, hsl(var(--card)), transparent, transparent);
}

/* Tailwind: bg-gradient-to-b from-background to-transparent */
.gradient-fade {
  background-image: linear-gradient(to bottom, hsl(var(--background)), transparent);
}
```

### Background Utilities

| Tailwind Class | Pure CSS |
|----------------|----------|
| `bg-clip-text` | `background-clip: text; -webkit-background-clip: text;` |
| `bg-cover` | `background-size: cover;` |
| `bg-center` | `background-position: center;` |
| `bg-no-repeat` | `background-repeat: no-repeat;` |

---

## 10. Borders

### Border Width

| Tailwind Class | Pure CSS |
|----------------|----------|
| `border` | `border-width: 1px;` |
| `border-2` | `border-width: 2px;` |
| `border-0` | `border-width: 0;` |
| `border-t` | `border-top-width: 1px;` |
| `border-b` | `border-bottom-width: 1px;` |

### Border Color

| Tailwind Class | Pure CSS |
|----------------|----------|
| `border-border` | `border-color: hsl(var(--border));` |
| `border-primary` | `border-color: hsl(var(--primary));` |
| `border-primary/30` | `border-color: hsl(var(--primary) / 0.3);` |
| `border-primary/50` | `border-color: hsl(var(--primary) / 0.5);` |

### Border Radius

| Tailwind Class | Pure CSS |
|----------------|----------|
| `rounded` | `border-radius: 0.25rem;` |
| `rounded-md` | `border-radius: 0.375rem;` |
| `rounded-lg` | `border-radius: 0.5rem;` |
| `rounded-xl` | `border-radius: 0.75rem;` |
| `rounded-2xl` | `border-radius: 1rem;` |
| `rounded-3xl` | `border-radius: 1.5rem;` |
| `rounded-full` | `border-radius: 9999px;` |

---

## 11. Effects (Shadows, Blur, Opacity)

### Box Shadows

| Tailwind Class | Pure CSS |
|----------------|----------|
| `shadow-sm` | `box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);` |
| `shadow` | `box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);` |
| `shadow-md` | `box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);` |
| `shadow-lg` | `box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);` |
| `shadow-xl` | `box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);` |

### Blur Effects

| Tailwind Class | Pure CSS |
|----------------|----------|
| `blur` | `filter: blur(8px);` |
| `blur-sm` | `filter: blur(4px);` |
| `blur-md` | `filter: blur(12px);` |
| `blur-lg` | `filter: blur(16px);` |
| `blur-xl` | `filter: blur(24px);` |
| `blur-2xl` | `filter: blur(40px);` |
| `blur-3xl` | `filter: blur(64px);` |
| `backdrop-blur-sm` | `backdrop-filter: blur(4px);` |
| `backdrop-blur-xl` | `backdrop-filter: blur(24px);` |

### Opacity

| Tailwind Class | Pure CSS |
|----------------|----------|
| `opacity-0` | `opacity: 0;` |
| `opacity-20` | `opacity: 0.2;` |
| `opacity-30` | `opacity: 0.3;` |
| `opacity-50` | `opacity: 0.5;` |
| `opacity-75` | `opacity: 0.75;` |
| `opacity-100` | `opacity: 1;` |

---

## 12. Transforms

| Tailwind Class | Pure CSS |
|----------------|----------|
| `translate-x-1/2` | `transform: translateX(50%);` |
| `-translate-x-1/2` | `transform: translateX(-50%);` |
| `translate-y-0` | `transform: translateY(0);` |
| `scale-100` | `transform: scale(1);` |
| `scale-105` | `transform: scale(1.05);` |
| `scale-110` | `transform: scale(1.1);` |
| `rotate-45` | `transform: rotate(45deg);` |
| `-rotate-45` | `transform: rotate(-45deg);` |

### Transform Origin

| Tailwind Class | Pure CSS |
|----------------|----------|
| `origin-center` | `transform-origin: center;` |
| `origin-top` | `transform-origin: top;` |
| `origin-bottom-right` | `transform-origin: bottom right;` |

---

## 13. Transitions & Animations

### Transition Properties

| Tailwind Class | Pure CSS |
|----------------|----------|
| `transition` | `transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;` |
| `transition-all` | `transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;` |
| `transition-colors` | `transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;` |
| `transition-transform` | `transition-property: transform; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;` |

### Duration

| Tailwind Class | Pure CSS |
|----------------|----------|
| `duration-150` | `transition-duration: 150ms;` |
| `duration-200` | `transition-duration: 200ms;` |
| `duration-300` | `transition-duration: 300ms;` |
| `duration-500` | `transition-duration: 500ms;` |
| `duration-700` | `transition-duration: 700ms;` |

### Timing Functions

| Tailwind Class | Pure CSS |
|----------------|----------|
| `ease-in` | `transition-timing-function: cubic-bezier(0.4, 0, 1, 1);` |
| `ease-out` | `transition-timing-function: cubic-bezier(0, 0, 0.2, 1);` |
| `ease-in-out` | `transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);` |
| `ease-linear` | `transition-timing-function: linear;` |

### Custom Animations (from your project)

```css
/* Float Animation */
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotateX(0deg) rotateY(0deg);
  }
  25% {
    transform: translateY(-10px) rotateX(5deg) rotateY(5deg);
  }
  50% {
    transform: translateY(-20px) rotateX(0deg) rotateY(10deg);
  }
  75% {
    transform: translateY(-10px) rotateX(-5deg) rotateY(5deg);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Glow Pulse Animation */
@keyframes glow-pulse {
  0%, 100% {
    box-shadow: 0 0 20px hsl(180 100% 50% / 0.4);
  }
  50% {
    box-shadow: 0 0 40px hsl(180 100% 50% / 0.6);
  }
}

.animate-glow-pulse {
  animation: glow-pulse 2s ease-in-out infinite;
}

/* Ping Animation (for status indicator) */
@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

.animate-ping {
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}

/* Spin Animation */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
```

---

## 14. Responsive Design

Tailwind uses mobile-first breakpoints. Write base styles for mobile, then add breakpoint prefixes for larger screens.

### Breakpoints

| Prefix | Min-Width | CSS Media Query |
|--------|-----------|-----------------|
| `sm:` | 640px | `@media (min-width: 640px)` |
| `md:` | 768px | `@media (min-width: 768px)` |
| `lg:` | 1024px | `@media (min-width: 1024px)` |
| `xl:` | 1280px | `@media (min-width: 1280px)` |
| `2xl:` | 1536px | `@media (min-width: 1536px)` |

### Example: Responsive Font Size

```css
/* Tailwind: text-4xl md:text-6xl lg:text-7xl */
.responsive-heading {
  font-size: 2.25rem;  /* text-4xl - base/mobile */
  line-height: 2.5rem;
}

@media (min-width: 768px) {
  .responsive-heading {
    font-size: 3.75rem;  /* text-6xl - tablet */
    line-height: 1;
  }
}

@media (min-width: 1024px) {
  .responsive-heading {
    font-size: 4.5rem;  /* text-7xl - desktop */
    line-height: 1;
  }
}
```

### Example: Responsive Visibility

```css
/* Tailwind: hidden lg:flex */
.desktop-only {
  display: none;
}

@media (min-width: 1024px) {
  .desktop-only {
    display: flex;
  }
}

/* Tailwind: flex lg:hidden */
.mobile-only {
  display: flex;
}

@media (min-width: 1024px) {
  .mobile-only {
    display: none;
  }
}
```

---

## 15. Pseudo-classes & States

### Hover States

```css
/* Tailwind: hover:bg-primary/10 */
.element:hover {
  background-color: hsl(var(--primary) / 0.1);
}

/* Tailwind: hover:text-primary */
.element:hover {
  color: hsl(var(--primary));
}

/* Tailwind: hover:scale-105 */
.element:hover {
  transform: scale(1.05);
}

/* Tailwind: hover:border-primary/50 */
.element:hover {
  border-color: hsl(var(--primary) / 0.5);
}
```

### Focus States

```css
/* Tailwind: focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring */
.element:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px hsl(var(--ring));
}
```

### Group Hover

```css
/* Tailwind: group-hover:text-primary */
/* The parent has "group" class */
.group:hover .group-hover-text {
  color: hsl(var(--primary));
}

/* Tailwind: group-hover:scale-110 */
.group:hover .group-hover-scale {
  transform: scale(1.1);
}
```

### Disabled State

```css
/* Tailwind: disabled:opacity-50 disabled:pointer-events-none */
.button:disabled {
  opacity: 0.5;
  pointer-events: none;
}
```

---

## 16. Custom Components

### Gradient Text (from your project)

```css
.gradient-text {
  background-image: linear-gradient(135deg, hsl(180 100% 50%) 0%, hsl(270 100% 65%) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
```

### Gradient Border (from your project)

```css
.gradient-border {
  position: relative;
  background: hsl(var(--card));
  border-radius: 0.75rem;
}

.gradient-border::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(135deg, hsl(180 100% 50%) 0%, hsl(270 100% 65%) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
```

### Glass Effect (from your project)

```css
.glass-effect {
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  background: hsl(var(--card) / 0.8);
  border: 1px solid hsl(var(--border) / 0.5);
}
```

### Skill Bar (from your project)

```css
.skill-bar {
  height: 0.5rem;
  border-radius: 9999px;
  overflow: hidden;
  background: hsl(var(--muted));
}

.skill-bar-fill {
  height: 100%;
  border-radius: 9999px;
  background: linear-gradient(135deg, hsl(180 100% 50%) 0%, hsl(270 100% 65%) 100%);
  box-shadow: 0 0 20px hsl(180 100% 50% / 0.4);
}
```

### Card Hover Effect (from your project)

```css
.card-hover {
  transition: all 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 
    0 8px 32px hsl(222 47% 2% / 0.7),
    0 0 20px hsl(180 100% 50% / 0.4);
}
```

### Grid Pattern Background (from your project)

```css
.bg-grid-pattern {
  background-image: 
    linear-gradient(hsl(var(--border) / 0.3) 1px, transparent 1px),
    linear-gradient(90deg, hsl(var(--border) / 0.3) 1px, transparent 1px);
  background-size: 60px 60px;
}
```

### Navigation Link with Underline Animation (from your project)

```css
.nav-link {
  position: relative;
  color: hsl(var(--muted-foreground));
  transition: color 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(135deg, hsl(180 100% 50%) 0%, hsl(270 100% 65%) 100%);
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: hsl(var(--foreground));
}

.nav-link:hover::after {
  width: 100%;
}
```

---

## Complete Button Component Example

Here's how the button component would look in pure CSS:

```css
/* Base Button Styles */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  white-space: nowrap;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
}

.btn:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring));
}

.btn:disabled {
  pointer-events: none;
  opacity: 0.5;
}

/* Size Variants */
.btn-default {
  height: 2.5rem;
  padding: 0.5rem 1rem;
}

.btn-sm {
  height: 2.25rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
}

.btn-lg {
  height: 3rem;
  padding: 0.5rem 2rem;
  font-size: 1rem;
}

.btn-xl {
  height: 3.5rem;
  padding: 0.5rem 2.5rem;
  font-size: 1.125rem;
  border-radius: 0.75rem;
}

/* Style Variants */
.btn-primary {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}

.btn-primary:hover {
  background-color: hsl(var(--primary) / 0.9);
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
}

.btn-outline {
  border: 1px solid hsl(var(--border));
  background-color: transparent;
  color: hsl(var(--foreground));
}

.btn-outline:hover {
  background-color: hsl(var(--muted));
}

.btn-hero {
  background-image: linear-gradient(to right, hsl(var(--primary)), hsl(var(--secondary)));
  color: hsl(var(--primary-foreground));
  font-weight: 600;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
}

.btn-hero:hover {
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
  transform: scale(1.05);
}

.btn-hero-outline {
  border: 2px solid hsl(var(--primary) / 0.5);
  background-color: transparent;
  color: hsl(var(--foreground));
  backdrop-filter: blur(4px);
}

.btn-hero-outline:hover {
  border-color: hsl(var(--primary));
  background-color: hsl(var(--primary) / 0.1);
}
```

---

## Quick Reference Cheat Sheet

### Most Common Utilities

```css
/* Centering */
.center-flex { display: flex; align-items: center; justify-content: center; }
.center-absolute { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); }

/* Containers */
.container { max-width: 80rem; margin-left: auto; margin-right: auto; padding-left: 2rem; padding-right: 2rem; }

/* Text Truncation */
.truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }

/* Screen Reader Only */
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0; }

/* Smooth Scroll */
html { scroll-behavior: smooth; }
```

---

## Learning Tips

1. **Inspect Element**: Use browser DevTools to see computed styles. This shows exactly what CSS is applied.

2. **Tailwind CSS Docs**: Visit [tailwindcss.com/docs](https://tailwindcss.com/docs) for complete utility reference.

3. **Practice**: Try recreating one component at a time in pure CSS to understand the patterns.

4. **CSS Variables**: Master CSS custom properties (variables) - they're the foundation of theming.

5. **Flexbox & Grid**: These two layout systems handle 90% of layout needs. Master them!

---

*This reference was generated from your portfolio project. Keep it handy as you learn!*
