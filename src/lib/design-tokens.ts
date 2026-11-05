/**
 * NyayLink 2.0 Design Tokens
 * Contemporary Indian Judicial Architecture × Experimental Digital Editorial Design
 */

export const colors = {
  ivory: {
    primary: "#EEEAE1",
    secondary: "#F5F1E9",
    highlight: "#FAF8F4",
  },
  ink: {
    primary: "#191917",
    secondary: "#33312E",
    muted: "#66625C",
  },
  charcoal: {
    dark: "#24221F",
    deep: "#141312",
  },
  sandstone: {
    warm: "#CCB99F",
    light: "#DFD2BE",
    hairline: "rgba(204, 185, 159, 0.4)",
    shadow: "rgba(73, 48, 37, 0.12)",
  },
  walnut: {
    dark: "#493025",
    rich: "#3D271E",
  },
  brass: {
    muted: "#9B815A",
    light: "#B89F75",
    gleam: "#C8B188",
  },
  burgundy: {
    accent: "#552A32",
    subtle: "#3F1E24",
  },
} as const;

export const typography = {
  display: "var(--font-cormorant), 'Times New Roman', Georgia, serif",
  body: "var(--font-geist), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  mono: "var(--font-mono), Menlo, Monaco, Consolas, monospace",
} as const;
