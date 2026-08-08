import React from "react";

/**
 * Renders a string with chemical formula subscripts.
 *
 * Rules:
 * 1. A digit sequence following a letter is subscripted: H2O, CO2, NOx, PM10
 * 2. A digit-dot-digit sequence (decimal) following a letter is subscripted as
 *    a single unit: PM2.5 -> PM<sub>2.5</sub>
 *
 * Safe for general text — digits NOT preceded by a letter are left unchanged.
 * Examples:
 *   "H2O"    -> H<sub>2</sub>O
 *   "CO2"    -> CO<sub>2</sub>
 *   "PM2.5"  -> PM<sub>2.5</sub>
 *   "PM10"   -> PM<sub>10</sub>
 *   "C6H12O6"-> C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>
 */
export function renderChem(text: string): React.ReactNode {
  // Split on: (digits.digits) OR (digits) — decimal groups first
  const parts = text.split(/(\d+\.\d+|\d+)/);
  return parts.map((part, i) => {
    if (/^\d+\.?\d*$/.test(part)) {
      const prev = parts[i - 1] ?? "";
      if (/[A-Za-z)}\]]$/.test(prev)) {
        return (
          <sub key={i} style={{ fontSize: "0.75em", lineHeight: 0 }}>
            {part}
          </sub>
        );
      }
    }
    return part;
  });
}
