import React from "react";

/**
 * Renders a string with chemical formula subscripts.
 * Digit sequences that follow a letter (element context) are wrapped in <sub>.
 * Examples: "H2O" -> H<sub>2</sub>O, "C6H12O6" -> C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>
 * Safe for general text — digits NOT preceded by a letter are left unchanged.
 */
export function renderChem(text: string): React.ReactNode {
  const parts = text.split(/(\d+)/);
  return parts.map((part, i) => {
    if (/^\d+$/.test(part)) {
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
