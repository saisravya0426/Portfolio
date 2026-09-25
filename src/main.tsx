import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "@fontsource/geist-sans/400.css"; // Specific weight
import "@fontsource/geist-sans/700.css"; // Bold
const savedTheme = localStorage.getItem("theme");

if (!savedTheme) {
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
} else if (savedTheme === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
