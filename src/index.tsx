import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Wisdom } from "./screens/Wisdom";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Wisdom />
  </StrictMode>,
);
