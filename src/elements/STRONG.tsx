import React from "react";
import type { PropsWithChildren } from "react";

export default function ({ children }: PropsWithChildren) {
  return (
    <strong className="font-bold text-gray-900 dark:text-gray-100">
      {children}
    </strong>
  );
}