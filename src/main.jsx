import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";

import Alpine from "alpinejs";

window.Alpine = Alpine;
Alpine.start();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1 className="text-3xl text-blue-400">Qurtifa</h1>
  </StrictMode>
);
