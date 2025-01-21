"use client";

import { DarkModeProvider } from "./DarkModeProvider";

export default function Providers({ children }) {
  return <DarkModeProvider>{children}</DarkModeProvider>;
}
