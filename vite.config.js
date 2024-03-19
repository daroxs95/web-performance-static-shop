import {defineConfig} from 'vite'
import {resolve} from 'path';
import {ViteImageOptimizer} from "vite-plugin-image-optimizer";

export default defineConfig({
    base: './',
    plugins: [ViteImageOptimizer({
        jpg: {
            quality: 80,
        }
    })],
    build: {
        minify: 'esbuild',
        rollupOptions: {
            input: {
                cart: resolve(__dirname, 'cart.html'),
                checkout: resolve(__dirname, 'checkout.html'),
                contact: resolve(__dirname, 'contact.html'),
                detail: resolve(__dirname, 'detail.html'),
                index: resolve(__dirname, 'index.html'),
                shop: resolve(__dirname, 'shop.html'),
            }
        }
    }
})