import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "https://github.com/Maureen0007/My-Portfolio", // Replace with your GitHub repo name
});
