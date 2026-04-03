"use client";

import { useLayoutEffect } from "react";

/**
 * Scroll to top whenever the Services route is entered (client navigation).
 */
export default function ServicesScrollRestoration() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
