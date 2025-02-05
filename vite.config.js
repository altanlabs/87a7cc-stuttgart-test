import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    build: {
        rollupOptions: {
            onwarn: function (warning, warn) {
                if (warning.code === 'ESLINT_ERROR')
                    return;
                warn(warning);
            }
        }
    },
    // Add base configuration for production
    base: '/',
    // Add server configuration
    server: {
        port: 3000,
        host: true
    },
    // Optimize build settings
    optimizeDeps: {
        include: ['react', 'react-dom', 'react-router-dom']
    },
    // Add preview configuration
    preview: {
        port: 3000,
        host: true
    }
});