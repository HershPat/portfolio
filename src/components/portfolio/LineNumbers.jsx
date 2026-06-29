import React from "react";

export default function LineNumbers({ start = 1, count = 20, activeSection }) {
  return (
    <div className="hidden lg:flex flex-col items-end pr-4 select-none font-mono text-xs leading-7 text-[#E0E6ED]/15 min-w-[3rem]">
      {Array.from({ length: count }, (_, i) => {
        const num = start + i;
        return (
          <span key={num} className="tabular-nums">
            {String(num).padStart(3, " ")}
          </span>
        );
      })}
    </div>
  );
}