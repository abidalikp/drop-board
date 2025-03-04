import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/drop-board/",
  server: {
    host: "0.0.0.0", // Listen on all network interfaces
    port: 5173, // Optional: Change the port if needed
    strictPort: true, // Optional: Fail if the port is already in use
  },
});
