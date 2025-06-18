// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  experimental: {
        fonts: [{
            provider: fontProviders.google(),
            name: "Chakra Petch",
            cssVariable: "--font-chakra-petch",
            weights: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
            styles: ["normal", "italic"],
            display: "swap"
        }]
    }
});