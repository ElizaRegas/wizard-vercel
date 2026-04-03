import type { ReactNode } from "react";
import ServicesScrollRestoration from "./ServicesScrollRestoration";

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <ServicesScrollRestoration />
      {children}
    </>
  );
}
