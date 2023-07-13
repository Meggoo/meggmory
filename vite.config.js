import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const options = {
  workbox: { globPatterns: ["**/*"] },
  includeAssets: ["**/*"],
  manifest: {
    theme_color: "#fa5252",
    background_color: "#fff5f5",
    display: "standalone",
    scope: "/meggmory/",
    start_url: "/meggmory/",
    short_name: "Meggmory",
    description: "Memory Game",
    name: "Meggmory",
    icons: [
      {
        src: "/meggmory/icons/manifest-icon-192.maskable.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/meggmory/icons/manifest-icon-192.maskable.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/meggmory/icons/manifest-icon-512.maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/meggmory/icons/manifest-icon-512.maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  base: "/meggmory/",
  plugins: [react(), VitePWA(options)],
});
