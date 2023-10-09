// Importiere den Config-Typ von TailwindCSS
import type { Config } from 'tailwindcss'

// Erstelle ein Config-Objekt mit dem Typ "Config"
const config: Config = {
  // Gib an, welche Dateien Tailwind scannen soll, um ungenutzte Klassen zu entfernen
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Erweitere das Standard-Theme von Tailwind
  theme: {
    extend: {
      // Füge benutzerdefinierte Hintergrundbilder hinzu
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  // Füge Plugins hinzu, in diesem Fall das Typography-Plugin von Tailwind
  plugins: [require("@tailwindcss/typography")],
}

// Exportiere die Config, damit Tailwind sie verwenden kann
export default config
