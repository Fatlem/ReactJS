import React from "react";
import ReactDOM from "react-dom/client"; // menggunakan .client untuk React 18
import App from "./App";
import "./index.css"; // Pastikan file Tailwind diimpor di sini

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
