import React from "react";
import type { PropsWithChildren } from "react";

interface H3Props extends PropsWithChildren {
  className?: string;
}

export default function ({ children, className }: H3Props) {
  return (
    <h3 className={`text-xl font-semibold text-gray-900 dark:text-white ${className || ""}`}>{children}</h3>
  );
}