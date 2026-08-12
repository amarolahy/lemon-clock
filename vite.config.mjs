import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    build: {
        outDir: 'dist', // Destination pour le bundle
    }
});